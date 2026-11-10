import { useState } from "react";
import estilo from "../../styles.module.css";

// ============================== IMPORTE ============================================

// rq: componente próprio com props (inicial, textoBotao, onEnviar, onCancelar)
function Formulario({ inicial, textoBotao, onEnviar, onCancelar }) {
  const [nome, setNome] = useState(inicial.nome);
  const [link, setLink] = useState(inicial.link);
  // preenche os campos com os dados atuais (vazio se for skill nova)
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
  // envia o formulário: confere se tem nome e manda os dados para a página
  //é o que acontece qd pessoa clica em Save ou Add no formulário da pagina salvar

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
