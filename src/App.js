import { useState } from "react";
import "./App.css";
// import About from './Component/About';
import Header from "./Component/Header";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Light");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setText("Dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <div>
        <Header
          title="TextUtiles"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alert alert={alert} />
        <Textform heading="Enter Your Text" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
