import React, { useState } from "react";
import "./styles/App.css";
import DataForm from "../components/form/Form";
import Comments from "../components/comments/Comments";
import Nav from "../components/nav/Nav";
import Login from "../components/login/Login";
import LandingPage from "../components/landingPage/LandingPage";
import Footer from "../components/footer/Footer";

function App() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="App">
      <Nav></Nav>
      <LandingPage
        data={data}
        setData={setData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      ></LandingPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
