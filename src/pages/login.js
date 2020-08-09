import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import '@/assets/scss/login.scss'

export default class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.state = {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (event) {
        this.setState({liked: !this.state.liked});
    }
    render () {
        let text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <div className='login-container' onClick={this.handleClick}>
                 你<b>{text}</b>我。点我切换状态。
            </div>
        )
    }
}
