import React,{Component} from 'react'

import {Link, Route, withRouter} from "react-router-dom";
import {Menu,Icon} from "antd";
import zhCN from 'antd/es/locale-provider/zh_CN';
import myCard from './Card';
import myTable from './Table'
import WarppedmyForm from './Form'
import logo from '../assets/iamges/logo.png'
const SubMenu=Menu.SubMenu;
const MenuItem=Menu.Item;


class Sider extends Component{
    constructor(props){
        super(props);
        this.state={
            language:zhCN,
            current:'',
            username:''
        }
    }

    handleClick=(e)=>{
        this.setState({
            current:e.key
        })
    }

    componentDidMount() {
        this.getUser();
    }

    getUser=()=>{
        this.setState({
            username:'lixf'
        })
    }



    render() {
        return (

            <div>
                <div id="leftMenu">
                <img src={logo} width="50" alt="logo" id="logo"/>
                <Menu theme="dark" onClick={this.handleClick}
                      style={{width:185}}
                      defaultOpenKeys={['sub1']}
                      selectedKeys={[this.state.current]}
                      mode="inline">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                        <MenuItem key="1"><Link to="/myTable">表格</Link></MenuItem>
                        <MenuItem key="2"><Link to="/myForm">表单</Link></MenuItem>
                        <MenuItem key="3"><Link to="/myChart">图表</Link></MenuItem>
                        <MenuItem key="4"><Link to="/myCalendar">日历</Link></MenuItem>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>导航二</span></span>}>
                        <MenuItem key="5"><Link to="/myCard">导航</Link></MenuItem>
                        <MenuItem key="6"><Link to="/myAnimate">关注</Link></MenuItem>
                    </SubMenu>
                </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user"/><span>{this.state.username}</span></span>}>
                            <MenuItem key="language" onClick={this.setLanguage}>切换语言</MenuItem>
                            <MenuItem key="setting:1">退出</MenuItem>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        <Route path="/myCard" component={myCard} />
                        <Route path="/myTable" component={myTable} />
                        <Route path="/myForm" component={WarppedmyForm} />
                        {/*<Route path="/myChart" component={myChart} />*/}
                        {/*<Route path="/myCalendar" component={myCalendar} />*/}
                        {/*<Route path="/myAnimate" component={myAnimate} />*/}
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Sider)