import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import CartPopup from "./CartPopup";
import { useEffect, useRef, useState } from "react";

function Header({
  cartNotice,
  quantity,
  productName,
  productPrice,
  totalPrice,
  removeCart,
}) {
  const [cartPopup, setCartPopup] = useState(false);
  const popupRef = useRef(null);
  const cartRef = useRef(null);

  const handleCartPopup = function () {
    setCartPopup((p) => !p);
  };

  // useEffect(
  //   function () {
  //     if (!cartNotice && open) setCartPopup(false);
  //   },
  //   [cartNotice]
  // );

  useEffect(
    function () {
      function handleClickOutside(event) {
        if (
          popupRef.current &&
          !popupRef.current.contains(event.target) &&
          !cartRef.current.contains(event.target)
        ) {
          setCartPopup(false);
          console.log("close Popup");

          console.log("cart clicked", cartRef.current.contains(event.target));
          console.log("popup clicked", popupRef.current.contains(event.target));
        }
      }

      if (cartPopup) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.addEventListener("mousedown", handleClickOutside);
      };
    },
    [cartPopup]
  );

  return (
    <div className="header">
      <Navbar expand="md">
        <Container className="header-container">
          <Navbar.Brand href="#">
            <img src="./images/logo.svg" alt="bland-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <Nav.Link href="#collection">Collection</Nav.Link>
                <Nav.Link href="#men">Men</Nav.Link>
                <Nav.Link href="#women">Women</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="users">
            <button
              ref={cartRef}
              className="header-cart"
              onClick={handleCartPopup}
            >
              {cartNotice && (
                <span className="cart-notification">{quantity}</span>
              )}
              <img src="./images/icon-cart.svg" alt="" />
            </button>
            {cartPopup && (
              <CartPopup
                ref={popupRef}
                productName={productName}
                productPrice={productPrice}
                totalPrice={totalPrice}
                quantity={quantity}
                removeCart={removeCart}
                setCartPopup={setCartPopup}
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
