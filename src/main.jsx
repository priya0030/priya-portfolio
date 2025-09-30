import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import '@zumer/orbit/dist/orbit.css';
import '@zumer/orbit/dist/orbit.min.js';


createRoot(document.getElementById('root')).render(<App />)
