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
        getUsers()
            .then((response) => setUsers(response.data.results))
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a
                    // status code that falls out of the range of 2xx
                    message.error(
                        `data: ${error.response.data} \n` +
                            `status: ${error.response.status} \n` +
                            `headers: ${error.response.headers}`
                    );
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the
                    // browser and an instance of http.ClientRequest in node.js
                    message.error(`request: ${error.request}`);
                } else {
                    // Something happened in setting up the request that
                    // triggered an Error
                    message.error(`${error.message}`);
                }
            });
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
