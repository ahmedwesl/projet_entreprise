import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppDemo from "./AppDemo";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppDemo />
  </StrictMode>
);