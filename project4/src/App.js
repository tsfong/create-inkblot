import React from "react";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import {Route} from "react-router-dom";
// import { propTypes } from "react-bootstrap/esm/Image";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./Gallery";



function App() {

  return (
    <>

    <NavBar />
      <Route path="/home">
        <Home /> 
      </Route>
    <Route path='/create'>
       <Create />
    </Route>
    <Route exact path='/gallery'>
        <Gallery />
    </Route>
    <Route exact path='/'>
      <Home />
    </Route>
    </>
  );
}

export default App;