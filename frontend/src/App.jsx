import {Routes,Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
import Dashboard from "./pages/Dashboard"
import BlogDetail from "./pages/BlogDetail"
const App = () => {
  return (
    <div className="bg-primary-dull min-h-screen">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDetail/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App