# ☁️ Cloud OS Monitor - Dashboard de Sistemas Operacionais

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

Aplicação web desenvolvida para monitorar e exibir métricas em tempo real do Sistema Operacional hospedeiro. O projeto extrai dados do Kernel através do back-end e os exibe em um painel visual no front-end, demonstrando na prática conceitos de virtualização e alocação de recursos em nuvem.

🔗 **Acesse o Deploy ao vivo:** [Cloud OS App no Render](https://cloud-so-app-1.onrender.com)

---

## 🎓 Contexto Acadêmico
Projeto final desenvolvido para a disciplina de **Sistemas Operacionais**.
* **Instituição:** FATEC Itapetininga
* **Curso:** Gestão da Produção Industrial
* **Professor:** Prof. Me. Deivison S. Takatu
* **Aluna:** Marcelle de Goes Silva

---

# 🔗 Links Oficiais do Projeto

- **Repositório GitHub:**  
  https://github.com/marcellegg/dashboard-so

- **Deploy Oficial (Render):**  
  https://cloud-so-app-1.onrender.com

---

# 📸 Painel Executivo (Dashboard)

<img width="1909" height="789" alt="image" src="https://github.com/user-attachments/assets/8c9e7585-45cc-4ef1-984e-d470ea09518f" />

---

# 1. 🎯 Sobre o Projeto

Este projeto representa a evolução de uma API REST simples para um **Dashboard Profissional de Monitoramento de Sistema Operacional**.

A aplicação web foi construída utilizando **Node.js** e **Express.js**, sendo capaz de extrair métricas de hardware e rede do sistema operacional hospedeiro em tempo real.

O sistema atende a três propostas centrais da disciplina:

1. **Monitoramento Real**
   - Coleta de dados físicos como:
     - Hostname
     - Plataforma
     - CPU
     - RAM
     - Uptime
     - IP
     - Processos

2. **Deploy em Nuvem**
   - Publicação e análise da aplicação rodando em ambientes conteinerizados (PaaS).

3. **Simulação de Kernel (Proposta Avançada)**
   - Implementação de um módulo interativo que simula:
     - Escalonamento de processos
     - Alocação de memória física
     - Gerenciamento de recursos do sistema operacional

---

# 2. 🛠️ Tecnologias Utilizadas

## Backend
- Node.js
- Módulos nativos:
  - `os`
  - `fs`
  - `path`

## Framework
- Express.js
- CORS

## Frontend
- HTML5
- CSS3
  - Grid Layout
  - Dark Theme
- Vanilla JavaScript
  - Fetch API

## Infraestrutura / Nuvem
- Render (Principal)
- Railway (Testes Comparativos)

---

# 3. 🚀 Como Executar Localmente

Certifique-se de ter o Node.js e o Git instalados em sua máquina.

## 1. Clone o repositório

```bash
git clone https://github.com/marcellegg/dashboard-so.git
```

## 2. Acesse a pasta do projeto

```bash
cd dashboard-so
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Inicie o servidor localmente

```bash
node index.js
```

Acesse no navegador:

```plaintext
http://localhost:3001
```

O painel se atualizará automaticamente a cada 5 segundos.

---

# 4. 🧪 Módulo Avançado: Simulador de SO

Atendendo à proposta avançada da atividade, foi incorporado ao frontend um simulador de escalonador e gerenciamento de memória.

## Funcionalidades do Simulador

### 🔹 Alocação Dinâmica

O usuário pode criar processos simulados que consomem entre:

- 0.5 GB
- 2.5 GB de RAM

---

### 🔹 Ciclo de Vida dos Processos

Cada processo possui:

- Tempo de CPU simulado
- Encerramento automático
- Liberação de memória após finalização
- Simulação de Garbage Collection

---

### 🔹 Bloqueio OOM (Out Of Memory)

O simulador possui limite máximo de:

```plaintext
8 GB
```

Caso a demanda ultrapasse esse valor:

- O Kernel simulado bloqueia novos processos
- Um alerta visual é exibido ao usuário

---

# 5. 📊 Relatório Comparativo: Render vs Railway

Para fins acadêmicos e estudo sobre virtualização e abstração de hardware, a aplicação foi executada em dois ambientes PaaS distintos.

Mesmo utilizando exatamente o mesmo código-fonte, os resultados foram diferentes devido às características do sistema operacional e infraestrutura subjacente.

---

# ☁️ Render (Ambiente Oficial de Entrega)

## Características do Ambiente

- Container compartilhado
- Recursos limitados
- Infraestrutura otimizada para aplicações leves

## Memória RAM

- Aproximadamente:
  
```plaintext
512 MB
```

no plano gratuito.

## Comportamento Observado

- Suspensão automática da instância quando inativa
- Reinicializações frequentes
- Política agressiva de economia de recursos
- Escalonamento mais restritivo

---

# 🚄 Railway (Ambiente de Teste)

## Características do Ambiente

- Containers de alta performance
- Maior disponibilidade de recursos computacionais

## Processamento

- Diversas vCPUs disponíveis

## Memória RAM

O módulo:

```javascript
os.totalmem()
```

identificou grande disponibilidade de memória, chegando a reportar centenas de GB provenientes do servidor hospedeiro.

## Comportamento Observado

- Melhor estabilidade
- Processos Node.js executando continuamente
- Menor ocorrência de interrupções
- Maior tolerância ao uso intensivo de recursos

---

# 6. 🧠 Conclusão Técnica

O projeto demonstra na prática a eficiência das camadas de virtualização modernas.

O mesmo código-fonte executa corretamente em:

- Windows Local
- Linux Render
- Linux Railway

Mesmo assim, as System Calls retornam informações completamente distintas dependendo do hardware e da infraestrutura virtual utilizada.

Isso evidencia:

- Abstração de hardware
- Virtualização em nível de sistema operacional
- Conteinerização
- Compartilhamento de Kernel
- Escalabilidade em nuvem

---

# 7. 📚 Conceitos de Sistemas Operacionais Aplicados

## 🔹 Processos

Execução do Node.js como processo gerenciado pelo Kernel:

```bash
node index.js
```

---

## 🔹 Gerenciamento de Memória

Utilização das funções:

```javascript
os.totalmem()
os.freemem()
```

---

## 🔹 Escalonamento

Simulação de processos concorrentes no módulo Kernel Simulator.

---

## 🔹 Virtualização

Execução da aplicação dentro de containers Linux em ambientes cloud.

---

# 8. 👩‍💻 Identificação

| Informação | Dados |
|---|---|
| Projeto | Cloud OS Dashboard & Kernel Simulator |
| Aluna | Marcelle de Góes Silva |
| Instituição | FATEC Itapetininga |
| Disciplina | Nuvem e Sistemas Operacionais |
| Professor | Prof. Me. Deivison S. Takatu |
| Data | Maio de 2026 |


---

