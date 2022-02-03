import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState={
  cart:localStorage.getItem('mycart')!==undefined?JSON.parse(localStorage.getItem('mycart')):[]
} 

function reducer(state=initialState,action){
  switch(action.type){
    case 'addcart' :return{...state,cart:action.payload}
    default : return state;
  }
}

const store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
