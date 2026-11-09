import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";



// rq obrt:  React Router (o app inteiro dentro do BrowserRouter)
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// parte que liga as rotas ao endereco do navegador, sem essa parte aconteceria tal coisa
// o Routes e o Link não sabem qual é a página atual e o app dá erro ao abri