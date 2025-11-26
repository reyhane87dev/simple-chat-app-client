
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MainContextProvider } from "./context/MainContext.jsx";
import './styles/index.css'
import io from 'socket.io-client'

export const socket = io.connect("http://localhost:3000");

createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
