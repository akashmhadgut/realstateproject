import React from 'react'

function About({ onOpenForm }) {
  return (
    <div className=" mt-8 ">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[78%] bg-white rounded-lg shadow-md p-6">
      
      <div>
        <h4 className='font-bold'>About Lodha Group</h4>
      </div>
      <div className='mt-4 me-5'>
      <p className='text-[15px] text-opacity-95 text-gray-600'>Lodha Group is a renowned and highly respected real estate developer based in India, known for its commitment to creating world-class residential and commercial spaces. Founded in 1980 by Mangal Prabhat Lodha, the company has rapidly grown to become one of the largest and most trusted names in the real estate sector. With a focus on delivering high-quality properties that cater to modern lifestyles, Lodha Group has established a reputation for excellence, innovation, and customer satisfaction. The company’s portfolio spans across residential, commercial, and mixed-use developments, with projects in key cities such as Mumbai, Pune, and Bangalore. Lodha Group has consistently been at the forefront of luxury and premium real estate, having developed iconic landmarks like the Lodha Park and the luxurious Lodha Fiorenza in Mumbai. Their developments are known for their cutting-edge architecture, meticulous planning, and superior construction quality. In addition to residential properties, Lodha Group has ventured into commercial real estate, with developments such as office spaces and retail centers that redefine business environments. The company’s projects are designed with a focus on sustainability, featuring eco-friendly technologies and amenities that contribute to a better living and working experience. Lodha Group’s commitment to quality is reflected in its customer-centric approach, with a strong emphasis on transparency and timely delivery. Over the years, the developer has won numerous awards and accolades, cementing its position as a leader in India’s real estate industry. With a focus on innovation, luxury, and sustainability, Lodha Group continues to shape the future of real estate in India</p>
      </div>
     <div className="mt-8 ">
  <h4 className="font-bold text-lg ">RERA Information</h4>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-8">
    {/* Agent MahaRERA */}
    <div className="flex flex-col items-center">
      <img src="/qrcodeagent.jpeg" alt="Agent MahaRERA" className="w-40 h-40 object-contain" />
      <h6 className="font-bold mt-3">Agent MahaRERA</h6>
      <p>A031262502070</p>
    </div>

    {/* Project MahaRERA */}
    <div className="flex flex-col items-center">
      <img src="/qrcodeproject.webp" alt="Project MahaRERA" className="w-40 h-40 object-contain" />
      <h6 className="font-bold mt-3">Project MahaRERA</h6>
      <p>P52100052703 | P52100054436</p>
    </div>
  </div>

  <p className="mt-6 text-gray-700 text-center">This project is RERA registered.</p>
</div>

  <div className="mt-6">
  {/* Legal Information */}
  <div className='me-auto items-start'>
    <h4 className="font-bold text-lg mb-2">Legal Information</h4>
    <ul className="list-disc  text-gray-700 ">
      <li className="marker:text-green-600">Project is under registration process with MahaRERA</li>
    </ul>
  </div>
  {/* Disclaimer Box */}
  <div className="bg-white shadow-xl rounded-md mt-10 p-2 me-5 shadow-gray-500">
    <h3 className="font-bold text-xxl mb-3">Disclaimer</h3>
    <p className="text-gray-600 text-base  leading-relaxed ">
      Please be advised that this website is not an official site and serves solely as an informational
      portal managed by a RERA authorized real estate agent. It does not constitute an offer or
      guarantee of any services. The prices displayed on this website are subject to change without prior
      notice, and the availability of properties cannot be guaranteed. The images showcased on this
      website are for representational purposes only and may not accurately reflect the actual
      properties. We may share your data with Real Estate Regulatory Authority (RERA) registered
      Developers for further processing as necessary. Additionally, we may send updates and information
      to the mobile number or email address registered with us. All rights reserved. The content, design,
      and information on this website are protected by copyright and other intellectual property rights.
      Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and
      up-to-date information regarding services, pricing, availability, and any other details, it is
      recommended to contact us directly through the provided contact information on this website. Thank
      you for visiting our website.
    </p>
  </div>

  {/* Footer */}
  <div className="bg-gray-100 shadow-md mt-5 p-3  text-gray-500 text-lg">
    Copyright © 2025 |{" "}
    <a href="#" className="text-green-700 hover:underline">
      Terms & Conditions
    </a> 
    {" "}  |{" "}
    <a href="#" className="text-green-700 hover:underline">
      Privacy Policy
    </a>
  </div>
</div>

    </div>
    </div>
  )
}

export default About