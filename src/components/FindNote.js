import React from "react";
import NoteItem from "./NoteItem";
import ListNote from "./ListNote";
import ArchivedNote from "./ArchivedNote";

function FindNote({ data, onDelete, onArchive, toList, findNote }) {
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {findNote === "" ? (
          <ListNote data={data} onDelete={onDelete} onArchive={onArchive} />
        ) : (
          data
            .filter((note) => note.archived === false && note.title.toLowerCase().split(" ").includes(findNote))
            .map((note) => <NoteItem key={note.id + note.createdAt} id={note.id} title={note.title} date={note.createdAt} body={note.body} archived={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} />)
        )}
      </div>

      <h2>Arsip Catatan</h2>

      <div className="notes-list">
        {findNote === "" ? (
          <ArchivedNote data={data} onDelete={onDelete} toList={toList} />
        ) : (
          data
            .filter((note) => note.archived === true && note.title.toLowerCase().split(" ").includes(findNote))
            .map((note) => <NoteItem key={note.id + note.createdAt} id={note.id} title={note.title} date={note.createdAt} body={note.body} archived={note.archived} onDelete={onDelete} toList={toList} {...note} />)
        )}
      </div>
    </div>
  );
}

export default FindNote;
