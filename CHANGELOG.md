# 📜 Histórico de Alterações (CHANGELOG)

Todas as alterações notáveis, adições e evoluções no projeto **Salve o Corinthians** serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/) (SemVer).

---

## Tipos de Mudanças
- `Adicionado` (Added): para novos recursos e seções implementadas.
- `Modificado` (Changed): para alterações em funcionalidades existentes.
- `Corrigido` (Fixed): para correções de falhas e bugs.
- `Segurança` (Security): para melhorias de segurança ou proteção de dados.
- `Removido` (Removed): para recursos descontinuados.

## [1.1.0] - 2026-10-26

### ⚽ Atualização do Feed de Jogos (Ano e Mês Atual: Outubro de 2026)

Esta versão traz a atualização completa do painel de jogos recentes e desempenho esportivo, substituindo registros legados por partidas reais do ano corrente (2026) e do mês atual (Outubro de 2026), com checagem e discriminação minuciosa de gols e assistências em estrita ordem cronológica.

### ✨ Adicionado (Added)
- **Suporte a Jogos Agendados:** Componente visual e estilo dedicado (`.jogo-card-agendado`) com moldura e gradiente dourado suave para destacar compromissos futuros.
- **Badges Dinâmicos de Resultado:** Identificação cromática instantânea nos cartões de partidas:
  - `Vitória` (Verde esmeralda / `badge-acerto`)
  - `Empate` (Cinza neutro alvinegro / `badge-misto`)
  - `Derrota` (Vermelho carmesim / `badge-erro`)
  - `Próximo Jogo` (Dourado nobre / `badge-misto`)
- **Próximo Jogo Cadastrado:**
  - `30/10/2026`: **Corinthians x Mirassol** (Brasileirão Série A • 33ª Rodada) na Neo Química Arena, sob o comando do técnico Clarence Seedorf.

### 🔄 Modificado (Changed)
- **Feed em Ordem Cronológica Decrescente:** Todas as partidas de Outubro de 2026 dispostas do confronto mais recente para o início do mês:
  1. `30/10/2026`: Corinthians x Mirassol (Agendado às 20h00)
  2. `24/10/2026`: Vasco da Gama 3 x 2 Corinthians (32ª Rodada)
  3. `19/10/2026`: Corinthians 1 x 1 Vitória (31ª Rodada)
  4. `11/10/2026`: Palmeiras 4 x 1 Corinthians (30ª Rodada • Derby Paulista)
  5. `07/10/2026`: Internacional 2 x 1 Corinthians (29ª Rodada)
- **Apuração Precisa de Gols e Assistências:**
  - *Vasco 3 x 2 Corinthians:* Gols de Gustavo Henrique (cabeceio) e Matheus Bidu (desvio de peito); assistências de Breno Bidon (escanteio teleguiado) e Fabrizio Angileri (finalização cruzada forte).
  - *Corinthians 1 x 1 Vitória:* Gol de Yuri Alberto (pênalti no canto direito); lance capital e assistência na jogada por André Luiz (drible na área sofrendo a infração confirmada pelo VAR).
  - *Palmeiras 4 x 1 Corinthians:* Gol de Gustavo Henrique (cabeçada no ângulo); assistência de Rodrigo Garro (cruzamento milimétrico em escanteio).
  - *Internacional 2 x 1 Corinthians:* Gol de André Luiz (finalização rápida na pequena área); assistência de Breno Bidon (cruzamento rasteiro da ponta direita).
- **Placar Flexível:** Formatação inteligente da caixa de placar para partidas agendadas (exibindo o horário da partida ao invés de placar zerado).
- **Links Oficiais:** Atualização dos atalhos de busca de vídeos no YouTube para os melhores momentos de cada partida de Outubro de 2026.

---

## [1.0.0] - 2026-10-26

### 🎉 Lançamento Oficial do Portal "Salve o Corinthians"

Esta é a versão inaugural completa da plataforma independente, concebida para consolidar a história, transparência financeira, dossiê político e debate sobre o futuro do Sport Club Corinthians Paulista.

### ✨ Adicionado (Added)

#### 1. Interface & Design System Alvinegro
- **Design System Temático:** Arquitetura CSS com paleta de cores institucional (Preto profundo `#0a0a0c`, `#121316`, Branco `#ffffff`, Dourado Nobre `#d4af37` e Vermelho de Alerta `#e63946`).
- **Tipografia Moderna:** Integração com Google Fonts (*Montserrat* para cabeçalhos e títulos com peso 600-900; *Inter* para legibilidade de dados, relatórios e textos).
- **Efeitos Visuais & Glassmorphism:** Cards com bordas sutis translúcidas, sombras dinâmicas, desfoque de fundo e transições de hover suaves.
- **Responsividade Total:** Layout adaptável para smartphones, tablets, notebooks e telas widescreen com menu hambúrguer dinâmico.

#### 2. Barra de Juros em Tempo Real (Live Debt Ticker)
- Componente de cabeçalho persistente com cálculo dinâmico de juros da dívida do clube.
- Taxa estimada parametrizada em **R$ 8,57/segundo** (~R$ 740.000/dia) sobre a dívida consolidada de R$ 2,35 bilhões.
- Exibição de valor acumulado em tempo real (`R$ 0,00` incrementado a cada 100ms) e contador de tempo de permanência na página.

#### 3. Dossiê Histórico da Gestão (1910 - 2026)
- Base de dados com apuração cronológica e factual de todas as diretorias e épocas do Corinthians.
- Filtros interativos:
  - `Todos`: Visualização do panorama completo de 1910 a 2026.
  - `Acertos`: Conquistas de sede própria, profissionalização, criação do CT Joaquim Grava, futebol feminino hegemônico, títulos históricos.
  - `Erros / Críticos`: Parcerias traumáticas (Hicks Muse, MSI), inflação desenfreada de dívidas a curto prazo, contratações onerosas sem sustentabilidade, juros de financiamento da Arena e intermediações de patrocínio sob escrutínio.
  - `Mistos`: Períodos com taças relevantes combinadas com desorganização orçamentária.
- Cards estruturados com: Presidente/Gestor, Período, Resumo do Fato, Caixa de Impacto Positivo e Caixa de Impacto Negativo/Risco.

#### 4. Painel de Intervenção Judicial
- Análise técnica e imparcial sobre o debate de intervenção judicial no clube.
- Comparativo visual em colunas:
  - **Argumentos Favoráveis:** Auditoria judicial externa, congelamento emergencial de execuções fiscais, afastamento cautelar de gestores investigados.
  - **Riscos e Alertas:** Desestabilização política interna, risco de sanções da FIFA/CBF por ingerência estatal externa, lentidão no trâmite judiciário.
- Bloco explicativo sobre os caminhos legais: Ação Civil Pública, Recuperação Judicial (Lei 11.101/05 e Lei 14.193/21 - SAF) e Reforma Estatutária Popular.

#### 5. Balanço Financeiro & Gráficos Interativos (Chart.js)
- Integração da biblioteca Chart.js 4.4.1.
- **Gráfico 1 (Linha com gradiente):** Evolução da Dívida Consolidada de 2012 (R$ 180 mi) a 2026 (R$ 2,35 bi).
- **Gráfico 2 (Doughnut):** Composição do Passivo Atual (Dívida Tributária, Financiamento da Arena, Empréstimos Bancários, Direitos de Imagem/Atletas e Fornecedores).
- **Gráfico 3 (Barras comparativas):** Receitas Operacionais vs. Despesas do Futebol e Custos Financeiros.
- Indicadores-chave com cards de destaque (Dívida Total, Custo da Folha Salarial, Déficit Operacional e Juros Anuais).

#### 6. Simulador Interativo do Projeto SAFIEL
- Calculadora interativa para engajamento da Fiel Torcida.
- Controles de faixa (Sliders) para:
  - Número de torcedores participantes (100.000 a 5.000.000).
  - Valor da contribuição mensal (R$ 10 a R$ 200).
- Cálculo reativo instantâneo:
  - Arrecadação mensal estimada.
  - Arrecadação anual projetada.
  - Tempo estimado em meses/anos para zerar os R$ 2,35 bilhões da dívida do clube.
- Bloco de pilares do modelo SAFIEL: Governança profissional, transparência em blockchain/auditoria, participação democrática e proteção do patrimônio e escudo.

#### 7. Central de Jogos e Resultados
- Feed de partidas recentes e próximos compromissos em competições oficiais.
- Badges dinâmicos de resultado (Vitória, Empate, Derrota, Agendado), placares, estádio e data.

#### 8. Memorial de Títulos & Glórias
- Catálogo de conquistas históricas agrupadas por relevância: Mundiais da FIFA, Libertadores da América, Campeonatos Brasileiros, Copas do Brasil, Recopa e Estaduais.
- Filtros por competição e cards com anos de conquista e destaque dourado.

#### 9. Panteão dos Ídolos Eternos & Modal Interativo
- Galeria de lendas da história alvinegra (Sócrates, Marcelinho Carioca, Cássio, Rivellino, Luizinho, entre outros).
- Modal interativo ao clicar no card:
  - Biografia detalhada e período no clube.
  - Estatísticas de jogos e gols.
  - Relação de taças conquistadas.
  - Frases imortais declaradas sobre o amor ao Corinthians.
  - Análise do legado esportivo e cultural para a Fiel.

#### 10. Curadoria de Fontes e Transparência
- Mapeamento e citação de balanços auditados, relatórios da Ernst & Young, decisões judiciais e matérias de apuração jornalística (ge.globo, UOL Esporte, Gazeta Esportiva).

---

## [Não Lançado / Próximas Atualizações (Unreleased)]

### 🔮 Planejado
- Integração de API externa para placares e estatísticas de jogos em tempo real.
- Sistema de enquetes anônimas sobre a opinião da torcida acerca de modelos de SAF e voto do Fiel Torcedor.
- Exportação em PDF do Dossiê Completo para leitura e compartilhamento comunitário.
- Suporte a tema de alto contraste para acessibilidade avançada.
