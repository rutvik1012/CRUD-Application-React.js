import React, { useContext, useEffect, useState } from "react";
import UserContext from "../useContext/UserContext";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

// import {ContextProvider} from "../useContext/ContextProvider";

const User = () => {
  const navigate = useNavigate();
  const { userData, setUserData, setEditUser } = useContext(UserContext);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelet = (id) => {
    // alert('dt')
    const dt = userData.filter((item) => item.id != id);
    if (id > 0) {
      if (window.confirm(`sure to delete Id No. ${id} data`)) {
        setUserData(dt);
      }
    }
  };
 const filteredUsers = userData.filter(
  (User) =>
    (User.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (User.job?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    String(User.id).includes(searchTerm)
);


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
    <div className="bg-blue-50 h-[100vh]">
      <div className="text-center py-7">
        <h1 className="text-3xl font-bold text-blue-500">
          Job Entry Management
        </h1>
        <p className="text-gray-800 mt-2">
          Manage your users — Add, Edit, Search, and Delete records easily.
        </p>
      </div>
      <div className="">
        <div className="w-[90%] text-center m-auto bg-blue-100 mt-6">
          <div className="flex justify-around py-9 ">
            <div className="w-min h-min">
              <input
                className="border-2"
                type="text"
                placeholder="Search Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "10px", padding: "5px" }}
              />
            </div>
            <button className="btn btn-success" onClick={addUserBtn}>
              Add New User
            </button>
          </div>
          <table className="table table-striped w-fit ">
            <thead>
              <tr>
                <th scope="col" className="w-[15%]">Sr.No</th>
                <th scope="col" className="w-[35%]">Name</th>
                <th scope="col" className="w-[30%]">Job</th>
                <th scope="col" className="w-[20%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
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
    </div>
  );
};

export default User;
