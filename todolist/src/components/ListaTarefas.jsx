export function ListaTarefas({ tarefas, alternarConcluida, excluirTarefa }) {
  return (
    <ul className="lista-tarefas">
      {tarefas.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={tarefa.concluida ? "concluida" : ""}>
          <span onClick={() => alternarConcluida(tarefa.id)}>
            {tarefa.descricao}
            <span className={`tag ${tarefa.tag.toLowerCase()}`}>
              {tarefa.tag}
            </span>
          </span>
          <button onClick={() => excluirTarefa(tarefa.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}
