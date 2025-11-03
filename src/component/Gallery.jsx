import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Gallery({ onOpenForm }) {
  return (
    <div className="mt-8">
      <div className=" w-full md:w-3/4 bg-white rounded-lg  p-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Gallery</h1>
          <div className="h-1 w-28 bg-green-800 rounded"></div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
          Experience luxury living through our carefully curated spaces
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={2}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1 },   // 📱 Mobile
            768: { slidesPerView: 2 },   // 💻 Tablet
            1024: { slidesPerView: 3 },  // 🖥️ Desktop
          }}
          className=""
        >
          <SwiperSlide>
            <img
              src="src/assets/animitiesslide1.jpg"
              alt="Slide 1"
              className="shadow-lg h-auto w-full object-cover transition-transform duration-300 hover:-translate-y-2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="src/assets/animitiesslide2.jpeg"
              alt="Slide 2"
              className="shadow-lg h-auto w-full object-cover transition-transform duration-300 hover:-translate-y-2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="src/assets/animitiesslide3.jpeg"
              alt="Slide 3"
              className="shadow-lg h-auto w-full object-cover transition-transform duration-300 hover:-translate-y-2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="src/assets/animitiesslide4.jpg"
              alt="Slide 4"
              className="shadow-lg h-auto w-full object-cover transition-transform duration-300 hover:-translate-y-2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery;
