import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

const handleClickButton = () => {
    console.log(">>>> check state: " , {email, password, fullName, phoneNumber});
}

  return (
    <div className="user-form">
      <div>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>

        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div>
          <span>Phone number</span>
          <Input
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
        <div>
          <Button onClick={handleClickButton} type="primary">Submit</Button>
        </div> 
      </div>
    </div>
  );
};

export default UserForm;
