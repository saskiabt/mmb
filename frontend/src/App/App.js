import React, { useState } from "react";
import "./styles/App.css";
import Form from "../components/form/Form";
import Comments from "../components/comments/Comments";

function App() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  return (
    <div className="App">
      <Form data={data} setData={setData}></Form>
      <Comments data={data} setData={setData}></Comments>
    </div>
  );
}

export default App;
