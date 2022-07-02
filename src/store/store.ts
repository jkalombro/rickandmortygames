import { configureStore } from "@reduxjs/toolkit";
import charactersApi from "./services/charactersApi";

const store = configureStore({
    reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(charactersApi.middleware),
});

export default store;
