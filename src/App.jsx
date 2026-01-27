import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Bizhaqimizda from './components/Bizhaqimizda.jsx'
import Boglanish from './components/Boglanish.jsx'
import Boshsahifa from './components/Boshsahifa.jsx'
import Loyihalar from './components/Loyihalar.jsx'
import Navbar from './components/Navbar'
import Xizmatlar from './components/Xizmatlar.jsx'
import Section1 from './components/Section1.jsx'
import Loader from './components/Loader.jsx'
import SingleCard from "./components/SingleCard.jsx"
import SingleCard2 from "./components/SingleCard2.jsx"
import MijozlarFikri from './components/Mijozlarfikri.jsx'
import Footer from './components/Footer.jsx'
import { toast, ToastContainer } from 'react-toastify'




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
        <Route path='/mijozlarfikri' element={<MijozlarFikri/>}/>
        <Route path='/card/:id' element={<SingleCard/>}/>
        <Route path='/card2/:id' element={<SingleCard2/>}/>
      </Routes>
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>

      <Footer/>
    </div>
  )
}

export default App
