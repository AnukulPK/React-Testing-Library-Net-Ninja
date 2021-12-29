import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetToDo = jest.fn();

describe('AddInput', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('sshould be able to type into input', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go Grocer Shopping' } });
    expect(inputElement.value).toBe('Go Grocer Shopping');
  });

  it('sshould have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/ });
    fireEvent.change(inputElement, { target: { value: 'Go Grocer Shopping' } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
