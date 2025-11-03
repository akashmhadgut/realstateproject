import React from "react";
import Card from "react-bootstrap/Card";

function Floorplan({ onOpenForm }) {
  const fplans = [
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "3 BHK Unit Plan" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "3.5 BHK Unit Plan" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "4 BHK Unit Plan" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "Townhouse" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "Penthouse Lower" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "Penthouse Upper" },
    { img: "src/assets/3-BHK-unit-plan.jpg", type: "Penthouse Terace" },
  ];

  return (
    <Card className="w-full sm:w-[90%] md:w-[80%] lg:w-[78%] mt-10 border-white bg-white me-auto">
      <Card.Body className="ms-2 ">
        {/* Title */}
        <div className="items-center gap-1 mb-8  md:text-left me-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 ">Site & Floor Plans</h1>
          <div
            className="h-1 w-20 sm:w-28 me-auto md:mx-0"
            style={{ backgroundColor: "rgb(45, 99, 7)" }}
          ></div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8 md:text-left ">
          Explore our thoughtfully designed layouts that maximize space and comfort.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 me-5 sm:grid-cols-2 md:grid-cols-3 gap-3 me-3 sm:me-5">
          {fplans.map((plan, index) => (
            <div
              key={index}
              className=" group rounded-xl shadow-md overflow-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 h-[260px] sm:h-[280px] md:h-[300px]"
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-md brightness-90 transition-all duration-300 group-hover:blur-sm group-hover:brightness-100"
                style={{ backgroundImage: `url(${plan.img})` }}
              ></div>

              {/* Overlay content (text + button) */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full text-center p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                  {plan.type}
                </h3>
                <button
                  className="bg-[#2D6307] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm font-medium hover:bg-[#234e05] transition-colors"
                  onClick={onOpenForm}                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Floorplan;
