import ajax from "superagent";

const BASE_URL = 'https://api.github.com/repos/bit-twit';

const GitHubApi = () => {

    const fetchFeed = (baseUrl, repo, type, sucH, errH) => {
        const url = `${baseUrl}/${repo}/${type}`;
        console.log(`Fetching from: ${url}`);
        ajax.get(url)
            .end((error, response) => {
                    if (!error && response) {
                        sucH(response.body);
                    } else {
                        errH(error);
                    }
                }
            );
    };

    const fetchForks = (repo, sucH, errH) => {
        return fetchFeed(BASE_URL, repo, 'forks', sucH, errH);
    };

    const fetchPulls = (repo, sucH, errH) => {
        return fetchFeed(BASE_URL, repo, 'pulls', sucH, errH);
    };

    const fetchCommits = (repo, sucH, errH) => {
        return fetchFeed(BASE_URL, repo, 'commits', sucH, errH);
    };

    return {
        fetchForks,
        fetchPulls,
        fetchCommits
    }
};

export default GitHubApi;
