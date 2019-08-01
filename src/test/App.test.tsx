import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyManager from '../currencyConvert/CurrencyManager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrencyManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});
