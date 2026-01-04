# Project Silas 🤖

Um projeto de automação web usando Puppeteer integrado com Google Sheets.

## 📋 Descrição

Project Silas é uma aplicação Node.js que utiliza o Puppeteer para automação de navegador e integração com Google Planilhas para armazenamento/leitura de dados.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Puppeteer** (^24.34.0) - Biblioteca para controle de navegador Chrome/Chromium
- **Google Spreadsheet** (^5.0.2) - Integração com Google Planilhas

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/TheMyFish/projectSilas.git

# Entre no diretório
cd projectSilas

# Instale as dependências
yarn install
# ou
npm install
```

## 🔧 Uso

```bash
node index.js
```

## 📁 Estrutura do Projeto

```
projectSilas/
├── controllers/     # Controladores da aplicação
├── index.js         # Arquivo principal
├── package.json     # Dependências do projeto
└── yarn.lock        # Lock file do Yarn
```

## 🔄 Atualização de Dependências

Este projeto teve suas dependências atualizadas para as versões mais recentes:

- **Puppeteer**: Atualizado de v1.x para v24.34.0
- **Google Spreadsheet**: Atualizado de v2.x para v5.0.2

### Principais Mudanças nas APIs

#### Google Spreadsheet (v5.x)
A API do `google-spreadsheet` v5.x introduziu mudanças significativas:
- Mudança no construtor e autenticação
- Métodos assíncronos agora usam async/await nativo
- Alterações nos métodos de acesso a células e planilhas

#### Puppeteer (v24.x)
O Puppeteer v24.x trouxe melhorias e algumas mudanças:
- Método `page.waitFor()` foi descontinuado, usar `page.waitForTimeout()` ou `page.waitForSelector()`
- Melhor suporte para navegação e manipulação de páginas
- Versão atualizada do Chromium com correções de segurança

### Regenerar Dependências

Após clonar o repositório ou fazer pull das mudanças, execute:

```bash
yarn install
# ou
npm install
```

Isso irá gerar um novo `yarn.lock` ou `package-lock.json` com as versões atualizadas.

## ⚠️ Nota Importante

Este projeto requer credenciais de acesso ao Google Sheets e ao Facebook para funcionar corretamente. Certifique-se de configurar os arquivos de credenciais antes de executar.

## 📄 Licença

MIT