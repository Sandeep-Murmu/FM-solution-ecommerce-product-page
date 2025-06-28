function BtnCart({addToCart}) {
  return (
    <>
      <button className="btn-cart" onClick={addToCart}>
        <span className="cart-icon">
          <img src="./images/icon-cart.svg" alt="icon-cart" />
        </span>
        Add to Cart
      </button>
    </>
  );
}

export default BtnCart;
