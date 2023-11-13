import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
