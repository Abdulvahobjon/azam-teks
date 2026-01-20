import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Boshsahifa from './components/Boshsahifa.jsx'
import Bizhaqimizda from './components/Bizhaqimizda.jsx'
import Xizmatlar from './components/Xizmatlar.jsx'
import Loyihalar from './components/Loyihalar.jsx'
import Boglanish from './components/Boglanish.jsx'
import Mijozlarfikri from './components/Mijozlarfikri.jsx'
// import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'
import Section7 from './components/Section7.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'

import SingleCard from "./components/SingleCard.jsx"




function App() {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="page-transition">
      <Loader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Boshsahifa/>}/>
        <Route path='/bizhaqimizda' element={<Bizhaqimizda/>}/>
        <Route path='/xizmatlar' element={<Xizmatlar/>}/>
        <Route path='/loyihalar' element={<Loyihalar/>}/>
        <Route path='/boglanish' element={<Boglanish/>}/>
        <Route path='/card/:id' element={<SingleCard/>}/>
        {/* <Route path='/mijozlarfikri' element={<Mijozlarfikri/>}/> */}
        
        
      </Routes>
      {/* <Section1/> */}
      {/* <Section2/>
      <Section3/> */}
    </div>
  )
}

export default App
