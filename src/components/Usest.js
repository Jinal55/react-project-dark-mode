import React, { useState } from "react";

let x = 0;

export default function Usest() {
  const updateimage = () => {
    // if (x === 0) {
    //   console.log("image is getting updated");
    //   setImagecontainer("play1.png");
    //   //   x = 1;
    // }
    // if (x === 1) {
    //   setImagecontainer("pause.jpg");
    //   //   x = 0;
    // }

    if (x == 0) {
      setx(1);
    }
    if (x === 1) {
      setx(0);
    }
  };
  const [x, setx] = useState(0);
  // const [imagecontainer, setImagecontainer] = useState("pause.jpg");
  return (
    <div>
      <img srcSet={x ? "pause.jpg" : "play1.png"} alt="" />
      <button onClick={updateimage}>click here</button>
    </div>
  );
}
