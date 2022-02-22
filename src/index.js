import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';

store.dispatch({
    type: 'SET_SORT_BY',
    payload: 'price',
});

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="*" element={<App />} />
            </Routes>
        </Router>
    </Provider>,

    document.getElementById('root')
);
