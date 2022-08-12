import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      char: 25,
      count: 25,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const inputLen = event.target.value.length;
    const maxChar = this.state.char;
    const result = maxChar - inputLen;
    if (result === -1) {
      event.preventDefault();
      return;
    }
    this.setState({
      title: event.target.value,
      count: result,
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <>
        <form className="note-input" onSubmit={this.onSubmitHandler}>
          <h5 className="note-input__title">Buat Catatan Baru</h5>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.count}</p>
          <input type="text" placeholder="judul" value={this.state.title} onChange={this.onTitleChangeHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tulis catatan Anda disini..." value={this.state.body} onChange={this.onBodyChangeHandler} />
          <button type="submit">Buat</button>
        </form>
      </>
    );
  }
}

export default NoteInput;
