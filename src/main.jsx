import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NftContextProvider from './contexts/NftContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NftContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </NftContextProvider>
)
