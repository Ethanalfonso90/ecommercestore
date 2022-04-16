const Category = ({ categories }) => {
  return (
    <div className="ui grid container centered">
      <div className="ui stackable four column grid">
        {categories.map((product) => (
          <div className="column" key={product.id}>
            <div className="ui special cards" key={product.id}>
              <div className="card">
                <h1>{product.title.toUpperCase()}</h1>
                <div className="blurring dimmable image">
                  <div className="ui dimmer">
                    <div className="content">
                      <div className="center">
                        <div className="ui inverted button">Shop Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img alt="imageUrl" src={`${product.imageUrl}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
// style={{ backgroundImage: `url(${product.imageUrl})` }}
