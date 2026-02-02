import React from "react";
import { useState } from "react";
import API from "../api/noteApi";

const NoteForm = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", { title, content });
    setTitle("");
    setContent("");
    refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
