import { useEffect, useState } from "react"
import Navbar from "./Components/navbar/Navbar"
import  { SelectedPage } from "./shared/types" // Ensure SelectedPage is an enum or object, not just a type
import Home from "./Components/Home/Home"
import Benefits from "./Components/Benefits/Benefits"
import Classes from "./Components/OurClasses/Classes"
import Contactus from "./Components/ContactUs/Contactus"
import Footer from "./Components/Footer/Footer"
 


function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(true)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      else {
        setIsTopOfPage(false);
      }
    } ;
  window.addEventListener('scroll',handleScroll);
  return() =>window.removeEventListener('scroll',handleScroll);
  },[]);
  return (
    <div className='app bg-[#F8F4EB]'>
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
     <Home setSelectedPage={setSelectedPage}/>
     <Benefits setSelectedPage={setSelectedPage}/>
     <Classes setSelectedPage={setSelectedPage}/>
     <Contactus setSelectedPage={setSelectedPage}/>
     <Footer />
    </div>
  )
}

export default App
