import React from "react";
import LandingPage from "./pages/LandingPages/LandingPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LandingPage />}/>
   <Route path="/login" element={<Login />} />
   <Route path="/Register" element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
