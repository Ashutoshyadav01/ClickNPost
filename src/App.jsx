
import './App.css'
import Header from './components/Header'
import Loader from './components/Loader'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import Services from './components/Services'
import { useEffect, useState } from 'react'
import { Routes,Route} from 'react-router-dom'
function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  return (
    <>
      {
        loader ?
          <Loader />
          :
          <div>
             <ScrollToTop />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services/>}/>
            </Routes>
            <Footer/>
          </div>   
      }
    </>

  )
}

export default App
