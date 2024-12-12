# 🚀 **Lista de Tarefas com Filtros**

Este repositório apresenta uma aplicação de **Lista de Tarefas** desenvolvida com **ReactJS**. O projeto é modular e possui componentes reutilizáveis, o que facilita a manutenção e a expansão de funcionalidades.

O objetivo é criar uma aplicação responsiva e de fácil uso, onde o usuário pode adicionar, filtrar e excluir tarefas, além de marcar as tarefas como concluídas.

## ✨ **Funcionalidades**

- **Adicionar Tarefas**: O usuário pode adicionar uma nova tarefa e classificá-la por tag (Pessoal, Trabalho ou Estudo).
- **Marcar como Concluída**: Permite marcar ou desmarcar uma tarefa como concluída.
- **Excluir Tarefa**: Exclui a tarefa da lista.
- **Filtro por Tag**: Possibilidade de filtrar as tarefas de acordo com a tag selecionada.

---

## 🛠️ **Tecnologias Utilizadas**

- **ReactJS**: Biblioteca principal para criar a interface.
- **CSS3**: Para o estilo e responsividade.
- **HTML5**: Estrutura de componentes.
- **JavaScript**: Manipulação de estados e lógica da aplicação.

---

## 📂 **Estrutura de Pastas**

```
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 Header.js            # Componente do cabeçalho
 ┃ ┣ 📜 InputTarefa.js       # Componente do campo de entrada de tarefas
 ┃ ┣ 📜 ListaTarefas.js      # Componente da lista de tarefas
 ┃ ┗ 📜 Filtro.js            # Componente de filtro de tarefas
 ┣ 📜 App.js                 # Componente principal que controla a aplicação
 ┗ 📜 index.js               # Arquivo principal de inicialização do React
```

Cada componente possui sua responsabilidade específica, garantindo a separação de preocupações e um código mais organizado e manutenível.

---

## 📦 **Componentes**

### 🚪 **Header**
Exibe o título principal da aplicação.

### ✍️ **InputTarefa**
Permite ao usuário inserir uma nova tarefa, definir a tag e adicionar a tarefa à lista.

### 🎛️ **Filtro**
Fornece opções para filtrar as tarefas por tag (Pessoal, Trabalho, Estudo ou Todas).

### 📜 **ListaTarefas**
Exibe as tarefas filtradas, permite marcar tarefas como concluídas e excluí-las.

---

## 📚 **Conceitos Utilizados**

- **React Hooks**: Uso de `useState` para gerenciar o estado de tarefas, tags e filtros.
- **Renderização Condicional**: Exibição de mensagens quando a lista de tarefas está vazia.
- **Filtragem de Dados**: O filtro por tags foi implementado utilizando o método `filter()` do JavaScript.
- **Componentização**: Todo o código foi dividido em componentes reutilizáveis.

---

## 🤝 **Contribuição**
Se quiser contribuir para este projeto, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**. Toda ajuda é bem-vinda!

---

## 📃 **Licença**
Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 💬 **Contato**
Se tiver dúvidas ou sugestões, fique à vontade para entrar em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/seu-perfil).

