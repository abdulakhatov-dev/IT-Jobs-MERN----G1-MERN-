import { createRoot } from 'react-dom/client'
import './index.css'
import AppProvider from './providers'
import AppRouter from './router'


createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>
)
