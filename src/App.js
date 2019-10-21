import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./Components/Context";
import Main from "./Components/Main/Main";
import Header from "./Components/Header";
import {Route , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Route path='/' component = {Main} exact/>
      </ContextProvider>
    </div>
  );
}

export default App;
