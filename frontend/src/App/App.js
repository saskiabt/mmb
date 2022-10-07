import React, { useState } from "react";
import "./styles/App.css";
import DataForm from "../components/form/Form";
import Comments from "../components/comments/Comments";
import Nav from "../components/nav/Nav";
import Login from "../components/login/Login";
import LandingPage from "../components/landingPage/LandingPage";

function App() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="App">
      <LandingPage
        data={data}
        setData={setData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      ></LandingPage>
    </div>
  );
}

export default App;
