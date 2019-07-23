import React from 'react'
import {Table} from 'antd'
import {withRouter} from "react-router";

class myTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tData:[]
        }
    }


    componentDidMount() {
        const showData=[]
        fetch('../mokes/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res =>{
                return res.json() })
            .then(data=>{
                console.log("datalength:",data.length)
                for(let i=0;i<data.length;i++){
                    showData.push({
                        key:i,
                        name:data[i].title,
                        age:0,
                        address:'',
                        remark:data[i].url,
                        operate:"暂无"
                    })
                }
                return showData
            }).then(showData=>{
            this.setState({
                tData:showData
            })
        })
        }

    componentWillUnmount() {

        console.log("delete:",this.state.tData)
    }

    render() {
        const clomp=[{
                title:'姓名',
                width:'20%',
                dataIndex:'name',
            },{
                title:'年龄',
                width:'20%',
                dataIndex:'age',
            },{
                title:'住址',
                width:'20%',
                dataIndex:'address',
            },{
                title:'备注',
                width:'20%',
                dataIndex:'remark',
                render(website){
                    return <a href={website} target="_blank" rel="noopener noreferrer">进入</a>
                }
            },{
                title:'操作',
                width:'20%',
                dataIndex:'operate',
            }]

        const pagination={
            total:this.state.tData.length,
            showSizeChanger:true,
            onShowSizeChange(current,pageSize){
                console.log('Current: ',current,'; PageSize: ',pageSize);
            },
            onchange(current){
                console.log('Current: ',current);
            }

        }
        return (
            <Table columns={clomp} dataSource={this.state.tData} bordered pagination={pagination}/>
        );
    }
}

export default withRouter(myTable)