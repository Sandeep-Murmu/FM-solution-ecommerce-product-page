import Button from "../Button";

function CartPopup({
  productName,
  productPrice,
  quantity,
  totalPrice,
  removeCart,
}) {
  return (
    <div className="cart-popup">
      <div className="cart-top">
        <h4>Cart</h4>
      </div>
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
          <button className="cart-delete">
            <img src="./images/icon-delete.svg" alt="del" />
          </button>
        </div>
        <div className="cart-button">
          <Button btnAction={removeCart}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
