import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "John Brown",
      fullName : 32,
      email : "New York No. 1 Lake Park",
    },
    {
      _id: "Jim Green",
      fullName : 42,
      email : "London No. 1 Lake Park",
    },
  ]);

  useEffect(() => {
    loadUser();
  },[]);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "full Name",
      dataIndex: "fullName",
    },
    {
      title: "email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  }

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
