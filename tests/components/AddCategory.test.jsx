import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on <AddCategory/>', () => {
  test('Must change the value of the textbox', () => {
    const inputText = 'Dragon ball';

    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputText } });

    expect(input.value).toBe(inputText);
  });

  test('Must call the onNewCategory callback if the input has a value', () => {
    const inputText = 'Dragon ball';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputText } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith({ newCategory: inputText });
  });

  test('Must not call the onNewCategory callback if the input has not a value', () => {

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();

  });
});
