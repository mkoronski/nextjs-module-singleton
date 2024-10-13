import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTeamsList, Team } from "@/app/api";

export const TEAMS_STATE_NAME = 'teamsList';

interface TeamsListState {
    teams: Team[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface StateWithTeams {
    [TEAMS_STATE_NAME]: TeamsListState;
}

const initialState: TeamsListState = {
    teams: [],
    status: 'idle',
}

export const fetchTeams = createAsyncThunk<Team[]>(
    'teams/fetchTeams',
    async () => getTeamsList()
);

const teamsListSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        clearTeams: (state) => {
            state.teams = [];
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeams.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teams = action.payload;
            })
            .addCase(fetchTeams.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const teamsListReducer = teamsListSlice.reducer;
export const clearTeams = teamsListSlice.actions.clearTeams;

export const selectAllTeams = (state: StateWithTeams) => state[TEAMS_STATE_NAME].teams;
export const selectTeamsStatus = (state: StateWithTeams) => state[TEAMS_STATE_NAME].status;
export const selectHasTeamsFailed = (state: StateWithTeams) => state[TEAMS_STATE_NAME].status === 'failed';
