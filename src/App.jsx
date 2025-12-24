import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Instamart from "./Pages/Instamart";
import Restaurant from "./Pages/Restaurant";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/Instamart" element={<Instamart/>} />
           <Route path="/Restaurant" element={<Restaurant/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
