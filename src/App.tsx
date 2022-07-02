import React, { FC } from "react";
import "./App.scss";
import charactersApi from "./store/services/charactersApi";

const App: FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = charactersApi.useGetCharactersQuery();
    return (
        <div className="App">
            <h1>Rick and Morty Game</h1>

            {isLoading && <h2>Loading...</h2>}
            {isFetching && <h2>Fetching...</h2>}
            {error && <h2>Something went wrong</h2>}
            {isSuccess && (
                <div>
                    {data.results?.map((chars, i) => {
                        return <div key={i}>{JSON.stringify(chars)}</div>;
                    })}
                </div>
            )}
        </div>
    );
};

export default App;
