export function Filtro({ filtroTag, setFiltroTag }) {
  return (
    <div className="filtro">
      <label>Filtrar por Tag: </label>
      <select value={filtroTag} onChange={(e) => setFiltroTag(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudo">Estudo</option>
      </select>
    </div>
  );
}
