import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/detail/test_react">Test React</Link></li>
                    <li><Link to="/detail/poi-shift-column">POI shift column</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;
