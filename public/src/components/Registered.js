'use strict';
import React, {Component} from "react";

const Registered = React.createClass({
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
          <li><ReactRouter.Link to="/Home">登录</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Login">返回</ReactRouter.Link></li>
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
          <label for="name" className="col-md-2 control-label">昵称</label>
          <div className="col-md-3">
            <input type="text" className="form-control" id="firstname" placeholder="字母加数字长度不超过6位"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">性别</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="请输入'男'或者‘女’"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">生日</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="格式：xxxx.xx.xx"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">密码</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="字母加数字不低于4位"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">确认密码</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="请在再次输入密码"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">邮箱</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="请输入QQ邮箱"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="col-md-2 control-label">手机号</label>
          <div className="col-md-3">
            <input type="password" className="form-control" id="lastname" placeholder="可选项"/>
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
            <button type="submit" className="btn btn-default">注册</button>
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
export default Registered;