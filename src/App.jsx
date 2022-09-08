import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />}> */}
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

             
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
