import { configureStore } from '@reduxjs/toolkit';
import {TEAMS_STATE_NAME, teamsListReducer} from "@/app/store/teams/teams-list-slice";

const store = configureStore({
    reducer: {
        [TEAMS_STATE_NAME]: teamsListReducer,
    },
});

export default store;
