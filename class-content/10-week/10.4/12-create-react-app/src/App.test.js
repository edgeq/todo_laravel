import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders a parent component', () => {
  const div = document.createElement('div');
  let dom = ReactDOM.render(<App/>, div);
  // expect(dom.contains('child')).toBe(true);
});