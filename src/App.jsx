import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import Users from './Components/Users'
import CardData from './Components/CardData';
import { Suspense, useState } from 'react';
import Blocked from './Components/Blocked';
import Pricing from './Components/Pricing';
import { ToastContainer } from 'react-toastify';
import PreFooter from './Components/PreFooter';
import Footer from './Components/Footer';

const cardData = fetch('/data.json')
  .then((cardData) => cardData.json());


function App() {
  const [cart,setCart] = useState(0)
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Users></Users>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <CardData cart={cart} setCart={setCart} cardData={cardData}></CardData>
      </Suspense>
      <Blocked></Blocked>
      <Pricing></Pricing>
      <PreFooter></PreFooter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
