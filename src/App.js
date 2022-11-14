import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
// pages

import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
