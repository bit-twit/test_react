import React from 'react';
import ChanceSeed from 'chance';

const Chance = ChanceSeed();

class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hi from constructor.");

        const people = [];
        for (let i = 0; i < 10; i++) {
            people.push({
                name: Chance.first(),
                country: Chance.country({ full: true })
            });
        }
        this.state = {
            message: props.message,
            people
        };
    }

    buttonClicked() {
        console.log('Button was clicked!');
        const newState = this.state.people;
        newState.push({
           name: Chance.first(),
           country: Chance.country({ full: true })
        });
        this.setState(newState);
    }

    render() {
        return (<div>
                <p>This is React rendering HTML {this.state.message}!</p>
                <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
                <br/>
                <div style={{maxHeight: '300px', overflow: 'auto'}}>
                {this.state.people.map((p, index) => (
                    <p key={index}>Hello nr. {index}, {p.name}, from whatever {p.country} !</p>
                ))}
                </div>
            </div>);
    }
}

export default Detail;
