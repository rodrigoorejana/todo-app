# Aplicativo de Gerenciamento de Tarefas

## Descrição

Este é um aplicativo de gerenciamento de tarefas desenvolvido com React e React Router. Ele permite aos usuários criar, listar, atualizar e excluir tarefas de forma eficiente.

## Estrutura do Projeto

O projeto está estruturado em várias páginas, layouts, componentes e contexto para facilitar a organização e funcionalidade das tarefas.

### Páginas e Layouts

- **RootLayout**: Layout principal que engloba toda a aplicação, contendo o cabeçalho, navegação e rodapé.
- **Home**: Página inicial do aplicativo.
- **TasksLayout**: Layout para a seção de tarefas.
- **ListTasks**: Componente que lista todas as tarefas.
- **CreateTask**: Componente para criar uma nova tarefa.
- **UpdateTask**: Componente para atualizar uma tarefa existente.

### Contexto de Tarefas

O contexto `TasksContext` e seu provedor `TasksContextProvider` gerenciam o estado global das tarefas, permitindo operações como adicionar, excluir, atualizar e obter tarefas. As tarefas são armazenadas localmente no navegador usando o `localStorage` para persistência.

### Componentes

- **DeleteButton**: Componente que permite excluir uma tarefa. Utiliza o hook `useTasks` do contexto `TasksContext` para acessar a função `deleteTask`.
- **ItemForm**: Formulário para adicionar ou atualizar uma tarefa. Permite definir o nome, descrição e categoria da tarefa, utilizando o componente `TaskStock` para a criação de novas tarefas.
- **TasksTable**: Tabela que exibe todas as tarefas cadastradas. Permite marcar tarefas como concluídas, atualizar e excluir tarefas utilizando botões e links adequados.
