import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
  
    useEffect(() => {
      loadUser();
    },[]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
      }
    return (
            <div>
                <UserForm loadUser={loadUser}/>
                <UserTable loadUser={loadUser} dataUsers={dataUsers}/>
            </div>
    );
}

export default UserPage;