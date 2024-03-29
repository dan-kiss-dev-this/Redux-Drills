import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import todoApp from '../src/components/reducers';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../src/components/actions';
const store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// stop listening to state updates
unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
