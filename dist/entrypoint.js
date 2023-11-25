import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
// New as of React v18.x
const root = createRoot(rootElement);
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
