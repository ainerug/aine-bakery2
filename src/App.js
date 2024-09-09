import './App.css' 
import './bootstrap.min.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Facts from './Components/Facts';
import Products from './Components/Products';
import Service from './Components/Service';
import Team from './Components/Team';
import Offer from './Components/Offer';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/> <Hero/> <About/> <Facts/> <Products/> <Service/> <Team/> <Offer/> <Testimonial/><Footer/></>}/>
      

     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
