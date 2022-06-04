import "./styles.css";
import { Card } from "./Card";

export default function App() {
  const cards = [
    {
      conteudo: "conteudo",
      exibirConteudo: true,
      titulo: "titulo 1"
    },
    {
      conteudo: "conteudo",
      exibirConteudo: true,
      titulo: "titulo 2"
    }
  ];
  return (
    <div>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}
