import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CapsServiceProvider } from './components/caps-context';
import CustomService from './services/custom-service';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const customService = new CustomService();

root.render(
    <Provider store={store}>
        <CapsServiceProvider value={customService}>
            <App />
        </CapsServiceProvider>
    </Provider>
);



