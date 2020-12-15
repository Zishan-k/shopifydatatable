import React from 'react';

import axios from 'axios';

export default class Result extends React.Component {
    state = {
        resultData: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8088/shopifyData`)
            .then(res => {
                this.setState({resultData: res.data.products});
            })
    }

    render() {
        console.log('data is',this.state.resultData);
        return (
            <div>
               <table>
                   <thead>
                   <th>ID</th>
                   </thead>
                   <tbody>
                       {this.state.resultData && this.state.resultData.map((product) => (
                         <tr>
                             <td>{product.id}</td>
                         </tr>
                       ))}

                   </tbody>
               </table>
            </div>
        )
    }
}