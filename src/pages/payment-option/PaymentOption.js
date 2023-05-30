import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { PaymentOptions } from "../../components/paymnet/PaymentOptions";

const PaymentOption = () => {
  return (
    <AdminLayout>
      <div className="page-title mt-4">Payment Option</div>
      <hr />
      <PaymentOptions />
    </AdminLayout>
  );
};

export default PaymentOption;
