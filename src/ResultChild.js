import React from 'react';

class ResultChild extends React.Component {
    render() {
        return <li>{this.props.label + " - " + this.props.value}</li>;
    }
}
export default ResultChild;