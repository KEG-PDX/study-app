import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormControl from '../shared/FormControl';

export default class FlashcardForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    question: '',
    answer: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    if(!this.state.question || !this.state.answer) return;
    this.props.submit(this.state);
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.onCancel();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <div>
        <p>Add a flashcard:</p>
        <form onSubmit={this.handleSubmit}>
          <FormControl label="Question">
            <input name="question" value={question} onChange={this.handleChange}/>
          </FormControl>
          <FormControl label="Answer">
            <input name="answer" value={answer} onChange={this.handleChange}/>
          </FormControl>

          <button>Add</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}
