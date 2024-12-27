import "./style.css";
import Navbar from "./components/Navbar" ; 
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Food from "./routes/Food";
import HotSpot from "./routes/HotSpot";
import Hotel from "./routes/Hotel";

export default function App() {
  return (
    <div classname ="App">
      <Routes>
        <Route path="/home" element= {<Home />}/>
        <Route path="/food" element= {<Food />}/>
        <Route path="/hotel" element= {<Hotel />}/>
        <Route path="/hot-spot" element= {<HotSpot />}/>
      </Routes>
      <Navbar/>
    </div>
  );
}