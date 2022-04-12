import React, { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../productcard/ProductCard";
const Shop = () => {
  const categoryMap = useContext(ProductsContext);

  return (
    <React.Fragment>
      {Object.keys(categoryMap).map((title) => (
        <React.Fragment key={title}>
          <h2>{title}</h2>
          <div>
            {categoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Shop;
