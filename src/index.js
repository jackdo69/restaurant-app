import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//importing for react-router-dom
import { BrowserRouter } from 'react-router-dom';

//importing for react-redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import food from './store/reducers/food';
import order from './store/reducers/order'


const rootReducer = combineReducers({
    food: food,
    order: order
})
const store = createStore(rootReducer);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
