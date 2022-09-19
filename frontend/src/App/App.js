import React, { useState } from "react";
import "./styles/App.css";
import Form from "../components/form/Form";
import Comments from "../components/comments/Comments";
import Nav from "../components/nav/Nav";

function App() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="App">
      <Nav isHidden={isHidden} setIsHidden={setIsHidden}></Nav>
      <Form
        data={data}
        setData={setData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      ></Form>
      <Comments data={data} setData={setData}></Comments>
    </div>
  );
}

export default App;
