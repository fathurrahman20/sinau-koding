import { useState } from "react";
import "./App.css";
import UserProfileClass from "./components/UserProfileClass";
import UserProfileFunct from "./components/UserProfileFunct";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        style={{
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "tomato",
        }}
        onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && (
        <>
          <UserProfileClass name="Fathur" city="Bekasi" initialAge={25} />
          <UserProfileFunct name="Fauzi" city="Bandung" initialAge={27} />
        </>
      )}
    </div>
  );
}

export default App;
