import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockToDoFooter = ({ numberofIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberofIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', async () => {
    render(<MockToDoFooter numberofIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" singular when the number of incomplete tasks is one', async () => {
    render(<MockToDoFooter numberofIncompleteTasks={1} />);
    const paragraphElement = screen.getByText('1 task left');
    expect(paragraphElement).toBeInTheDocument();
  });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement).toBeTruthy();
  // });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement).toBeVisible();
  // });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement).toContainHTML('p');
  // });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement).toHaveTextContent('1 task left');
  // });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement).not.toBeFalsy();
  // });

  // it('should render "task" singular when the number of incomplete tasks is one', async () => {
  //   render(<MockToDoFooter numberofIncompleteTasks={1} />);
  //   const paragraphElement = screen.getByText('1 task left');
  //   expect(paragraphElement.textContent).toBe('1 task left');
  // });
});
