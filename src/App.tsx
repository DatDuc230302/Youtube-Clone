import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAAOWjGWZzwJpvriAtNCnR-r2LWQs53djk',
    authDomain: 'fir-d19ed.firebaseapp.com',
    projectId: 'fir-d19ed',
    storageBucket: 'fir-d19ed.appspot.com',
    messagingSenderId: '78771670649',
    appId: '1:78771670649:web:a5007255c8c1f84d908ea8',
    measurementId: 'G-PDY5M7WVJH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;
                        let Layout: any;
                        !!item.layout ? (Layout = item.layout) : (Layout = 'div');
                        return <Route path={item.path} key={index} element={<Layout>{Page}</Layout>} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
