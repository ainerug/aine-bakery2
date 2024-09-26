import './App.css' 
import './bootstrap.min.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Facts from './Components/Facts';
import Service from './Components/Service';
import Team from './Components/Team';
import Offer from './Components/Offer';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import AddCakes from './Components/Cakes/AddCakes/AddCakes';
import AllCakes from './Components/Cakes/AllCakes/AllCakes';
import EditCakes from './Components/Cakes/EditCakes/EditCakes';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/> <Hero/> <About/> <Facts/> <AllCakes/> <Service/> <Team/> <Offer/> <Testimonial/><Footer/></>}/>
      <Route path='/about' element={<><Navbar/> <Header headerName="About Us"/> <About/> <Facts/>  <Footer/></>}/>
      <Route path='/addcakes' element={<><Navbar/> <Header headerName="Add a Cake"/> <AddCakes/> <Footer/></>}/>
      <Route path='/cakes' element={<><Navbar/> <Header headerName="Cakes"/> <AllCakes/><Footer/></>}/>
      <Route path='/editcakes' element={<><Navbar/> <Header headerName="Edit Cake"/> <EditCakes/> <Footer/></>}/>
      <Route path='/contact' element={<><Navbar/> <Header headerName="Contact Us"/> <Contact/> <Footer/></>}/> 
      

     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
