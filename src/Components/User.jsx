import React, { useContext, useEffect, useState } from "react";
import UserContext from "../useContext/UserContext";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

// import {ContextProvider} from "../useContext/ContextProvider";

const User = () => {
  const navigate = useNavigate();
  const { userData, setUserData, setEditUser } = useContext(UserContext);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleDelet = (id) => {
    // alert('dt')
    const dt = userData.filter((item) => item.id != id);
    if (id > 0) {
      if (window.confirm(`sure to delete Id No. ${id} data`)) {
        setUserData(dt);
      }
    }
  };

  const addUserBtn = () => {
    navigate("/AddUser");
  };

  const handleEdit = (item) => {
    setEditUser(item); // store selected user in context
    navigate("/AddUser");
  };
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <>
      <div className="mt-20">
        <div className="w-[70%] text-center m-auto  border-2 bg-blue-50">
          <button
            className="btn btn-success float-end me-2 mt-2"
            onClick={addUserBtn}
          >
            Add New User
          </button>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>
                    <div className="relative">
                      <button
                        className=" p-2 rounded hover:bg-gray-200"
                        onClick={() => toggleMenu(item.id)}
                      >
                        <BsThreeDotsVertical />
                      </button>
                      {openMenuId === item.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                          <button
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-green-600"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                            onClick={() => handleDelet(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
