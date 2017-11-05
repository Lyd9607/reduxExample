import reducer from './reducer/main';
import Show from './components/Show';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

const store=createStore(reducer);

ReactDOM.render(
<Provider store={store}>
  <Show />
</Provider>,
document.getElementById('root')
);
