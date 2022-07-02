import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharactersApiResponse } from "../../models/characters.model";

const charactersApi = createApi({
    reducerPath: "charactersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    endpoints: builder => ({
        getCharacters: builder.query<CharactersApiResponse, void>({
            query: () => "/character",
        }),
    }),
});

export default charactersApi;
