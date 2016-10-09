import React, {Component} from "react";
const Home = React.createClass({
  getInitialState: function () {
    return {
      isClicked: true,
      imageArray: ["1.jpg", "3.jpg", "4.jpg", "6.jpg"]
    }
  },

  render(){
    return (
      <div className="home-nav">
        <Navgation/>
        <Carousel onChange={this.state.imageArray}/>
        <Footer/>
      </div>
    )
  }
});

const Navgation = React.createClass({
  render(){

    return (

      <div className="navbar row home-head  nav-pills">

        <div className="col-lg-2 col-md-offset-1 home-head-img"><img src={"src/image/flower.png"} alt="logo"/>暖小窝</div>

        <ul className=" col-lg-5 col-md-offset-3 nav nav-pills navbar-right home-head-right">
          <li><a href="#">首页</a></li>
          <li><a href="#">暖窝窝</a></li>
          <li><a href="#">牵小手</a></li>
          <li><a href="#">情人湖</a></li>
          <li><a href="./components/Login">个人中心</a></li>
          <li><a href="#">退出</a></li>

        </ul>
      </div>
    )
  }
})


const Carousel = React.createClass({
  render(){
    return <div id="carousel-example-generic" className="carousel slide container" data-ride="carousel">
      <div className="my-img"><img src={"../src/image/11.jpg"} alt="..."/></div>
    </div>
  }
});

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
export default Home;