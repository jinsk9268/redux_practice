import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// redux 에서 가져오기
import { createStore } from 'redux';
import rootReducer from './Redux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  // APP component가 redux에 접근할 수 있게
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
