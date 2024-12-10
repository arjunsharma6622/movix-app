import { MovieType } from "./movie";

export interface ListType {
    _id?:string;
    title?:string;
    type?:string;
    genre?:string | null;
    content?:string[];
    contentDetails ?: MovieType[];
}