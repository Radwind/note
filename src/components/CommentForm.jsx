import React, { Component } from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.author && this.state.comment) {
      this.props.onAddComment(
        this.props.id,
        this.state.author,
        this.state.comment
      );
      this.setState({ author: '', comment: '' });
    }
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        ref="commentForm"
        className="comment-form"
      >
        <input
          onChange={this.handleChange}
          type="text"
          name="author"
          placeholder="Your name"
          className="form-control col-8"
        />
        <textarea
          onChange={this.handleChange}
          name="comment"
          className="form-control col-8"
          placeholder="Add comment"
        />
        <button type="submit" className="btn btn-primary btn-sm col-8">
          Add comment
        </button>
      </form>
    );
  }
}
