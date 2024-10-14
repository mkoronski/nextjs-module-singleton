import { configureStore } from '@reduxjs/toolkit';
import {TEAMS_STATE_NAME, teamsListReducer} from "@/app/store/teams/teams-list-slice";
import {MEMBERS_STATE_NAME, membersReducer} from "@/app/store/members/members-slice";

const store = configureStore({
    reducer: {
        [TEAMS_STATE_NAME]: teamsListReducer,
        [MEMBERS_STATE_NAME]: membersReducer
    },
});

export default store;
