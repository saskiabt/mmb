import React, { useState } from "react";
import "./styles/App.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileNav from "../components/mobileNav/MobileNav";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="App">
      <Nav></Nav>
      <MobileNav isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
