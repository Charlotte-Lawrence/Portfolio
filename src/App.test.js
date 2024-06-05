import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders Header component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders About section', () => {
  render(<App />);
  const aboutHeading = screen.getByRole('heading', { name: /about me/i });
  expect(aboutHeading).toBeInTheDocument();
});

test('renders Projects section', () => {
  render(<App />);
  const projectsHeading = screen.getByRole('heading', { name: /projects/i });
  expect(projectsHeading).toBeInTheDocument();
});

test('renders Contact section', () => {
  render(<App />);
  const contactHeading = screen.getByRole('heading', { name: /contact/i });
  expect(contactHeading).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  const footerElement = screen.getByRole('footer');
  expect(footerElement).toBeInTheDocument();
});
