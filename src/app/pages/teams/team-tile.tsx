import React from "react";
import {Team} from "@/app/api";
import useMember from "@/app/store/members/use-member";

type TeamTileArgs = {
    team: Team;
}

export const TeamTile = ({team}: TeamTileArgs) => {
    const member = useMember(`${team.managerId}`);

    return (
        <a href="/"
           className="space-y-2 p-6 pt-5">
            <h3 className="text-lg">
                {team.name}
            </h3>
            <div className="flex flex-col text-sm text-gray-500">
                <span>{team.location}</span>
                <span>{member?.member?.firstName} {member?.member?.lastName}</span>
            </div>
        </a>
    )

}
