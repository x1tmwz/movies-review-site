import React from 'react';
import HomePage from './HomePage';
import Header from './Headr'
import {Provider} from 'react-redux';
import configStore from '../store/configstore';

const store = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
            <Header />
            <HomePage />
            </div>
          
        </Provider>
    );
}
export default App;