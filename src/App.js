import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <div>
    <Router basename = {process.env.PUBLIC_URL || "/"}>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </Wrapper>
    </Router>
      </div>
  );
}

export default App;
