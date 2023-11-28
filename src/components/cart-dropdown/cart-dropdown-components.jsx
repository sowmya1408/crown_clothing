import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckHandler}>go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
