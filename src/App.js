import React, { useState } from "react";
import "./styles.css";

const emojidictionary = {
  "🙂": "Smiling",
  "😑": "Expression Less",
  "🙄": "Whatever",
  "😡": "Angry",
  "😳": "Surprised",
  "❤️": "Love"
};
let emojibuttons = Object.keys(emojidictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojihandler(event) {
    var userinput = event.target.value;
    meaning = emojidictionary[userinput];
    if (meaning === undefined) {
      meaning = "We dont have this in our data base";
    }
    setmeaning(meaning);
  }
  function emojiclickhandler(item) {
    meaning = emojidictionary[item];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input onChange={emojihandler}></input>
      <h1>{meaning}</h1>
      <h1>
        {emojibuttons.map((item, index) => {
          return (
            <span
              onClick={() => emojiclickhandler(item)}
              style={{
                fontSize: "35px",
                padding: "0px 08px ",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
