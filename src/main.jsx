import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TamboProvider } from '@tambo-ai/react'
import { components } from './tambo/registry'

createRoot(document.getElementById('root')).render(
  <TamboProvider 
    apiKey={import.meta.env.VITE_TAMBO_API_KEY}
    components={components}
    >
    <App />
    </TamboProvider>
)
console.log("TAMBO KEY:", import.meta.env.VITE_TAMBO_API_KEY);