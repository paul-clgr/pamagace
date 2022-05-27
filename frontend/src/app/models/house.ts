import {Criteria} from "./criteria";

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
}
