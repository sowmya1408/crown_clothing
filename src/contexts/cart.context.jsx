import { createContext, useState } from "react";

// as the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  items: [],
  setItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const value = { isCartOpen, setIsCartOpen, items, setItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
