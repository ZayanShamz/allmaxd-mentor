import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter } from 'react-router-dom'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </HashRouter>
)
