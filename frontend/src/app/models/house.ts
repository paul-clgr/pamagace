import { User } from "./user";

export interface House {

    adress: string;
    bedrooms: number;
    city: string;
    description: string;
    id_house: number;
    type: string;
    user: User
}