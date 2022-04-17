import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import ProductCard from "../productcard/ProductCard";

const Shop = () => {
  const categoryMap = useContext(ProductsContext);
  const { title } = useParams();

  return (
    <div className="ui container">
      <div className="ui container segment secondary" key={title}>
        <h2>{title.toUpperCase()}</h2>
        <div className="ui stackable three column grid">
          {categoryMap[title].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

// <div className="ui container">
// {Object.keys(categoryMap).map((title) => (
//   <div className="ui container segment secondary" key={title}>
//     <h2>{title}</h2>
//     <div className="ui stackable three column grid">
//       {categoryMap[title].map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   </div>
// ))}
// </div>
