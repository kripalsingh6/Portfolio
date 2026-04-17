import { BrowserRouter } from "react-router-dom";
import Hero from "./components/hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about.jsx";

const App = ()=>{
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-[#050816]">
           <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero></Hero>
    </div>
    <div className=" relative z-0">
      <About></About>

    </div>
    
   </div>
    </BrowserRouter>
  
  )
}

export default App;
