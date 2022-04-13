const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="column">
      <div className="ui card">
        <img src={imageUrl} alt={`${name}`} />
        <div className="content">
          <span>{name.toUpperCase()}</span>
          <br />
          <span>${price}</span>
        </div>
        <button className="fluid ui button primary">Add to Card</button>
      </div>
    </div>
  );
};

export default ProductCard;
