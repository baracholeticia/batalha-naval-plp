# Arquitetura do Projeto – Batalha Naval

## Visão Geral

O projeto Batalha Naval foi desenvolvido seguindo uma arquitetura simples e organizada,
adequada a um contexto acadêmico e ao aprendizado incremental em JavaScript.

A arquitetura está dividida em três partes principais:
- Backend
- Frontend
- Documentação

Essa separação facilita o entendimento, a manutenção do código e o trabalho em equipe.

---

## Estrutura de Pastas do Projeto

```text
batalha-naval-plp/
│   .gitignore
│   package.json
│   README.md
│   
├───backend
│   ├───src
│   │   │   index.js
│   │   │   
│   │   ├───ai
│   │   │       AdvancedAI.js
│   │   │       BaseAI.js
│   │   │       BasicAI.js
│   │   │       IntermediateAI.js
│   │   │       
│   │   ├───game
│   │   │       Board.js
│   │   │       GameEngine.js
│   │   │       Player.js
│   │   │       Ship.js
│   │   │
│   │   ├───persistence
│   │   │       FileStorage.js
│   │   │       PlayerRepository.js
│   │   │
│   │   └───services
│   │           GameService.js
│   │           RankingService.js
│   │
│   └───tests
├───data
│       players.json
│
├───docs
│       arquitetura.md
│       backlog.md
│       cronograma.md
│       requisitos.md
│
└───frontend
    ├───assets
    └───src
        │   index.html
        │
        ├───scripts
        │       app.js
        │       boardView.js
        │       campaignView.js
        │       playerActions.js
        │       state.js
        │
        └───styles
                main.css
```

---

## Backend

O backend concentra toda a lógica do jogo, incluindo:

* criação e controle do tabuleiro
* regras do jogo
* controle de partidas
* lógica básica de inteligência artificial
* persistência simples de dados

A organização em módulos (`game`, `ai`, `services`, `persistence`) facilita a separação de responsabilidades.

---

## Frontend

O frontend é responsável pela interface do usuário, incluindo:

* exibição do tabuleiro
* interação do jogador
* apresentação do estado do jogo

Utiliza HTML, CSS e JavaScript puro, sem frameworks externos, conforme o foco acadêmico do projeto.

---

## Documentação

A pasta `docs` reúne toda a documentação acadêmica do projeto, incluindo:

* requisitos
* backlog
* cronograma
* arquitetura

Essa documentação garante clareza sobre o planejamento e as decisões técnicas adotadas.

---

## Justificativa Arquitetural

A arquitetura escolhida prioriza:

* simplicidade
* clareza
* fácil manutenção
* adequação ao aprendizado da disciplina

A separação entre frontend e backend permite evolução incremental do projeto e melhor organização do trabalho em equipe.

```
