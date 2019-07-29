import React from 'react';
import ajax from 'superagent';

const BASE_URL = 'https://api.github.com/repos/bit-twit';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hi from constructor.");

        this.state = {
            mode: 'commits',
            commits: [],
            forks: [],
            pulls: []
        };
    }

    fetchFeed(baseUrl, repo, type) {
        const url = `${baseUrl}/${repo}/${type}`;
        console.log(`Fetching from: ${url}`);
        ajax.get(url)
            .end((error, response) => {
                    if (!error && response) {
                        this.setState({ [type]: response.body });
                    } else {
                        console.log(`Error fetching ${type}`, error);
                    }
                }
            );
    }

    componentWillMount() {
        console.log('Component will mount');
        console.log(this.props);
        this.fetchFeed(BASE_URL, this.props.match.params.repo, 'commits');
        this.fetchFeed(BASE_URL, this.props.match.params.repo, 'forks');
        this.fetchFeed(BASE_URL, this.props.match.params.repo, 'pulls');
    }

    renderCommits() {
        return this.state.commits.map((commit, index) => {
            const author = commit.author ? commit.author.login : 'Anonymous';
            return (<p key={index}>
                <strong>{author}</strong>:
                <a href={commit.html_url}>{commit.commit.message}</a>.
            </p>);
        });
    }

    renderForks() {
        return this.state.forks.map((fork, index) => {
            const owner = fork.owner ? fork.owner.login : 'Anonymous';
            return (<p key={index}>
                <strong>{owner}</strong>: forked to
                <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
            </p>);
        });
    }

    renderPulls() {
        return this.state.pulls.map((pull, index) => {
            const user = pull.user ? pull.user.login : 'Anonymous';
            return (<p key={index}>
                <strong>{user}</strong>:
                <a href={pull.html_url}>{pull.body}</a>.
            </p>);
        });
    }

    selectMode(mode) {
        this.setState({mode});
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
            <button onClick={this.selectMode.bind(this, 'commits')}>Show Commits</button>
            <button onClick={this.selectMode.bind(this, 'forks')}>Show Forks</button>
            <button onClick={this.selectMode.bind(this, 'pulls')}>Show Pulls</button>
            {content}
        </div>);
    }
}

export default Detail;
