import React, { useState } from "react";
import SimpleForm from "./Simpleform";
import "./App.css";
import ExampleDBPedia from "./ExampleDBPedia";

const App = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="header">
        <h2>TEAM DACHRS!!!</h2>
      </div>

      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          {/* <SimpleForm></SimpleForm> */}
          <ExampleDBPedia></ExampleDBPedia>
          {/* <ThemedExample></ThemedExample> */}
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat ? (
            <button
              className="btn"
              onClick={() => startChat()}
            >
            <img className="img" src="https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot.png"
              alt=""/>
              {" "}
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              X{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
