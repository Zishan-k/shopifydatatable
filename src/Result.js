import React from 'react';

import axios from 'axios';

export default class Result extends React.Component {
    state = {
        resultData: {
            "" : ""
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8088/shopifyData`)
            .then(res => {
                this.setState({resultData: res.data});
                console.log(this.state.resultData, "object")
            })
    }

    render() {
        return (
            <div>
               {this.state.resultData.products.map(v=>{console.log(v)})}
            </div>
        )
    }
}