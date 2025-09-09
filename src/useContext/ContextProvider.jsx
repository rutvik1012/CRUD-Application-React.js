import { Children, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Data } from "../Data/Data";
import App from "../App";
const ContextProvider = ({ children }) => {
  
  const[userData, setUserData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  useEffect(() => {
    setUserData(Data);
  }, []);
  return (
    <>
      <UserContext value={{ userData, setUserData, editUser, setEditUser }}>
        {children}
      </UserContext>{" "}
    </>
  );
};
export default ContextProvider;
