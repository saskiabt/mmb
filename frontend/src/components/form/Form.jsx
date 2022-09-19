import React, { useState } from "react";
import TextInput from "../text/TextInput";
import TextArea from "../text/TextArea";
import "../form/styles/form.css";

function Form({ data, setData, isHidden, setIsHidden }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addPost = async (event) => {
    if (!data.comment || !data.username) {
      event.preventDefault();
      console.log("Add username and/or comment");
    }
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      if (err) throw new Error();
      process.abort();
    }
  };

  if (!isHidden)
    return (
      <form className="form" onSubmit={addPost}>
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
          <button type="submit">Add Message</button>
        </div>
      </form>
    );
}

export default Form;
