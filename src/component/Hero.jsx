import React from 'react'
import Card from 'react-bootstrap/Card'
import './Hero.css'

function Hero({ onOpenForm }) {
  return (
    <div className="hero-section" id="home">

      {/* ✅ Background section */}
      <div className="hero-background"></div>

      {/* ✅ Card section */}
      <div className="hero-card-container">
        <Card className="hero-card">
          <Card.Body className="bg-white text-center d-flex flex-column align-items-center">
            
            <Card.Title className='p-2 text-white w-100 shimmer' style={{ backgroundColor: "rgb(45, 99, 7)" }}>
              <span className='text-base block'>EOI Started : Avail Exclusive Pre Launch Access</span>
            </Card.Title>

            <h1 className='text-black font-bold text-3xl mt-3'>Launching Soon...</h1>
            <p className='font-bold text-base mt-2 '>New Project at Kharadi Pune by Lodha Group</p>

            <table border="1" className="table table-bordered text-center align-middle mt-1 w-100">
              <tbody>
                <tr>
                  <td className='font-bold'>Total area</td>
                  <td>10 Acres approx</td>
                </tr>
                <tr>
                  <td className='font-bold'>Towers</td>
                  <td>5 Towers (Phase 1)</td>
                </tr>
              </tbody>
            </table>

            <p className='mt-1' style={{ fontSize: "1.06rem" }}>
              30+ Ultra Luxury Amenities. 80% Open Space.
            </p>

            <Card.Text className='mt-1 text-white w-100 p-2 shimmer rounded' style={{ backgroundColor: "rgb(45, 99, 7)" }}>
              <span className='text-base font-extrabold block'>Exclusive 3, 3.5 & 4 BHK Apartment with oversized private decks</span>
              <span className='text-base font-bold block'>Starting at</span>
              <span className='text-base font-bold block'>₹ 2.21 cr*</span>
            </Card.Text>

            <Card.Text className='mb-1 rounded text-white w-100 p-2 shimmer text-base font-bold' style={{ backgroundColor: "rgb(45, 99, 7)" }}>
              <span className=' text-base font-boldblock'>Ultra Luxurious Townhouses & Penthouses Pricing at</span>
              <span className='block text-base font-bold'>₹ 6 cr to 11.5 cr*</span>
            </Card.Text>

            <div className='mt-1'>
              <button className='px-6 py-2 text-white font-bold rounded-lg' style={{ backgroundColor: "rgb(45, 99, 7)" }} onClick={onOpenForm} >
                Get Quote
              </button>
            </div>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Hero
