import { Drawer, Button } from "antd";

const DetailUserDrawer = (props) => {
  const { open, onClose, dataDetail } = props;
  console.log(">>> check data ", dataDetail);
  return (
    <>
      <Drawer title="Basic Drawer" width={"40vw"} onClose={onClose} open={open}>
        <p>ID: {dataDetail?._id}</p>
        <p>Full Name: {dataDetail?.fullName}</p>
        <p>Email: {dataDetail?.email}</p>
        <div>
          <img
            height={100}
            width={150}
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              dataDetail?.avatar
            }`}
            alt=""
          />
        </div>

        <div style={{cursor:"pointer"}}>
          <label htmlFor="btnUpload">Upload Avatar</label>
          <input type="file" hidden name="" id="btnUpload" />
        </div>
          {/* <Button type="primary">Upload Avatar</Button> */}
      </Drawer>
    </>
  );
};

export default DetailUserDrawer;
