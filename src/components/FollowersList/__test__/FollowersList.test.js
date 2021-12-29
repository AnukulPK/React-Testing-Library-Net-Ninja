import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('Running before each test');
  });

  beforeAll(() => {
    console.log('running once before all tests');
  });

  afterEach(() => {
    console.log('running after each test');
  });

  afterAll(() => {
    console.log('running after all tests');
  });

  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it('should render multiple follower items', async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElement.length).toBe(5);
  //   });
});
