'use strict';
import React, {Component} from "react";

const Enter = React.createClass({
  render: function () {
    return <div>
      <Navgation/>
      <Add/>
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
          <li><a href="#">注册</a></li>
        </ul>
      </div>
    )
  }
})

const Add = React.createClass({
  render: function () {
    return <div>

      <form className="form-horizontal enter-input" role="form">
        <div className="form-group">
          <label for="name" className="col-md-2 control-label">帐号</label>
          <div className="col-md-3">
            <input type="text" className="form-control" id="firstname" placeholder="请输入帐号"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">密码</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="请输入密码"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <div className="checkbox">
              <label>
                <input type="checkbox"/>请记住我
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-offset-2 col-md-1">
            <button type="submit" className="btn btn-default">登录</button>
          </div>
          <div className="col-md-offset-1">
            <button type="submit" className="btn btn-default">忘记密码</button>
          </div>
        </div>
      </form>
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

export default Enter;