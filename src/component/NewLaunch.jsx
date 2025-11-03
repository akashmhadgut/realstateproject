import React from 'react'
import Card from 'react-bootstrap/Card';

function NewLaunch({ onOpenForm }) {
  return (
    <>
      <Card className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/4 me-auto mt-8  border-white bg-white ">
        <Card.Body className="p-4 sm:p-6">
          {/* Title */}
          <div className="items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">About Lodha New Launch</h1>
            <div
              className="h-1 w-24 sm:w-28 mb-6 sm:mb-11"
              style={{ backgroundColor: "rgb(45, 99, 7)" }}
            ></div>
          </div>

          {/* Image */}
          <div className="w-full mb-5">
            <img
              src="src/assets/newlaunch.webp"
              alt="launchimg"
              className=""
            />
          </div>

          {/* Text */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Lodha New Launch in Kharadi reimagines upscale living with a rare blend of elegance, nature, and world-class design. Spanning 10 acres with over 80% open spaces, this distinguished development is set to transform Kharadi’s skyline with an iconic presence inspired by the timeless charm of the English countryside.
            <br /><br />
            Offering an exclusive collection of 3 BHK and 4 BHK residences, spacious townhouses, and signature penthouses, Lodha New Launch in Kharadi delivers thoughtfully crafted homes with expansive decks, private gardens, and sweeping views, creating a sanctuary of sophistication in the city’s most dynamic growth corridor.
            <br /><br />
            With a low-density layout and a curated selection of lifestyle amenities, Lodha New Launch in Kharadi is more than a residence — it’s a destination for those who seek elevated living in one of Pune’s most coveted neighborhoods.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-start">
            <button
              className="px-5 sm:px-6 py-2 text-white font-semibold rounded transition-colors hover:bg-green-900"
              style={{ backgroundColor: "rgb(45, 99, 7)" }}
              onClick={onOpenForm}
            >
              Download Brochure
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewLaunch;
