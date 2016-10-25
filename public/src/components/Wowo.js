import React, {Component} from "react";
const Nest = React.createClass({
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
        <Content/>
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
          <li><ReactRouter.Link to="/Home"> 首页</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Wowo"> 暖窝窝</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Truth"> 心里话</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Lake"> 情人湖</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Personal"> 个人中心</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Login"> 退出</ReactRouter.Link></li>
        </ul>
      </div>
    )
  }
});
const Content = React.createClass({
  render(){
    return (
      <div className="warnNest-content">
        <ul className="menu">
          <li className="wowo-list">书架<span></span>
            <div className="subMenu">
              <div className="picture">
                <ul id="pic">
                  <li><img src="../src/image/book1.jpg"></img></li>
                  <li><img src="../src/image/book2.jpg"></img></li>
                  <li><img src="../src/image/book3.jpg"></img></li>
                  <li><img src="../src/image/book4.jpg"></img></li>
                  <li><img src="../src/image/book5.jpg"></img></li>
                  <li><img src="../src/image/book6.jpg"></img></li>
                  <li><img src="../src/image/book2.jpg"></img></li>
                  <li className="wowo-add">点击添加</li>
                </ul>
              </div>

            </div>
          </li>

          <li className="wowo-list">相册<span></span>
            <div className="subMenu">
              <div className="picture">
                <ul id="pic">
                  <li><img src="../src/image/book1.jpg"></img></li>
                  <li><img src="../src/image/book2.jpg"></img></li>
                  <li><img src="../src/image/book3.jpg"></img></li>
                  <li><img src="../src/image/book4.jpg"></img></li>
                  <li><img src="../src/image/book5.jpg"></img></li>
                  <li><img src="../src/image/book6.jpg"></img></li>
                  <li><img src="../src/image/book1.jpg"></img></li>
                  <li className="wowo-add">上传图片</li>
                </ul>
              </div>
            </div>
          </li>

          <li className="wowo-list">纪念日
            <div className="subMenu">
              <div className="center-block">
                <div className="row">
                  <div className="wowo-timed col-lg-8">
                    2015.1.12第一次见面&nbsp;&nbsp;
                    2016.3.17表白成功&nbsp;&nbsp;
                    2016.6.2第一次牵手
                  </div>
                  <div className="col-lg-4 navbar-right">
                    <img src={"../src/image/data.png "} alt="..."/>
                  </div>

                  <div className="form-group">
                    <input type="text" className=" truth-chat-last col-md-offset-1" id="lastname" placeholder="请输入事件，回车自动保存"/>
                  </div>

                </div>
              </div>
            </div>
          </li>
          <li className="wowo-list">检查<span></span>
            <div className="subMenu">
              <div className="wowo-false" >
                <p>男生犯错的是时候可以在这里写检查，500自以上自动保存</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
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
export default Nest;