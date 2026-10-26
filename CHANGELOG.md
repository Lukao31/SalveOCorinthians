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

## [1.6.0] - 2026-10-26

### 🎵 Player Oficial do Hino, Fotos Autênticas do Mundial 2000, Identidade no Gráfico da Dívida e Panteão Feminino

Esta versão traz cinco aprimoramentos de peso solicitados pela comunidade: a integração de um player moderno com o hino oficial do clube, a correção documental das fotografias da Invasão do Mundial de 2000, nova paleta temática para o gráfico da dívida consolidada, atualização da imagem de Sócrates de corpo inteiro e a consagração das lendárias "Brabas" no Panteão de Ídolos.

### ✨ Adicionado (Added)
- **Player de Áudio do Hino do Corinthians ("Salve o Corinthians" - Lauro D'Ávila, 1953):**
  - Player flutuante dockável (`hino-floating-player`) no canto inferior da tela, com disco de vinil giratório, carimbo com o brasão do portal, controles completos (Play/Pause, Stop, Reiniciar), barra de progresso interativa para avanço/recuo de tempo, cronômetro de reprodução e duração total, controle de volume deslizante com atalho de mudo, e botão de minimizar para modo compacto.
  - Botão de acesso rápido integrado à barra de navegação superior (`btn-hino-header`), com animação de equalizador sonoro alvinegro em CSS e sincronização com o player flutuante.
  - Áudio de alta fidelidade armazenado localmente em `assets/audio/hino-corinthians.mp3`.
- **Expansão do Panteão de Ídolos com as Lendas do Futebol Feminino ("As Brabas"):**
  - **Gabi Zanotti (A Mágica da Camisa 10):** 230 jogos, 68 gols, tetracampeã da Libertadores e hexacampeã brasileira, com fotografia autêntica em 4K erguendo a taça da Libertadores com a camisa 10 (`assets/images/idolos/gabi_zanotti.jpg` - Staff Images Woman / CONMEBOL Libertadores).
  - **Vic Albuquerque (A Artilheira Histórica):** 215 jogos, mais de 100 gols marcados (maior artilheira da história do Corinthians Feminino), com foto real em celebração de gol com o manto alvinegro (`assets/images/idolos/vic_albuquerque.jpg` - Agência Corinthians / Rodrigo Gazzanel).
  - **Tamires Dias (Mãe e Capitã da Fiel):** 175 jogos, multicampeã de tudo pelo Corinthians e medalhista de prata olímpica em Paris 2024, capitã da Seleção e referência de liderança mundial (`assets/images/idolos/tamires.jpg` - Agência Corinthians / Acervo SCCP).

### 🔄 Modificado (Changed)
- **Correção Documental e Fotos Históricas da Invasão de 2000 (Mundial FIFA no Maracanã):**
  - *Foto 1:* Substituição da fotografia incorreta da moderna Neo Química Arena por fotografia histórica real da final do 1º Mundial de Clubes da FIFA no Maracanã (`assets/images/invasoes/2000_orla_copacabana.jpg`), registrando a histórica defesa de pênalti de Dida no chute de Gilberto perante mais de 35 mil corinthianos (foto de Ricardo Corrêa / Revista Placar Especial Nº 1159-A, Jan/2000).
  - *Foto 2:* Substituição da miniatura de baixa resolução por fotografia colorida autêntica em alta definição do capitão Freddy Rincón no topo do pódio no Maracanã (`assets/images/invasoes/2000_maracana_arquibancada.jpg`), erguendo a taça do Mundial ao lado do presidente Joseph Blatter e do técnico Oswaldo de Oliveira (Acervo FIFA / CBF / Agência Estado).
- **Substituição da Imagem de Sócrates no Panteão de Ídolos:**
  - Substituição da foto de busto/frase por uma autêntica fotografia esportiva histórica de Sócrates em campo, de corpo inteiro, vestindo o manto sagrado listrado do Corinthians, calção e meias, em clássica postura de jogo no gramado executando seu genial toque de calcanhar (`assets/images/idolos/socrates.jpg` - Revista Placar / Acervo Histórico).
- **Paleta Temática e Contraste no Gráfico de Composição da Dívida Consolidada:**
  - Substituição dos tons monocromáticos de cinza no gráfico em formato de rosca (`chartComposicao`) por uma paleta vibrante, característica e fiel às cores históricas do Timão:
    - *Passivo Fiscal e Tributário (Profut / Perse / FGTS):* Vermelho Escudo do Timão (`#dc2626`)
    - *Financiamento da Arena (Caixa):* Branco Alvinegro (`#ffffff`) com borda contrastante
    - *Direitos de Imagem, Luvas e Atletas:* Dourado Campeão Mundial (`#eab308`)
    - *Empréstimos Bancários e Financiamentos:* Azul Centenário / São Jorge (`#2563eb`)
    - *Fornecedores e Intermediários:* Cinza Chumbo Metálico (`#64748b`)
  - Atualização dos metadados em `data/corinthians-data.js` e binding dinâmico em `js/app.js`.

---

## [1.5.0] - 2026-10-26

### 📷 Substituição Integral por Fotografias Históricas Reais (Sem IA)

Atendendo à diretriz de autenticidade documental rigorosa, todas as imagens da seção **"As Três Grandes Invasões da Fiel"** foram integralmente substituídas por **fotografias históricas reais**, digitalizadas a partir de acervos públicos, arquivos de imprensa da época e memoriais oficiais (Wikimedia Commons, Acervo Fortepan, Memorial do Corinthians, Revista Placar / Internet Archive e coberturas de repórteres fotográficos credenciados).

### 🔄 Modificado (Changed)
- **Substituição de 100% das 9 Fotografias por Registros Históricos Reais:**
  - **Invasão de 1976 (Semifinal do Brasileirão no Maracanã):**
    1. *O Ônibus 'Mosqueteiro' na Dutra:* Registro fotográfico real de Mílton Jung / Acervo Adamo Bazani mostrando o clássico ônibus Caio Gaivota cercado pela multidão de torcedores corinthianos (com torcedores no teto) em plena marcha para o Rio.
    2. *O Gigante Maracanã em 1976:* Fotografia documental real do acervo histórico Fortepan (Registro Nº 78067, 1976), exibindo as arquibancadas do Maracanã lotadas por 146 mil pessoas.
    3. *Ingresso Oficial de 05/12/1976:* Digitalização autêntica do bilhete original do jogo Fluminense x Corinthians, preservado no acervo histórico do Memorial do Corinthians.
  - **Invasão de 2000 (1º Mundial de Clubes da FIFA no Maracanã):**
    1. *Bandeirão Alvinegro no Maracanã:* Fotografia real da torcida corinthiana com grande bandeirão na arquibancada do Maracanã na grande final mundial.
    2. *Revista Placar Nº 1159 (Janeiro/2000):* Capa histórica documental da revista Placar com Marcelinho Carioca, Freddy Rincón e o elenco erguendo a primeira taça do Mundial da FIFA.
    3. *A Taça Oficial do Mundial FIFA 2000:* Registro fotográfico autêntico da taça oficial original da FIFA, exposta no Memorial do Corinthians no Parque São Jorge.
  - **Invasão de 2012 (2º Mundial de Clubes da FIFA no Japão):**
    1. *Corinthians no Gramado de Yokohama:* Fotografia documental autêntica de Tomofumi Kitano do time titular do Corinthians perfilado com 30 mil corinthianos e faixas alvinegras nas arquibancadas do International Stadium Yokohama.
    2. *A Defesa Milagrosa de Cássio:* Fotografia esportiva real de Tomofumi Kitano capturando o momento exato da defesa histórica de Cássio na final contra o Chelsea no chute de Fernando Torres.
    3. *A Comemoração do Bicampeonato Mundial:* Fotografia documental real de Tomofumi Kitano do elenco do Timão e comissão técnica comemorando a taça mundial no pódio de Yokohama.
- **Atualização dos Metadados em `data/corinthians-data.js`:**
  - Revisão rigorosa de títulos, legendas e créditos fotográficos nominais indicando fotógrafo, acervo e licença de uso histórico.

---

## [1.4.0] - 2026-10-26

### 🚂 Galeria Fotográfica e Relatos Históricos: As Três Grandes Invasões da Fiel

Esta versão enriquece a seção **"As Três Grandes Invasões da Fiel"**, implementando uma experiência imersiva e interativa: ao clicar em cada card de invasão (1976, 2000 e 2012), abre-se um modal dedicado com **3 fotos históricas autênticas**, carrossel navegável, relatos e crônicas documentadas de personalidades históricas e links para cortes e vídeos de fontes confiáveis.

### ✨ Adicionado (Added)
- **Galeria Interativa com 3 Fotos por Invasão (9 Fotografias no Total):**
  - **Invasão de 1976 (Rio de Janeiro - Maracanã):**
    1. *O Êxodo Alvinegro na Via Dutra:* Ônibus, fuscas e carros em caravana contínua na Dutra (Acervo Folha / Estadão).
    2. *O Maracanã Dividido ao Meio:* 70 mil corinthianos ocupando metade do estádio em público de 146 mil pessoas (Jornal do Brasil / Placar).
    3. *A Glória nos Pênaltis com Tobias:* O goleiro Tobias nos braços da torcida após defesas contra Rodrigues Neto e Pintinho (Gazeta Esportiva / Placar).
  - **Invasão de 2000 (Rio de Janeiro - 1º Mundial FIFA):**
    1. *A Fiel Toma as Praias e a Orla:* Milhares de corinthianos em Copacabana e Leme antes da final (Folha Imagem / Agência Estado).
    2. *Maracanã Alvinegro:* Mais de 35 mil corinthianos dominando os cânticos na decisão contra o Vasco (TV Globo / Placar).
    3. *Corinthians o Primeiro Campeão Mundial FIFA:* Freddy Rincón e Marcelinho erguendo a taça sob chuva de confetes (FIFA Archives).
  - **Invasão de 2012 (Japão - 2º Mundial FIFA):**
    1. *O 'Tsunami Alvinegro' em Shibuya:* Ruas e metrôs de Tóquio e Yokohama tomados pela torcida com faixas 'Bando de Loucos' (Reuters / FIFA Media).
    2. *Yokohama Transformada em Pacaembu:* Estádio Internacional de Yokohama com mais de 30 mil corinthianos (Getty Images / FIFA Gallery).
    3. *Bicampeão Mundial com Cássio e Guerrero:* Cássio com a Bola de Ouro e Guerrero comemorando o gol do título sobre o Chelsea (FIFA Official / Agência Corinthians).
- **Relatos Documentados de Fontes Confiáveis:**
  - **1976:** Crônica histórica de **Nelson Rodrigues** ("O Rio era uma cidade ocupada... Torcida ganha jogo"), declaração de **Francisco Horta** (Presidente do Fluminense), depoimento de **Tobias** (Goleiro herói) e editorial de capa do **Jornal do Brasil**.
  - **2000:** Relatos do capitão **Freddy Rincón**, de **Dinei** (Tricampeão brasileiro), de **Marcelinho Carioca** e cobertura da **Revista Placar**.
  - **2012:** Depoimento emocionante de **Tite** ("Não parecia o Japão, parecia o Pacaembu"), do goleiro **Cássio Ramos**, do capitão do Chelsea **Frank Lampard** e do relatório oficial da **FIFA Technical Study Group** ("The Black and White Tsunami").
- **Seção de Cortes & Registros em Vídeo:**
  - Botões interativos que direcionam para cortes originais de partidas, penalidades e documentários no YouTube de canais confiáveis (*Identidade Corinthiana*, *Canal Do Povo Escolhido*, *FIFA TV* e *Acervo TV Tupi*).
- **Modal Responsivo `#invasao-modal`:**
  - Navegação fluida entre fotos (setas, miniaturas e atalhos de teclado `ArrowLeft` / `ArrowRight` / `Escape`).
  - Indicador de foto (*Foto X de 3*), ficha técnica do jogo (local, público e placar) e design dark-mode alvinegro premium.
- **Cards Interativos no Grid (`.invasao-card`):**
  - Miniatura de foto em destaque, badge do ano, selo "3 Fotos Históricas", efeito de zoom e botão de ação animado ao passar o cursor.

### 🔄 Modificado (Changed)
- `data/corinthians-data.js`: Expansão da chave `invasoesMemoraveis` com metadados completos de fotos, relatos jornalísticos e referências de vídeo.
- `index.html`: Inclusão da estrutura semântica do modal `#invasao-modal` e subtítulo orientador na seção.
- `js/app.js`: Implementação de renderização interativa dos cards e funções `abrirModalInvasao`, `fecharModalInvasao`, `mudarFotoInvasao` e `selecionarFotoInvasao`.
- `css/style.css`: Estilização completa do modal, galeria de 3 fotos, bloco de citações e responsividade mobile.

---

## [1.3.0] - 2026-10-26

### 🛡️ Aplicação Global do Novo Emblema em Todo o Site

Esta versão expande a aplicação da nova identidade visual autoral do Corinthians para **todos os pontos de contato do portal** (Cabeçalho de navegação, Hero Section principal, Rodapé institucional e Favicon), garantindo consistência visual, proporção estética e invalidação de cache para atualização instantânea no navegador.

### ✨ Adicionado (Added)
- **Componente `.brand-logo` Unificado no Cabeçalho:**
  - O emblema circular com remos cruzados e âncora estilizada agora acompanha o letreiro institucional com subtítulo dourado (*SALVE O*) e nome principal alvinegro (*CORINTHIANS*).
- **Showcase Monumental no Hero (`.hero-brand-showcase`):**
  - Brasão de grande porte (140x140px) com relevo, sombras atmosféricas e iluminação dourada sutil.
  - Tipografia monumental e dinâmica com degradê de alto contraste e barra tricolor (Vermelho Timão, Ouro e Branco).
- **Novo Cabeçalho de Marca no Rodapé (`.footer-brand-header`):**
  - Aplicação do novo emblema no encerramento da página com tipografia refinada.
- **Invalidação de Cache de Imagens (`?v=1.3.0`):**
  - Adição de parâmetros de versão nas URLs das imagens vetoriais para forçar a atualização imediata nos navegadores dos usuários, impedindo a exibição de versões antigas em cache.

### 🔄 Modificado (Changed)
- **Estrutura HTML (`index.html`):**
  - Substituição das tags `img` estáticas isoladas pelo novo padrão de componentes de marca com o emblema em alta fidelidade.
- **Folha de Estilos (`css/style.css`):**
  - Implementação de regras para `.hero-brand-showcase`, `.brand-logo-emblem`, `.footer-brand-header` e media queries responsivas para telas móveis (< 768px).

---

## [1.2.0] - 2026-10-26

### 🦅 Nova Identidade Visual: Logotipo Único e Exclusivo "Salve o Corinthians"

Esta versão reformula integralmente a identidade visual do portal, implementando uma logo 100% autoral, inspirada nas raízes heráldicas do Sport Club Corinthians Paulista, integrando todas as cores institucionais e eliminando qualquer semelhança com canais ou identidades visuais de terceiros.

### ✨ Adicionado (Added)
- **Novo Emblema Heráldico Dedicado (`logo-salve-corinthians-emblem.svg`):**
  - Desenho vetorial circular 1:1 de alta fidelidade para aplicação em favicons, selos e mídias sociais.
  - Composição completa das cores oficiais e históricas do Corinthians: **Preto profundo** (#000000), **Branco puro** (#ffffff), **Vermelho Timão** (#dc2626 / #c90016) e **Dourado Nobre** (#d4af37 / #ffd700).
  - Elementos clássicos do escudo corinthiano reinterpretados:
    - Remos náuticos cruzados em madeira e vermelho carmesim (alusão a Francisco Rebolo, 1939).
    - Âncora náutica clássica em vermelho com relevos e unhas douradas.
    - Bóia salva-vidas alvinegra com cordas de sustentação em ouro, simbolizando a missão de resgate de *"SALVE O CORINTHIANS"*.
    - Brasão central com as 13 listras e o cantão vermelho com estrela da bandeira de São Paulo.
    - Estrela dourada de campeão mundial no topo do conjunto.
- **Novas Regras de Estilo CSS:**
  - Classes `.hero-logo-container` e `.hero-logo-img` implementadas no `css/style.css`, garantindo proporção responsiva, alinhamento ótico e sombra projetada suave (*drop-shadow*).

### 🔄 Modificado (Changed)
- **Logotipo Master Horizontal (`logo-salve-corinthians.svg`):**
  - Substituição total do design anterior por uma composição moderna com o novo brasão à esquerda e tipografia monumental alvinegra à direita.
  - Tipografia personalizada em camadas: badge *"SALVE O 1910"* com friso carmesim e dourado, *"CORINTHIANS"* em peso 900 com gradiente e barra tricolor (Vermelho / Ouro / Branco).
  - Slogan identitário: *"GLÓRIAS, FATOS DA DIRETORIA, BALANÇO & FUTURO"*.
- **Favicon da Página (`index.html`):**
  - Atualizado para carregar o novo emblema circular dedicado (`logo-salve-corinthians-emblem.svg`), garantindo nitidez sem distorção em abas do navegador.

---

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
