import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Salvas from "./pages/Salvas";
import estilo from "./styles.module.css";

// ============================== IMPORTE ============================================


// rq: componente próprio com props (quantidade)
function Menu({ quantidade }) {
  return (
    <nav className={estilo.menu}>
      <Link to="/">Buscar</Link>
      <Link to="/salvas">Salvas ({quantidade})</Link>
    </nav>
  );
}
// rq:  da erro (rota 404)
function PaginaErro() {
  return (
    <div>
      <p className={estilo.numero}>404</p>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </div>
  );
}
function App() {
  // requisito: useState, e os dados vêm do localStorage (sobrevivem ao F5)
  const [salvas, setSalvas] = useState(() => JSON.parse(localStorage.getItem("salvas")) || []);
  useEffect(() => {
    localStorage.setItem("salvas", JSON.stringify(salvas));
  }, [salvas]);
  // rq: criar, editar e remover

  // as skills ficam aqui no App
  //  porque a busca, a lista salva e o menu usam os mesmos dado
  // se fosse fora cada precisaria do proprio lsrt
  function salvar(skill) {
    setSalvas([...salvas, skill]);
  }
  function criar(dados) {
    setSalvas([...salvas, { id: Date.now(), estrelas: 0, ...dados }]);
  }
  function editar(id, dados) {
    setSalvas(salvas.map((s) => (s.id === id ? { ...s, ...dados } : s)));
  }
  function apagar(id) {
    setSalvas(salvas.filter((s) => s.id !== id));
  }
  return (
    <div>
      <Menu quantidade={salvas.length} />
      <div className={estilo.pagina}>
        {/* requisito: três rotas, a última é a página de erro */}
        <Routes>
          <Route path="/" element={<Inicio salvas={salvas} onSalvar={salvar} />} />
          <Route path="/salvas" element={<Salvas salvas={salvas} onCriar={criar} onEditar={editar} onApagar={apagar} />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
