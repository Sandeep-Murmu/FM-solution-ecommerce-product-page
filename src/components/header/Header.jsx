import { Container, Nav, Navbar } from "react-bootstrap";
import CartPopup from "./CartPopup";
import { useEffect, useState } from "react";

function Header({
  cartNotice,
  quantity,
  productName,
  productPrice,
  totalPrice,
  removeCart,
}) {
  const [cartPopup, setCartPopup] = useState(false);

  const handleCartPopup = function () {
    setCartPopup((p) => !p);
  };

  useEffect(
    function () {
      if (!cartNotice && open) setCartPopup(false);
    },
    [cartNotice]
  );

  return (
    <div className="header">
      <Navbar>
        <Container className="header-container">
          <Navbar.Brand href="#">
            <img src="./images/logo.svg" alt="bland-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav-main" />
          <Navbar.Collapse id="navbar-nav-main">
            <Nav className="me-auto">
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="users">
            <button className="header-cart" onClick={handleCartPopup}>
              {cartNotice && (
                <span className="cart-notification">{quantity}</span>
              )}
              <img src="./images/icon-cart.svg" alt="" />
            </button>
            {cartPopup && cartNotice && (
              <CartPopup
                productName={productName}
                productPrice={productPrice}
                totalPrice={totalPrice}
                quantity={quantity}
                removeCart={removeCart}
              />
            )}
            <div className="user-icon">
              <img src="./images/image-avatar.png" alt="user-avatar" />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
