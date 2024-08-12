import React, { useState } from "react";

export default function TextForm(props) {
  const handleextraspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };

  const handlecopy = () => {
    console.log("i m copy");
    var text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleupclick = () => {
    console.log("upper case was clicked ");

    settext(text.toUpperCase());
  };
  const handleonchange = (event) => {
    console.log("on change");
    settext(event.target.value);
  };

  const handlelowclick = () => {
    console.log("lowercase was clicked");
    settext(text.toLowerCase());
  };

  const handleclear = () => {
    console.log("clear button was clicked");
    settext("");
  };

  const handletrim = () => {
    // console.log("clear button was clicked");
    settext(text.trim());
  };

  const inversestring = () => {
    // console.log("clear button was clicked");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    settext(newtext);
  };

  const [text, settext] = useState(""); //array destructuring

  const [size, setsize] = useState(5);
  const fontchange = (e) => {
    setsize(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <input type="number" value={size} onChange={fontchange}></input> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          convert to uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handlelowclick}>
          convert to lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleclear}>
          clear button
        </button>

        <button className="btn btn-primary mx-2" onClick={handletrim}>
          trim button
        </button>
        <button className="btn btn-primary mx-2" onClick={inversestring}>
          inverse button
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleextraspace}>
          remove extra spaces
        </button>
      </div>
      <div className="container">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>time: {0.008 * text.split(" ").length} minutes to read</p>
        <h3>{text}</h3>
      </div>
    </>
  );
}
