import React from "react";
import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Header from "./pages/Header";
import Footer from "./pages/Footer"
import Entry from "./pages/Entry"
import Contact from "./pages/Contact"
import App from "./App";
const root = createRoot(document.getElementById("root"));

root.render(
  <Temporary />
)
function Temporary(){
   return (
    <App />  
  )
}
