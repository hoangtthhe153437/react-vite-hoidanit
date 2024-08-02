import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../services/api.service";
import { Button, notification } from "antd";

const BookPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <h1>Book Table</h1>
        <Button type="primary">Create book</Button>
      </div>
      <BookTable
      />
    </>
  );
};

export default BookPage;
