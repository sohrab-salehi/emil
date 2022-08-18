import { Table } from "antd";
import React, { useEffect } from "react";
import getUsers from "../../api/user";

function Grid(): JSX.Element {
    useEffect(() => {
        getUsers().then((response) => console.log(response));
    }, []);

    return <Table />;
}

export default Grid;
