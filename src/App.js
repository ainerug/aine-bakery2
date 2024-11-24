import './App.css' 
import './bootstrap.min.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Facts from './Components/Facts';
import Service from './Components/Service';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer/Footer';
import AddCakes from './Components/Cakes/AddCakes/AddCakes';
import AllCakes from './Components/Cakes/AllCakes/AllCakes';
import EditCakes from './Components/Cakes/EditCakes/EditCakes';
import MyCakes from './Components/Cakes/MyCakes/MyCakes';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import OrderCakes from './Components/Cakes/OrderCakes/OrderCakes';
import CustomerOrders from './Components/Orders/MyOrders/CustomerOrders';
import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
import SellerOrders from './Components/Orders/MyOrders/SellerOrders';
import PaymentMain from './Components/Payment/PaymentMain';
import PaymentComplete from './Components/Payment/PaymentComplete';
import Wallet from './Components/Wallet/Wallet';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/> <Hero/> <About/> <Facts/> <AllCakes/> <Service/> <Team/> <Testimonial/><Footer/></>}/>
      <Route path='/about' element={<><Navbar/> <Header headerName="About Us"/> <About/> <Facts/> <Service/> <Footer/></>}/>
      <Route path='/addcakes' element={<><Navbar/> <Header headerName="Add a Cake"/> <AddCakes/> <Footer/></>}/>
      <Route path='/cakes' element={<><Navbar/> <Header headerName="Cakes"/> <AllCakes/><Footer/></>}/>
      <Route path='/editcakes' element={<><Navbar/> <Header headerName="Edit Cake"/> <EditCakes/> <Footer/></>}/>
      <Route path='/ordercakes' element={<><Navbar/> <Header headerName="Order Cake"/> <OrderCakes/> <Footer/></>}/>
      <Route path='/customerorders' element={<><Navbar/> <Header headerName="My Orders"/> <CustomerOrders/> <Footer/></>}/>
      <Route path='/sellerorders' element={<><Navbar/> <Header headerName="My Orders"/> <SellerOrders/> <Footer/></>}/>
      <Route path='/login' element={<><Navbar/> <Header headerName="Login"/> <Login/> <Footer/></>}/> 
      <Route path='/signup' element={<><Navbar/> <Header headerName="Sign Up"/> <Signup/> <Footer/></>}/> 
      <Route path='/contact' element={<><Navbar/> <Header headerName="Contact Us"/> <Contact/> <Footer/></>}/> 
      <Route path='/mycakes' element={<><Navbar/> <Header headerName="My Cakes"/> <MyCakes/> <Footer/></>}/> 
      <Route path='/wallet' element={<><Navbar/> <Header headerName="Wallet"/> <Wallet/> <Footer/></>}/> 
      <Route path='/payment' element={<><Navbar/> <PaymentMain/> <Footer/></>}/> 
      <Route path='/complete/:orderId' element={<><Navbar/> <PaymentComplete/> <Footer/></>}/>
      

     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
