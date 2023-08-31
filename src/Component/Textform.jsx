import React, { useState } from "react";

function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    let t = document.getElementById("mybox");
    t.select();
    navigator.clipboard.writeText(t.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container mt-4">
        <h1>{props.heading}</h1>
        <form>
          <div className="form-group">
            <textarea
              value={text}
              onChange={handleOnChange}
              id="mybox"
              cols="30"
              rows="10"
              className="form-control"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <button
            type="button"
            className="custom-btn btn-14 mt-5"
            onClick={handleUpClick}
          >
            Convert Into UpperCase
          </button>

          <button
            type="button"
            className="custom-btn btn-14 mt-5 mx-2"
            onClick={handleLowClick}
          >
            Convert Into LowerCase
          </button>

          <button
            type="button"
            className="custom-btn btn-14 mt-5 mx-2"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="custom-btn btn-14 mt-5 mx-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </form>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>

        <p>
          {text.split(" ").length === 1 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <h3>{text.length > 0 ? text : "Enter Something Here for Preview"}</h3>
      </div>
    </>
  );
}

export default Textform;
