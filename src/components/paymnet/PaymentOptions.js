import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAction } from "../../pages/product/productAction";
import { CustomInput } from "../customInpute/CustomInput";

export const PaymentOptions = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.prod);

  const methods = [
    {
      name: "Master-Card",
      surcharge: "0.2%",
      description: "abcd",
    },
    {
      name: "PayPal",
      surcharge: "0.0%",
      description: "wxyz",
    },
    {
      name: "AfterPay",
      surcharge: "1%",
      description: "lmnop",
    },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>

          <th>Name</th>
          <th>surcharge</th>

          <th>Description</th>
          <th>Choose the paymnet method</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((item, i) => (
          <tr>
            <td>{i + 1}</td>

            <td>{item.name}</td>
            <td>{item.surcharge}</td>
            <td>{item.description}</td>

            <td>
              <Link to={`/product/${item.id}`}>
                <Button variant="primary">Select</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
