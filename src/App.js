// import React, { useState } from "react";
import SimpleForm from "./Simpleform";
import "./App.css";
// import ExampleDBPedia from "./ExampleDBPedia";

const App = (props) => {
  return (
    <>
      <div className="header">
        <h2>TEAM DACHRS!!!</h2>
      </div>

      <div className="bot">
        <div style={{}}>
          <SimpleForm></SimpleForm>
          {/* <ExampleDBPedia></ExampleDBPedia> */}
          {/* <ThemedExample></ThemedExample> */}
        </div>
      </div>
    </>
  );
};

export default App;
