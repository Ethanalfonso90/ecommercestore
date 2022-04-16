const CartIcon = ({ cartItems }) => {
  // const { id, name, imageUrl, price,  } = cartItems;

  return (
    <div className="ui icon button">
      <div className="ui simple dropdown item">
        <i className="shopping cart icon"></i>
        <div className="menu">
          {cartItems.map((item) => {
            const { id, name, imageUrl, price, quantity } = item;
            return (
              <div className="item" key={id}>
                <div className="row">
                  <div className="ui tiny image">
                    <img alt={name} src={imageUrl} />
                    <span className="right aligned content">{name}</span>
                  </div>
                  <span className="left aligned content">
                    {quantity} X {price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
