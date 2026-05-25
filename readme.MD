# SmartDealer Hub 🚗🤖

Aplicação mobile desenvolvida em **React Native + TypeScript** para realizar comparativos inteligentes entre veículos da Ford e seus concorrentes utilizando **Inteligência Artificial**.

O projeto consome uma API própria desenvolvida para gerar análises automotivas e argumentos de venda automáticos com base em especificações técnicas dos veículos.

### Integrantes

Mohamed Afif Smaili RM 554445 

Mateus dos Santos da Silva RM 558436 

Nicolas Moreno Cardoso RM 557132 

Andre Giovane RM 556384

---

# 📱 Demonstração

O usuário informa:

- Modelo Ford (base de comparação)
- Modelo concorrente

A aplicação envia os dados para uma API REST e recebe um comparativo inteligente em formato JSON, exibindo:

- Modelo
- Versão
- Motorização
- Consumo
- Potência
- Torque
- Tecnologia
- Segurança
- E diversos outros atributos automotivos

Tudo isso em uma interface moderna e responsiva.

---

# 🚀 Tecnologias Utilizadas

## Frontend (Mobile)

- React Native
- TypeScript
- Axios
- React Hooks
- StyleSheet API

## Backend (API própria)

- Java
- Spring Boot
- API REST
- Integração com IA (Gemini)

---

# 📂 Estrutura do Projeto

```bash
src/
│
├── api/
│   └── api.ts
│
├── components/
│   └── ResultCard.tsx
│
├── screens/
│   └── HomeScreen.tsx
│
└── App.tsx
```

---

# ⚙️ Funcionalidades

## ✅ Comparação Inteligente de Veículos

A IA analisa e compara veículos automaticamente.

---

## ✅ Interface Dinâmica

Os atributos do JSON são renderizados dinamicamente:

```tsx
{atributos.map((attr, index) => (
   ...
))}
```

Isso permite comparar qualquer veículo sem precisar alterar o frontend.

---

## ✅ Tratamento Inteligente de Resposta

O sistema trata:

- Resposta JSON
- Texto puro
- Formatação do Gemini (` ```json `)

---

## ✅ Loading State

Indicador visual durante processamento da IA:

```tsx
<ActivityIndicator color="#ffffff" size="small" />
```

---

## ✅ Tratamento de Erros

Alertas amigáveis para:

- Campo vazio
- Erro de conexão
- Timeout da API

---

# 🔌 Configuração da API

Arquivo:

```bash
src/api/api.ts
```

Configuração:

```ts
const api = axios.create({
  baseURL: 'http://163.176.204.45:8080/api/v1/',
  timeout: 30000,

  auth: {
    username: 'admin.ti',
    password: 'admin123'
  }
});
```

---

# 📡 Endpoint Consumido

```http
POST /veiculos/comparar
```

## Payload enviado

```json
{
  "versaoFord": "Limited + 3.0L V6 26MY",
  "concorrente": "Toyota Hilux GR-S"
}
```

---

# 🧠 Exemplo de Resposta da IA

```json
{
  "Ford": {
    "modelo": "Ranger",
    "versao": "Limited + 3.0L V6",
    "potencia": "250cv",
    "torque": "61 kgfm"
  },
  "Toyota": {
    "modelo": "Hilux",
    "versao": "GR-S",
    "potencia": "224cv",
    "torque": "55 kgfm"
  }
}
```

---

# 🎨 Interface

## Tela Principal

- Campo para veículo Ford
- Campo para concorrente
- Botão de geração IA

## Resultado

Tabela dinâmica comparativa com:

- Destaque visual para Ford
- Zebra rows
- Responsividade
- Renderização automática dos atributos

---

# ▶️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/afeifz/SmartDealerApp.git
```

---

## 2️⃣ Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

---

## 3️⃣ Executar o projeto



```bash
npx expo start
```


---

# 🔥 Melhorias Futuras

- Integração com banco de dados
- Histórico de comparações
- Login de vendedores
- Dashboard analítico
- Exportação em PDF
- Comparação por imagens
- Score automático da IA
- Comparação de consumo e custo-benefício

---

**Desafio 1 - Inteligência Competitiva Automotiva**

---

# 📄 Licença

Este projeto está sob a licença MIT.