import {Routes,Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App