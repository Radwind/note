import React, { Component } from 'react';
import '../style/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      option: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title && this.state.text) {
      this.props.onAdd(this.state.title, this.state.text);
      this.setState({ title: '', text: '' });
    }
    this.refs.mainForm.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form
        className="col-sm-10 col-md-3 main-form"
        onSubmit={this.handleSubmit}
        ref="mainForm"
      >
        <div className="form-group">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Enter title"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="text"
            className="form-control"
            rows="3"
            placeholder="Enter text"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="option"
              id="radios1"
              value="firebase"
              onChange={this.handleChange}
            />
            Save in Firebase
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="option"
              id="radios2"
              value="localStorage"
              onChange={this.handleChange}
            />
            Save in Local Storage
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
