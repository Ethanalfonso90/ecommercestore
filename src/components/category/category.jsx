import { Link } from "react-router-dom";
const Category = ({ categories }) => {
  return (
    <div className="ui grid container centered">
      <div className="ui stackable three column grid">
        {categories.map((product) => (
          <div className="column" key={product.id}>
            <div className="ui link cards" key={product.id}>
              <Link key={product.id} to={`shop/${product.title}`}>
                <div className="ui centered card">
                  <h1>{product.title.toUpperCase()}</h1>
                  <img alt="imageUrl" src={product.imageUrl} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
