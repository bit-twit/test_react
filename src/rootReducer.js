import { combineReducers } from "redux";

import repoCommitsReducers from "./middleware/repoCommitsReducers";
import repoForksReducers from "./middleware/repoForksReducers";
import repoPullsReducers from "./middleware/repoPullsReducers";

export default combineReducers({
    commits: repoCommitsReducers,
    forks: repoForksReducers,
    pulls: repoPullsReducers,
});
