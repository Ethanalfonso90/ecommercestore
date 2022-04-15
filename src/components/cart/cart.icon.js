const CartIcon = () => {
  return (
    <div className="ui compact menu">
      <div className="ui simple dropdown item">
        <i className="shopping cart icon"></i>
        <div className="menu">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
