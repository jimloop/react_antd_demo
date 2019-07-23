//webpack-dev-server将打包好的main.js托管到了内存中，直接访问根路径即可获取数据
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import Sider from './component/Sider'
import './main.css'
console.log('11111')

ReactDOM.render(
    <Router>
        <Route path="/" component={Sider}/>
        <Redirect to="/myCard" from="/"/>
    </Router>
    , document.getElementById('root'));