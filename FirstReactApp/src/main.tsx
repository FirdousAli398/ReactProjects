import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstApp from './FirstApp'
// import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstApp></FirstApp>
  </StrictMode>,
)
