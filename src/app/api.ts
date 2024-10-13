import axios from "axios";

const API_URL = 'http://localhost:3001';

export interface Team {
    id: number;
    name: string;
    location: string;
    managerId: number;
}

export const getTeamsList = async () => {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
}

