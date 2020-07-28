import Link from 'next/link';
import { Component } from 'react';
// import axios from 'axios';

class Index extends Component{
    state=({
        isvisiable:false
    })
    componentDidMount(){
        this.isWeiXin();
    }
    isWeiXin(){
        if(navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1){
            this.setState({
                isvisiable:true
            })
        }else{
            this.setState({
                isvisiable:false
            })
        }
    }
    render(){
        return (
            <div className="relative ">
                Next React Taiwindcss Template 
            </div>
        )
    }
}

export default Index