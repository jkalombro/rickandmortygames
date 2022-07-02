import { PageInfoModel } from "./pageinfo.model";

export interface CharactersApiResponse {
    info: PageInfoModel;
    results: CharacterModel[];
}

export interface CharacterModel {
    id: number;
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
    origin: object;
    location: object;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
