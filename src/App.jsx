import './App.css'
import Amenities from './component/Amenities'
import Contactus from './component/Contactus'
import Floorplan from './component/Floorplan'
import Gallery from './component/Gallery'
import Hero from './component/Hero'
import Location from './component/Location'
import NavigationBar from './component/NavigationBar'
import NewLaunch from './component/NewLaunch'
import PricingPlans from './component/PricingPlans'
import VirtualTour from './component/VirtualTour'
import About from './component/About'
import { useState } from 'react'
import ContactForm from './component/ContactForm'
function App() {
const [openForm, setOpenForm] = useState(false);
  return (
    <div className='pagelayout '>
    <div className='maincontent'>
    <NavigationBar></NavigationBar>
  <Hero onOpenForm={() => setOpenForm(true)} />

{/* ✅ Mobile-only Contactus position after Hero */}
<div className="contact-mobile">
  <Contactus />
</div>

{/* <NewLaunch onOpenForm={() => setOpenForm(true)} /> */}
    <NewLaunch onOpenForm={() => setOpenForm(true)}></NewLaunch>
    <PricingPlans onOpenForm={() => setOpenForm(true)}></PricingPlans>
    <Floorplan onOpenForm={() => setOpenForm(true)}></Floorplan>
    <Amenities onOpenForm={() => setOpenForm(true)}></Amenities>
    <Gallery onOpenForm={() => setOpenForm(true)}></Gallery>
    <Location onOpenForm={() => setOpenForm(true)}></Location>
    <VirtualTour onOpenForm={() => setOpenForm(true)}></VirtualTour>
    <About onOpenForm={() => setOpenForm(true)}></About>
    {openForm && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[10000]">
      <ContactForm onClose={() => setOpenForm(false)} />
  </div>
)}
     </div>

    <div className='rightcontent'>
    <Contactus></Contactus>

    </div>
    </div>
  )
}

export default App
