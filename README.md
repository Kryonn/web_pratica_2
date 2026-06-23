# Poções e Soluções - Web Service & E-commerce 🧪✨

Este projeto é uma plataforma de e-commerce e administração desenvolvida para a loja **Poções e Soluções**, de propriedade de Innabelle Merigold, localizada no Beco da Última Saída. Fundada em 1867, a loja tradicional agora conta com uma presença digital moderna para a listagem e gerenciamento de seus elixires místicos.

O projeto consiste em um **Web Service (Backend)** para gerenciar o catálogo de poções e uma **Interface Web (Frontend)** construída em React.

## 🚀 Funcionalidades Implementadas

- **Página do Comprador:**
  - Descrição detalhada e imersiva da loja.
  - Seção histórica contextualizando a fundação em 1867.
  - Listagem dinâmica de produtos (poções) consumida via API.
  - Rodapé com informações completas de contato.
- **Página de Administração:**
  - Interface dedicada para Cadastrar, Listar e Remover poções.
  - Armazenamento de dados estruturados (Nome, Descrição, URL da Imagem e Preço).

## 🎨 Identidade Visual e Tecnologias

- **Frontend:** React, HTML5, CSS Modules.
- **Backend:** Node.js, Express.
- **Banco de Dados:** SQLite em modo memória (`:memory:`).
- **Estilização:** Paleta de cores escuras e tipografia clássica baseada na fonte *Gill Sans*.

---

## 🛠️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

---

## 📦 Instalação e Configuração

### 1. Clonar o Repositório
Abra o seu terminal (ou subsistema WSL) e clone o projeto:
```bash
git clone https://github.com/Kryonn/web_pratica_2.git
cd web_pratica_2
```
### 2. Configurar e Iniciar o Backend
Abra um terminal na raiz do projeto e execute os comandos para instalar as dependências (incluindo o driver do SQLite em memória) e iniciar o servidor:
```bash
cd Backend
npm install
npm run dev
```
O servidor do Web Service estará rodando e pronto para receber requisições.

### 3. Configurar e Iniciar o Frontend (React)
Abra uma nova janela/aba de terminal, navegue a partir da raiz do projeto e execute:
```bash
cd Frontend
npm install
npm run dev
```
Acesse o endereço indicado no terminal (geralmente http://localhost:5173) para interagir com a loja.
