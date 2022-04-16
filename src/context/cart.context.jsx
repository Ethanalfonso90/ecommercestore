import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addToCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCartItem = (productToAdd) =>
    setcartItems(addCartItem(cartItems, productToAdd));

  const value = { cartItems, addToCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
