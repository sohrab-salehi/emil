import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { message } from "antd";

import getUsers from "./api/user";
import MainLayout from "./components/layouts/MainLayout";
import Grid from "./containers/Grid";
import iUser from "./types/user";
import "./App.css";

function App(): JSX.Element {
    const [users, setUsers] = useState<iUser[]>([]);

    useEffect(() => {
        getUsers().then(
            (response) => setUsers(response.data.results),
            (error) => message.error(error.message)
        );
    }, []);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Grid users={users} />} />
                <Route path="/grid" element={<Grid users={users} />} />
            </Route>
        </Routes>
    );
}

export default App;
