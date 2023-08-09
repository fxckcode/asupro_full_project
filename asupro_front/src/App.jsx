import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Registro/Register"
import PrivateRoutes from "./utils/PrivateRoutes"
import Dashboard from "./pages/Dashboard/Dashboard"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route element={<RedirectDashboard />}> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Register />}/>
      {/* </Route> */}
      <Route element={<PrivateRoutes />} >
        <Route path="/dashboard" element={<Dashboard />} exact/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
