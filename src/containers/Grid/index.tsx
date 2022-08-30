import React from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { Table, Space, Button, Tag } from "antd";
import type { TableProps } from "antd";
import type { SorterResult } from "antd/es/table/interface";

import iUser from "../../types/user";
import { iParams } from "../../types/urlParams";

function Grid(props: { users: iUser[] }): JSX.Element {
    const { users } = props;
    const [urlParams, setUrlParams] = useSearchParams();
    let pageSize = urlParams.get("size") ? Number(urlParams.get("size")) : 20;
    let pageNumber = urlParams.get("page") ? Number(urlParams.get("page")) : 1;
    let sortedColumn = urlParams.get("sort");
    let titleFilters = urlParams.get("titleFilters")?.split(",");

    const handleTableChange: TableProps<iUser>["onChange"] = (
        pagination,
        filters,
        sorter
    ) => {
        pageSize = pagination.pageSize ? pagination.pageSize : 20;
        pageNumber = pagination.current ? pagination.current : 1;
        const tempSorter = sorter as SorterResult<iUser>;
        sortedColumn = String(tempSorter.column ? tempSorter.column.key : null);
        titleFilters = filters.name?.map((item) => String(item));
        const titleFiltersString = filters.name?.join(",");
        let params: iParams = {
            page: String(pageNumber),
            size: String(pageSize),
        };
        if (titleFiltersString) {
            params = { ...params, titleFilters: titleFiltersString };
        }
        if (sortedColumn !== "null") {
            params = { ...params, sort: sortedColumn };
        }
        setUrlParams(params as URLSearchParamsInit);
    };

    const resetOrder: () => void = () => {
        const titleFiltersString = titleFilters?.join(",");
        let params: iParams = {
            page: String(pageNumber),
            size: String(pageSize),
        };
        if (titleFiltersString) {
            params = { ...params, titleFilters: titleFiltersString };
        }
        sortedColumn = null;
        setUrlParams(params as URLSearchParamsInit);
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
            filters: [
                {
                    text: "Miss",
                    value: "Miss",
                },
                {
                    text: "Mr",
                    value: "Mr",
                },
                {
                    text: "Mrs",
                    value: "Mrs",
                },
                {
                    text: "Ms",
                    value: "Ms",
                },
            ],
            onFilter: (value: string | number | boolean, user: iUser) => {
                const { title } = user.name;
                return title === value;
            },
            filteredValue: titleFilters,
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
        <>
            <Space size={[0, 16]} style={{ marginBottom: 16 }}>
                <Button
                    onClick={resetOrder}
                    style={{ marginRight: 20 }}
                    name="resetOrder"
                    disabled={sortedColumn === null}
                >
                    Reset Order
                </Button>
                {sortedColumn !== null ? (
                    <Tag color="green">Sorted by {sortedColumn}</Tag>
                ) : null}
                {titleFilters?.map((title: string) => (
                    <Tag key={title} color="blue">
                        {title}
                    </Tag>
                ))}
            </Space>
            <Table
                dataSource={users}
                columns={columns}
                loading={users.length === 0}
                rowKey={(record) => record.email}
                onChange={handleTableChange}
                pagination={{
                    pageSize,
                    current: pageNumber,
                }}
            />
        </>
    );
}

export default Grid;
