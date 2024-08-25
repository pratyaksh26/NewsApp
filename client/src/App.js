import { useState } from "react";
import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Allnews from "./Components/Allnews";
import Topnews from "./Components/Topnews";
import Countrynews from "./Components/Countrynews";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div className="w-full">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/" element={<Allnews/>} />
          <Route path="/top-headlines/:category" element={<Topnews/>} />
          <Route path="/country/:iso" element={<Countrynews/>} />
        </Routes>
        {/* <Cards />  */}
        {/* <Footer />   */}
      </BrowserRouter>
    </div>
    
  );
}

export default App;



{/* <div className="w-full">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Allnews />} />
          <Route path="/top-news/:category" element={<Topnews />} />
          <Route path="/country/:iso" element={<Countrynews />} />
        </Routes>
        {/* <Cards />  */}
        {/* <Footer />   */}
      // </BrowserRouter>
    // </div> */}