import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About"
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  );
}

export default App;
