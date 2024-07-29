import { Space, Table, Tag } from "antd";

const UserTable = (props) => {

  const { dataUsers } = props;

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

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
