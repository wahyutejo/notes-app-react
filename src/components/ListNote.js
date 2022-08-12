import React from "react";
import NoteItem from "./NoteItem";

function ListNote({ data, onDelete, onArchive }) {
  return (
    <>
      {data.some((note) => note.archived === false) ? (
        data
          .filter((note) => note.archived === false)
          .map((note) => <NoteItem key={note.id + note.createdAt} id={note.id} title={note.title} date={note.createdAt} body={note.body} archived={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} />)
      ) : (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
    </>
  );
}

export default ListNote;
