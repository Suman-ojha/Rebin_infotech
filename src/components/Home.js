import React, { useState } from "react";
import data from "../Data1.json";
import { AiFillDelete } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState(data);

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedStatus(selectedValue);

    if (selectedValue === "inactive") {
      const filtered = data.filter((user) => !user.Status);
      setFilteredUsers(filtered);
    } else if (selectedValue === "active") {
      const filtered = data.filter((user) => user.Status);
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(data);
    }
  };

  const handleDelete = (id) => {
    const deleted = filteredUsers.filter((user) => user.id !== id);
    setFilteredUsers(deleted);
  };

  const handleDownload = () => {
    const jsonData = JSON.stringify(filteredUsers);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Data1.json";
    link.click();
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <a href="#" onClick={handleDownload}>
          Download Json file
        </a>
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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <th scope="row">
                  <img src={user.Avatar} className="p-1 bg-gray-300 rounded-full" alt={index} />
                </th>
                <td>{user?.first_name}</td>
                <td>{user?.last_name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.color}</td>
                <td>{user?.Status ? "Active" : "Inactive"}</td>
                <td>
                  <Button onClick={() => handleDelete(user.id)}>
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Home;
