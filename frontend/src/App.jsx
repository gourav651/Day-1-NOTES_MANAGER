import React from "react";
import { useState } from "react";
import API from "./api/noteApi";
import { useEffect } from "react";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <NoteForm refresh={fetchNotes}/>
      <NoteList notes={notes} refresh={fetchNotes}/>
    </>
  )
};

export default App;