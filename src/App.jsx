import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />}> */}
            <Route index element={<Home/>} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
