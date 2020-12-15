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
               <table border={2}>
                   <thead>
                   <th>ID</th>
                   <th>Title</th>
                   <th>Body</th>
                   <th>Vendor</th>
                   <th>Product Type</th>
                   <th>Created at</th>
                   <th>Handle</th>
                   <th>Updated at</th>
                   <th>Published at</th>
                   <th>template Sufffix</th>
                   <th>Status</th>
                   <th>Published Scope</th>
                   <th>Tags</th>
                   <th>admin_graphql_api_id</th>
                   <th>varient</th>

                   </thead>
                   <tbody>
                       {this.state.resultData && this.state.resultData.map((product) => (
                         <tr>
                             <td>{product.id}</td>
                             <td>{product.title}</td>
                             <td>{product.body_html}</td>
                             <td>{product.vendor}</td>
                             <td>{product.product_type}</td>
                             <td>{product.created_at}</td>
                             <td>{product.handle}</td>
                             <td>{product.updated_at}</td>
                             <td>{product.published_at}</td>
                             <td>{product.template_suffix}</td>
                             <td>{product.status}</td>
                             <td>{product.published_scope}</td>
                             <td>{product.tags}</td>
                             <td>{product.admin_graphql_api_id}</td>
                             <td>{product.variants}</td>

                         </tr>
                       ))}
                   </tbody>
               </table>
            </div>
        )
    }
}