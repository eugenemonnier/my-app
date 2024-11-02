import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamList from './TeamList';

test('renders all team members', () => {
  render(<TeamList />);
  const names = ['Jiayang Hu', 'Eugene Monnier', 'Priyadarshini Raj'];

  names.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('renders "View Profile" buttons for each team member', () => {
  render(<TeamList />);
  const buttons = screen.getAllByText(/View Profile/i);
  expect(buttons).toHaveLength(3);
});
