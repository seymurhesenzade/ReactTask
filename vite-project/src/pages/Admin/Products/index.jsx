import React, { useEffect, useState } from "react";
import { deleteDataById, getAllData } from "../../../api";
import { endpoints } from "../../../api/constant";
import { Button, Table, Tooltip } from "antd";


const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
  },
  {
    title: "TITLE",
    dataIndex: "title",
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    render: (text, record) => {
      return (
        <Tooltip placement="top" title={text}>
          {text.slice(0, 20)}. . .
        </Tooltip>
      );
    },
  },
  {
    title: "PRICE",
    dataIndex: "price",
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "CATEGORY",
    dataIndex: "category",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "IMAGE",
    dataIndex: "image",
    render: (text, record) => {
      return <img src={text} width={50} height={50} />;
    },
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "Delete",
    dataIndex: "delete",
    render: (text, record) => {
      return (
        <Button danger onClick={() => handleDelete(record.id)}>
          DELETE
        </Button>
      );
    },
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const handleDelete = (id) => {
    deleteDataById(endpoints.products, id).then((res) => {
      getAllData(endpoints.products).then((res) => {
          setProducts(res.data);
        });
    });
  };

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData(endpoints.products).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
        onChange={onChange}
        pagination={{ pageSize: "5" }}
        rowKey={"id"}
      />
    </>
  );
};
export default AdminProducts;
