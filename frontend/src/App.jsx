import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route, useLocation} from "react-router-dom"

const App = () => {
  const isSeller=useLocation().pathname.includes("seller")
  return (
    <div>
      <Navbar/>
      <div className={`${isSeller?"":`px-16 md:px-16 lg:px-24 xl:px-32`}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App