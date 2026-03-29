import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import Users from './Components/Users'
import CardData from './Components/CardData';
import { Suspense } from 'react';

const cardData = fetch('/data.json')
.then((cardData)=>cardData.json())

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Users></Users>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <CardData cardData={cardData}></CardData>
      </Suspense>
    </>
  )
}

export default App
