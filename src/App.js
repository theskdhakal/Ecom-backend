import { Button } from "react-bootstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { Category } from "./pages/category/Category";
import { PaymentOption } from "./pages/payment-option/PaymentOption";
import { Buyer } from "./pages/buyer/Buyer";
import { Order } from "./pages/Order/Order";
import { Review } from "./pages/review/Review";
import { Product } from "./pages/product/product";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="buyer" element={<Buyer />} />
        <Route path="payment" element={<PaymentOption />} />
        <Route path="order" element={<Order />} />
        <Route path="review" element={<Review />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
