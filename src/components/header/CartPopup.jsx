import { forwardRef } from "react";
import Button from "../Button";

const CartPopup = forwardRef(
  (
    {
      productName,
      productPrice,
      quantity,
      totalPrice,
      removeCart,
      setCartPopup,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="cart-popup">
        <div className="cart-top">
          <h4>Cart</h4>
        </div>
        {quantity ? (
          <div className="cart-bottom">
            <div className="cart-info">
              <div className="cart-product-image">
                <img
                  src="./images/image-product-1-thumbnail.jpg"
                  alt="product-image"
                />
              </div>
              <div className="cart-product-description">
                <h4 className="cart-product-name">{productName}</h4>
                <div className="cart-prices">
                  <h4>
                    ${productPrice} x {quantity} <b>${totalPrice}</b>
                  </h4>
                </div>
              </div>
              <button className="cart-delete" onClick={removeCart}>
                <img src="./images/icon-delete.svg" alt="del" />
              </button>
            </div>
            <div className="cart-button">
              <Button
                btnAction={() => {
                  removeCart();
                  setCartPopup(false);
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        ) : (
          <h3 className="empty-cart-message">Your Cart is Empty</h3>
        )}
      </div>
    );
  }
);

CartPopup.displayName = "CartPopup";

export default CartPopup;
