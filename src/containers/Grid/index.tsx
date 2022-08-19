import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Table } from "antd";
import type { TableProps } from "antd";
import type { SorterResult } from "antd/es/table/interface";

import iUser from "../../types/user";

function Grid(props: { users: iUser[] }): JSX.Element {
    const { users } = props;
    const [urlParams, setUrlParams] = useSearchParams();
    const [pageSize, setPageSize] = useState(20);
    const [pageNumber, setPageNumber] = useState(1);
    const [sortedColumn, setSortedColumn] = useState("");

    useEffect(() => {
        const tempPageSize = Number(urlParams.get("size"));
        const tempPageNumber = Number(urlParams.get("page"));
        const tempSortedColumn = urlParams.get("sort");
        if (tempPageSize) {
            setPageSize(tempPageSize);
        }
        if (tempPageNumber) {
            setPageNumber(Number(tempPageNumber));
        }
        if (tempSortedColumn) {
            setSortedColumn(tempSortedColumn);
        }
    }, [urlParams]);

    const handleSortChange: TableProps<iUser>["onChange"] = (
        pagination,
        filters,
        sorter
    ) => {
        const pageString = String(pagination.current);
        const sizeString = String(pagination.pageSize);
        const tempSorter = sorter as SorterResult<iUser>;
        const sortString = String(tempSorter.columnKey);
        setUrlParams({
            page: pageString,
            size: sizeString,
            sort: sortString,
        });
    };

    const columns = [
        {
            title: "Name",
            key: "name",
            sorter: (user1: iUser, user2: iUser) => {
                const [first1, last1] = [user1.name.first, user1.name.last];
                const [first2, last2] = [user2.name.first, user2.name.last];
                return `${first1} ${last1}`.localeCompare(`${first2} ${last2}`);
            },
            render: (user: iUser) => {
                const { title, first, last } = user.name;
                return `${title}. ${first} ${last}`;
            },
            sortOrder:
                sortedColumn === "name" ? ("ascend" as const) : undefined,
        },
        {
            title: "Username",
            key: "username",
            sorter: (user1: iUser, user2: iUser) => {
                return user1.login.username.localeCompare(user2.login.username);
            },
            render: (user: iUser) => user.login.username,
            sortOrder:
                sortedColumn === "username" ? ("ascend" as const) : undefined,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            sorter: (user1: iUser, user2: iUser) => {
                return user1.email.localeCompare(user2.email);
            },
            sortOrder:
                sortedColumn === "email" ? ("ascend" as const) : undefined,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            sorter: (user1: iUser, user2: iUser) => {
                return user1.phone.localeCompare(user2.phone);
            },
            sortOrder:
                sortedColumn === "phone" ? ("ascend" as const) : undefined,
        },
        {
            title: "Nationality",
            dataIndex: "nat",
            key: "nat",
            sorter: (user1: iUser, user2: iUser) => {
                return user1.nat.localeCompare(user2.nat);
            },
            sortOrder: sortedColumn === "nat" ? ("ascend" as const) : undefined,
        },
    ];

    return (
        <Table
            dataSource={users}
            columns={columns}
            rowKey={(record) => record.email}
            onChange={handleSortChange}
            pagination={{
                pageSize,
                current: pageNumber,
            }}
        />
    );
}

export default Grid;
