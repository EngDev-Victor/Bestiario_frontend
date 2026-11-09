import { useState } from "react";
import Cartao from "../components/Cartao/Cartao";
import Formulario from "../components/Formulario/Formulario";
import estilo from "../styles.module.css";
function Salvas({ salvas, onCriar, onEditar, onApagar }) {
  const [criando, setCriando] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  return (
    <div>
      <h1>Skills salvas</h1>
      {/* requisito: criar, com o formulário controlado */}
      {criando ? (
        <Formulario
          inicial={{ nome: "", link: "", descricao: "" }}
          textoBotao="Adicionar"
          onEnviar={(dados) => {
            onCriar(dados);
            setCriando(false);
          }}
          onCancelar={() => setCriando(false)}
        />
      ) : (
        <button className={estilo.nova} onClick={() => setCriando(true)}>Nova skill</button>
      )}
      {salvas.length === 0 && <p>Você ainda não salvou nenhuma skill.</p>}
      {/* requisito: listar com map e key, editar e remover */}
      {salvas.map((skill) =>
        skill.id === editandoId ? (
          <Formulario
            key={skill.id}
            inicial={skill}
            textoBotao="Salvar alterações"
            onEnviar={(dados) => {
              onEditar(skill.id, dados);
              setEditandoId(null);
            }}
            onCancelar={() => setEditandoId(null)}
          />
        ) : (
          <Cartao key={skill.id} skill={skill} onEditar={setEditandoId} onApagar={onApagar} />
        )
      )}
    </div>
  );
}
export default Salvas;
