'use strict';
import React, {Component} from "react";

const Login = React.createClass({
  render: function () {
    return <div>
      <Navgation/>
      <Pitcher/>
      <Footer/>
    </div>
  }
})

const Navgation = React.createClass({
  render(){

    return (

      <div className="navbar row home-head  nav-pills">

        <div className="col-lg-2 col-md-offset-1 home-head-img"><img src={"src/image/flower.png"} alt="logo"/>暖小窝</div>

        <ul className=" col-lg-2 col-md-offset-6 nav nav-pills navbar-right home-head-right">
          <li><ReactRouter.Link to="/Enter">登录</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Registered"> 注册</ReactRouter.Link></li>
        </ul>
      </div>
    )
  }
})

const Pitcher = React.createClass({
  render: function () {
    return <div id="myCarousel" className="carousel slide">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <img src="src/image/love01.jpg" alt="First slide"/>
        </div>
        <div className="item">
          <img src="src/image/love02.jpg" alt="Second slide"/>
        </div>
        <div className="item">
          <img src="src/image/love03.jpg" alt="Second slide"/>
        </div>
        <div className="item">
          <img src="src/image/love04.jpg" alt="Second slide"/>
        </div>
        <div className="item">
          <img src="src/image/love05.jpg" alt="Second slide"/>
        </div>
        <div className="item">
          <img src="src/image/love6.jpg" alt="Third slide"/>
        </div>
        <div className="item">
          <img src="src/image/love8.jpg" alt="Second slide"/>
        </div>
      </div>
      <a className="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;
      </a>
      <a className="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;
      </a>
    </div>

  }
})

const Footer = React.createClass({
  render(){
    return (
      <div className="home-footer">
        <div className="row home-footer-last">
          <div className="col-lg-2 col-md-offset-1">下载地址<br/><img src={"src/image/13.png"} alt="微信公众号"/></div>
          <div className="col-lg-2 col-md-offset-1">博客地址<br/>http://blog.csdn.net/ting119</div>
          <div className="col-lg-2 col-md-offset-1">客服热线<br/>1234567</div>
          <div className="col-lg-3">公众号<br/><img src={"src/image/13.png"} alt="微信公众号"/></div>
        </div>

        <div className="text-center">
          <h5>2016.9.22 @All Rights Reserved</h5>
        </div>
      </div>
    )
  }
})
export default Login;