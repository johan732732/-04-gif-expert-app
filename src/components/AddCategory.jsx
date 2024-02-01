import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newCategory = inputValue.trim();

    if (newCategory.length <= 1) return;

    setinputValue('');
    onNewCategory({ newCategory });
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Search gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
