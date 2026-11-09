import { useState } from "react";
import estilo from "../../styles.module.css";
// requisito: componente próprio com props (inicial, textoBotao, onEnviar, onCancelar)
// requisito: formulário controlado (value + onChange em cada input)
function Formulario({ inicial, textoBotao, onEnviar, onCancelar }) {
  const [nome, setNome] = useState(inicial.nome);
  const [link, setLink] = useState(inicial.link);
  const [descricao, setDescricao] = useState(inicial.descricao);
  const [erro, setErro] = useState("");
  function enviar(e) {
    e.preventDefault();
    if (nome.trim() === "") {
      setErro("Digite um nome.");
      return;
    }
    onEnviar({ nome, link, descricao });
  }
  return (
    <form className={estilo.form} onSubmit={enviar}>
      <label>Nome<input value={nome} onChange={(e) => setNome(e.target.value)} /></label>
      <label>Link<input value={link} onChange={(e) => setLink(e.target.value)} /></label>
      <label>Descrição<input value={descricao} onChange={(e) => setDescricao(e.target.value)} /></label>
      {erro && <p className={estilo.erro}>{erro}</p>}
      <div className={estilo.botoes}>
        <button type="submit">{textoBotao}</button>
        <button type="button" className={estilo.cancelar} onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
}
export default Formulario;
