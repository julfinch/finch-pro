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
registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIfkx0RWFab19xflBEal5ZVAciSV9jS31TdEVrWH1acnVXQWlUUQ==');

root.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter >
          <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
