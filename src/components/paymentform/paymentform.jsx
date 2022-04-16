import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, addToCartItem, removeFromCart, clearCartItem, cartTotal } =
    useContext(CartContext);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Gagandeep Raju",
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <form onSubmit={paymentHandler}>
      <div className="ui form segment">
        <div className="row">
          {cartItems.map((item) => {
            const { id, name, imageUrl, price, quantity } = item;
            return (
              <div className="field" key={id}>
                <div className="ui seven column centered grid">
                  <div className="column">
                    <img
                      alt={name}
                      className="ui middle aligned tiny image"
                      src={imageUrl}
                    />
                  </div>
                  <div className="column">
                    <span>{name}</span>
                  </div>
                  <div className="column">
                    <span>Price: ${price * quantity}</span>
                  </div>
                  <div className="column">
                    <span
                      className="ui icon button primary"
                      onClick={() => addToCartItem(item)}
                    >
                      <i className="plus icon"></i>
                    </span>
                  </div>
                  <div className="column">
                    <span
                      className="ui icon button primary"
                      onClick={() => removeFromCart(item)}
                    >
                      <i className="minus icon"></i>
                    </span>
                  </div>
                  <div className="column">
                    <span>Quanity: {quantity}</span>
                  </div>
                  <div className="column">
                    <span
                      className="ui icon button primary"
                      onClick={() => clearCartItem(item)}
                    >
                      <i className="close icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ui statistic">
        <div className="value">${cartTotal}</div>
        <div className="label">Total</div>
      </div>
      <CardElement />
      <button type="submit" className="fluid ui button">
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
