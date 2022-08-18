import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import "./App.css";
import Grid from "./containers/Grid";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Grid />} />
                <Route path="/grid" element={<Grid />} />
            </Route>
        </Routes>
    );
}

export default App;
