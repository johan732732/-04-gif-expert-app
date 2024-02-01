import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on <AddCategory/>', () => {

  test('Must change the value of the textbox', () => {

    const inputText = "Dragon ball";
    
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputText } });

    expect(input.value).toBe(inputText);
  });

});
