import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./auth/Keycloak.tsx";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 2 * 1000 * 60, // 2 minutes
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{responseMode: 'query'}}>
        <React.StrictMode>

          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>

        </React.StrictMode>,
    </ReactKeycloakProvider>
)
