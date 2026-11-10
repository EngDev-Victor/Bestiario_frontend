import estilo from "../../styles.module.css";

// ============================== IMPORTE ============================================

// rq: componente próprio com props (skill e as ações)
function Cartao({ skill, salvo, onSalvar, onEditar, onApagar }) {
  const botaoSalvar = salvo ? <span>Já salva</span> : <button onClick={() => onSalvar(skill)}>Salvar</button>;
// ternario
  
  return (
    <div className={estilo.cartao}>
      <div className={estilo.titulo}>
        <a href={skill.link || undefined}>{skill.nome}</a>
        <span className={estilo.estrelas}>★ {skill.estrelas}</span>
      </div>
      <p className={estilo.descricao}>{skill.descricao || "Sem descrição."}</p>
      <div className={estilo.botoes}>
        {onSalvar && botaoSalvar}
        {onEditar && <button onClick={() => onEditar(skill.id)}>Editar</button>}
        {onApagar && <button onClick={() => onApagar(skill.id)}>Apagar</button>}
      </div>
    </div>
  );
}
export default Cartao;

// lembrar, é para  mostra uma skill, e é reaproveitado na  duas telas, muda só os botões
// botões aparecem só se a página passar a função correspondente(onSalvar, OnEditar e On Apagar//
