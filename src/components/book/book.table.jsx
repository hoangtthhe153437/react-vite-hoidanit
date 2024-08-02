import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBookAPI } from "../../services/api.service";

const BookTable = (props) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dataBooks, setDataBooks] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBooks();
  }, [current, pageSize]);

  const loadBooks = async () => {
    const res = await fetchAllBookAPI(current, pageSize);
    if (res.data && res.data.result) {
      setTotal(res.data.meta.total);
      setCurrent(res.data.meta.current);
      setDataBooks(res.data.result);
    } else {
      notification.error({
        message: "Lỗi",
        description: "Không thể lấy dữ liệu sách",
      });
    }
  };
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => <>{index + 1 + (current - 1) * pageSize}</>,
    },
    {
      title: "Id",
      key: "id",
      render: (_, record) => <a>{record._id}</a>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
      key: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      render: (text) => {
        if (text) {
          return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(text);
        }
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tác giả",
      key: "author",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange = async (pagination) => {
    //neu thay doi trang : current
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }

    //neu thay doi tong so phan tu : pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <Table
          columns={columns}
          dataSource={dataBooks}
          rowKey={"_id"}
          pagination={{
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => {
              return (
                <div>
                  {" "}
                  {range[0]}-{range[1]} trên {total} rows
                </div>
              );
            },
          }}
          onChange={onChange}
        />
        ;
      </div>
    </>
  );
};

export default BookTable;
