import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";
import { clearTheCart } from "../../utilities/fakedb";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const { user } = useAuth();
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useNavigate();
  const handlePayment = () => {
    setCart([]);
    clearTheCart();
    history("/placeorder");
  };
  return (
    <div>
      <form onSubmit={handlePayment} className="shipping-form">
        <div>
          <h1>Shipping Page</h1>
          <input type="text" value={user.displayName} />
          <br />
          <input type="email" value={user.email} />
          <br />
          <button>Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
