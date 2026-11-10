import { useState } from "react";
import Cartao from "../components/Cartao/Cartao";
import estilo from "../styles.module.css";

// ============================== IMPORTE ============================================

function Inicio({ salvas, onSalvar }) {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  // parte op de  consumir API com fetch, tratamento carregando e erro
  async function buscar(e) {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    try {
      const url = "https://api.github.com/search/repositories?q=" + 
      encodeURIComponent("claude skills " + busca) 
      + "&sort=stars&per_page=10";


      // monta o endereço da busca no GitHub: "claude skills" 
      // + o que a pessoa digitou, top 10 por estrelas
      // para usar a  API do GitHub: tem o  "sort" ordena pelo valor no caso as estrelas
      // escolhido e "per_page" limita a quantidade de resultados


      const resposta = await fetch(url);
      const dados = await resposta.json();
      // lista criada a partir de um array de objetos
      setResultado(
        dados.items.map((r) => ({
          id: r.id,
          nome: r.name,
          descricao: r.description,
          link: r.html_url,
          estrelas: r.stargazers_count,
        })) // parte que vai mostrar tela 
      );
    } catch {
      setErro("Não deu para buscar. tente de novo em um minuto");
    }
    setCarregando(false);
  }







  return (
    <div>
      <h1>Skills do Claude</h1>
      <form className={estilo.busca} onSubmit={buscar}>
        <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="animation" />
        <button type="submit">Buscar</button>
      </form>
      {carregando && <p>Carregando...</p>}
      {erro && <p className={estilo.erro}>{erro}</p>}
      {/* requisito: map com key */}
      {resultado.map((skill) => (
        <Cartao key={skill.id} skill={skill} salvo={salvas.some((s) => s.id === skill.id)} onSalvar={onSalvar} />
      ))}
    </div>
  );
}
export default Inicio;
