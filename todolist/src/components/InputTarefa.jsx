export function InputTarefa({
  descricao,
  setDescricao,
  tag,
  setTag,
  adicionarTarefa,
}) {
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudo">Estudo</option>
      </select>
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}
