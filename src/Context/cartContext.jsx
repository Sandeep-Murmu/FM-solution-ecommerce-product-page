import { createContext, useContext, useState } from "react";

const CartContext = createContext();


function CartProvider({ children }) {
  const [product, setProduct] = useState({});
  const [incart, setIncart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantity, setQuantiy] = useState(0);
  const [price, setPrice] = useState(0);


  const handleQuantity = function (control) {
    if (control === "up") {
      setQuantiy((q) => q + 1);
    } else if (control === "down" && quantity > 0) {
      setQuantiy((q) => q - 1);
    } else {
      return;
    }
  };

  const handleCartAdding = function () {
    if (!quantity) return;

    setIncart(true);
    setCartQuantity(quantity);
    setPrice(quantity * product.productNetPrice);
  };

  const handleDeleteCart = function () {
    console.log("cart clear");
    setCartQuantity(0);
    setPrice(cartQuantity * product.productNetPrice);
    setIncart(false);
  };

  return (
    <CartContext.Provider
      value={{
        incart,
        cartQuantity,
        quantity,
        price,
        setProduct,
        handleQuantity,
        handleCartAdding,
        handleDeleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Context is used outside the provider");

  return context;
}

export { CartProvider, useCart };
