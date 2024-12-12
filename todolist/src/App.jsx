import { useState } from "react";
import { Header } from "./components/Header";
import { InputTarefa } from "./components/InputTarefa";
import { Filtro } from "./components/Filtro";
import { ListaTarefas } from "./components/ListaTarefas";
import "./App.css";

export function App() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("Pessoal");
  const [filtroTag, setFiltroTag] = useState("Todas");

  const adicionarTarefa = () => {
    if (!descricao.trim())
      return alert("A descrição da tarefa não pode estar vazia!");

    const novaTarefa = {
      id: Date.now(),
      descricao,
      tag,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setDescricao(""); // Limpa o campo de descrição
  };

  const alternarConcluida = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const excluirTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  const tarefasFiltradas =
    filtroTag === "Todas"
      ? tarefas
      : tarefas.filter((tarefa) => tarefa.tag === filtroTag);

  return (
    <div className="container">
      <Header />
      <InputTarefa
        descricao={descricao}
        setDescricao={setDescricao}
        tag={tag}
        setTag={setTag}
        adicionarTarefa={adicionarTarefa}
      />
      <Filtro filtroTag={filtroTag} setFiltroTag={setFiltroTag} />
      <ListaTarefas
        tarefas={tarefasFiltradas}
        alternarConcluida={alternarConcluida}
        excluirTarefa={excluirTarefa}
      />
    </div>
  );
}
