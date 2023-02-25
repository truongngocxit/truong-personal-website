import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import LoadingScreen from "./components/UI/LoadingScreen/LoadingScreen";
import { lazy, Suspense } from "react";
import { ThemeContextProvider } from "./contexts/themeContext";
import promisifiedTimeout from "./utils/promisifiedTimeout";
const App = lazy(async () => {
  await promisifiedTimeout(2.5);
  return import("./App");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>
);
