import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Restaurant from "./components/Restaurant/Restaurant";
import Detail from "./components/Detail/Detail";
import Member from "./components/Member/Member";
import Question from "./components/Question/Question";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/question" component={Question} />
      <Route exact path="/daan" component={Restaurant} />
      <Route exact path="/songshan" component={Restaurant} />
      <Route exact path="/xinyi" component={Restaurant} />
      <Route exact path="/zhongshan" component={Restaurant} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/login" component={Member} />
      <Route exact path="/singup" component={Member} />
      <Footer />
    </Router>
  );
}

export default App;
