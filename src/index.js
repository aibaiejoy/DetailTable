import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./index.css";
import DetailTable from "./DetailTable";
const dataSourceTest = {
  key: "1",
  name: "胡彦斌",
  age: 32,
  address: "西湖区湖底公园1号",
  age12: 12,
  age13: 13,
  age14: "1341",
  age15: 15
};

const columnsTest = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (key, record) => {
      return <Button>{record.name}</Button>;
    }
  },
  {
    title: "年龄1",
    dataIndex: "age",
    key: "age11",
    colspan: 1
  },
  {
    title: "年龄2",
    dataIndex: "age12",
    key: "age12",
    colspan: 3
  },
  {
    title: "年龄3",
    dataIndex: "age13",
    key: "age13"
  },
  {
    title: "年龄4",
    dataIndex: "age14",
    key: "age14"
  },
  {
    title: "年龄5",
    dataIndex: "age15",
    key: "age15"
  },
  {
    title: "住址1",
    dataIndex: "address2",
    key: "address2"
  },
  {
    title: "住址2",
    dataIndex: "address333",
    key: "address333"
  }
];

ReactDOM.render(
  <DetailTable
    dataSource={dataSourceTest}
    className={"custom-table"}
    columnCount={6}
    columns={columnsTest}
  />,
  document.getElementById("root")
);
