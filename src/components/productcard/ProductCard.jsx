import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addToCartItem } = useContext(CartContext);

  const addProductToCart = () => addToCartItem(product);

  return (
    <div className="column">
      <div className="ui card">
        <img src={imageUrl} alt={`${name}`} />
        <div className="content">
          <span>{name.toUpperCase()}</span>
          <br />
          <span>${price}</span>
        </div>
        <button className="fluid ui button primary" onClick={addProductToCart}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
