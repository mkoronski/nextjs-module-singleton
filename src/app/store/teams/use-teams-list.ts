import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearTeams,
    fetchTeams,
    selectAllTeams,
    selectTeamsStatus,
} from "@/app/store/teams/teams-list-slice";
import store from "@/app/store/store";

const useTeamsList = () => {
    const dispatch = useDispatch<typeof store.dispatch>();
    const teams = useSelector(selectAllTeams);
    const teamsStatus = useSelector(selectTeamsStatus);

    useEffect(() => {
        if (teamsStatus === 'idle') {
            dispatch(fetchTeams());
        }
        return () => {
            dispatch(clearTeams());
        }
    }, []);

    return {
        teams,
        status: teamsStatus,
    };
};

export default useTeamsList;
