import React, { useState } from "react";
import TextInput from "../text/TextInput";
import TextArea from "../text/TextArea";
import "../form/styles/form.css";

function Form() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form className="form">
      <TextInput
        type="text"
        values={data.username}
        placeholder="Your name here:"
        name="username"
        handleChange={handleChange}
      ></TextInput>
      <TextArea
        type="text"
        values={data.comment}
        placeholder="Leave a comment..."
        name="comment"
        handleChange={handleChange}
      ></TextArea>
      <div className="button-container">
        <button type="button">Submit</button>
      </div>
    </form>
  );
}

export default Form;
