import React from 'react'
import { FaPlay } from 'react-icons/fa'

function VirtualTour({ onOpenForm }) {

    const features=[
        {
            title:"360° Views",
            desc:"Explore every corner of our property in detail"
        },
         {
            title:"Live Interaction",
            desc:"Real-time guidance from our property experts"
        },
         {
            title:"Flexible Timing",
            desc:"Schedule your tour at your convenience"
        },

    ]
  return (
   <div className=" mt-8 " >
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[78%] bg-white rounded-lg  p-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Virtual Tour Request</h1>
          <div className="h-1 w-28 bg-green-800 rounded"></div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
        Experience Lodha New Launch from the comfort of your home
        </p>
    <div className="w-10/12 relative rounded-xl overflow-hidden bg-gray-100 group h-[400px]">
      {/* Image (shrinks on hover) */}
      <img
        src="/virtualtour.jpg"
        alt="Virtual Tour"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-95"
      />

      {/* Overlay content */}
      <div onClick={onOpenForm} className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all duration-500">
        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <FaPlay className="text-green-800 text-2xl ml-1" onClick={onOpenForm}/>
        </div>
        <p className="text-white text-lg font-bold mt-3">Virtual Tour</p>
      </div>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 me-5 ">
  {features.map((key, index) => (
    <div
      key={index}
      className="bg-slate-100  flex flex-col justify-between shadow-sm hover:-translate-y-1.5 transition-all h-24"
    >
      <h4 className="text-gray-950 font-bold text-lg mt-3 ms-3">{key.title}</h4>
      <p className="text-sm ms-3">{key.desc}</p>
    </div>
  ))}
</div>



    </div>
    </div>
  )
}

export default VirtualTour