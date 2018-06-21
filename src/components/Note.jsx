import React, { Component } from 'react';
import HeaderButtons from './HeaderBtns';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import '../style/Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      hidden: true
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentButton = this.handleCommentButton.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const text = this.refs.text.value;

    this.props.onEdit(this.props.id, title, text);
    this.setState({ editing: false });
  }

  handleCommentButton() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  renderNote() {
    const { title, text } = this.props;
    return (
      <div className="card text-white bg-success mb-3">
        <header className="card-header">
          <HeaderButtons Delete={this.handleDelete} Edit={this.handleEdit} />
          <h3>{title}</h3>
        </header>
        <main className="card-body" onDoubleClick={this.handleEdit}>
          <p className="card-text">{text}</p>
        </main>
        <footer className="card-footer">
          <div onClick={this.handleCommentButton} className="com-btn">
            Comments <i className="fas fa-list" /> ({this.props.comments.length})
          </div>

          {this.state.hidden ? (
            <p />
          ) : (
            <div className="com-block">
              <br />
              <hr />
              <CommentsList comments={this.props.comments} />
              <CommentForm
                onAddComment={this.props.onAddComment}
                id={this.props.id}
              />
            </div>
          )}
        </footer>
      </div>
    );
  }

  renderEdit() {
    const { title, text } = this.props;
    return (
      <div className="card text-white bg-success mb-3">
        <header className="card-header">
          <HeaderButtons Delete={this.handleDelete} Edit={this.handleEdit} />
          <h3>{title}</h3>
        </header>
        <main className="card-body">
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                ref="title"
                className="form-control"
                defaultValue={title}
                placeholder="Change title"
              />
            </div>
            <div className="form-group">
              <textarea
                ref="text"
                className="form-control"
                defaultValue={text}
                placeholder="Change text"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </main>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-10 note">
        {this.state.editing ? this.renderEdit() : this.renderNote()}
      </div>
    );
  }
}

export default Note;
