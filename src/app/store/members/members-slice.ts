import {getMember, Member} from "@/app/api";
import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";

export const MEMBERS_STATE_NAME = 'members';

type MemberState = {
    [key: string]: {
        member: Member | undefined;
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
    };
};

interface StateWithMembers {
    [MEMBERS_STATE_NAME]: MemberState
}

export const fetchMember = createAsyncThunk<Member, string>(
    'members/fetchMember',
    async (memberId: string) => getMember(memberId)
);

const membersSlice = createSlice({
    name: 'members',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMember.pending, (state, { meta }) => {
                const memberId: string = meta.arg;
                return {
                    ...state,
                    [memberId]: {status: 'loading'}
                }
            })
            .addCase(fetchMember.fulfilled, (state, { meta, payload }) => {
                const memberId: string = meta.arg;
                return {
                    ...state,
                    [memberId]: {
                        member: payload,
                        status: 'succeeded'
                    }
                }
            });
    },
});

export const membersReducer = membersSlice.reducer;

export const selectMember = (memberId: string) =>
    createSelector(
        (state: StateWithMembers) => state.members,
        (members) => members[memberId]?.member
    );

export const selectMemberStatus = (memberId: string) =>
    createSelector(
        (state: StateWithMembers) => state.members,
        (members) => {
            const member = members[memberId];
            return member ? member.status : 'idle';
        }
    );
