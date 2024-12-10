import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { StrictMode } from 'react'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster richColors theme='light' position='top-right'/>
  </StrictMode>,
)
