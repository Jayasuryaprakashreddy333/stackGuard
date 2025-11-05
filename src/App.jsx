import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import ConfigurationPage from './pages/ConfigurationPage'

const App = ()=>(
 <>
 <Router>
  <Routes>
    <Route path="/home" Component={Home}/>
    <Route path = '/login' Component={LoginPage}/>
    <Route path = '/auth' Component={ConfigurationPage}/>
  </Routes>
  </Router>
 </>
)

export default App