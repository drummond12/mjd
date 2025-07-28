import React, { useState, useEffect } from "react";
import axios from "axios";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/notes")
      .then((response) => {
        console.log("API Response:", response.data);
        setNotes(response.data);
      })
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  return (
    <div className="test">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <strong>Title:</strong> {note.title} <br />
            <strong>Content:</strong> {note.content} <br />
            <small>Created at: {new Date(note.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
