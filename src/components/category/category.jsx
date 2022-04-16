const Category = ({ categories }) => {
  return (
    <div className="ui grid container centered">
      <div className="ui stackable three column grid">
        {categories.map((product) => (
          <div className="column" key={product.id}>
            <div className="ui special cards" key={product.id}>
              <div className="ui centered card">
                <h1>{product.title.toUpperCase()}</h1>
                <div className="ui blurring dimmable image">
                  <div className="ui dimmer">
                    <div className="ui content">
                      <div className="ui center">
                        <div className="ui inverted button">Shop Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img alt="imageUrl" src={product.imageUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
