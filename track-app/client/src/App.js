import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Curso from "./components/Curso/Curso";
import "./App.css";
import NavegationBar from "./components/Navegation/NavegationBar";
import ProfesorBrowser from "./components/Browsers/ProfesorBrowser";
import AlumnoBrowser from "./components/Browsers/AlumnoBrowser";
import CursoBrowser from "./components/Browsers/CursoBrowser";

class App extends Component {
  render() {
    return (
      <div>
        <div className="fluid">
          <Router>
            <div>
              <Route path="/" component={NavegationBar} />
              <br></br>
              <Route path="/profesores" component={ProfesorBrowser} />
              <Route path="/alumnos" component={AlumnoBrowser} />
              <Route path="/cursos" component={CursoBrowser} />
              <Route path="/curso/:id" component={Curso} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
