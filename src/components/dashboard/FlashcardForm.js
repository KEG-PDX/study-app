import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { categories, subCategories } from './categoryData';

import FormControl from '../shared/FormControl';

export default class FlashcardForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  state = {
    category: { value: '', label: 'Category' },
    subCategory: { value: '', label: 'Select a category...' },
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

  handleCategoryChange = (category) => {
    this.setState({ category });
  };

  handleSubCategoryChange = (subCategory) => {
    this.setState({ subCategory: subCategory });
  };

  render() {
    const { question, answer, category, subCategory } = this.state;
    const filteredOptions = subCategories.filter(option => option.link == category.value);

    return (
      <div>
        <p>Add a flashcard:</p>
        <form onSubmit={this.handleSubmit}>
          <Select
            name="category"
            value={category}
            onChange={this.handleCategoryChange}
            options={categories}
          />
          <Select
            name="subCategory"
            value={subCategory}
            onChange={this.handleSubCategoryChange}
            options={filteredOptions}
          />
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
