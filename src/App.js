import { Button } from "react-bootstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { FaBeer } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import PaymentOption from "./pages/payment-option/PaymentOption";
import Order from "./pages/order/Order";
import Review from "./pages/review/Review";
import Buyer from "./pages/buyer/Buyer";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="register" element={<Registration />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="payment-option" element={<PaymentOption />} />
        <Route path="order" element={<Order />} />
        <Route path="review" element={<Review />} />
        <Route path="buyer" element={<Buyer />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
