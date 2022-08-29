# Boas vindas ao exercício Formulário com Redux

## Vamos criar formulários utilizando `Redux`! 🚀

---

## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br/>
- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).
- Após fazer o fork, clone o repositório criado para o seu computador.
- Rode o comando `npm install`.
- Vá para a branch `main` do seu projeto e execute o comando `git branch` ou `git branch -a`.
- O exercício deverá ser feito na branch `main`.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br/>

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/examplepr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

---

## Começando o exercício

Neste exercício será necessário implementar o Redux para dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibi-los na tela.

Lembrando que os formulários já estão criados, então não é necessário criar novos arquivos além dos propostos para a execução do exercício.

![forms-redux](form-redux.gif)

Para começar, é preciso salvar as informações de cada formulário no gerenciador de estados. Depois, numa outra página, acessem esses dados para que sejam renderizados.

Vocês precisarão de:

- Gerenciador de estados (Redux), para salvar as informações na `store` e também para acessá-las.

Mãos ao código! 💪

## Parte 01 - Implementando o Redux

- Crie a estrutura de pastas necessária para a implementação do Redux.
Como sugestão, você pode usar  a seguinte estrutura:
  - Crie a pasta `src/store` para agrupar todos os arquivos relacionados ao Redux;
  - Crie a pasta `src/store/actions` para armazenar as `actions` do projeto;
  - Crie a pasta `src/store/reducers` para armazenar os `reducers` do projeto;
  - Crie o arquivo `src/store/index.js`, que será o arquivo responsável por criar e exportar a `store` da aplicação.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

> 👀 **De olho nas dicas:**
>
> - De início, você pode implementar seu reducer apenas com o valor `default`.
> - O `composeWithDevTools` pode te ajudar a visualizar as etapas do **_Redux_**
> - Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`.
> - Caso tenha dificuldade para montar a estrutura do Redux, você pode consultar o **Checklist do Redux com React**, na seção 7 dia 2.
> - Faça as importações corretas para o bom funcionamento da sua aplicação.

## Parte 02 - Salvando as informações

- Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`

> 👀 **De olho na dica:**  lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.

## Parte 03 - Renderizando as informações

- Renderize as informações que estão salvas na `store` em `FormDataDisplay`

---
