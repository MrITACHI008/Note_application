import React, { useEffect, useState } from "react";

import Container from "./components/Container/Container";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  const updateTitle = (textTitle, id) => {
    const tempTitle = [...notes];

    const index = tempTitle.findIndex((item) => item.id === id);
    if(index < 0) return;

    tempTitle[index].textTitle = textTitle;
    setNotes(tempTitle);
  }


  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Container
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
        updateTitle={updateTitle} 
      />
    </div>
  );
}

export default App;
