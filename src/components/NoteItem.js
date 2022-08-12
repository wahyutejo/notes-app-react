import React from "react";
import NoteItemButton from "./NoteItemButton";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, toList }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h4 className="note-item__title">{title}</h4>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>

      <NoteItemButton id={id} onDelete={onDelete} archived={archived} onArchive={onArchive} toList={toList}/>
    </div>
  );
}

export default NoteItem;
