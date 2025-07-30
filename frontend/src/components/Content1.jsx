import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [sqlData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/notes")
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="test">
      <h1>Users</h1>

      {sqlData.map((i, index) => (
        <li key={index}>
          <strong>Title:</strong> {i.title}
          <strong> Content:</strong> {i.content}
        </li>
      ))}
    </div>
  );
};

export default Users;
