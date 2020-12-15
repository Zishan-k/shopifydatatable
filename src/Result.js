import React from 'react';

import axios from 'axios';

export default class Result extends React.Component {
    state = {
        resultData: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8088/shopifyData`)
            .then(res => {
                this.setState({ resultData: res.data });
            })
    }

    render() {
        return (
            <ul>
                { this.state.resultData}
            </ul>
        )
    }
}