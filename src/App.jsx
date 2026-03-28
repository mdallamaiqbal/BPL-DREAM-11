
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/HomePage/banner/Banner'
import Players from './components/HomePage/banner/players/Players';
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';

const fetchPlayer=async()=>{
  const res = await fetch("/data.json");
  return res.json()
}
function App() {
  const playersPromise=fetchPlayer()
  const [coin, setCoin]=useState(50000)
  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
    </Suspense>
    <Footer/>
   {/* react toastify */}
    <ToastContainer />
    </>
  )
}

export default App
