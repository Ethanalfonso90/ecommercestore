import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../productcard/ProductCard";
const Shop = () => {
  const categoryMap = useContext(ProductsContext);

  return (
    <div className="ui container">
      {Object.keys(categoryMap).map((title) => (
        <div className="ui container segment secondary" key={title}>
          <h2>{title}</h2>
          <div className="ui stackable four column grid">
            {categoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
