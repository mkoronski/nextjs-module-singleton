'use client';
import React from 'react';
import useTeamsList from "@/app/store/teams/use-teams-list";
import {Loader} from "@/app/components/loader";
import {TeamTile} from "@/app/pages/teams/team-tile";

const TeamsPage = () => {
    const {teams, status} = useTeamsList();

    return status === 'succeeded' ? (
        <div>
            <h1 className="p-6">Teams</h1>
            <div  className="mt-16 gap-8 flex flex-wrap">
                {teams.map(team => (
                    <TeamTile key={team.id} team={team}></TeamTile>
                ))}
            </div>
        </div>
    ) : <Loader/>;
};

export default TeamsPage;
