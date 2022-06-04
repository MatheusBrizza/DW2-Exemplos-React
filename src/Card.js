import "./styles.css";

export const Card = ({
  titulo = "Titulo Default",
  conteudo,
  exibirConteudo
}) => {
  // prop exibirConteudo
  // prop conteudo
  // prop titulo
  return (
    <div>
      <h4>{titulo}</h4>
      {exibirConteudo && <p>{conteudo}</p>}
    </div>
  );
};
