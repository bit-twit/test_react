import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hi from constructor.");

        this.state = {
            commits: []
        };
    }

    render() {
        return (<div>
                <h1>Detail</h1>
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                {this.state.commits.map((c, index) => (
                    <p key={index}>Some commit here !</p>
                ))}
                </div>
            </div>);
    }
}

export default Detail;
