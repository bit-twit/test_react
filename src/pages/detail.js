import React from 'react';

class Detail extends React.Component {
    render() {
        return <p>This is React rendering HTML {this.props.message}!</p>;
    }
}

export default Detail;
