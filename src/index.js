import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, {FirebaseContext } from './components/Firebase';
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk"
import ReduxPrimise from "redux-promise"
import {createStore,applyMiddleware} from "redux"
import {reducer} from "./redux/reducers"

const createStoreWithMiddleware=applyMiddleware(ReduxThunk,ReduxPrimise)(createStore)
ReactDOM.render(
<FirebaseContext.Provider value={new Firebase() }>
      <Provider store={createStoreWithMiddleware(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()

      )}>

          <App />
      </Provider>,

  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
