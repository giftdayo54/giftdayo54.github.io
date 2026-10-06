import React from 'react';import {createRoot} from 'react-dom/client';import {HashRouter} from 'react-router-dom';
import App from './App.jsx';import './styles/globals.css';
// HashRouter keeps deep links working on GitHub Pages without server rewrites.
createRoot(document.getElementById('root')).render(<HashRouter><App/></HashRouter>);
