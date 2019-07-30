import GithubApi from "../services/GithubApi";

const api = GithubApi();

export const FETCH_COMMITS_BEGIN   = 'FETCH_COMMITS_BEGIN';
export const FETCH_COMMITS_SUCCESS = 'FETCH_COMMITS_SUCCESS';
export const FETCH_COMMITS_FAILURE = 'FETCH_COMMITS_FAILURE';

export const FETCH_FORKS_BEGIN   = 'FETCH_FORKS_BEGIN';
export const FETCH_FORKS_SUCCESS = 'FETCH_FORKS_SUCCESS';
export const FETCH_FORKS_FAILURE = 'FETCH_FORKS_FAILURE';

export const FETCH_PULLS_BEGIN   = 'FETCH_PULLS_BEGIN';
export const FETCH_PULLS_SUCCESS = 'FETCH_PULLS_SUCCESS';
export const FETCH_PULLS_FAILURE = 'FETCH_PULLS_FAILURE';

export const fetchCommitsBegin = repo => ({
    type: FETCH_COMMITS_BEGIN,
    repo
});

export const fetchCommitsSuccess = commits => ({
    type: FETCH_COMMITS_SUCCESS,
    payload: { items: commits }
});

export const fetchCommitsFailure = error => ({
    type: FETCH_COMMITS_FAILURE,
    payload: { error }
});

export const fetchForksBegin = repo => ({
    type: FETCH_FORKS_BEGIN,
    repo
});

export const fetchForksSuccess = forks => ({
    type: FETCH_FORKS_SUCCESS,
    payload: { items: forks }
});

export const fetchForksFailure = error => ({
    type: FETCH_FORKS_FAILURE,
    payload: { error }
});

export const fetchPullsBegin = repo => ({
    type: FETCH_PULLS_BEGIN,
    repo
});

export const fetchPullsSuccess = pulls => ({
    type: FETCH_PULLS_SUCCESS,
    payload: { items: pulls }
});

export const fetchPullsFailure = error => ({
    type: FETCH_PULLS_FAILURE,
    payload: { error }
});

export function fetchCommits(repo) {
    console.log(`Fetch commits repo: ${repo}.`);
    return dispatch => {
        dispatch(fetchCommitsBegin(repo));
        return api.fetchCommits(repo,
            items => dispatch(fetchCommitsSuccess(items)),
            error => dispatch(fetchCommitsFailure(error))
            );
    };
}

export function fetchForks(repo) {
    console.log(`Fetch forks repo: ${repo}.`);
    return dispatch => {
        dispatch(fetchForksBegin(repo));
        return api.fetchForks(repo,
            items => dispatch(fetchForksSuccess(items)),
            error => dispatch(fetchForksFailure(error))
        );
    };
}

export function fetchPulls(repo) {
    console.log(`Fetch pulls repo: ${repo}.`);
    return dispatch => {
        dispatch(fetchPullsBegin(repo));
        return api.fetchPulls(repo,
            items => dispatch(fetchPullsSuccess(items)),
            error => dispatch(fetchPullsFailure(error))
        );
    };
}
