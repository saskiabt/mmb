import React from "react";
import "../form/styles/form.css";

function Form({ handleSubmit, handleChange }) {
  return (
    <div className="Post-Form">
      <form onSubmit={handleSubmit} className="post-form">
        <label className="comments">
          <input
            type="text"
            placeholder="Enter comment"
            onChange={handleChange}
            name="comment"
            id="comment-input"
          ></input>
        </label>
        <div className="button-container">
          <button type="submit">Add Comment</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
