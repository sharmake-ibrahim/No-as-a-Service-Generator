
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from  "./Login";
function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
