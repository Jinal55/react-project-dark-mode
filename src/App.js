// import logo from './logo.svg';
import { useState } from "react";
import "./Appa.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Usest from "./components/Usest";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="textutils2" abouttext="about textutils" /> */}
      <Navbar title="textutils2" mode={mode} togglemode={togglemode} />
      {/* <Navbar /> */}

      <div className="container">
        <TextForm
          heading="Enter the text here:"
          labelbody="enter text here only"
          mode={mode}
        />
      </div>
      {/* <Usest /> */}

      {/* <About></About> */}
    </>
  );
}

export default App;
