
import { Suspense } from 'react';
import './App.css'
import Banner from './components/HomePage/banner/Banner'
import Players from './components/HomePage/banner/players/Players';
import Navbar from './components/Navbar/Navbar'

const fetchPlayer=async()=>{
  const res = await fetch("/data.json");
  return res.json()
}
function App() {
  const playersPromise=fetchPlayer()

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Players playersPromise={playersPromise}/>
    </Suspense>
    </>
  )
}

export default App
