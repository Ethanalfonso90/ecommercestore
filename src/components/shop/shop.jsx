import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../productcard/ProductCard";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
