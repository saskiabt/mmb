import React from "react";
import TextInput from "../text/TextInput";
import TextArea from "../text/TextArea";
import "../form/styles/form.css";
import { addPost } from "../../api/posts";
import { useNavigate, Form, Link } from "react-router-dom";

function DataForm({ data, setData, isHidden, setIsHidden }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    if (event && (!data.comment || !data.username)) {
      event.preventDefault();
      alert("Event prevented");
    }
    addPost(data);
  };

  if (!isHidden)
    return (
      <form className="form" onSubmit={handleSubmit}>
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
          <button type="submit">
            {" "}
            <Link to={"/"}></Link>Add Message
          </button>
        </div>
      </form>
    );
}

export default DataForm;
