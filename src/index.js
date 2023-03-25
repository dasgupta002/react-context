import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import ProviderWrapper from './context/store'
import './root.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ProviderWrapper>
        <App />
    </ProviderWrapper>
)