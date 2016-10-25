import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import Personal from "./components/Personal"
import Login from "./components/Login"
import Enter from "./components/Enter"
import Home from "./components/Home"
import Registered from "./components/Registered"
import Truth from "./components/Truth"
import Lake from "./components/Lake"
import Wowo from "./components/Wowo"

render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={App}/>
      <ReactRouter.Route path="/Enter" component={Enter}/>
      <ReactRouter.Route path="/Login" component={Login}/>
      <ReactRouter.Route path="/Personal" component={Personal}/>
      <ReactRouter.Route path="/Registered" component={Registered}/>
      <ReactRouter.Route path="/Home" component={Home}/>
      <ReactRouter.Route path="/Truth" component={Truth}/>
      <ReactRouter.Route path="/Lake" component={Lake}/>
      <ReactRouter.Route path="/Wowo" component={Wowo}/>

     </ReactRouter.Router>
  , document.getElementById("app"));