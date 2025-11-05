import React from "react";
import { Form, Button } from "react-bootstrap";
import { PhoneFill, TelephoneFill } from "react-bootstrap-icons";
import "./Contactus.css";

function Contactus({ onOpenForm }) {
  return (
    <div className="contact-fixed">
      <div className="contact-container">
        <h5 className="form-title mt-3">Get The EOI Benefits</h5>

        <Button
          className="phone-btn mt-4 p-2 ps-4 pe-3" href="tel:+917757865552"><TelephoneFill className="inline"/> +91 7757856552
        </Button>

      <Form className="contact-form mt-5 ms-2 me-2 radius">

  <Form.Group className="px-4 pt-4">
    <Form.Control type="text" placeholder="Full Name*" className="p-2" required />
  </Form.Group>

  <Form.Group className="px-4 pt-4">
    <Form.Control type="tel" placeholder="Mobile Number*" className="p-2" required />
  </Form.Group>

  <Form.Group className="px-4 pt-4 mb-4">
    <Form.Control type="email" placeholder="Email (Optional)" className="p-2" />
  </Form.Group>

  <span className="ms-1 p-3">Select Property Type*</span>

  <Form.Group className="px-4 pt-2">
    <Form.Select className="p-2">
      <option>Please choose an option —</option>
      <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
      <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
      <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
    </Form.Select>

    <Button className="submit-btn w-100 mb-4 mt-4 p-3" type="submit">
      Submit
    </Button>
  </Form.Group>

</Form>

      </div>
    </div>
  );
}

export default Contactus;
