// src/App.js
import React, { useState } from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";
import { getInitialData } from "../utils";

function App() {
  const [notes, setNotes] = useState(getInitialData);
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="App">
      <header className="note-app__header">
        <h1>Aplikasi Catatan</h1>
        <SearchBar keyword={searchKeyword} onSearch={setSearchKeyword} />
      </header>
      <NoteForm onAddNote={addNote} />
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={filteredNotes.filter((note) => !note.archived)}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
        <h2>Catatan Arsip</h2>
        <NoteList
          notes={filteredNotes.filter((note) => note.archived)}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      </div>
    </div>
  );
}

export default App;
