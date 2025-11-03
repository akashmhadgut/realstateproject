import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { TelephoneFill, Whatsapp } from 'react-bootstrap-icons'

function ContactForm({ onClose }) {   // <-- Receive Prop
  return (
    <div className="relative  bg-white rounded-lg overflow-y-auto max-h-[100vh] w-3/6 " >

     <div className='gap-3'>

    
      <div className="bg-white rounded-lg p-6  mx-auto mt-2 ">
         {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-3 text-xl hover:text-red-600"
      >
        ✕
      </button>
        <h2 className="text-center text-5xl font-bold text-black ">New Kharadi Launch</h2>
         </div>
        <p className="text-center text-gray-600 text-base mb-4">Avail Pre-Launch Benefits Now</p>

        <div className="flex justify-center gap-2 mb-3">
            <img src="/contactformimg.png" alt="" className='h-20'/>
        </div>

        <div className="text-center">
          <a href="tel:+917757865552" className="bg-[#295d00] text-white font-semibold py-2 px-4 shadow-xl shadow-stone-500 inline-flex items-center gap-2 no-underline">
            <TelephoneFill /> +91 7757856552
          </a>
        </div>

         <Form className="contact-form mt-5  radius w-4/6 justify-conetent-center mx-auto">
          <Form.Group className="ps-4 pe-4 pt-4 -2">
            <Form.Control
              type="text"
              placeholder="Full Name*"
              className="p-2 mt-2"
              required
            />
          </Form.Group>

          <Form.Group className="ps-4  pt-4 pe-2">
            <Form.Control
              type="tel"
              placeholder="Mobile Number*"
              className="p-2"
              required
            />
          </Form.Group>

          <Form.Group className="ps-4  pt-4 pe-2 mb-4">
            <Form.Control
              type="email"
              className="p-2"
              placeholder="Email (Optional)"
            />
          </Form.Group>
          <span className="me-5 p-3 ">Select Property Type*</span>
          <Form.Group className="p-4">
            <Form.Select>
              <option>Please choose an option —</option>
              <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
              <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
              <option>3 BHK(1200 - 1300) - Rs2.21 Cr</option>
            </Form.Select>
            <Button className="submit-btn mb-10 mt-4 p-3" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <div className="text-center mt-4">
          <a href="https://wa.me/917757865552" target="_blank" className=" no-underline shimmer bg-[#295d00] mt-6 text-white py-2 px-4 rounded-md inline-flex items-center gap-2 text-sm font-medium h-14 mb-10">
            <img src="src/assets/WhatsApp.svg" className='w-8 me-2' alt="" />
             WhatsApp Us Now →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
