import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from "./App";
import { ContextProvider } from './contexts/ContextProvider';
import { UserProvider } from './contexts/UserContext';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter >
          <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
