import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import ConfigurationPage from './pages/ConfigurationPage'
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App = ()=>(
 <>
 <Router>
  <Routes>
    {/*public routes*/}
    <Route path="/" element={<Home/>}/> {/*Register Route*/}
    <Route path = '/login' element={<LoginPage/>}/> {/*Login Route*/}
    <Route
          path="/auth"
          element={<ProtectedRoute element={<ConfigurationPage />} />} 
        />{/*Configuaration Route*/}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />} 
        />{/*Dashboard Route*/}

  </Routes>
  </Router>
 </>
)

export default App