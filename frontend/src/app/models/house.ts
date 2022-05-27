import {Criteria} from "./criteria";

import { User } from "./user";

export interface House {
  id?: number;
  adress:string;
  bedrooms:number;
  city:string;
  description:string;
  type:string;
  idUser?:number;
  idCriterias: number[];
  criterias?: Criteria[];
  id_house: number;
  user: User
}
