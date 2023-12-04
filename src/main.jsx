import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContext.jsx';
import LoadingContaxtProvider from './contexts/LoadingContaxt.jsx';
import EventContextProvider from './contexts/EventContext.jsx';
import VeanueContextProvideer from './contexts/VeanueContext.jsx';
import BoothContextProvider from './contexts/BoothContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingContaxtProvider>
      <AuthContextProvider>
        <VeanueContextProvideer>
          <EventContextProvider>
            <BoothContextProvider>
            <App />
            </BoothContextProvider>
          </EventContextProvider>
        </VeanueContextProvideer>
      </AuthContextProvider>
    </LoadingContaxtProvider>
  </React.StrictMode>
)
