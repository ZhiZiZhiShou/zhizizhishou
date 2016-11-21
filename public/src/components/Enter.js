'use strict';
import React, {Component} from "react";

const Enter = React.createClass({


  getInitialState: function () {
    return {
      user: [],
    }
  },


  render: function () {

      return <div>
        <Navgation/>

        <div>
          <LoginArea/>
        </div>

        {/*<Add/>*/}
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
          <li><ReactRouter.Link to="/Registered"> 注册</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/Login"> 返回</ReactRouter.Link></li>
        </ul>
      </div>
    )
  }
})

const LoginArea = React.createClass({


  getInitialState: function () {
    return {
      isSame: false,
    }
  },

  jude: function () {
    let username = $("input[name=username]").val();
    let password = $("input[name=password]").val();

    if (username === '') {
      alert("用户名不能为空，请输入用户名")
    }
    else if(password === '') {
      alert("密码不能为空，请输入密码")
    }

    $.get('/selectUser',  (data)=> {
      for (var i = 0; i < data.length; i++) {
        if (data[i].user == username && data[i].password == password) {
          this.setState({isSame:true});

        }
      }
    })
    },

  render: function () {
    return <div>

      <form className="form-horizontal enter-input" role="form">

        <div className="form-group">

          <label for="name" className="col-md-2 control-label">爱窝昵称</label>

          <div className="col-md-3">

            <input type="text" className="form-control" name="username" id="username" autoFocus="true" placeholder="请输入爱窝昵称"/>

          </div>

        </div>

        <div className="form-group">
          <label for="password" className="col-md-2 control-label">密码</label>
          <div className="col-md-3">
            <input type="password" className="form-control" name="password" id="password" placeholder="请输入密码"/>
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
            <ReactRouter.Link to={this.state.isSame ? '/Home' : '/Enter'}>
            <button type="submit" className="btn btn-default" onClick={this.jude}>
               登录
            </button>
            </ReactRouter.Link>
          </div>
          <div className="col-md-offset-1">
            <button type="submit" className="btn btn-default"><ReactRouter.Link to="/Home"> 忘记密码</ReactRouter.Link>
            </button>
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