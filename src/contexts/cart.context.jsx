import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // to find if cartItems contain productToAdd

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment the quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  // return new array with modified cartitems / new cartitems

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// as the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // count of the quantity in CartItems
  useEffect(() => {
    const addCartCount = cartItems.reduce(
      (quantityacc, cartItem) => quantityacc + cartItem.quantity,
      0
    );
    setCartCount(addCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// checkout

// build go to checkout that takes you to checkout step
// Inside all of these different checkout items
// figure out increment , decrement & remove the item entirely with x button
// also to comprise total value
