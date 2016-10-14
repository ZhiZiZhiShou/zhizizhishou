import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import Personal from "./components/Personal"
import Login from "./components/Login"
import Enter from "./components/Enter"
import Home from "./components/Home"
import Registered from "./components/Registered"
import Hand from "./components/Hand"

render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={App}/>
      <ReactRouter.Route path="/Enter" component={Enter}/>
      <ReactRouter.Route path="/Login" component={Login}/>
      <ReactRouter.Route path="/Personal" component={Personal}/>
      <ReactRouter.Route path="/Registered" component={Registered}/>
      <ReactRouter.Route path="/Home" component={Home}/>
      <ReactRouter.Route path="/Hand" component={Hand}/>

     </ReactRouter.Router>
  , document.getElementById("app"));