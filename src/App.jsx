
import { Outlet, useLocation } from "react-router-dom";
import About from './pages/About'
import Navbar from './components/Navbar'
import Image from './components/Image'

import './App.css'

function App() {
  const location = useLocation();

  return (
    <>

      <Navbar/>

      {/* {location.pathname !== "/about" && <Navbar/>}  */}

      <Outlet />
      {/* <h1>asdasdasd</h1> */}
     {/* <About/> */}
     {/* <Image imageURL="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"/> */}
    </>
  )
}

export default App
