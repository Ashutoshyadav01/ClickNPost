
import './App.css'
import Header from './components/Header'
import Loader from './components/Loader'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import Services from './components/Services'
import Album from './components/Album'
import Instagram from './components/Instagram'
import { useEffect, useState } from 'react'
import Testemonial from './components/Testemonial'
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
              <Route path='/services' element={<Services />} />
              <Route path='/album' element={<Album />} />
              <Route path='/instagram' element={<Instagram/>}/>
              <Route path='/testimonials' element={<Testemonial/>}/>
              {/* <Route path='/buy-frames' element={<h1>Buy Frames</h1>} /> */}
            </Routes>
            <Footer/>
          </div>   
      }
    </>

  )
}

export default App
