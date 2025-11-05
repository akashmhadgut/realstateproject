import React from 'react'

function About({ onOpenForm }) {
  return (
    <div className="mt-8">
      <div className="w-full max-w-[1000px] me-auto bg-white  shadow-md  sm:p-6">

        {/* Title */}
        <h4 className="font-bold text-2xl mb-4">About Lodha Group</h4>

        {/* Long Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Lodha Group is a renowned and highly respected real estate developer based in India, known for
          its commitment to creating world-class residential and commercial spaces. Founded in 1980 by 
          Mangal Prabhat Lodha, the company has rapidly grown to become one of the largest and most trusted 
          names in the real estate sector. With a focus on delivering high-quality properties that cater 
          to modern lifestyles, Lodha Group has established a reputation for excellence, innovation, and 
          customer satisfaction.
          <br /><br />
          The company’s portfolio spans across residential, commercial, and mixed-use developments, with 
          projects in key cities such as Mumbai, Pune, and Bangalore. Lodha Group has consistently been at 
          the forefront of luxury and premium real estate, with developments known for cutting-edge 
          architecture, meticulous planning, and superior construction quality.
        </p>

        {/* RERA Section */}
        <div className="mt-10">
          <h4 className="font-bold text-lg">RERA Information</h4>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
            {/* Agent MahaRERA */}
            <div className="flex flex-col items-center text-center">
              <img src="/qrcodeagent.jpeg" alt="Agent MahaRERA" className="w-36 h-36 object-contain" />
              <h6 className="font-bold mt-3">Agent MahaRERA</h6>
              <p className="text-gray-700 text-sm">A031262502070</p>
            </div>

            {/* Project MahaRERA */}
            <div className="flex flex-col items-center text-center">
              <img src="/qrcodeproject.webp" alt="Project MahaRERA" className="w-36 h-36 object-contain" />
              <h6 className="font-bold mt-3">Project MahaRERA</h6>
              <p className="text-gray-700 text-sm">P52100052703 | P52100054436</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-center text-sm sm:text-base">
            This project is RERA registered.
          </p>
        </div>

        {/* Legal Information */}
        <div className="mt-10">
          <h4 className="font-bold text-lg mb-2">Legal Information</h4>
          <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base">
            <li className="marker:text-green-700">Project is under registration process with MahaRERA</li>
          </ul>
        </div>

        {/* Disclaimer Box */}
       <div className="w-11/12 bg-white shadow-lg rounded-md mt-10 p-4 sm:m-1 border border-gray-200">
  <h3 className="font-bold text-xl mb-3">Disclaimer</h3>
  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
    This website is not an official site and serves solely as an informational portal managed by a
    RERA authorized real estate agent. Prices, property details, availability and images shown on 
    the site may change without prior notice and are representational only. For the most accurate 
    information, please contact us directly.
  </p>
</div>


        {/* Footer */}
        <div className="bg-gray-100 shadow-md mt-8 p-3 text-gray-600 text-center text-sm sm:text-base">
          © 2025 | 
          <a href="#" className="text-green-700 hover:underline mx-1">Terms & Conditions</a> |
          <a href="#" className="text-green-700 hover:underline mx-1">Privacy Policy</a>
        </div>

      </div>
    </div>
  )
}

export default About
