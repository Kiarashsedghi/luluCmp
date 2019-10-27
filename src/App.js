import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./Components/Context";
import Main from "./Components/Main/Main";
import Header from "./Components/Header";
import {Route } from 'react-router-dom'
import CreateModal from "./Components/CreateModal";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CreateModal/>
        <Header />
        <Route path='/' component={Main}/>
      </ContextProvider>
    </div>
  );
}

export default App;
