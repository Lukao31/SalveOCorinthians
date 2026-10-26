# 🦅 Salve o Corinthians

> **Portal independente dedicado à história imortal do Sport Club Corinthians Paulista, apuração de fatos da diretoria (1910 a 2026), debate técnico sobre intervenção judicial, transparência financeira, feed de jogos e o projeto SAFIEL.**

[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-black.svg?style=for-the-badge)](LICENSE)
[![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.4.0-gold.svg?style=for-the-badge)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/Status-Ativo%20%26%20Em%20Evolu%C3%A7%C3%A3o-success.svg?style=for-the-badge)](#)

---

## 📌 Sumário
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades e Módulos](#-funcionalidades-e-módulos)
3. [Design System & Estética](#-design-system--estética)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Como Executar Localmente](#-como-executar-localmente)
6. [Controle de Versão e Documentação](#-controle-de-versão-e-documentação)
7. [Fontes e Transparência](#-fontes-e-transparência)

---

## 📖 Sobre o Projeto

O **Salve o Corinthians** nasceu da necessidade de unir a paixão de mais de 35 milhões de torcedores à transparência factual e financeira. O clube vive momentos decisivos de sua história centenária: dívidas bilionárias acumuladas ao longo de décadas, disputas políticas internas, debates acalorados sobre intervenção judicial ou recuperação judicial (RJ), e iniciativas populares como o projeto **SAFIEL** (SAF controlada ou viabilizada com o apoio da Fiel).

Este portal reúne:
- **Resgate Histórico e Glórias:** Os 116 anos de títulos, ídolos e momentos inesquecíveis.
- **Dossiê da Gestão:** Apuração minuciosa, sem partidarismo, dos acertos e erros das diretorias desde 1910 até o cenário recente de 2026.
- **Análise da Intervenção Judicial:** Prós, contras, fundamentação na Lei Geral do Esporte e no Código Civil, e impactos para a soberania corinthiana.
- **Painel Financeiro Transparente:** Balanços explicados de forma acessível com visualizações dinâmicas em gráficos.
- **Simulador SAFIEL:** Calculadora participativa para estimar o poder da massa corinthiana na liquidação da dívida.

---

## 🚀 Funcionalidades e Módulos

### 1. ⏱️ Relógio dos Juros da Dívida em Tempo Real
Fixado no topo da página, calcula os juros estimados da dívida consolidada (R$ 2,35 bilhões) a uma taxa de **R$ 8,57 por segundo** (~R$ 740 mil por dia). Mostra em tempo real ao torcedor o custo da inércia administrativa durante sua navegação.

### 2. 📋 Dossiê da Gestão (Erros e Acertos de 1910 a 2026)
Cards detalhados com filtros interativos:
- **Todos:** Visão cronológica completa.
- **Acertos:** Conquistas patrimoniais, estruturação do CT Joaquim Grava, futebol feminino vitorioso, profissionalização pontual.
- **Erros / Críticos:** Parcerias desastrosas (Hicks Muse, MSI), inflação da folha salarial sem retorno técnico, juros de financiamento da Neo Química Arena, casos de patrocínio com intermediários suspeitos e dívidas fiscais.
- **Mistos:** Períodos com grandes taças esportivas, mas custos financeiros ou administrativos elevados.

### 3. ⚖️ Análise de Intervenção Judicial
Quadro comparativo aprofundado:
- **Cenário Favorável:** Afastamento cautelar de gestores sob suspeita, auditoria externa independente nomeada por juiz, suspensão temporária de execuções de credores.
- **Riscos e Alertas:** Desestabilização política, risco de desfiliação ou sanções desportivas (artigo da FIFA/CBF sobre ingerência estatal), burocracia judicial.
- **Conclusão Técnica:** Diferenciação entre intervenção cível litigiosa, Recuperação Judicial formal e reforma estatutária profunda com voto do Fiel Torcedor.

### 4. 📊 Balanço Financeiro & Gráficos Interativos (Chart.js)
Três gráficos analíticos integrados:
1. **Evolução da Dívida Consolidada (2012–2026):** Salto de R$ 180 milhões (2012) para os atuais R$ 2,35 bilhões (incluindo passivo do clube social, futebol e financiamento do estádio).
2. **Composição da Dívida Atual:** Divisão entre Dívida Tributária/Fiscal, Empréstimos Bancários, Direitos de Imagem/Atletas, Fornecedores e Neo Química Arena.
3. **Receitas vs. Despesas (2025):** Comparativo de bilheteria, direitos de transmissão, patrocínios, sócio-torcedor e custos com elenco e juros.

### 5. 🧮 Simulador Dinâmico SAFIEL
Ferramenta interativa onde o torcedor ajusta:
- Quantidade de torcedores dispostos a contribuir (de 100 mil a 5 milhões de pessoas).
- Valor da contribuição mensal (de R$ 10 a R$ 200/mês).
- Exibe o valor arrecadado por mês e por ano, além de prever em quantos meses a dívida do clube seria integralmente quitada pela Fiel.

### 6. ⚽ Central de Jogos e Resultados
Acompanhamento dos jogos recentes e confrontos futuros do Timão, com placares, competições, datas e locais.

### 7. 🏆 Memorial de Títulos
Histórico categorizado das principais taças alvinegras: Mundiais da FIFA, Copa Libertadores Invicta, Brasileirões, Copas do Brasil, Recopa Sul-Americana e Paulistões lendários.

### 8. 🛡️ Panteão de Ídolos Eternos
Cards com biografias, estatísticas de partidas, gols marcados, conquistas e frases marcantes de lendas como Sócrates, Rivellino, Marcelinho Carioca, Cássio, Luizinho e outros. Conta com modal de visualização aprofundada ao clicar.

### 9. 🚂 As Três Grandes Invasões da Fiel (Galeria & Relatos Históricos)
Experiência imersiva com as três maiores mobilizações de torcida da história: **1976 (Maracanã)**, **2000 (Mundial no Rio)** e **2012 (Mundial no Japão)**.
- Ao clicar em cada invasão, abre-se um modal dedicado com **3 fotos históricas autênticas** em alta resolução (9 fotos no total).
- Carrossel com navegação por miniaturas, setas e teclado (`ArrowLeft` / `ArrowRight`).
- **Relatos de Fontes Confiáveis:** Citações documentadas de Nelson Rodrigues, Tite, Cássio, Tobias, Freddy Rincón, Dinei, Marcelinho Carioca, Frank Lampard, FIFA Technical Report e imprensa da época.
- **Cortes & Registros em Vídeo:** Botões diretos para assistir a momentos decisivos e documentários no YouTube.

---

## 🎨 Design System & Estética

- **Cores Predominantes:** Preto (#0a0a0c, #121316), Branco (#ffffff, #f5f5f7), Dourado Nobre (#d4af37) e Vermelho de Alerta (#e63946).
- **Tipografia Moderna:** *Montserrat* para títulos e cabeçalhos com forte impacto visual; *Inter* para excelente legibilidade de textos, tabelas e relatórios.
- **Glassmorphism e Micro-interações:** Efeitos de desfoque sutil, bordas suaves, animações de hover nos cards, badges coloridos por categoria e transições fluidas.
- **Design 100% Responsivo:** Adaptado para smartphones, tablets e desktops de alta resolução.

---

## 📁 Estrutura do Projeto

```text
Salve o Corinthians/
├── assets/
│   └── images/
│       ├── hero.jpg
│       ├── historia.jpg
│       ├── safiel.jpg
│       ├── logo-salve-corinthians.svg
│       ├── logo-salve-corinthians-emblem.svg
│       ├── logo-safiel.svg
│       ├── idolos/
│       ├── titulos/
│       └── invasoes/        # 9 fotos históricas (3 para 1976, 3 para 2000, 3 para 2012)
├── css/
│   └── style.css            # Folha de estilo completa, responsiva e com design system alvinegro
├── data/
│   └── corinthians-data.js   # Base de dados estruturada (fatos, finanças, jogos, títulos, ídolos, invasões)
├── js/
│   └── app.js               # Lógica interativa, modais de galeria e relatos, gráficos, simulador
├── .gitignore               # Arquivos ignorados pelo Git
├── CHANGELOG.md             # Registro de todas as versões, alterações e adições
├── README.md                # Documentação técnica e visão geral do projeto
└── index.html               # Estrutura HTML5 semântica e acessível
```

---

## 💻 Como Executar Localmente

### Opção 1: Servidor HTTP Local (Recomendado)
Com Python instalado:
```bash
# Na raiz da pasta do projeto:
python -m http.server 3000
```
Em seguida, acesse no navegador: [http://localhost:3000](http://localhost:3000)

Ou com Node.js:
```bash
npx serve -l 3000
```

### Opção 2: Abertura Direta
Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

---

## 🏷️ Controle de Versão e Documentação

Todas as evoluções do projeto seguem:
- **Versionamento Semântico (SemVer):** `MAJOR.MINOR.PATCH` (ex: `v1.0.0`, `v1.1.0`).
- **Padrão Conventional Commits:** Prefixos claros como `feat:`, `fix:`, `docs:`, `style:`, `refactor:` e `perf:`.
- **Registro no [CHANGELOG.md](CHANGELOG.md):** Cada adição, melhoria, correção e alteração fica minuciosamente documentada com data, versão e escopo.
- **Tags de Lançamento:** Cada versão fechada recebe uma Git Tag correspondente (`git tag -a vX.Y.Z`).

---

## 📰 Fontes e Transparência

As informações financeiras e históricas são compiladas a partir de documentos e coberturas públicas:
- Balanços Patrimoniais Oficiais publicados pelo Sport Club Corinthians Paulista.
- Auditorias independentes (Ernst & Young, Falconi e relatórios do CORI).
- Coberturas investigativas de veículos esportivos (ge.globo, UOL Esporte, Gazeta Esportiva, Meu Timão).
- Acervo histórico oficial do clube e Memória do Futebol Brasileiro.

---

*“Salve o Corinthians, o campeão dos campeões, eternamente dentro dos nossos corações!”* 🏴🏳️
