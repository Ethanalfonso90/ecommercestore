const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <br />
        <span>{price}</span>
      </div>
      <button>Add to Card</button>
    </div>
  );
};

export default ProductCard;
