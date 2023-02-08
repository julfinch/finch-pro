import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from "./App";
import { ContextProvider } from './contexts/ContextProvider';
import { UserProvider } from './contexts/UserContext';
import { registerLicense } from '@syncfusion/ej2-base';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// Registering Syncfusion license key
registerLicense('@32302e342e30KS7S2eMQ3+qakLZr2uBDJ+cDSYTkaUFD9ecO9meSyfA=');

root.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter >
          <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
