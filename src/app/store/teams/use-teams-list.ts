import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTeams,
    selectAllTeams,
    selectHasTeamsFailed,
    selectTeamsStatus,
} from "@/app/store/teams/teams-list-slice";
import store from "@/app/store/store";

const useTeamsList = () => {
    const dispatch = useDispatch<typeof store.dispatch>();
    const teams = useSelector(selectAllTeams);
    const teamsStatus = useSelector(selectTeamsStatus);
    const hasTeamsError = useSelector(selectHasTeamsFailed);

    useEffect(() => {
        if (teamsStatus === 'idle') {
            dispatch(fetchTeams());
        }
        return () => {
            // dispatch(clearTeams());
        }
    }, [teamsStatus, dispatch]);

    return {
        teams,
        status: teamsStatus,
        hasError: hasTeamsError,
    };
};

export default useTeamsList;
