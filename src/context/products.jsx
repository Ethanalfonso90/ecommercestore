import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "./../util/firebase/firebase";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // const [categoryMap, setcategoryMap] = useState(PRODUCTS);
  const [categoryMap, setcategoryMap] = useState([]);
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoryMap(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = categoryMap;

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
