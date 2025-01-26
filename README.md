# Desafio Técnico

Este repositório comtém a solução do desafio técnico. Foi utilizado o framework Angular na versão 19.1.2.

## ⚙️ Como executar o projeto

Para executar o projeto, é necessário ter instalado o Node.js e o Angular CLI.

Após clonar o repositório, execute o comando `npm install` para instalar as dependências do projeto.

Após a instalação das dependências, execute o comando `ng serve` para iniciar o servidor de desenvolvimento.

Acesse o projeto em ([https://desafio-tecnico-khaki.vercel.app/](https://desafio-tecnico-khaki.vercel.app)).

## 📖 Sobre o desafio

O desafio consiste em criar uma aplicação web/mobile responsiva que exiba herois da Marvel pesquisados pelo nome. Esses dados devem ser obtidos através da API da Marvel. Sendo os dados:

- Nome
- Foto
- Descrição
- Participações em quadrinhos
- Participações em séries

## Features

- [x] Pesquisar por nome e exibir os resultados
- [x] Exibir um feedback de carregamento enquanto os dados são buscados
- [x] Exibir um feedback quando a busca não retorna resultados
- [x] Exibir uma notifição caso perca a conexão com a internet
- [ ] Acessar os dados de um heroi já pesquisado de modo offline

## Detalhes do desenvolvimento

- O desafio pede que seja exibido os quadinhos e filmes do heroi pesquisado, porem a API não retorna os dados de filmes, decidi exibir os quadinhos e séries.

- Para adicionar feedback de carregamento no projeto, utilizei a lib ngx-spinner, que permite adicionar um spinner em qualquer lugar da aplicação. Utilizei um interceptor para que o spinner seja exibido em todas as requisições e adicionei um delay para garantir que fosse exibido por um tempo mínimo. Porem a animação do spinner não estava sendo exibida, acredito eu que seja por conta da versão do Angular. Para contornar o problema utilizei um gif no lugar das animações padrões do ngx-spinner.
