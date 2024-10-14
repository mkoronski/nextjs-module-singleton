import axios from "axios";

const API_URL = 'http://localhost:3001';

export interface Team {
    id: number;
    name: string;
    location: string;
    managerId: number;
}

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    timezone: string;
    languages: string[];
    teamIds: number[];
}

export const getTeamsList = async () => {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
}

export const getMember = async (memberId: string): Promise<Member> => {
    const response = await axios.get(`${API_URL}/members/${memberId}`);
    return response.data;
}
