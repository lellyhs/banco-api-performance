
# Banco API - Testes de Performance 🚀

Repositório dedicado aos testes de performance, carga e estresse automatizados da API do sistema bancário. O objetivo principal é avaliar a estabilidade, o comportamento e os limites de concorrência da aplicação sob diferentes níveis de carga.

---

## 🛠️ Tecnologias Utilizadas

* **[Grafana K6](https://k6.io/)**: Ferramenta principal para execução e monitoramento dos testes de performance.
* **JavaScript**: Linguagem padrão para escrita dos scripts de teste do K6.
* **JSON**: Armazenamento de payloads estáticos e massas de dados (fixtures).
* **K6 Web Dashboard**: Monitoramento em tempo real e geração de relatórios de métricas (latência p95/p99, throughput) em formato HTML.

---

## 📂 Estrutura do Repositório

O projeto está organizado da seguinte forma:

```text
banco-api-performance
│   .gitignore
│   README.md
│
├───config
│       config.local.json     # Configurações de ambientes e URLs
│
├───fixtures
│       postLogin.json        # Massas de dados e payloads estáticos para os testes
│
├───helpers
│       autenticacao.js       # Funções de suporte (ex: geração de tokens)
│
├───tests
│       login.test.js         # Cenários de teste para o endpoint de login
│       transferencia.test.js # Cenários de teste para o endpoint de transferência
│
└───utils
        variaveis.js          # Definição de variáveis globais e de ambiente do K6
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
1. O **[Git](https://git-scm.com)** para clonar o repositório.
2. O **[Grafana K6](https://k6.io)** instalado no seu sistema operacional.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lellyhs/banco-api-performance](https://github.com/lellyhs/banco-api-performance.git
   ```

2. **Execute um cenário de teste específico:**
   Para rodar o teste de performance do endpoint de login, execute:
   ```bash
   k6 run tests/login.test.js
   ```

3. **Gerando Relatórios (Dashboard):**
   Caso utilize a extensão de relatórios do K6 para visualizar os dados no navegador de forma gráfica, execute o comando habilitando o web dashboard:
   ```bash
   K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js
   
   Se estiver usando Powershell, digite:
   $env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="html-report.html"; k6 run C:\Projetos\banco-api-performance\tests\login.test.js
   ```

---

## 📊 Cenários de Teste Avaliados

Os scripts simulam o comportamento real de usuários na plataforma através de:
* **Validação de Métricas Críticas**: Monitoramento de taxas de requisições por segundo (RPS), checagem de erros e tempos de resposta aceitáveis (p95 e p99 abaixo dos limites esperados).
* **Modularidade**: Uso de `checks` e `thresholds` nativos do K6 para garantir que a API continue saudável durante os picos de acessos.

---
Feito com 💜 por [lellyhs](https://github.com/lellyhs).
