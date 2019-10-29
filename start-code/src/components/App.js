import React, { Component } from "react";
import NavBar from "./NavBar";
import FormField from "./FormField";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="form" style={{ padding: "7% 7%", marginTop: "100px" }}>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    );
  }
}

export default App;
