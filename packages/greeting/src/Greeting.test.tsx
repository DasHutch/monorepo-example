import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greeting from './Greeting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greeting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
