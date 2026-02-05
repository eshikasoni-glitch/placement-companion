import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TamboClientProvider, TamboProvider } from '@tambo-ai/react'

createRoot(document.getElementById('root')).render(
  <TamboProvider>
    <TamboClientProvider>
    <App />
    </TamboClientProvider>
    </TamboProvider>
)
