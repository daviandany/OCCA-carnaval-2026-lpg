# OCCA — Olinda Creative Community Action

Este projeto é uma **landing page da OCCA (Olinda Creative Community Action)**, desenvolvida com o objetivo de **divulgar os quartos disponíveis durante o período do Carnaval**.

A proposta é conectar visitantes a uma experiência cultural, criativa e imersiva em Olinda, apresentando os espaços, diferenciais e serviços da OCCA por meio de uma interface **moderna, responsiva e de fácil manutenção**, com foco em divulgação e conversão durante o Carnaval.


---

## 🚀 Tecnologias Utilizadas

* **React** (com TypeScript)
* **Vite** (bundler e dev server)
* **Tailwind CSS** (via CDN)
* **HTML5 / CSS3**

---

## 🧠 Conceito do Projeto

O projeto foi organizado seguindo uma **arquitetura modular**, pensando em:

* Facilidade de entendimento para novos desenvolvedores
* Separação clara de responsabilidades
* Escalabilidade (crescer sem virar bagunça)
* Manutenção simples

Não é apenas um site, mas uma base organizada para evoluções futuras (ex: backend, Firebase, CMS, etc).

---

## 📁 Estrutura de Pastas

```txt
src/
├─ app/
│  └─ App.tsx          # Composição principal da aplicação
│
├─ modules/
│  └─ home/
│     └─ components/
│        ├─ Hero.tsx
│        ├─ CarnivalBanner.tsx
│        ├─ RoomsSection.tsx
│        └─ Services.tsx
│
├─ shared/
│  └─ components/
│     ├─ Navbar.tsx
│     ├─ Footer.tsx
│     └─ Icons.tsx
│
├─ main.tsx            # Ponto de entrada do React
└─ index.css
```

### 📌 Como pensar essa estrutura

* **app/** → onde a aplicação é montada
* **modules/** → partes do sistema (domínios / páginas)
* **shared/** → componentes reutilizáveis

> Regra de ouro: tudo que pertence a um mesmo assunto fica junto.

---

## 🧩 Componentes Principais

### Navbar & Footer

Componentes globais reutilizáveis, presentes em toda a aplicação.

### Hero

Seção principal de apresentação da OCCA.

### CarnivalBanner

Destaque visual relacionado à cultura e identidade local.

### RoomsSection

Apresentação dos espaços/ambientes da OCCA.

### Services

Lista dos serviços e iniciativas oferecidas.

---

## ▶️ Como rodar o projeto localmente

### Pré-requisitos

* **Node.js** (versão 18 ou superior)
* **npm**

### Passo a passo

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
```

O projeto estará disponível em:

```
http://localhost:3000
```

---

## 🎨 Estilos e Design

* O projeto utiliza **Tailwind CSS via CDN** configurado diretamente no `index.html`.
* Paleta de cores personalizada:

  * `occaYellow`
  * `occaRed`
  * `concrete`
* Fontes:

  * **Inter** (sans-serif)
  * **Playfair Display** (serif)

---



