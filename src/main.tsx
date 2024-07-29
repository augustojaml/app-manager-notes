import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRoutes } from './app-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
