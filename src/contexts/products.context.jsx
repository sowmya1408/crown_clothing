import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

/* import {
  onAuthStateChangedListerner,
  createUserDocumentFrmAuth,
} from "../utils/firebase/firebase.utils.js"; */

// as the actual value you want to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
