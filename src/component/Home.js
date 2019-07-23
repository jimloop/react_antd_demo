import React,{Component} from "react";
import axios from 'axios';
class Home extends Component{

    constructor() {
        super();
        this.state = {
            list: []
        }
        this.requestData=this.requestData.bind(this);
    }

    componentDidMount() {
        this.requestData();
    }

    requestData(){
        let api='http://a.itying.com/api/productlist';
        axios.get(api)
            .then((res)=>{
                console.log(res);
                this.setState({
                    list:res.data.result
                })
            }).catch((e)=>{
                console.log(e);
        })
    }

    render(){
        return (
            <div className="home">
                {
                    this.state.list.map((value,key)=>{
                       return (
                           <div className="item" key={key}>
                               <h3 className="item_cate">{value.title}</h3>
                               <ul className="item_list">
                                   {
                                       value.list.map((v,k)=>{
                                           return (<li key={k}>{v.title}</li>)
                                       })

                                   }
                               </ul>
                           </div>
                       )
                    })

                }
            </div>
    )
    }
}

export default Home;