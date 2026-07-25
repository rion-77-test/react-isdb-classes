import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App.tsx'
import {Button as Btn} from './Button.tsx'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <Home />
    <Btn/>
  </StrictMode>,
)
