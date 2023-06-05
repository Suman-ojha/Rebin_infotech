import React, { useState } from "react";
import data from '../Data.json';
import { AiFillDelete } from 'react-icons/ai';

const Home = () => {
  const allUsers = data.users;
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState(allUsers);

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStatus(selectedValue);

    if (selectedValue === "all") {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter(user => user.status === selectedValue);
      setFilteredUsers(filtered);
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = allUsers.filter(user => user.id !== id);
    const updatedFilteredUsers = filteredUsers.filter(user => user.id !== id);

    setFilteredUsers(updatedFilteredUsers);

    if (selectedStatus === "all") {
      setFilteredUsers(updatedUsers);
    } else {
      const filtered = updatedUsers.filter(user => user.status === selectedStatus);
      setFilteredUsers(filtered);
    }
  };
  const handleDownload = () => {
    const jsonData = JSON.stringify(allUsers);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Data.json";
    link.click();
  };

  return (
    <div className="main-container">
      <div className="heading">
        <a href="#" onClick={handleDownload}>Download Json file</a>
        <p>Logout</p>
      </div>

      <div className="status">
        <select name="status" value={selectedStatus} onChange={handleStatusChange}>
          <option value="all">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">GENDER</th>
              <th scope="col">COLOR</th>
              <th scope="col">STATUS</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.color}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
