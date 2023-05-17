import React from "react";
import { Col, Form } from "react-bootstrap";

export const CustomInput = ({ label, passRef, ...rest }) => {
  return (
    <Form.Group as={Col}>
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Control {...rest} ref={passRef} />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
};
