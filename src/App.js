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
      <Route exact path="/findrestaurants" component={Home} />
      <Route exact path="/findrestaurants/question" component={Question} />
      <Route exact path="/findrestaurants/daan" component={Restaurant} />
      <Route exact path="/findrestaurants/songshan" component={Restaurant} />
      <Route exact path="/findrestaurants/xinyi" component={Restaurant} />
      <Route exact path="/findrestaurants/zhongshan" component={Restaurant} />
      <Route exact path="/findrestaurants/detail" component={Detail} />
      <Route exact path="/findrestaurants/login" component={Member} />
      <Route exact path="/findrestaurants/singup" component={Member} />
      <Footer />
    </Router>
  );
}

export default App;
