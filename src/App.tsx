import React, { FC, lazy } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import PageRouteWrapper from "./utils/jsHelpers/PageRouteWrapper";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const GamesPage = lazy(() => import("./pages/Games/GamesPage"));
const LeaderboardsPage = lazy(() => import("./pages/Leaderboards/LeaderboardsPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));

const App: FC = () => {
    return (
        <BrowserRouter>
            <main className="App" data-testid="App">
                {/* Navigation menu */}
                <Navbar />

                <Routes>
                    <Route element={<PageRouteWrapper />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/games" element={<GamesPage />} />
                        <Route path="/leaderboards" element={<LeaderboardsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
