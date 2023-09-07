import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Menu></Menu>
    <Footer></Footer>
  </div>
);
