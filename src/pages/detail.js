import React from 'react';
import ChanceSeed from 'chance';

const Chance = ChanceSeed();

class Detail extends React.Component {
    constructor() {
        super();
        console.log(Chance);
        console.log("Hi from constructor.");
    }

    buttonClicked() {
        console.log('Button was clicked!')
    }

    render() {
        return (<div>
                <p>This is React rendering HTML {this.props.message}!</p>
                <p>Hello {Chance.first()}!</p>
                <p>You're from {Chance.country({ full: true })}.</p>
                <button onClick={this.buttonClicked}>Meet Someone New</button>
            </div>);
    }
}

export default Detail;
