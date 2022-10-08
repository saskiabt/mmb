import React from "react";
import Nav from "../nav/Nav";
import Comments from "../comments/Comments";
import "./styles/landingPage.css";
import Footer from "../footer/Footer";

function LandingPage({ data, setData }) {
  return (
    <div className="landing-page">
      <Comments data={data} setData={setData}></Comments>
    </div>
  );
}

export default LandingPage;
