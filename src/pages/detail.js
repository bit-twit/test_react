import React from 'react';
import { connect } from "react-redux";
import { fetchCommits, fetchForks, fetchPulls } from "../middleware/repoActions";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hi from constructor.");

        this.state = {
            mode: 'commits'
        };
    }

    componentWillMount() {
        console.log('Component will mount');
        console.log(this.props);
        this.props.dispatch(fetchCommits(this.props.match.params.repo));
    }

    renderCommits() {
        return this.props.commits.map((commit, index) => {
            const author = commit.author ? commit.author.login : 'Anonymous';
            return (<p key={index}>
                <strong>{author}</strong>:
                <a href={commit.html_url}>{commit.commit.message}</a>.
            </p>);
        });
    }

    renderForks() {
        return this.props.forks.map((fork, index) => {
            const owner = fork.owner ? fork.owner.login : 'Anonymous';
            return (<p key={index}>
                <strong>{owner}</strong>: forked to
                <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
            </p>);
        });
    }

    renderPulls() {
        return this.props.pulls.map((pull, index) => {
            const user = pull.user ? pull.user.login : 'Anonymous';
            return (<p key={index}>
                <strong>{user}</strong>:
                <a href={pull.html_url}>{pull.body}</a>.
            </p>);
        });
    }

    selectMode(mode) {
        this.setState({mode});
        switch (mode) {
            case 'commits': this.props.dispatch(fetchCommits(this.props.match.params.repo)); break;
            case 'forks': this.props.dispatch(fetchForks(this.props.match.params.repo)); break;
            case 'pulls': this.props.dispatch(fetchPulls(this.props.match.params.repo)); break;
            default: break;
        }
    }

    render() {
        let content;
        if (this.state.mode === 'commits') {
            content = this.renderCommits();
        } else if (this.state.mode === 'forks') {
            content = this.renderForks();
        } else {
            content = this.renderPulls();
        }
        return (<div>
            <div><span>Loading: {this.props.loading}</span></div>
            <div><span>Status: {this.props.error}</span></div>
            <button onClick={this.selectMode.bind(this, 'commits')}>Show Commits</button>
            <button onClick={this.selectMode.bind(this, 'forks')}>Show Forks</button>
            <button onClick={this.selectMode.bind(this, 'pulls')}>Show Pulls</button>
            {content}
        </div>);
    }
}

const mapStateToProps = state => ({
    commits: state.commits.items,
    forks: state.forks.items,
    pulls: state.pulls.items,
    loading: state.commits.loading || state.forks.loading || state.pulls.loading,
    error: state.commits.error + state.forks.error + state.pulls.error
});

export default connect(mapStateToProps)(Detail);
