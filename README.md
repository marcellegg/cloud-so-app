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

## ⚙️ Funcionalidades
* **API RESTful:** Rota `/api/sysinfo` que fornece os dados brutos do sistema em formato JSON.
* **Monitoramento de Hardware:** Coleta dados de CPU (núcleos e modelo) e Memória RAM (total e livre).
* **Identificação do SO:** Retorna o Hostname, Plataforma e Arquitetura do servidor.
* **Uptime:** Calcula o tempo exato em que a máquina virtual está ligada.
* **Interface Gráfica:** Dashboard moderno em HTML/CSS para visualização dos dados de forma amigável para o usuário final.

---

## 🛠️ Tecnologias Utilizadas
* **Back-end:** Node.js
* **Framework:** Express.js
* **Módulos Nativos:** `os` (Operating System) e `path`
* **Integração:** CORS
* **Front-end:** HTML5 e CSS3
* **Infraestrutura (PaaS):** Render / Railway

---

