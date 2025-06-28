function BtnQuantity({ quantity, controls }) {
  return (
    <>
      <div className="button-quantity">
        <button className="btn-quantity" onClick={() => controls("down")}>
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button className="btn-quantity" onClick={() => controls("up")}>
          +
        </button>
      </div>
    </>
  );
}

export default BtnQuantity;
