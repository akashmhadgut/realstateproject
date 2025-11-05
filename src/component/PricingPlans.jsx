import React from "react";

function PricingPlans({ onOpenForm }) {
  const plans = [
    { type: "3 BHK", area: "1200 - 1300 Sq.ft.", price: "₹ 2.21 Cr Onwards" },
    { type: "3 BHK + Study", area: "1450 - 1600 Sq.ft.", price: "₹ 2.75 Cr Onwards" },
    { type: "4 BHK", area: "2150 - 2300 Sq.ft.", price: "₹ 3.99 Cr Onwards" },
    { type: "Townhouses & Penthouses", area: "On Request", price: "₹ 9 Cr - 11.5 Cr" },
  ];

  return (
    <div className=" mt-8 " id="price">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[77%] bg-white rounded-lg  p-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Pricing Plans</h1>
          <div className="h-1 w-28 bg-green-800 rounded"></div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 me-4">
          Choose from our range of luxurious 3 & 4 BHK residences, each designed
          to offer the perfect blend of comfort and sophistication.
        </p>

        {/* Table */}
  <div className="mt-8">
  {/* ✅ Scrollable container for mobile */}
  <div className="overflow-x-auto ">
    <table className="w-[95%] border border-neutral-900 rounded-lg border-separate border-spacing-0 text-sm sm:text-base shadow-md">
      <thead>
        <tr className="bg-gray-100 font-semibold text-gray-900">
          <th className="border border-green-200 text-left py-3 px-2 sm:px-4">Type</th>
          <th className="border border-green-200 text-left py-3 px-2 sm:px-4">Carpet Area</th>
          <th className="border border-green-200 text-left py-3 px-2 sm:px-4">Price</th>
          <th className="border border-green-200 text-left py-3 px-2 sm:px-4">Action</th>
        </tr>
      </thead>

      <tbody>
        {plans.map((plan, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="border border-green-200 py-3 px-2 sm:px-4">{plan.type}</td>
            <td className="border border-green-200 py-3 px-2 sm:px-4">{plan.area}</td>
            <td className="border border-green-200 py-3 px-2 sm:px-4">{plan.price}</td>
            <td className="border border-green-200 py-3 px-2 sm:px-4">
              <button
                className="w-full sm:w-auto text-white px-3 sm:px-4 py-2 rounded hover:bg-green-900 transition-colors text-sm sm:text-base"
                onClick={onOpenForm}
                style={{ backgroundColor: "rgb(45, 99, 7)" }}
              >
                Price Breakup
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</div>

<div className="sm:mx-2 w-full max-w-[950px] bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 my-12 p-4 lg:p-8">
  
  {/* Left Image */}
  <div className="w-full md:w-1/2 flex justify-center sm:m-5 ">
    <img
      src="/mapimg.webp"
      alt="Costing Sheet"
      className="rounded-lg shadow-sm w-full max-w-[300px] sm:max-w-[370px] md:max-w-[420px] object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2 flex flex-col text-center md:text-left px-2">
    <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">
      Need Complete Costing Details?
    </h1>
    <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
      Download our detailed cost breakdown including all charges and payment plans.
    </p>
    <button
      className="bg-[#2d6307] text-white px-6 py-3 rounded-lg font-semibold md:me-auto shadow-sm mx-auto md:mx-0"
      onClick={onOpenForm}
    >
      Get Price Details
    </button>
  </div>
</div>

    </div>
  );
}

export default PricingPlans;
