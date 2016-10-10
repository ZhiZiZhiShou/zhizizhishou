import React from "react";
import {render} from "react-dom";
import App from "./components/App";
// import { ReactRouter, ReactRoute, Link,Router } from 'react-router'
import Login from "./components/Login"
import Enter from "./components/Enter"
// import { render, findDOMNode } from 'react-dom';
// import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
// import { createHistory, createHashHistory, useBasename } from 'history';

render(
  <App/>,
  document.getElementById("app")
);


// render(
//   <ReactRouter.Router>
//     <ReactRouter.Route path="/" component={App}>
//       <ReactRouter.Route path="/Enter" component={Enter}/>
//       <ReactRouter.Route path="/Login" component={Login}/>
//     </ReactRouter.Route>
//   </ReactRouter.Router>
//   , document.getElementById("app"));