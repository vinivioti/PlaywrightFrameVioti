🚀 Testes Automatizados com Playwright

Este projeto utiliza Playwright para automação de testes no site Sauce Labs. Os testes incluem:

Login válido

Login inválido

Fluxo de compra E2E (End-to-End)

📌 Requisitos

Antes de começar, certifique-se de ter instalado:

Node.js (versão LTS recomendada)

npm (gerenciado pelo Node.js)

Verifique as versões instaladas com os comandos:

node -v
npm -v

📥 Instalação

Clone este repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Inicialize o projeto Playwright:

npm init playwright@latest

Escolha as opções recomendadas ou personalize conforme necessário.

Instale as dependências:

npm install

🚀 Como Executar os Testes

Executar todos os testes

npx playwright test

Executar um teste específico

npx playwright test nome-do-arquivo.spec.ts

Executar os testes com UI do Playwright

npx playwright test --ui

Gerar e visualizar relatórios de teste

npx playwright show-report

📂 Estrutura do Projeto

📂 meu-projeto-playwright
 ├── 📂 elementos
 │   ├── LoginElementos.js
 │   ├── CompraElementos.js
 │
 ├── 📂 pages
 │   ├── LoginPage.js
 │   ├── CompraPage.js
 │
 ├── 📂 tests
 │   ├── testesLogin.spec.js  # Testes de login utilizando o codegen
 │   ├── testeCompra.spec.js # Testes de compra utilizando o codegen
 |   ├── testesLoginXpath.spec.js  # Testes de login utilizando o design patterns e boas práticas
 │   ├── testeCompraXpath.spec.js # Testes de compra utilizando o design patterns e boas práticas
 │
 ├── 📂 meus-reports
 │   ├── report_26_02_2025--10-49-44
 │   │   ├── index.html
 │
 ├── 📜 playwright.config.js
 ├── 📜 package.json
 ├── 📜 README.md

🛠 Configuração Personalizada

Se precisar modificar as configurações, edite o arquivo playwright.config.ts. Nele, você pode definir navegadores, diretórios de relatórios e muito mais.

📌 Considerações Finais

Este projeto é um exemplo de automação de testes para sites utilizando Playwright. Sinta-se à vontade para modificar e expandir conforme necessário! 🎯

🔗 Mais informações:

Documentação oficial do Playwright


