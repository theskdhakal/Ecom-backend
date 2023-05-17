import React from "react";
import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <div>
      <div className="top fs-3 text-center">Admin CMS</div>

      <div className="list ">
        <ul className="list-unstyled sidebarMenu">
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/category" className="nav-link">
              Category
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li>
            <Link to="/payment" className="nav-link">
              Payment Option
            </Link>
          </li>
          <li>
            <Link to="/review" className="nav-link">
              Review
            </Link>
          </li>
          <li>
            <Link to="/buyer" className="nav-link">
              Buyer
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Add new admin
            </Link>
          </li>
          <li>
            <Link to="/order" className="nav-link">
              Order
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
