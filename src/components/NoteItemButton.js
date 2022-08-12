import React from "react";

function NoteItemButton({ id, archived, onDelete, onArchive, toList }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      {archived ? (
        <button className="note-item__archive-button" onClick={() => toList(id)}>
          Pindahkan
        </button>
      ) : (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      )}
    </div>
  );
}

export default NoteItemButton;
