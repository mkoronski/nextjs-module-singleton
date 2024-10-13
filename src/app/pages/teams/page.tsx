'use client';
import React from 'react';
import useTeamsList from "@/app/store/teams/use-teams-list";
import {Loader} from "@/app/components/loader";

const TeamsPage = () => {
    const {teams, status} = useTeamsList();

    return status === 'succeeded' ? (
        <div>
            <h1 className="p-6">Teams</h1>
            <div  className="mt-16 gap-8 flex flex-wrap">
                {teams.map(team => (
                    <a key={team.id} href="/"
                       className="space-y-2 p-6 pt-5">
                        <h3 className="text-lg">
                            {team.name}
                        </h3>
                        <div className="text-sm text-gray-500">
                            {team.location} {team.managerId}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    ) : <Loader/>;
};

export default TeamsPage;
