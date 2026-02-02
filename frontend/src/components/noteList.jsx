import React from "react";
import API from "../api/noteApi";

const NoteList = ({ notes, refresh }) => {
  const deleteNote = async (id) => {
    await API.delete(`/${id}`);
    refresh();
  };

  return (
    <>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default NoteList;
