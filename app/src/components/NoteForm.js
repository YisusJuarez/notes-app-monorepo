import { useState, useRef } from "react";
import { Toggeable } from "./Toggeable";

export const NoteForm = ({  addNote, handleLogout }) => {
  const [newNote, setNewNote] = useState("");
  const toggeableRef = useRef();
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteObj = {
      title: "Hello note",
      body: newNote,
    };

    addNote(noteObj);
    setNewNote("")
    
    // accediento al toggle visisbily del componente toggeable
    toggeableRef.current.toggleVisibility();
  }



  return (
    <Toggeable buttonLabel="New Note" ref={toggeableRef}>
    <h3>Create a New Note</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button type="submit">Create New Note</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </Toggeable>
  );
};
