import React from 'react'
import { Card } from 'antd';
import 'whatwg-fetch'

export default class myCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('../mokes/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) =>{
            return res.json() })
            .then((data)=>{
                console.log(data)
            this.setState({lists:data})
        })
    }

    componentDidMount() {
        this.fetchFn()
    }

    render() {
        return (
            <Card title="资源导航" style={{ width: "800px", margin: "0 auto" }} className="animated zoomIn">
                {
                    this.state.lists.map((e,k) => {
                        return (
                            <p className="doclist" key={k}><a href={ e.url } rel="noopener noreferrer" target="_blank">{ e.title }</a></p>
                        )
                    })
                }
            </Card>
        )
    }
}
