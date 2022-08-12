import React from "react";
import { getInitialData } from "../utils/index";
import FindNote from "./FindNote";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      findData: "",
    };
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.toListHandler = this.toListHandler.bind(this);
    this.findHandler = this.findHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      const newId = prevState.data.length + 1;
      return {
        data: [...prevState.data, { id: newId, createdAt: +new Date(), title, body, archived: false }],
      };
    });
  }

  onDeleteHandler(id) {
    const data = this.state.data.filter((note) => note.id !== id);
    this.setState({ data });
  }

  onArchiveHandler(id) {
    const prevData = this.state.data.filter((note) => note.id !== id);
    const toArchived = this.state.data.filter((note) => note.id === id);
    toArchived[0].archived = true;
    toArchived.concat(prevData);
    return this.setState({ toArchived });
  }

  toListHandler(id) {
    const prevData = this.state.data.filter((note) => note.id !== id);
    const toListData = this.state.data.filter((note) => note.id === id);
    toListData[0].archived = false;
    toListData.concat(prevData);
    return this.setState({ toListData });
  }

  findHandler(event) {
    this.setState({ findData: event.target.value.toLowerCase() });
  }

  render() {
    return (
      <div>
        <header className="note-app__header">
          <h1>Catatan</h1>
          <input type="text" placeholder="Cari..." onChange={this.findHandler} />
        </header>
        <main className="note-app__body">
          <NoteInput addNotes={this.onAddNotesHandler} />
          <FindNote data={this.state.data} findNote={this.state.findData} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} toList={this.toListHandler} />
        </main>
      </div>
    );
  }
}

export default NoteApp;
