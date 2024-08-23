// src/components/NoteForm.js
import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleLimit, setTitleLimit] = useState(50);

  const handleTitleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setTitleLimit(50 - value.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && body) {
      onAddNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
      setTitleLimit(50);
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <div >
        <h1 className="note-input__title">Buat catatan</h1>
        <p className="note-input__title__char-limit">
          Sisa karakter: {titleLimit}
        </p>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Judul catatan"
          required
        />
      </div>
      <div className="note-input__body">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Tuliskan Catatanmu"
          rows={9}
          required
        />
      </div>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;
