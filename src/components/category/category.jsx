const Category = ({ categories }) => {
  return (
    <div className="categories-container">
      <div className="categories-container">
        {categories.map((product) => (
          // const {id, imageUrl, title} = product;
          <div
            className="category-container category-body-container"
            key={product.id}
          >
            <div
              className="background-image"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
            <h1>{product.title}</h1>
            <p>Shop Now</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
