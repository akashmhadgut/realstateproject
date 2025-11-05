import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function Location({ onOpenForm }) {

  const landmarks = [
    { name: "EOI IT Park", time: "6 Mins" },
    { name: "Geracommerzone", time: "3 Mins" },
    { name: "Podar School", time: "2 Mins" },
    { name: "Euro School", time: "3 Mins" },
    { name: "Phoenix Mall", time: "20 Mins" },
    { name: "Nyati Central Mall", time: "10 Mins" },
    { name: "Amanora Mall", time: "20 Mins" },
    { name: "Manipal Hospital", time: "10 Mins" },
    { name: "International Airport", time: "25 Mins" },
  ];

  return (
    <div className="mt-8">
      <div className="w-full max-w-[1100px] me-auto bg-white rounded-lg p-4 sm:p-6">

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Location</h1>
          <div className="h-1 w-28 bg-green-800 rounded"></div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
          Strategically located for your convenience
        </p>

        {/* Map + Location Image Section */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Map Card */}
          <div className="bg-white rounded-xl shadow-md p-2  w-full md:w-1/2 hover:-translate-y-1 transition-transform">
            <h2 className="text-lg font-semibold mb-3">Map View</h2>
            <iframe
              title="Project Location Map"
              src="https://www.google.com/maps?q=18.567,+73.958&hl=en&z=14&output=embed"
              className="w-full h-64 sm:h-72 rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Location Details Card */}
          <div className="bg-white rounded-xl shadow-md p-3 me-20 w-full md:w-1/2 hover:-translate-y-1 transition-transform flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-3">Location Details</h2>
            <img
              src="/locationimg.webp"
              alt="Location"
              className="rounded-lg w-full h-64 sm:h-72 object-cover mb-4"
            />
            <button
              className="bg-[#2D6307] text-white py-2 px-6 rounded-md shadow-md hover:bg-green-900 transition"
              onClick={onOpenForm}
            >
              View Details
            </button>
          </div>

        </div>

        {/* Landmarks Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Nearby Landmarks</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-gray-50 p-2 rounded-lg w-11/12">
            {landmarks.map((place, index) => (
              <div key={index} className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-gray-600 mt-1" />
                <div>
                  <p className="font-semibold text-black">{place.name}</p>
                  <p className="text-gray-600 text-sm">{place.time}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Location
