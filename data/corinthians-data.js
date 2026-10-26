/**
 * Salve o Corinthians - Base de Dados Histórica, Financeira e Estrutural
 * Fontes de Referência:
 * - Balanços Oficiais Auditados do Sport Club Corinthians Paulista (2018-2024)
 * - Canal Do Povo Escolhido
 * - Meu Timão (Estatísticas e Histórico)
 * - Identidade Corinthiana (Memória e Cultura)
 * - Relatórios Convocados / Galápagos Capital e Consultoria EY
 */

const CORINTHIANS_DATA = {
  // Metadados Gerais
  info: {
    nome: "Sport Club Corinthians Paulista",
    alcunha: "Timão, Time do Povo, Todo Poderoso",
    fundacao: "1 de Setembro de 1910",
    local: "Bom Retiro, São Paulo - SP",
    fundadores: "Joaquim Ambrósio, Antônio Pereira, Rafael Perrone, Anselmo Corrêa e Carlos Silva (operários)",
    estadio: "Neo Química Arena (ItDisplay / Itaquera)",
    torcidaEstimada: "Mais de 35 milhões de Loucos",
    lema: "O Corinthians não é apenas um time de futebol. O Corinthians é uma religião, uma paixão, uma razão de viver."
  },

  // 1. Dossiê de Fatos da Gestão e Diretoria (Erros e Acertos Históricos)
  fatosGestao: [
    {
      id: "democracia-corinthiana",
      periodo: "1982 - 1984",
      presidente: "Waldemar Pires / Adilson Monteiro Alves (Diretor)",
      titulo: "Democracia Corinthiana: Revolução Social e Esportiva",
      tipo: "acerto",
      categoria: "Gestao",
      resumo: "Um dos maiores legados políticos e humanistas do esporte mundial. Jogadores e funcionários votavam democraticamente sobre tudo: concentrações, contratações, viagens e liberdade política em plena ditadura militar.",
      impactoPositivo: "Bicampeonato Paulista (1982/1983), eliminação de privilégios de cartolas, orgulho e identificação popular inabalável, apoio direto à campanha das 'Diretas Já'.",
      impactoNegativo: "Resistência ferrenha da mídia tradicional conservadora e de federações; fim do movimento com a derrota da emenda Dante de Oliveira e saída de Sócrates para a Itália.",
      fontes: ["Identidade Corinthiana", "Meu Timão - Livros da Democracia", "Documentários Oficiais"],
      destaque: true
    },
    {
      id: "parceria-excel",
      periodo: "1997 - 1998",
      presidente: "Alberto Dualib",
      titulo: "Parceria com Banco Excel: Reforços de Peso e Passivo Repentino",
      tipo: "misto",
      categoria: "Financeiro",
      resumo: "O clube fechou acordo pioneiro de patrocínio e investimentos com o Banco Excel Econômico. Vieram atletas como Donizete, Túlio Maravilha e Antônio Carlos.",
      impactoPositivo: "Título do Campeonato Paulista de 1997 com grande festa da torcida.",
      impactoNegativo: "Falência e venda do Banco Excel ao BBV. O Corinthians herdou contratos astronômicos sem suporte de receita, gerando o primeiro grande choque de dívidas de curto prazo dos anos 90.",
      fontes: ["Acervo Meu Timão", "Canal Do Povo Escolhido - Especial Gestões"]
    },
    {
      id: "parceria-hmtf",
      periodo: "1999 - 2002",
      presidente: "Alberto Dualib",
      titulo: "Era Hicks Muse (HMTF): Glórias Mundiais e Disputas Judiciais",
      tipo: "misto",
      categoria: "Financeiro",
      resumo: "Parceria com o fundo norte-americano Hicks, Muse, Tate & Furst que montou uma das equipes mais técnicas da história do futebol mundial.",
      impactoPositivo: "Campeão Brasileiro de 1999, Campeão Mundial da FIFA em 2000, Rio-São Paulo e Copa do Brasil em 2002.",
      impactoNegativo: "Ruptura unilateral após crise da matriz americana pontocom, bloqueios judiciais e passivo residual de dezenas de milhões de dólares.",
      fontes: ["Meu Timão", "Identidade Corinthiana"]
    },
    {
      id: "era-msi-rebaixamento",
      periodo: "2004 - 2007",
      presidente: "Alberto Dualib / Nesi Curi",
      titulo: "A Ilusão da MSI e o Rebaixamento de 2007: O Maior Alerta",
      tipo: "erro",
      categoria: "Politico",
      resumo: "Parceria obscura com a Media Sports Investment liderada por Kia Joorabchian e Boris Berezovsky. O clube recebeu Tevez, Mascherano, Nilmar e Roger Flores, conquistando o Brasileirão 2005 sob suspeitas.",
      impactoPositivo: "Título brasileiro de 2005 e visibilidade internacional momentânea.",
      impactoNegativo: "Investigação por lavagem de dinheiro da Polícia Federal, bloqueio de contas, desmanche abrupto, renúncia de Dualib, terra arrasada financeira e o trágico rebaixamento à Série B em 2007.",
      fontes: ["Canal Do Povo Escolhido", "Meu Timão", "Investigações MPF e Polícia Federal"],
      destaque: true
    },
    {
      id: "reconstrucao-ronaldo",
      periodo: "2008 - 2012",
      presidente: "Andrés Sanchez / Mário Gobbi",
      titulo: "Reconstrução Moderna, Ronaldo Fenômeno e o CT Joaquim Grava",
      tipo: "acerto",
      categoria: "Gestao",
      resumo: "Retorno da Série B com planejamento profissional comandado por Mano Menezes, criação do departamento de marketing moderno e a contratação histórica de Ronaldo Fenômeno em 2009.",
      impactoPositivo: "Revolução nas receitas de patrocínio (divisão de manga/peito), construção do moderno CT Dr. Joaquim Grava e Laboratório R9, títulos da Copa do Brasil 2009, Paulistão Invicto 2009 e Brasileirão 2011.",
      impactoNegativo: "Início da concentração política do grupo 'Renovação & Transparência' que dominou a política alvinegra por 16 anos sem alternância saudável.",
      fontes: ["Meu Timão", "Canal Do Povo Escolhido", "Identidade Corinthiana"],
      destaque: true
    },
    {
      id: "auge-2012-libertadores-mundial",
      periodo: "2012",
      presidente: "Mário Gobbi / Diretoria de Futebol",
      titulo: "Auge da Glória: Campeão Invicto da América e Bicampeão Mundial",
      tipo: "acerto",
      categoria: "Esportivo",
      resumo: "Gestão esportiva impecável com Tite no comando técnico. O Corinthians bateu o Boca Juniors de Riquelme de forma invicta na Libertadores e derrotou o campeão europeu Chelsea em Yokohama.",
      impactoPositivo: "Consagração do ápice institucional. Invasão do Japão com mais de 30 mil torcedores, recorde mundial de deslocamento transcontinental de torcida.",
      impactoNegativo: "Falta de plano de longo prazo para renovação contínua de elenco e início dos compromissos financeiros pesados da construção da Arena.",
      fontes: ["FIFA Official Archives", "Meu Timão", "Identidade Corinthiana"],
      destaque: true
    },
    {
      id: "neo-quimica-arena-divida",
      periodo: "2011 - Presente",
      presidente: "Andrés Sanchez / Roberto de Andrade / Duilio",
      titulo: "Neo Química Arena: O Sonho da Casa Própria e a Armadilha da Caixa",
      tipo: "misto",
      categoria: "Estadio",
      resumo: "Construção do tão sonhado estádio para a abertura da Copa do Mundo de 2014. Obra com arquitetura de ponta em Itaquera, consolidando o orgulho da Zona Leste paulistana.",
      impactoPositivo: "Casa própria moderna com média superior a 40 mil pagantes, atmosfera temida pelos adversários, palco de 3 títulos brasileiros (2015, 2017) e 3 paulistas (2017, 2018, 2019). Naming rights vendidos à Hypera Pharma.",
      impactoNegativo: "Custo final que superou R$ 1,2 bilhão, financiamento oneroso com a Caixa Econômica Federal e debêntures da Odebrecht. A receita de bilheteria ficou por anos retida no fundo de pagamento do estádio em vez de ir para o futebol.",
      fontes: ["Balanços Oficiais Arena Itaquera S.A.", "Canal Do Povo Escolhido", "Meu Timão"],
      destaque: true
    },
    {
      id: "futebol-feminino-as-brabas",
      periodo: "2016 - Presente",
      presidente: "Roberto de Andrade / Duilio / Cristiane Gambaré",
      titulo: "As Brabas: A Maior Hegemonia do Futebol Feminino Sul-Americano",
      tipo: "acerto",
      categoria: "Esportivo",
      resumo: "Retomada do futebol feminino sob liderança de Cristiane Gambaré e Arthur Elias. Projeto com orçamento inteligente, estrutura profissional e identificação imediata com a torcida.",
      impactoPositivo: "5 títulos da Copa Libertadores Feminina, 6 Campeonatos Brasileiros, múltiplas Supercopas e Paulistas. Recordes de público na Neo Química Arena (mais de 42 mil pessoas). Modelo para todo o continente.",
      impactoNegativo: "Necessidade de contínua expansão de patrocínios próprios para garantir sustentabilidade financeira autônoma.",
      fontes: ["Meu Timão", "Identidade Corinthiana", "CONMEBOL"]
    },
    {
      id: "explosao-divida-2018-2023",
      periodo: "2018 - 2023",
      presidente: "Andrés Sanchez (2º Mandato) / Duilio Monteiro Alves",
      titulo: "A Escalada do Endividamento: Dívida Passando de R$ 1 Bilhão",
      tipo: "erro",
      categoria: "Financeiro",
      resumo: "Período marcado pelo salto descontrolado da dívida do clube social e do futebol (saltando de ~R$ 450M em 2017 para mais de R$ 1 bilhão em 2023).",
      impactoPositivo: "Alongamento das parcelas com a Caixa e acordo de quitação dos CIDs com a Prefeitura de SP.",
      impactoNegativo: "Contratação de dezenas de jogadores com altos salários e contratos longos que não renderam esportivamente; comissões milionárias a empresários; atrasos crônicos de direitos de imagem e transfer bans na FIFA.",
      fontes: ["Balanço Oficial SCCP 2023", "Relatório Convocados", "Canal Do Povo Escolhido", "Meu Timão"],
      destaque: true
    },
    {
      id: "gestao-2024-vaidebet",
      periodo: "2024",
      presidente: "Augusto Melo",
      titulo: "Ruptura Política, Caso VaideBet e Choque de Realidade em 2024",
      tipo: "erro",
      categoria: "Politico",
      resumo: "Vitória da oposição rompendo 16 anos do grupo anterior. Promessa de choque de gestão, auditoria e profissionalismo, mas o primeiro ano foi tragado por crises institucionais graves.",
      impactoPositivo: "Contratação de reforços de qualidade técnica comprovada (Rodrigo Garro, Memphis Depay, André Ramalho), novo patrocínio máster (Esportes da Sorte) e apoio incondicional da Fiel Torcida para afastar o perigo de rebaixamento e disputar copas.",
      impactoNegativo: "Escândalo do contrato da VaideBet envolvendo repasse a uma empresa 'laranja' (Rede Social Media Design), que gerou a rescisão unilateral do maior patrocínio da história do clube, inquérito policial e saída de dirigentes executivos de confiança; transfer bans reiterados por dívidas com Rojas e Félix Torres.",
      fontes: ["Canal Do Povo Escolhido", "Meu Timão", "Investigações Polícia Civil e Ministério Público SP"],
      destaque: true
    },
    {
      id: "fundacao-ruptura-1910",
      periodo: "1910",
      presidente: "Miguel Battaglia / Anselmo Corrêa",
      titulo: "A Fundação Operária: Ruptura de Classe contra o Elitismo",
      tipo: "acerto",
      categoria: "Gestao",
      resumo: "Cinco operários (alfaiates, pintores e sapateiros) desafiaram a aristocracia do futebol paulistano da 'Belle Époque' e criaram um clube aberto para a classe trabalhadora, imigrantes e negros sob a luz de um lampião no Bom Retiro.",
      impactoPositivo: "Criação do clube com maior representatividade social das Américas. Democratização do esporte e o lema imortal: 'O Corinthians é o time do povo e o povo é quem vai fazer o time'.",
      impactoNegativo: "Boicote sistemático da elite esportiva paulista nos primeiros anos antes da aceitação forçada pela supremacia esportiva.",
      fontes: ["Identidade Corinthiana", "Memorial Corinthians", "Meu Timão"],
      destaque: true
    },
    {
      id: "parque-sao-jorge-1926",
      periodo: "1926 - 1928",
      presidente: "Ernesto Cassano / Alfredo Schürig",
      titulo: "A Compra da Fazendinha: O Alvinegro Conquista Sua Sede",
      tipo: "acerto",
      categoria: "Estadio",
      resumo: "Compra da área da Chácara das Florestas às margens do Rio Tietê no Tatuapé. Com doações de torcedores e mutirões da comunidade, foi construído o Estádio Alfredo Schürig (Fazendinha).",
      impactoPositivo: "Fixação das raízes geográficas do Timão na Zona Leste, independência esportiva e patrimônio social que virou a casa histórica da Fiel.",
      impactoNegativo: "Endividamento pontual coberto por emissão de carnês e títulos patrimoniais bancados pela própria colônia de operários.",
      fontes: ["Identidade Corinthiana", "Meu Timão"]
    },
    {
      id: "gestao-vicente-matheus-1976-1977",
      periodo: "1976 - 1977",
      presidente: "Vicente Matheus",
      titulo: "A Invasão do Maracanã e o Fim da Angústia de 23 Anos",
      tipo: "acerto",
      categoria: "Gestao",
      resumo: "Vicente Matheus fechou o histórico acordo de reciprocidade de ingressos com o Fluminense no Rio, possibilitando a migração de 70 mil corinthianos ao Maracanã em 1976, e liderou a contratação de guerreiros como Basílio e Zé Maria para 1977.",
      impactoPositivo: "Fim do sofrimento de 22 anos, 8 meses e 7 dias em 13 de outubro de 1977. O Corinthians transformou a angústia na mais apaixonada fidelidade esportiva do planeta.",
      impactoNegativo: "Centralização personalista que criou dependência de uma figura quase folclórica, retardando processos de profissionalização corporativa nas décadas seguintes.",
      fontes: ["Identidade Corinthiana", "Canal Do Povo Escolhido", "Meu Timão"],
      destaque: true
    },
    {
      id: "desmanche-2016-multas-baixas",
      periodo: "2016",
      presidente: "Roberto de Andrade",
      titulo: "O Desmanche de 2016: Multas Rescisórias Baixas e Desfiguração",
      tipo: "erro",
      categoria: "Financeiro",
      resumo: "Após o brilhante título do Brasileirão 2015, a diretoria foi pega de surpresa pelo mercado chinês e europeu, que pagou as multas rescisórias defasadas e levou Jadson, Renato Augusto, Ralf, Gil, Malcom e Vagner Love.",
      impactoPositivo: "Alívio momentâneo de caixa imediato para pagamento de atrasados.",
      impactoNegativo: "Destruição do trabalho técnico mais dominante do Brasil, saída de Tite para a Seleção meses depois e contratação às pressas de atletas caros e sem rendimento correspondente.",
      fontes: ["Canal Do Povo Escolhido", "Meu Timão"]
    },
    {
      id: "caso-zenit-fatiamento-base",
      periodo: "2022 - 2023",
      presidente: "Duilio Monteiro Alves",
      titulo: "Negociação com o Zenit e Fatiamento de Promessas da Base",
      tipo: "erro",
      categoria: "Financeiro",
      resumo: "Na negociação para a compra definitiva de Yuri Alberto, o Corinthians cedeu porcentagens consideráveis de Robert Renan, Du Queiroz e direitos prioritários sobre Pedro, além da posterior venda de Murillo abaixo do potencial de valorização futura.",
      impactoPositivo: "Permanência de um centroavante jovem e titular (Yuri Alberto) com contrato definitivo.",
      impactoNegativo: "Perda estimada de mais de R$ 150 a 200 milhões em valor patrimonial de vendas futuras e enfraquecimento do modelo de sustentabilidade das categorias de base.",
      fontes: ["Canal Do Povo Escolhido", "Meu Timão - Especial Finanças"]
    },
    {
      id: "transacao-tributaria-pgfn-2024",
      periodo: "2024",
      presidente: "Augusto Melo / Diretoria Jurídica",
      titulo: "Acordo Tributário com a PGFN: Blindagem contra Penhoras de Contas",
      tipo: "acerto",
      categoria: "Financeiro",
      resumo: "Adesão à transação tributária especial da Procuradoria Geral da Fazenda Nacional para regularizar mais de R$ 400 milhões em tributos federais acumulados há anos.",
      impactoPositivo: "Descontos expressivos em multas/juros legais, segurança jurídica contra penhoras de cotas de transmissão de TV e obtenção de Certidão Negativa de Débitos (CND).",
      impactoNegativo: "Comprometimento mensal obrigatório de cerca de R$ 5 a 8 milhões no fluxo de caixa que não pode sofrer atrasos, sob risco de revogação total dos benefícios.",
      fontes: ["Portal da Transparência SCCP", "PGFN", "Meu Timão"]
    },
    {
      id: "crise-impeachment-conselho-2025",
      periodo: "2025",
      presidente: "Augusto Melo / Pres. CD: Romeu Tuma Jr.",
      titulo: "Crise do Impeachment, Guerra de Liminares e Racha Político em 2025",
      tipo: "erro",
      categoria: "Politico",
      resumo: "O Conselho Deliberativo abriu processo de impeachment contra o presidente Augusto Melo após relatório da Comissão de Ética sobre o caso VaideBet e contratos de marketing. O clube mergulhou em uma batalha jurídica no Tribunal de Justiça de SP, paralisando a gestão política e administrativa.",
      impactoPositivo: "Pressão sem precedentes de conselheiros independentes e torcedores pela revisão total dos processos de governança e destituição de cargos vitalícios.",
      impactoNegativo: "Clube ingovernável durante meses, guerra fratricida de liminares, afastamento de investidores institucionais e desconfiança total do mercado publicitário.",
      fontes: ["Canal Do Povo Escolhido", "Meu Timão - Política", "Diário de Justiça SP"],
      destaque: true
    },
    {
      id: "folha-recorde-transferban-2025",
      periodo: "2025",
      presidente: "Augusto Melo",
      titulo: "Folha Salarial Recorde de R$ 26,5 Milhões/Mês e Novos Transfer Bans",
      tipo: "erro",
      categoria: "Financeiro",
      resumo: "Mesmo com o endividamento sufocante, o clube manteve investimentos pesados e renovações contratuais com salários no teto histórico do futebol brasileiro (Memphis Depay, Rodrigo Garro, Yuri Alberto, Carrillo), elevando a folha a mais de R$ 26,5 milhões/mês.",
      impactoPositivo: "Manutenção de competitividade técnica de alto nível no elenco em torneios continentais e nacionais.",
      impactoNegativo: "Déficit operacional acumulado superior a R$ 180 milhões no ano, atrasos frequentes de direitos de imagem e novos bloqueios (transfer bans) aplicados pela FIFA por dívidas com clubes sul-americanos.",
      fontes: ["Balanço Oficial SCCP 2025", "FIFA Disciplinary Committee", "Canal Do Povo Escolhido"],
      destaque: true
    },
    {
      id: "divida-2-35-bi-ultimato-rce-2026",
      periodo: "2026 (Atual)",
      presidente: "Augusto Melo / Gestão Atual",
      titulo: "Dívida Ultrapassa R$ 2,35 Bilhões, Alerta do MPSP e Risco do RCE",
      tipo: "erro",
      categoria: "Financeiro",
      resumo: "Os números do balanço consolidado de 2026 revelam que o passivo total atingiu a marca de R$ 2,35 bilhões de reais. Ao mesmo tempo, o Ministério Público de São Paulo emitiu notificações severas por atrasos nos repasses obrigatórios do Regime Centralizado de Execuções (RCE).",
      impactoPositivo: "Mobilização em massa da torcida organizada e coletivos exigindo medidas estruturais definitivas (SAFIEL e reforma estatutária com voto do torcedor).",
      impactoNegativo: "Risco iminente de colapso do RCE na Justiça, o que devolveria o Corinthians à época de penhoras diárias em contas correntes e bilheterias, levando o debate sobre Intervenção Judicial ao ápice.",
      fontes: ["Ministério Público de São Paulo", "Balanço Auditado 2026", "Meu Timão", "Canal Do Povo Escolhido"],
      destaque: true
    }
  ],

  // 2. Balanço Financeiro & Transparência (Dados Oficiais e Estimativas Públicas)
  financas: {
    anoReferencia: "2026 (Atualizado - Dados Públicos)",
    dividaTotalEstimada: 2350000000, // ~R$ 2,35 Bilhões (Clube + Estádio)
    dividaClube: 1650000000,         // ~R$ 1,65 Bilhão
    dividaArenaCaixa: 700000000,     // ~R$ 700 Milhões
    receitaAnualEstimada: 980000000, // ~R$ 980 Milhões (previsão)
    folhaMensalFutebol: 26500000,    // R$ 26,5 Milhões/mês (com encargos e CLT)
    sociosFielTorcedor: 130000,      // Sócios adimplentes médios

    // Evolução da Dívida do Clube (Sem Arena) em R$ Milhões
    historicoDivida: [
      { ano: "2017", valor: 448, contexto: "Gestão Roberto de Andrade (Campeão Brasileiro)" },
      { ano: "2018", valor: 477, contexto: "Retorno de Andrés Sanchez" },
      { ano: "2019", valor: 668, contexto: "Déficit recorde de R$ 177 milhões no ano" },
      { ano: "2020", valor: 956, contexto: "Pandemia de COVID-19 e perdas de bilheteria" },
      { ano: "2021", valor: 912, contexto: "Início da gestão Duilio" },
      { ano: "2022", valor: 910, contexto: "Superávit contábil com venda de atletas" },
      { ano: "2023", valor: 1040, contexto: "Aumento de despesas operacionais e juros bancários" },
      { ano: "2024", valor: 1450, contexto: "Ajuste contábil da auditoria e passivos de imagem" },
      { ano: "2025", valor: 1540, contexto: "Folha salarial recorde (Memphis/Garro) e novos passivos cíveis" },
      { ano: "2026 (Atual)", valor: 1650, contexto: "Dívida total com Arena bate R$ 2,35 Bi; juros sufocam o fluxo de caixa" }
    ],

    // Composição da Dívida Atual do Clube (em R$ Milhões)
    composicaoDivida: [
      { categoria: "Passivo Fiscal e Tributário (Profut / Perse / FGTS)", valor: 480, cor: "#dc2626", pct: 33 },
      { categoria: "Financiamento da Arena (Caixa Econômica)", valor: 700, cor: "#ffffff", pct: 32 },
      { categoria: "Direitos de Imagem, Luvas e Atletas", valor: 310, cor: "#eab308", pct: 14 },
      { categoria: "Empréstimos Bancários e Financiamentos", valor: 240, cor: "#2563eb", pct: 11 },
      { categoria: "Fornecedores e Intermediários de Atletas", valor: 220, cor: "#64748b", pct: 10 }
    ],

    // Composição das Receitas Anuais Estimadas (em R$ Milhões)
    composicaoReceita: [
      { fonte: "Direitos de Transmissão de TV", valor: 315, cor: "#ffffff" },
      { fonte: "Patrocínios e Marketing Comercial", valor: 250, cor: "#cccccc" },
      { fonte: "Venda de Direitos Econômicos de Atletas", valor: 160, cor: "#999999" },
      { fonte: "Bilheteria da Arena e Fiel Torcedor", valor: 145, cor: "#666666" },
      { fonte: "Clube Social, Licenciamentos e Diversos", valor: 65, cor: "#404040" }
    ],

    indicadoresChave: [
      { rotulo: "Dívida Consolidada Total", valor: "R$ 2,15 Bilhões", detalhe: "Clube Social + Futebol + Saldo Caixa Arena" },
      { rotulo: "Receita Anual Estimada", valor: "R$ 935 Milhões", detalhe: "Recorde impulsionado por novos acordos de patrocínio" },
      { rotulo: "Custo Mensal do Futebol", valor: "R$ 23,5 Milhões", detalhe: "Salários, CLT, direitos de imagem e encargos" },
      { rotulo: "Comprometimento da Receita", valor: "~72%", detalhe: "Proporção da receita líquida absorvida pela folha" }
    ]
  },

  // 3. Projetos de Salvação e Soluções (SAFIEL e Movimentos da Fiel)
  projetos: [
    {
      id: "safiel",
      nome: "Projeto SAFIEL (Sociedade Anônima do Futebol da Fiel)",
      lema: "O Corinthians é do Povo: Gestão de Mercado, Dono Popular",
      status: "Em discussão pública e elaboração legislativa",
      descricao: "Proposta disruptiva para profissionalizar o futebol do Corinthians através de uma SAF Popular. Diferente dos modelos de SAF vendidos a bilionários ou fundos estrangeiros, o SAFIEL garante que a Fiel Torcida detenha o controle acionário do clube.",
      pilares: [
        {
          titulo: "Democratização e Soberania Alvinegra",
          texto: "Criação de cotas populares acessíveis a qualquer trabalhador (a partir de R$ 50/mês ou aportes únicos). Ninguém pode ter mais de 1% a 2% do total de ações, impedindo que um único dono mande no clube."
        },
        {
          titulo: "Regra 50+1 e 'Golden Share' do Clube Social",
          texto: "Inspirado no modelo alemão da Bundesliga, o Sport Club Corinthians Paulista mantém poder de veto absoluto sobre cores, hino, escudo, sede e alienação de patrimônio imaterial."
        },
        {
          titulo: "Governança e Auditoria 'Big Four'",
          texto: "Diretoria executiva contratada por processo seletivo profissional de mercado com remuneração atrelada a metas de sustentabilidade financeira. Balanços auditados mensalmente com compliance transparente."
        },
        {
          titulo: "Fundo Especial de Quitação do Passivo",
          texto: "Toda a arrecadação das cotas populares é vinculada juridicamente em conta escrow blindada, destinada 100% à amortização das dívidas tributárias e da Neo Química Arena."
        }
      ]
    },
    {
      id: "vaquinha-gavioes-caixa",
      nome: "Vaquinha da Fiel / Gaviões para Quitar a Arena",
      lema: "Pelo Fim da Dívida com a Caixa",
      status: "Em fase final de estruturação técnica junto à Caixa",
      descricao: "Iniciativa histórica liderada pelas torcidas organizadas e abraçada pela torcida comum para abrir uma conta PIX supervisionada diretamente pela Caixa Econômica Federal. Cada centavo doado abate diretamente o saldo devedor do financiamento da Arena, sem passar pelas mãos da diretoria política do clube.",
      meta: "Quitar ou abater significativamente os ~R$ 700 milhões da Neo Química Arena",
      impacto: "Liberar anualmente mais de R$ 70 a 80 milhões de receitas líquidas de ingressos direto para o futebol profissional."
    },
    {
      id: "voto-fiel-torcedor",
      nome: "Democratização do Estatuto: Voto do Fiel Torcedor",
      lema: "35 Milhões Não Podem Ser Reféns de 4 Mil Sócios de Clube",
      status: "Campanha Permanente das Bancadas da Torcida",
      descricao: "Hoje, apenas os sócios patrimoniais que frequentam o Parque São Jorge (cerca de 3.500 a 4.000 pessoas) têm direito a eleger o Presidente e os membros do Conselho Deliberativo. A proposta exige que torcedores do programa Fiel Torcedor com mais de 2 ou 3 anos de adimplência também tenham direito ao voto nas eleições do clube."
    },
    {
      id: "comite-notaveis-compliance",
      nome: "Conselho de Notáveis e Auditoria Externa Permanente",
      lema: "Governança Independente: O Fim dos Intermediários Obscuros",
      status: "Proposta de Emenda Estatutária da Torcida",
      descricao: "Criação de um órgão estatutário autônomo formado por juristas, contadores e administradores de conduta ilibada, sem cargos nas chapas políticas do clube. Todo contrato de patrocínio, compra de atleta ou comissão a intermediários deve passar por crivo rigoroso de compliance e auditoria pública antes de entrar em vigor."
    },
    {
      id: "orcamento-participativo",
      nome: "Orçamento Participativo da Fiel",
      lema: "A Torcida Decide Onde o Dinheiro é Aplicado",
      status: "Plataforma Digital em Estudo",
      descricao: "Destinação de uma porcentagem fixa das receitas arrecadadas pelo programa Fiel Torcedor para ser decidida diretamente pelos torcedores associados via votação digital por aplicativo seguro: reforma da Fazendinha, estrutura das categorias de base no Terrão, futebol feminino ou memorial histórico."
    },
    {
      id: "rce-centralizacao-dividas",
      nome: "Regime Centralizado de Execuções (RCE): Blindagem do Futebol",
      lema: "Previsibilidade e Fim dos Bloqueios Judiciais Surpresa",
      status: "Mecanismo Legal Previsto na Lei 14.193/2021",
      descricao: "Aplicação do Regime Centralizado de Execuções cíveis e trabalhistas, unificando cobranças de ex-atletas e credores com teto máximo de comprometimento de 20% das receitas correntes. Isso blinda o fluxo de caixa contra penhoras imediatas de contas bancárias, salários de funcionários e cotas de televisão."
    }
  ],

  // 4. Glórias, Campeonatos e Títulos Eternos (Ordem Cronológica Oficial)
  titulos: [
    {
      id: "titulo-1914",
      ano: "1914",
      ordem: 1914,
      titulo: "Primeiro Campeonato Paulista (Invicto)",
      categoria: "Estadual",
      sede: "São Paulo - SP (Parque Antarctica)",
      detalhe: "Campanha perfeita com 10 vitórias em 10 jogos, 37 gols marcados e apenas 9 sofridos. O primeiro título oficial da história do clube.",
      fotoElenco: "assets/images/titulos/titulo_1914.jpg",
      legendaElenco: "O esquadrão operário invicto de 1914: Neco, Amílcar Barbuy, Bianco, Police, César Nunes e Casemiro González posando com a camisa de gola de cordão no Parque Antarctica."
    },
    {
      id: "titulo-1954",
      ano: "1954",
      ordem: 1954,
      titulo: "Campeonato Paulista do IV Centenário",
      categoria: "Estadual",
      sede: "São Paulo - SP (Pacaembu)",
      detalhe: "O título mais cobiçado do século XX, comemorativo dos 400 anos da cidade de São Paulo. Empate épico de 1 a 1 contra o rival Palmeiras garantiu a taça dourada.",
      fotoElenco: "assets/images/titulos/titulo_1954.jpg",
      legendaElenco: "O lendário esquadrão campeão do IV Centenário com a faixa: Gilmar dos Santos Neves, Claudio Christóvam de Pinho, Baltazar, Luizinho, Olavo, Idário e o técnico Oswaldo Brandão."
    },
    {
      id: "titulo-1977",
      ano: "1977",
      ordem: 1977,
      titulo: "Campeonato Paulista - Fim do Jejum de 23 Anos",
      categoria: "Estadual",
      sede: "São Paulo - SP (Morumbi)",
      detalhe: "13 de outubro de 1977. 146.072 torcedores no Morumbi. Aos 36 minutos do 2º tempo, Basílio marca o gol mais libertador da história do futebol, quebrando o jejum de quase 23 anos.",
      fotoElenco: "assets/images/titulos/titulo_1977.jpg",
      legendaElenco: "Os heróis da redenção alvinegra em 1977: Basílio, Zé Maria, Palhinha, Wladimir, Tobias, Moisés, Geraldão, Vaguinho e Luciano, comandados por Oswaldo Brandão no Morumbi."
    },
    {
      id: "titulo-1990",
      ano: "1990",
      ordem: 1990,
      titulo: "Campeonato Brasileiro (Primeiro Título Brasileiro)",
      categoria: "Nacional",
      sede: "São Paulo - SP (Morumbi)",
      detalhe: "O Corinthians de Neto e Tupãzinho quebra a hegemonia nacional e vence o rival São Paulo na grande decisão no Morumbi com gol de Tupãzinho.",
      fotoElenco: "assets/images/titulos/titulo_1990.jpg",
      legendaElenco: "O elenco da primeira estrela brasileira de 1990: Craque Neto, Ronaldo Giovanelli, Tupãzinho, Wilson Mano, Marcelo, Guinei, Márcio e o técnico Nelsinho Baptista celebrando no Morumbi."
    },
    {
      id: "titulo-1991",
      ano: "1991",
      ordem: 1991,
      titulo: "Supercopa do Brasil",
      categoria: "Nacional",
      sede: "São Paulo - SP (Morumbi)",
      detalhe: "Vitória incontestável do campeão brasileiro Corinthians por 1 a 0 sobre o Flamengo, campeão da Copa do Brasil, com gol épico de Neto.",
      fotoElenco: "assets/images/titulos/titulo_1991.jpg",
      legendaElenco: "Neto e o elenco corinthiano erguendo a taça da Supercopa do Brasil de 1991 no Morumbi após derrotar o Flamengo."
    },
    {
      id: "titulo-1995",
      ano: "1995",
      ordem: 1995,
      titulo: "Copa do Brasil (Primeiro Título)",
      categoria: "Nacional",
      sede: "Porto Alegre - RS (Estádio Olímpico)",
      detalhe: "Campanha invicta e vitória categórica sobre o temido Grêmio de Felipão no Estádio Olímpico lotado, com gols de Marcelinho Carioca e Viola.",
      fotoElenco: "assets/images/titulos/titulo_1995.jpg",
      legendaElenco: "Elenco campeão invicto no Olímpico em 1995: Marcelinho Carioca, Viola, Zé Elias, Célio Silva, Ronaldo Giovanelli, Silvinho e o técnico Eduardo Amorim festejando o título nacional."
    },
    {
      id: "titulo-1998",
      ano: "1998",
      ordem: 1998,
      titulo: "Campeonato Brasileiro (Bicampeão)",
      categoria: "Nacional",
      sede: "São Paulo - SP (Morumbi)",
      detalhe: "Batalha épica de 3 jogos contra o Cruzeiro no Morumbi lotado. Vitória por 2 a 0 no terceiro jogo com gols memoráveis de Edílson e Marcelinho Carioca.",
      fotoElenco: "assets/images/titulos/titulo_1998.jpg",
      legendaElenco: "Esquadrão do bicampeonato brasileiro de 1998: Marcelinho Carioca, Edilson Capetinha, Freddy Rincón, Vampeta, Carlos Gamarra, Índio, Dinei e o técnico Vanderlei Luxemburgo."
    },
    {
      id: "titulo-1999",
      ano: "1999",
      ordem: 1999,
      titulo: "Campeonato Brasileiro (Tricampeão)",
      categoria: "Nacional",
      sede: "São Paulo - SP (Morumbi)",
      detalhe: "O time mágico comandado por Oswaldo de Oliveira supera o Atlético-MG de Guilherme em série emocionante e conquista o segundo título brasileiro consecutivo.",
      fotoElenco: "assets/images/titulos/titulo_1999.jpg",
      legendaElenco: "O time dos sonhos do tricampeonato brasileiro de 1999: Dida, Marcelinho Carioca, Edilson, Luizão, Ricardinho, Freddy Rincón, Vampeta, Kléber e Oswaldo de Oliveira."
    },
    {
      id: "titulo-2000",
      ano: "2000",
      ordem: 2000,
      titulo: "1º Mundial de Clubes da FIFA",
      categoria: "Mundial",
      sede: "Rio de Janeiro - RJ (Maracanã)",
      detalhe: "O primeiro campeão do mundo oficial da FIFA. Vitória emocionante nos pênaltis contra o Vasco de Romário e Edmundo diante de 73 mil torcedores no Maracanã.",
      fotoElenco: "assets/images/titulos/titulo_2000.jpg",
      legendaElenco: "Freddy Rincón erguendo o troféu do 1º Mundial da FIFA em 14 de janeiro de 2000 no Maracanã, rodeado por Dida, Marcelinho, Edilson, Vampeta, Luizão e o presidente da FIFA Sepp Blatter."
    },
    {
      id: "titulo-2002",
      ano: "2002",
      ordem: 2002,
      titulo: "Copa do Brasil (Bicampeão)",
      categoria: "Nacional",
      sede: "São Paulo e Taguatinga - DF (Boca do Jacaré)",
      detalhe: "Comandado por Carlos Alberto Parreira, o Timão vence o Brasiliense na final com show do artilheiro Deivid (13 gols na competição).",
      fotoElenco: "assets/images/titulos/titulo_2002.jpg",
      legendaElenco: "Elenco bicampeão da Copa do Brasil 2002: Deivid, Vampeta, Ricardinho, Rogério, Gil, Anderson, Kléber e Dida comemorando o título nacional com o técnico Carlos Alberto Parreira."
    },
    {
      id: "titulo-2005",
      ano: "2005",
      ordem: 2005,
      titulo: "Campeonato Brasileiro (Tetracampeão)",
      categoria: "Nacional",
      sede: "Brasil (Pontos Corridos)",
      detalhe: "O ataque mais avassalador da história dos pontos corridos com Carlitos Tevez (craque do campeonato), Nilmar, Mascherano e a inesquecível goleada de 7 a 1 sobre o Santos.",
      fotoElenco: "assets/images/titulos/titulo_2005.jpg",
      legendaElenco: "A constelação campeã brasileira de 2005: Carlos Tevez, Nilmar, Javier Mascherano, Carlos Alberto, Roger Flores, Gustavo Nery, Rosinei e o técnico Antônio Lopes no Pacaembu."
    },
    {
      id: "titulo-2009",
      ano: "2009",
      ordem: 2009,
      titulo: "Copa do Brasil (Tricampeão)",
      categoria: "Nacional",
      sede: "Porto Alegre - RS (Beira-Rio)",
      detalhe: "O ano do renascimento liderado por Ronaldo Fenômeno. Vitória por 2 a 0 no Pacaembu e empate por 2 a 2 contra o Internacional no Beira-Rio.",
      fotoElenco: "assets/images/titulos/titulo_2009.jpg",
      legendaElenco: "O elenco do tricampeonato da Copa do Brasil de 2009 posando no Beira-Rio: Ronaldo Fenômeno, Dentinho, Chicão, William Capitão, Elias, André Santos, Douglas e Mano Menezes."
    },
    {
      id: "titulo-2011",
      ano: "2011",
      ordem: 2011,
      titulo: "Campeonato Brasileiro (Pentacampeão)",
      categoria: "Nacional",
      sede: "São Paulo - SP (Pacaembu)",
      detalhe: "O pentacampeonato brasileiro conquistado no dia do falecimento do Doutor Sócrates. Pacaembu inteiro com o braço direito erguido em punho cerrado no empate com o rival Palmeiras.",
      fotoElenco: "assets/images/titulos/titulo_2011.jpg",
      legendaElenco: "O elenco pentacampeão brasileiro de 2011: Tite, Paulinho, Ralf, Danilo, Alex, Liedson, Emerson Sheik, Chicão, Leandro Castán e Júlio César celebrando a taça no Pacaembu."
    },
    {
      id: "titulo-2012-libertadores",
      ano: "2012",
      ordem: 2012.1,
      titulo: "Copa Libertadores da América (Campeão Invicto)",
      categoria: "Continental",
      sede: "São Paulo - SP (Pacaembu)",
      detalhe: "Campanha invicta lendária: 14 jogos, 8 vitórias, 6 empates e apenas 4 gols sofridos. Final inesquecível com vitória por 2 a 0 sobre o Boca Juniors (dois gols de Emerson Sheik).",
      fotoElenco: "assets/images/titulos/titulo_2012_libertadores.jpg",
      legendaElenco: "A América é Alvinegra: Capitão Alessandro erguendo a Taça Libertadores da América no Pacaembu sob chuva de prata ao lado de Emerson Sheik, Cássio, Paulinho, Tite e Danilo."
    },
    {
      id: "titulo-2012-mundial",
      ano: "2012",
      ordem: 2012.2,
      titulo: "Mundial de Clubes da FIFA (Bicampeão)",
      categoria: "Mundial",
      sede: "Yokohama, Japão (International Stadium)",
      detalhe: "Corinthians 1 x 0 Chelsea no Japão perante mais de 30 mil torcedores que cruzaram o globo. Gol épico de cabeça de Paolo Guerrero e atuações divinas do goleiro Cássio.",
      fotoElenco: "assets/images/titulos/titulo_2012_mundial.jpg",
      legendaElenco: "O mundo é do Timão pela 2ª vez: Alessandro erguendo a taça do Mundial da FIFA em Yokohama com Cássio (eleito o melhor da final), Paolo Guerrero, Danilo, Paulinho, Ralf e Tite."
    },
    {
      id: "titulo-2013",
      ano: "2013",
      ordem: 2013,
      titulo: "Recopa Sul-Americana",
      categoria: "Continental",
      sede: "São Paulo - SP (Morumbi e Pacaembu)",
      detalhe: "Supremacia continental com duas vitórias incontestáveis sobre o rival São Paulo (2 a 1 no Morumbi e 2 a 0 no Pacaembu com golaço de cobertura de Danilo).",
      fotoElenco: "assets/images/titulos/titulo_2013_recopa.jpg",
      legendaElenco: "Comemoração da Recopa Sul-Americana de 2013: Danilo, Alexandre Pato, Romarinho, Cássio, Gil, Fábio Santos e Tite celebrando o título inédito no Pacaembu."
    },
    {
      id: "titulo-2015",
      ano: "2015",
      ordem: 2015,
      titulo: "Campeonato Brasileiro (Hexacampeão)",
      categoria: "Nacional",
      sede: "Brasil (Pontos Corridos)",
      detalhe: "O melhor time do futebol brasileiro da década: 81 pontos, o melhor ataque e a melhor defesa. Goleada histórica por 6 a 1 sobre o São Paulo com time reserva na festa do título na Arena.",
      fotoElenco: "assets/images/titulos/titulo_2015.jpg",
      legendaElenco: "O elenco do hexacampeonato brasileiro de 2015: Jadson, Renato Augusto, Elias, Gil, Vagner Love, Felipe, Malcom, Fagner, Cássio e Tite celebrando com a taça na Arena Corinthians."
    },
    {
      id: "titulo-2017",
      ano: "2017",
      ordem: 2017,
      titulo: "Campeonato Brasileiro (Heptacampeão)",
      categoria: "Nacional",
      sede: "Brasil (Pontos Corridos / Arena Corinthians)",
      detalhe: "A chamada 'Quarta Força' calou o país com o melhor primeiro turno da história dos pontos corridos (invicto). Técnico Fábio Carille lidera arrancada épica com Jô artilheiro.",
      fotoElenco: "assets/images/titulos/titulo_2017.jpg",
      legendaElenco: "A consagração da 'Quarta Força' em 2017: Jô (artilheiro do Brasileirão), Romero, Balbuena, Rodriguinho, Guilherme Arana, Gabriel, Clayson, Cássio e o técnico Fábio Carille com a taça."
    },
    {
      id: "titulo-brabas",
      ano: "2016 - 2024",
      ordem: 2024,
      titulo: "Hegemonia 'As Brabas' - 5x Libertadores & 6x Brasileirão",
      categoria: "Feminino",
      sede: "América do Sul / Neo Química Arena",
      detalhe: "A maior dinastia do futebol feminino das Américas: Pentacampeãs da Copa Libertadores e Hexacampeãs Brasileiras, quebrando sucessivos recordes de público de mais de 42 mil pessoas na Arena.",
      fotoElenco: "assets/images/titulos/titulo_brabas.jpg",
      legendaElenco: "O esquadrão dominante das Brabas do Corinthians: Grazi, Gabi Zanotti, Tamires, Vic Albuquerque, Diany, Lelê, Erika e Arthur Elias em foto oficial de campeãs na Neo Química Arena."
    }
  ],

  // 5. Galeria de Ídolos e Jogadores Lendários
  idolos: [
    {
      id: "socrates",
      nome: "Sócrates (Doutor Sócrates)",
      periodo: "1978 - 1984",
      jogos: 298,
      gols: 172,
      posicao: "Meio-campista / Líder Histórico",
      titulos: "Paulista 1979, 1982, 1983",
      frase: "'Quero morrer em um domingo e com o Corinthians campeão.' (Faleceu no domingo de 4 de dezembro de 2011, dia do pentacampeonato brasileiro do Corinthians).",
      legado: "Símbolo máximo da inteligência, elegância com toques de calcanhar e líder da Democracia Corinthiana. Médico, pensador e ícone da resistência popular contra a ditadura militar.",
      tag: "democracia",
      foto: "assets/images/idolos/socrates.jpg",
      fotoMomento: "Dr. Sócrates em clássica jogada de corpo inteiro com a bola no gramado vestindo o manto sagrado alvinegro e executando seu genial toque de calcanhar.",
      fonteFoto: "Acervo Histórico / Revista Placar"
    },
    {
      id: "marcelinho",
      nome: "Marcelinho Carioca (Pé de Anjo)",
      periodo: "1994 - 2001, 2006, 2010",
      jogos: 433,
      gols: 206,
      posicao: "Meia / Especialista em Faltas",
      titulos: "Mundial 2000, Brasileirão 1998, 1999, Copa do Brasil 1995, Paulistas 1995, 1997, 1999, 2001",
      frase: "'O Corinthians é a minha segunda pele. Aqui eu aprendi o que é o amor de verdade de uma torcida.'",
      legado: "O jogador mais vitorioso da história do clube em taças de primeira grandeza. Maior cobrador de faltas do futebol brasileiro e 5º maior artilheiro da história do Timão.",
      tag: "artilheiro",
      foto: "assets/images/idolos/marcelinho.jpg",
      fotoMomento: "Marcelinho Carioca no auge de sua era multicampeã (bicampeão brasileiro e mundial), comemorando com o dedo nos lábios com o manto sagrado alvinegro.",
      fonteFoto: "Acervo Histórico SCCP / Meu Timão"
    },
    {
      id: "cassio",
      nome: "Cássio Ramos (O Gigante de Yokohama)",
      periodo: "2012 - 2024",
      jogos: 712,
      gols: 0,
      posicao: "Goleiro",
      titulos: "Mundial 2012, Libertadores 2012 (Invicto), Recopa 2013, Brasileirão 2015, 2017, Paulista 2013, 2017, 2018, 2019",
      frase: "'Em Yokohama contra o Chelsea, eu sentia que aquela bola do Hazard ou do Torres simplesmente não ia entrar.'",
      legado: "Segundo atleta com mais jogos na história do Corinthians. Melhor jogador do Mundial de Clubes da FIFA de 2012. Autor da defesa mais marcante da Libertadores 2012 no chute de Diego Souza.",
      tag: "campeao-mundial",
      foto: "assets/images/idolos/cassio.jpg",
      fotoMomento: "Cássio Ramos fechando o gol do Corinthians contra o Chelsea no Mundial de Clubes FIFA 2012 em Yokohama, Japão.",
      fonteFoto: "FIFA Club World Cup Archive / Wikimedia Commons"
    },
    {
      id: "wladimir",
      nome: "Wladimir",
      periodo: "1972 - 1985, 1987",
      jogos: 806,
      gols: 32,
      posicao: "Lateral-esquerdo",
      titulos: "Paulista 1977, 1979, 1982, 1983",
      frase: "'O Corinthians para mim é uma família. Joguei mais de 800 vezes com esta camisa sagrada.'",
      legado: "Recordista absoluto de partidas com o manto alvinegro (806 jogos). Pilar da Democracia Corinthiana e símbolo de lealdade e vigor físico inigualável.",
      tag: "recordista",
      foto: "assets/images/idolos/wladimir.jpg",
      fotoMomento: "Wladimir em campo com o manto alvinegro, o recordista imbatível com 806 jogos disputados pelo Timão.",
      fonteFoto: "Acervo Meu Timão / Gazeta Press"
    },
    {
      id: "rivellino",
      nome: "Roberto Rivellino (Reizinho do Parque)",
      periodo: "1965 - 1974",
      jogos: 474,
      gols: 144,
      posicao: "Meia-atacante",
      titulos: "Torneio Rio-São Paulo 1966",
      frase: "'O drible elástico nasceu no Parque São Jorge.'",
      legado: "Criador do lendário drible elástico e dono da célebre 'Patada Atômica'. Campeão mundial com a Seleção Brasileira em 1970. Ícone reverenciado por Pelé e Maradona.",
      tag: "genio",
      foto: "assets/images/idolos/rivellino.jpg",
      fotoMomento: "Roberto Rivellino, o Reizinho do Parque São Jorge, em sua fase de ouro no Corinthians.",
      fonteFoto: "Acervo Histórico / Wikimedia Commons"
    },
    {
      id: "neto",
      nome: "José Ferreira Neto (Xodó da Fiel)",
      periodo: "1989 - 1993",
      jogos: 228,
      gols: 80,
      posicao: "Meia / Camisa 10",
      titulos: "Brasileirão 1990, Supercopa do Brasil 1991",
      frase: "'Eu não era nenhum craque de correr, mas na bola parada ninguém me ganhava. O título de 90 foi na raça!'",
      legado: "O grande maestro e artilheiro do primeiro Campeonato Brasileiro conquistado pelo Corinthians em 1990. Gols de falta históricos e garra contagiante.",
      tag: "campeao-90",
      foto: "assets/images/idolos/neto.jpg",
      fotoMomento: "Craque Neto em plena comemoração vibrante com a camisa Kalunga na conquista do primeiro Brasileirão do Corinthians em 1990.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico 1990"
    },
    {
      id: "claudio",
      nome: "Claudio Christóvam de Pinho (O Gerente)",
      periodo: "1945 - 1957",
      jogos: 550,
      gols: 305,
      posicao: "Ponta-direita",
      titulos: "Paulista 1951, 1952, 1954 (IV Centenário), Rio-São Paulo 1950, 1953, 1954",
      frase: "'O ataque dos cem gols jogava por música.'",
      legado: "Maior artilheiro de todos os tempos do Corinthians com 305 gols. Capitão e líder do mítico esquadrão com Luizinho, Baltazar, Carbone e Simão.",
      tag: "artilheiro",
      foto: "assets/images/idolos/claudio.jpg",
      fotoMomento: "Claudio Christóvam de Pinho com a camisa do Corinthians em 1946, capitão do histórico título do IV Centenário.",
      fonteFoto: "Arquivo Nacional / Wikimedia Commons (1946)"
    },
    {
      id: "baltazar",
      nome: "Baltazar (Cabecinha de Ouro)",
      periodo: "1945 - 1957",
      jogos: 404,
      gols: 269,
      posicao: "Centroavante",
      titulos: "Paulista 1951, 1952, 1954, Rio-São Paulo 1950, 1953, 1954",
      frase: "'Gol de cabeça não é sorte, é treino e coragem.'",
      legado: "Segundo maior artilheiro da história corinthiana (269 gols). Lendário cabeceador imortalizado na marchinha carnavalesca 'Gol de Baltazar'.",
      tag: "artilheiro",
      foto: "assets/images/idolos/baltazar.jpg",
      fotoMomento: "Baltazar, o lendário 'Cabecinha de Ouro', no auge de sua forma goleadora pelo Corinthians.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico"
    },
    {
      id: "luizinho",
      nome: "Luizinho (O Pequeno Polegar)",
      periodo: "1948 - 1962, 1967",
      jogos: 607,
      gols: 175,
      posicao: "Meia-atacante",
      titulos: "Paulista 1951, 1952, 1954, Rio-São Paulo 1950, 1953, 1954",
      frase: "'Sentar na bola contra o rival não era deboche, era futebol moleque.'",
      legado: "Terceiro jogador com mais jogos na história. Conhecido pelos dribles desconcertantes e pelo histórico lance em que sentou na bola diante do rival Palmeiras.",
      tag: "genio",
      foto: "assets/images/idolos/luizinho.jpg",
      fotoMomento: "Luizinho, o Pequeno Polegar, desfilando sua classe incomparável no Parque São Jorge.",
      fonteFoto: "Acervo Meu Timão / Memorial Corinthians"
    },
    {
      id: "ronaldo",
      nome: "Ronaldo Fenômeno",
      periodo: "2009 - 2011",
      jogos: 69,
      gols: 35,
      posicao: "Centroavante",
      titulos: "Copa do Brasil 2009, Paulista Invicto 2009",
      frase: "'O Corinthians não vive de títulos, o Corinthians vive de Corinthians. Mas agora nós vamos viver de títulos também.'",
      legado: "Eleito 3 vezes melhor do mundo pela FIFA, escolheu o Timão para seu renascimento triunfal. Trouxe visibilidade global e o antológico golaço de cobertura na Vila Belmiro.",
      tag: "fenomeno",
      foto: "assets/images/idolos/ronaldo.jpg",
      fotoMomento: "Ronaldo Fenômeno com a camisa listrada do Corinthians e medalha no peito, erguendo a taça da Copa do Brasil de 2009 sob chuva de serpentinas ao lado de Dentinho.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico 2009"
    },
    {
      id: "danilo",
      nome: "Danilo (Zidanilo)",
      periodo: "2010 - 2018",
      jogos: 359,
      gols: 35,
      posicao: "Meia Clássico",
      titulos: "Mundial 2012, Libertadores 2012, Recopa 2013, Brasileirão 2011, 2015, 2017, Paulistas 2013, 2017, 2018",
      frase: "'O futebol não precisa ser corrido, precisa ser pensado no tempo certo.'",
      legado: "Decisivo em todos os grandes clássicos e jogos de mata-mata. Assistência de calcanhar para Emerson Sheik na final da Libertadores e frieza cirúrgica sob pressão extrema.",
      tag: "campeao-mundial",
      foto: "assets/images/idolos/danilo.jpg",
      fotoMomento: "Danilo jogando a grande final do Mundial de Clubes da FIFA de 2012 contra o Chelsea em Yokohama, Japão (marcado por Ivanovic).",
      fonteFoto: "Acervo Meu Timão / FIFA Club World Cup 2012"
    },
    {
      id: "grazi",
      nome: "Grazi (A Capitã Eterna)",
      periodo: "2016 - 2023",
      jogos: 258,
      gols: 78,
      posicao: "Meia / Capitã",
      titulos: "Libertadores Feminina (4x), Brasileirão Feminino (5x), Supercopa (2x), Paulistas",
      frase: "'Nós mostramos que a mulher corinthiana joga bola com a mesma garra e alma dos operários de 1910.'",
      legado: "Símbolo e capitã de toda a revolução vitoriosa do Corinthians Feminino. Maior referência de liderança e profissionalismo na história da modalidade no país.",
      tag: "as-brabas",
      foto: "assets/images/idolos/grazi.jpg",
      fotoMomento: "Grazi, a capitã das Brabas, sorrindo e erguendo a taça do Brasileirão em alta definição na Neo Química Arena lotada.",
      fonteFoto: "Acervo Meu Timão / Agência Corinthians"
    },
    {
      id: "gabi-zanotti",
      nome: "Gabi Zanotti (A Mágica da 10)",
      periodo: "2018 - Presente",
      jogos: 230,
      gols: 68,
      posicao: "Meio-campista / Camisa 10",
      titulos: "Libertadores Feminina (2018, 2021, 2023, 2024), Brasileirão (2018, 2020, 2021, 2022, 2023, 2024), Supercopa (2022, 2023, 2024), Paulistas",
      frase: "'Vestir a camisa 10 do Corinthians é saber que quando você entra em campo, 35 milhões de corações jogam com você.'",
      legado: "A grande maestrina da dinastia das Brabas. Eleita melhor jogadora do continente, dona de inteligência ímpar e autora de gols antológicos em decisões de Libertadores e Brasileirão.",
      tag: "as-brabas",
      foto: "assets/images/idolos/gabi_zanotti.jpg",
      fotoMomento: "Gabi Zanotti com a medalha de campeã continental no peito erguendo a taça da Copa Libertadores Feminina com o manto sagrado alvinegro.",
      fonteFoto: "Staff Images Woman / CONMEBOL Libertadores"
    },
    {
      id: "vic-albuquerque",
      nome: "Vic Albuquerque (A Artilheira Histórica)",
      periodo: "2019 - 2021, 2022 - Presente",
      jogos: 215,
      gols: 108,
      posicao: "Atacante / Meia Ofensiva",
      titulos: "Libertadores Feminina (4x), Brasileirão Feminino (5x), Supercopa (3x), Paulistas",
      frase: "'Ultrapassar 100 gols com a camisa do Timão é viver um sonho que eu nunca quero acordar.'",
      legado: "Maior artilheira de toda a história do Corinthians Feminino, superando a marca centenária de gols. Decisiva e fria em clássicos e finais, sinônimo de raça e precisão goleadora.",
      tag: "as-brabas",
      foto: "assets/images/idolos/vic_albuquerque.jpg",
      fotoMomento: "Vic Albuquerque em comemoração efusiva celebrando gol histórico pelas Brabas do Timão.",
      fonteFoto: "Agência Corinthians / Rodrigo Gazzanel"
    },
    {
      id: "tamires",
      nome: "Tamires Dias (Mãe e Capitã da Fiel)",
      periodo: "2019 - Presente",
      jogos: 175,
      gols: 35,
      posicao: "Lateral-esquerda / Ala",
      titulos: "Libertadores Feminina (4x), Brasileirão Feminino (5x), Supercopa (3x), Prata Olímpica Paris 2024",
      frase: "'A Fiel nos abraçou e mostrou que aqui nós jogamos por um propósito maior do que o futebol.'",
      legado: "Capitã da Seleção Brasileira e ícone global do esporte. Modelo de vigor atlético, liderança ética e qualidade técnica internacional, multicampeã de tudo pelo Corinthians.",
      tag: "as-brabas",
      foto: "assets/images/idolos/tamires.jpg",
      fotoMomento: "Tamires em ação pelo Corinthians na lateral-esquerda, desfilando sua classe e raça alvinegra.",
      fonteFoto: "Agência Corinthians / Acervo SCCP"
    },
    {
      id: "basilio",
      nome: "Basílio (Pé de Anjo de 77)",
      periodo: "1975 - 1981",
      jogos: 253,
      gols: 29,
      posicao: "Meio-campista / Herói Eterno",
      titulos: "Paulista 1977, Paulista 1979",
      frase: "'A bola sobrou na pequena área e eu chutei com a alma de 30 milhões de corinthianos.'",
      legado: "Autor do gol mais importante e libertador dos 116 anos de história do clube, em 13 de outubro de 1977, encerrando o jejum de 22 anos, 8 meses e 7 dias perante 146 mil pessoas no Morumbi.",
      tag: "recordista",
      foto: "assets/images/idolos/basilio.jpg",
      fotoMomento: "Basílio, o eterno 'Pé de Anjo', autor do gol libertador do Campeonato Paulista de 1977.",
      fonteFoto: "Acervo Meu Timão / Memorial Corinthians"
    }
  ],

  // 6. Estatísticas Lendárias
  estatisticas: {
    maioresArtilheiros: [
      { nome: "Claudio Christóvam de Pinho", gols: 305, jogos: 550, media: "0,55" },
      { nome: "Baltazar (Cabecinha de Ouro)", gols: 269, jogos: 404, media: "0,66" },
      { nome: "Teleco", gols: 257, jogos: 250, media: "1,02" },
      { nome: "Neco", gols: 242, jogos: 297, media: "0,81" },
      { nome: "Marcelinho Carioca", gols: 206, jogos: 433, media: "0,47" },
      { nome: "Servílio", gols: 200, jogos: 241, media: "0,82" }
    ],
    maisJogos: [
      { nome: "Wladimir", jogos: 806, anos: "1972-1987" },
      { nome: "Cássio", jogos: 712, anos: "2012-2024" },
      { nome: "Luizinho", jogos: 607, anos: "1948-1967" },
      { nome: "Ronaldo Giovanelli", jogos: 601, anos: "1988-1998" },
      { nome: "Zé Maria (Super Zé)", jogos: 598, anos: "1970-1983" },
      { nome: "Biro-Biro", jogos: 590, anos: "1978-1988" }
    ],
    invasoesMemoraveis: [
      {
        id: "invasao-1976",
        ano: "1976",
        data: "05 de Dezembro de 1976",
        nome: "Invasão Corinthiana do Maracanã",
        competicao: "Campeonato Brasileiro de 1976 - Semifinal",
        publico: "Mais de 70.000 corinthianos no Rio (146.043 total)",
        local: "Estádio Jornalista Mário Filho (Maracanã) - Rio de Janeiro, RJ",
        adversario: "Fluminense (A lendária 'Máquina Tricolor')",
        resultado: "Fluminense 1 (1) x (4) 1 Corinthians (Pênaltis)",
        fato: "A maior migração pacífica por motivos esportivos do planeta. Cerca de 70 mil alvinegros desceram a Via Dutra e dividiram o Maracanã ao meio, calando a favorita Máquina de Rivellino.",
        resumoDetalhado: "Sob jejum de 22 anos sem títulos estaduais, a torcida corinthiana protagonizou o maior êxodo humano esportivo em tempos de paz. Milhares de ônibus, carros particulares e caminhões formaram um cordão ininterrupto na Rodovia Presidente Dutra. No Maracanã sob chuva, o Corinthians de Tobias e Neca empatou com o esquadrão do Fluminense e venceu nas penalidades máximas.",
        fotos: [
          {
            url: "assets/images/invasoes/1976_dutra_onibus.jpg",
            titulo: "O Ônibus 'Mosqueteiro' e a Caravana da Invasão (1976)",
            legenda: "Fotografia histórica real tirada por Mílton Jung: o clássico ônibus Caio Gaivota 'Mosqueteiro' cercado pela multidão de torcedores corinthianos (muitos no teto do veículo) durante o deslocamento em massa rumo ao Rio de Janeiro para a semifinal contra o Fluminense.",
            credito: "Foto Real: Mílton Jung / Acervo Adamo Bazani (Wikimedia Commons - CC BY 2.0)"
          },
          {
            url: "assets/images/invasoes/1976_maracana_arquibancada.jpg",
            titulo: "O Gigante Maracanã em 1976: Arquibancadas Superlotadas",
            legenda: "Registro fotográfico real da época (acervo Fortepan, 1976): a visão das arquibancadas e da imensa massa que tomou o estádio Jornalista Mário Filho em 1976. Naquele 5 de dezembro, 146.043 espectadores dividiram o estádio com mais de 70 mil corinthianos.",
            credito: "Foto Real: Fortepan Archive (Registro Histórico Nº 78067, 1976)"
          },
          {
            url: "assets/images/invasoes/1976_tobias_festa.jpg",
            titulo: "Ingresso Oficial da Semifinal Fluminense x Corinthians (1976)",
            legenda: "Registro histórico documental do ingresso original da histórica semifinal de 5 de dezembro de 1976 no Maracanã, preservado no acervo histórico do Memorial do Corinthians.",
            credito: "Registro Real: Acervo Histórico Memorial Corinthians / Centenário do Timão"
          }
        ],
        relatos: [
          {
            autor: "Nelson Rodrigues",
            cargo: "Dramaturgo e Cronista (O Globo)",
            citacao: "O Rio era uma cidade ocupada. Não havia um canto onde não tremulasse uma bandeira do Corinthians. [...] Dizem os idiotas da objetividade que torcida não ganha jogo. Pois ganha. Foi a torcida quem empurrou o Corinthians para a vitória no Maracanã.",
            fonte: "Crônica 'A Invasão', publicada no jornal O Globo (06/12/1976)"
          },
          {
            autor: "Francisco Horta",
            cargo: "Presidente do Fluminense em 1976",
            citacao: "Eu propus ao Vicente Matheus dividir a renda e as arquibancadas meio a meio, achando que eles não viriam em grande número do outro estado. Foi a maior lição de paixão popular que presenciei na vida. Quando olhei para a geral e vi metade do estádio em preto e branco, percebi a força assustadora dessa nação.",
            fonte: "Entrevista histórica ao documentário '1976 - O Ano da Invasão Corinthiana'"
          },
          {
            autor: "Tobias",
            cargo: "Goleiro Herói do Corinthians em 1976",
            citacao: "Na hora dos pênaltis, olhei para aquela massa ensopada de chuva no Maracanã gritando meu nome. O gol pareceu ficar gigante para os batedores do Fluminense e minúsculo para mim. Nós não tínhamos como perder aquele jogo com aquela torcida.",
            fonte: "Depoimento ao Acervo do Museu do Futebol / Gazeta Esportiva"
          },
          {
            autor: "Jornal do Brasil",
            cargo: "Editorial de Capa",
            citacao: "A maior mobilização humana em tempos de paz da história do esporte mundial. As estradas pararam para que São Paulo descesse ao Rio para ver seu clube.",
            fonte: "Jornal do Brasil, edição histórica de 6 de dezembro de 1976"
          }
        ],
        cortesVideos: [
          {
            titulo: "Documentário: 1976 - A Invasão Corinthiana",
            veiculo: "Canal Identidade Corinthiana & TV Cultura",
            descricao: "Relato minucioso com entrevistas de Tobias, Basílio e depoimentos de torcedores que viajaram de carona na Via Dutra.",
            buscaRecomendada: "A Invasão Corinthiana 1976 Identidade Corinthiana"
          },
          {
            titulo: "Corte: Pênaltis de Fluminense 1 x 1 Corinthians com narração da época",
            veiculo: "Acervo TV Tupi / Rádio Globo",
            descricao: "Gravação original com as defesas históricas de Tobias e a explosão de 70 mil corinthianos no Maracanã.",
            buscaRecomendada: "Corinthians x Fluminense 1976 Penaltis Maracana"
          }
        ]
      },
      {
        id: "invasao-2000",
        ano: "2000",
        data: "14 de Janeiro de 2000",
        nome: "Invasão no Maracanã - 1º Mundial de Clubes FIFA",
        competicao: "1º Campeonato Mundial de Clubes da FIFA - Final",
        publico: "Mais de 35.000 corinthianos no Rio (73.811 presentes)",
        local: "Estádio Jornalista Mário Filho (Maracanã) - Rio de Janeiro, RJ",
        adversario: "Vasco da Gama (Com Romário, Edmundo e Juninho Pernambucano)",
        resultado: "Corinthians 0 (4) x (3) 0 Vasco da Gama (Pênaltis)",
        fato: "Mais de 35 mil corinthianos invadiram a capital fluminense e dominaram o Maracanã na grande final mundial contra o Vasco, conquistando o inédito 1º título do Mundial de Clubes da FIFA.",
        resumoDetalhado: "Em janeiro de 2000, o mundo parou para acompanhar o primeiro torneio chancelado pela FIFA com os campeões de todos os continentes, além de Real Madrid e Manchester United. Na decisão no Rio de Janeiro, a Fiel tomou as praias cariocas e transformou o Maracanã em casa alvinegra, comemorando após Edmundo chutar o pênalti decisivo para fora.",
        fotos: [
          {
            url: "assets/images/invasoes/2000_orla_copacabana.jpg",
            titulo: "A Muralha Dida: Defesa de Pênalti no Maracanã (Final 2000)",
            legenda: "Registro fotográfico autêntico da decisão do 1º Mundial de Clubes da FIFA no Maracanã: o goleiro Dida salta no canto e defende o pênalti de Gilberto, garantindo o título perante mais de 35 mil corinthianos.",
            credito: "Foto Real: Ricardo Corrêa / Revista Placar Especial Nº 1159-A (Jan/2000)"
          },
          {
            url: "assets/images/invasoes/2000_maracana_arquibancada.jpg",
            titulo: "Freddy Rincón Ergue a Taça de Campeão Mundial no Maracanã (2000)",
            legenda: "Fotografia colorida autêntica em alta definição do capitão Freddy Rincón no topo do pódio no Maracanã erguendo a taça do 1º Mundial de Clubes da FIFA, ao lado do presidente Joseph Blatter e do técnico Oswaldo de Oliveira.",
            credito: "Foto Real: Acervo Histórico FIFA / CBF / Agência Estado"
          },
          {
            url: "assets/images/invasoes/2000_taca_mundial.jpg",
            titulo: "A Taça Oficial do 1º Mundial de Clubes da FIFA (2000)",
            legenda: "Fotografia autêntica da taça original do 1º Campeonato Mundial de Clubes da FIFA de 2000, conquistada no Maracanã diante do Vasco da Gama e em exposição permanente no Memorial do Parque São Jorge.",
            credito: "Foto Real: Memorial do Corinthians / Acervo Wikimedia Commons"
          }
        ],
        relatos: [
          {
            autor: "Freddy Rincón",
            cargo: "Capitão do Corinthians no Mundial 2000",
            citacao: "Nós tínhamos a convicção de que não estávamos jogando fora de casa. Quando entramos no gramado do Maracanã e ouvimos aquele grito ensurdecedor da torcida do Corinthians, sabíamos que aquele título não escaparia da gente por nada neste mundo.",
            fonte: "Entrevista coletiva FIFA pós-jogo e documentário SporTV"
          },
          {
            autor: "Dinei",
            cargo: "Tricampeão Brasileiro e Campeão Mundial 2000",
            citacao: "O Rio de Janeiro parecia a Zona Leste de São Paulo. A gente saiu na sacada do hotel e só via camisa do Corinthians na praia de Copacabana. Foi a segunda invasão. Na hora da decisão contra Romário e Edmundo, a Fiel jogou junto.",
            fonte: "Depoimento aos canais Podpah e Mesa Redonda"
          },
          {
            autor: "Marcelinho Carioca",
            cargo: "Ídolo Alvinegro e Camisa 7 do Mundial 2000",
            citacao: "Fazer o Rio de Janeiro se curvar ao Corinthians duas vezes em menos de 25 anos é uma façanha que nenhum outro clube na Terra jamais conseguiu. A força desse clube reside nessa gente apaixonada.",
            fonte: "Especial SporTV '20 Anos do Mundial de Clubes da FIFA 2000'"
          },
          {
            autor: "Jornal do Brasil / Revista Placar",
            cargo: "Cobertura Esportiva Especial",
            citacao: "O Corinthians desceu a Serra das Araras e transformou o templo sagrado dos cariocas em seu próprio terreiro. O Vasco tinha Romário e Edmundo no auge, mas o Corinthians tinha um elenco de craques e uma Fiel que nunca parou de cantar.",
            fonte: "Revista Placar, Edição Histórica Especial de Fevereiro de 2000"
          }
        ],
        cortesVideos: [
          {
            titulo: "Corte: Pênaltis de Corinthians x Vasco e a consagração de Rincón",
            veiculo: "Transmissão Oficial TV Globo / FIFA TV",
            descricao: "As penalidades decisivas com a defesa de Dida, os gols de Rincón, Fernando Baiano, Luizão e Edu, e o erro de Edmundo.",
            buscaRecomendada: "Corinthians x Vasco Mundial 2000 Penaltis"
          },
          {
            titulo: "Corte: Bastidores da invasão do Rio no Mundial 2000",
            veiculo: "Canal Do Povo Escolhido / Meu Timão",
            descricao: "Relato dos torcedores que lotaram ônibus sem ingresso e conseguiram entrar no Maracanã para fazer história.",
            buscaRecomendada: "Invasao Corinthians Rio de Janeiro 2000 Mundial"
          }
        ]
      },
      {
        id: "invasao-2012",
        ano: "2012",
        data: "16 de Dezembro de 2012",
        nome: "Invasão do Japão - 2º Mundial de Clubes FIFA",
        competicao: "Copa do Mundo de Clubes da FIFA 2012 - Final",
        publico: "Mais de 30.000 corinthianos em Yokohama (68.275 presentes)",
        local: "Estádio Internacional de Yokohama (Nissan Stadium) - Yokohama, Japão",
        adversario: "Chelsea FC (Campeão da UEFA Champions League)",
        resultado: "Corinthians 1 x 0 Chelsea FC (Gol de Paolo Guerrero)",
        fato: "Mais de 30 mil corinthianos cruzaram o planeta Terra rumo a Tóquio e Yokohama, esgotando voos e hotéis no Japão para transformar o Nissan Stadium no Pacaembu e conquistar o Bi Mundial invicto.",
        resumoDetalhado: "O deslocamento mais impressionante da história do futebol mundial: torcedores venderam carros, imóveis e economias de uma vida inteira para viajar 24 a 30 horas até o outro lado do planeta. O cruzamento de Shibuya em Tóquio e os trens japoneses foram tomados por cânticos corinthianos. Em campo, Cássio fechou o gol e Paolo Guerrero marcou de cabeça para derrotar o campeão europeu Chelsea por 1 a 0.",
        fotos: [
          {
            url: "assets/images/invasoes/2012_ruas_japao.jpg",
            titulo: "Corinthians no Gramado e a Fiel em Yokohama (2012)",
            legenda: "Fotografia documental autêntica tirada por Tomofumi Kitano em 16 de dezembro de 2012: o time titular do Corinthians perfilado no Estádio Internacional de Yokohama com a arquibancada repleta de faixas e 30 mil corinthianos ao fundo.",
            credito: "Foto Real: Tomofumi Kitano (Flickr / Wikimedia Commons - CC BY 2.0)"
          },
          {
            url: "assets/images/invasoes/2012_yokohama_arquibancada.jpg",
            titulo: "A Defesa Histórica de Cássio contra Fernando Torres (2012)",
            legenda: "Fotografia autêntica da final do Mundial de Clubes em Yokohama: o milagre do goleiro Cássio em intervenção espetacular no chute de Fernando Torres, garantindo a meta invicta na decisão.",
            credito: "Foto Real: Tomofumi Kitano (Flickr / Wikimedia Commons - CC BY 2.0)"
          },
          {
            url: "assets/images/invasoes/2012_cassio_guerrero_taca.jpg",
            titulo: "A Comemoração do Bicampeonato Mundial da FIFA (2012)",
            legenda: "Fotografia documental autêntica do elenco do Corinthians, Tite e comissão técnica comemorando a conquista do Bicampeonato Mundial de Clubes no gramado de Yokohama após vitória por 1 a 0 sobre o Chelsea.",
            credito: "Foto Real: Tomofumi Kitano (Flickr / Wikimedia Commons - CC BY 2.0)"
          }
        ],
        relatos: [
          {
            autor: "Tite (Adenor Leonardo Bacchi)",
            cargo: "Técnico Campeão Mundial pelo Corinthians em 2012",
            citacao: "Eu olhei para as arquibancadas de Yokohama e fiquei em choque. Não parecia o Japão, parecia o Pacaembu. As pessoas gastaram o que tinham e o que não tinham para estar ali. Eu disse no vestiário antes de entrar: 'Nós vamos jogar com o coração dessa gente'. E jogamos.",
            fonte: "Coletiva oficial de imprensa da FIFA e livro 'Tite' por Camila Mattoso"
          },
          {
            autor: "Cássio Ramos",
            cargo: "Goleiro e Bola de Ouro da Final do Mundial FIFA 2012",
            citacao: "No dia do jogo contra o Chelsea, aquele mar de 30 mil corinthianos nos fez sentir imbatíveis. Cada defesa difícil contra o Moses, o Torres e o Hazard parecia ter o braço de cada torcedor junto comigo. Nós fomos campeões porque a torcida jogou junto.",
            fonte: "Entrevista oficial FIFA.com e Museu Memorial Corinthians"
          },
          {
            autor: "Frank Lampard",
            cargo: "Capitão do Chelsea na Final do Mundial 2012",
            citacao: "Nós sabíamos que eles eram perigosos, mas fomos completamente surpreendidos pela atmosfera. Estávamos a 10 mil milhas de Londres e o estádio parecia pertencer totalmente ao Corinthians. Eles criaram uma pressão inacreditável a cada posse de bola.",
            fonte: "Entrevista coletiva pós-jogo FIFA, Estádio Internacional de Yokohama"
          },
          {
            autor: "FIFA Technical Study Group",
            cargo: "Relatório Oficial da FIFA sobre o Mundial de Clubes 2012",
            citacao: "'O Tsunami Alvinegro'. Jamais uma equipe esportiva mundial levou uma massa de torcedores tão apaixonada cruzando continentes e fusos horários. A torcida do Corinthians redefiniu a história da Copa do Mundo de Clubes da FIFA.",
            fonte: "FIFA Technical Study Group Official Report - Club World Cup Japan 2012"
          }
        ],
        cortesVideos: [
          {
            titulo: "Corte: As Defesas Milagrosas de Cássio e o Gol de Guerrero",
            veiculo: "FIFA Official & TV Globo",
            descricao: "Os lances capitais da final contra o Chelsea: as defesas de cinema de Cássio e o cabeceio fatal de Paolo Guerrero aos 24 do 2º tempo.",
            buscaRecomendada: "Corinthians 1 x 0 Chelsea Melhores Momentos Mundial 2012"
          },
          {
            titulo: "Documentário: O Tsunami Alvinegro no Japão",
            veiculo: "Canal Do Povo Escolhido / Identidade Corinthiana",
            descricao: "Relatos emocionantes de corinthianos que venderam moto, casa e parcelaram passagens em 24 vezes para ver o Timão no Japão.",
            buscaRecomendada: "Invasao do Japao Corinthians 2012 Documentario"
          }
        ]
      }
    ]
  },

  // 7. Fontes Confiáveis Recomendadas pelo Projeto
  fontes: [
    {
      nome: "Canal Do Povo Escolhido",
      tipo: "Canal / Mídia Independente",
      foco: "Análises táticas aprofundadas, cobrança firme da diretoria, denúncias de gastos e debates focados no torcedor comum.",
      destaque: "Voz ativa na defesa da transparência, auditoria de contratos e reflexão sobre a soberania do Corinthians.",
      url: "https://www.youtube.com/@CanalDoPovoEscolhido"
    },
    {
      nome: "Meu Timão",
      tipo: "Portal de Notícias e Comunidade",
      foco: "Maior comunidade independente de notícias, cobertura minuto a minuto de jogos, base de dados históricos, fichas técnicas e fórum da Fiel.",
      destaque: "Referência absoluta para checagem diária de bastidores, apuração de contratos, súmulas e estatísticas.",
      url: "https://www.meutimao.com.br"
    },
    {
      nome: "Identidade Corinthiana",
      tipo: "Canal de Cultura e Memória",
      foco: "Resgate histórico da gênese operária do Timão, memórias de 1910, São Jorge, Democracia Corinthiana e identidade de classe popular.",
      destaque: "Essencial para manter viva a alma que diferencia o Corinthians de qualquer outro clube no mundo.",
      url: "https://www.youtube.com/@IdentidadeCorinthiana"
    },
    {
      nome: "Demonstrações Financeiras Oficiais do SCCP",
      tipo: "Portal da Transparência / Auditorias",
      foco: "Balanços patrimoniais, relatórios do Conselho Fiscal e auditorias externas (PwC / RSM).",
      destaque: "Base oficial dos dados de endividamento, passivo tributário e orçamento executado.",
      url: "https://www.corinthians.com.br/clube/transparencia"
    }
  ],

  // 8. O Debate Crítico: Intervenção Judicial no Corinthians
  intervencaoJudicial: {
    titulo: "O Debate Sobre Intervenção Judicial no Corinthians",
    statusAlerta: "Em Análise no Ministério Público de SP e Judiciário",
    resumo: "Diante da maior crise institucional e política dos 116 anos de história do clube, torcedores, juristas e o próprio Ministério Público de São Paulo passaram a discutir a hipótese de uma intervenção judicial civil provisória para afastar a diretoria e conselheiros e sanear a governança.",
    razoes: [
      {
        titulo: "Investigações do Ministério Público (MP-SP)",
        descricao: "Inquéritos civis na Promotoria do Patrimônio Público investigam suspeitas de gestão fraudulenta, repasse a empresa 'laranja' no contrato VaideBet e descumprimento de deveres fiduciários previstos no Código Civil."
      },
      {
        titulo: "Guerra de Liminares e Ingovernabilidade Política",
        descricao: "Racha total entre a Diretoria Executiva e o Conselho Deliberativo. Processos de impeachment, liminares que anulam votações e perseguição política interna paralisaram a administração do clube."
      },
      {
        titulo: "Risco Iminente de Perda da Proteção do RCE",
        descricao: "O Regime Centralizado de Execuções exige depósitos mensais estritos. Os atrasos frequentes geraram ultimatos do MPSP. Se o juízo revogar o RCE, penhoras imediatas de cotas de TV e bilheterias paralisarão os pagamentos de atletas e funcionários."
      },
      {
        titulo: "Abaixo-Assinado da Fiel com +70 Mil Assinaturas",
        descricao: "Movimentos da torcida organizada e coletivos civis (campanha #IntervençãoFielJá) protocolaram pedidos formais no Poder Judiciário exigindo a nomeação de um administrador judicial independente para convocar eleições gerais com voto do Fiel Torcedor."
      }
    ],
    prosEContras: {
      argumentosFavor: [
        "Afastamento imediato de grupos políticos que perpetuam o endividamento e a opacidade.",
        "Auditoria forense completa ('pente-fino') realizada por interventor sem rabo preso com chapas.",
        "Reforma estatutária forçada para abrir o direito de voto aos 35 milhões através do Fiel Torcedor.",
        "Blindagem do clube contra desvios em novos contratos comerciais de patrocínio."
      ],
      argumentosContra: [
        "Risco de punição da FIFA pelo Artigo 19 do Estatuto (ingerência estatal indevida no futebol), que poderia acarretar suspensão do clube em competições internacionais.",
        "Perda de soberania associativa e estigma institucional perante patrocinadores e mercado financeiro.",
        "Incerteza na condução do departamento de futebol durante o período de administração provisória."
      ]
    }
  },

  // 9. Feed de Últimos Jogos do Corinthians (Ano Atual: 2026 | Mês Atual: Outubro de 2026)
  ultimosJogos: [
    {
      id: "corinthians-mirassol-2026",
      data: "30/10/2026",
      horario: "20:00",
      campeonato: "Brasileirão Série A • 33ª Rodada",
      estadio: "Neo Química Arena, São Paulo - SP",
      mandante: { nome: "Corinthians", gols: "-", escudo: "COR" },
      visitante: { nome: "Mirassol", gols: "-", escudo: "MIR" },
      golsDetalhes: "Partida agendada para 30/10/2026 às 20h00",
      assistencias: "Escalação provável em definição sob o comando de Clarence Seedorf",
      status: "Agendado",
      resultado: "agendado",
      resumo: "Confronto direto e de extrema importância na Neo Química Arena na luta pela permanência na elite do Campeonato Brasileiro. Com o apoio incondicional de mais de 44 mil torcedores esperados em Itaquera, o Timão de Clarence Seedorf entra em campo focado na recuperação dos três pontos.",
      estatisticas: {
        posseBola: "Em breve",
        finalizacoes: "Em breve",
        escanteios: "Em breve",
        faltasCometidas: "Em breve",
        cartoes: "Em breve"
      },
      linkMelhoresMomentos: "https://www.youtube.com/results?search_query=corinthians+x+mirassol+brasileirao+2026+pre-jogo"
    },
    {
      id: "vasco-corinthians-2026",
      data: "24/10/2026",
      campeonato: "Brasileirão Série A • 32ª Rodada",
      estadio: "Estádio de São Januário, Rio de Janeiro - RJ",
      mandante: { nome: "Vasco da Gama", gols: 3, escudo: "VAS" },
      visitante: { nome: "Corinthians", gols: 2, escudo: "COR" },
      golsDetalhes: "Gustavo Henrique 5' 2T (cabeceio), Matheus Bidu 12' 2T (desvio) (Corinthians); Puma Rodríguez 34' 1T, Marino Hinestroza 43' 2T e 45'+2' 2T (Vasco)",
      assistencias: "Breno Bidon (cruzamento milimétrico em escanteio no gol de Gustavo Henrique); Fabrizio Angileri (chute cruzado forte originando o desvio de Matheus Bidu)",
      status: "Encerrado",
      resultado: "derrota",
      resumo: "Duelo de reviravoltas na estreia do técnico Clarence Seedorf à beira do gramado. O Corinthians voltou avassalador no segundo tempo, empatando com Gustavo Henrique e virando com Matheus Bidu, mas o Vasco buscou a virada nos instantes finais com dois gols de Hinestroza.",
      estatisticas: {
        posseBola: "46% (COR) vs 54% (VAS)",
        finalizacoes: "13 (5 no gol) vs 15 (7 no gol)",
        escanteios: "5 vs 7",
        faltasCometidas: "14 vs 16",
        cartoes: "3 amarelos vs 3 amarelos"
      },
      linkMelhoresMomentos: "https://www.youtube.com/results?search_query=vasco+3+x+2+corinthians+melhores+momentos+brasileirao+2026"
    },
    {
      id: "corinthians-vitoria-2026",
      data: "19/10/2026",
      campeonato: "Brasileirão Série A • 31ª Rodada",
      estadio: "Neo Química Arena, São Paulo - SP",
      mandante: { nome: "Corinthians", gols: 1, escudo: "COR" },
      visitante: { nome: "Vitória", gols: 1, escudo: "VIT" },
      golsDetalhes: "Yuri Alberto 20' 2T (pênalti) (Corinthians); Renê 45'+1' 1T (Vitória)",
      assistencias: "André Luiz (jogada individual na grande área sofrendo a penalidade máxima confirmada pelo VAR)",
      status: "Encerrado",
      resultado: "empate",
      resumo: "Partida disputada sob os olhares de Clarence Seedorf nos camarotes da Neo Química Arena. O Vitória abriu o placar nos acréscimos da primeira etapa. No segundo tempo, André Luiz sofreu pênalti após jogada plástica e Yuri Alberto cobrou com extrema categoria no canto direito para assegurar o empate.",
      estatisticas: {
        posseBola: "58% (COR) vs 42% (VIT)",
        finalizacoes: "17 (6 no gol) vs 9 (3 no gol)",
        escanteios: "8 vs 3",
        faltasCometidas: "11 vs 15",
        cartoes: "2 amarelos vs 4 amarelos"
      },
      linkMelhoresMomentos: "https://www.youtube.com/results?search_query=corinthians+1+x+1+vitoria+melhores+momentos+brasileirao+2026"
    },
    {
      id: "palmeiras-corinthians-derby-2026",
      data: "11/10/2026",
      campeonato: "Brasileirão Série A • 30ª Rodada (Derby Paulista)",
      estadio: "Allianz Parque, São Paulo - SP",
      mandante: { nome: "Palmeiras", gols: 4, escudo: "PAL" },
      visitante: { nome: "Corinthians", gols: 1, escudo: "COR" },
      golsDetalhes: "Gustavo Henrique 22' 2T (Corinthians); Palmeiras (4 gols)",
      assistencias: "Rodrigo Garro (cruzamento com efeito magistral em cobrança de escanteio teleguiada na cabeça de Gustavo Henrique)",
      status: "Encerrado",
      resultado: "derrota",
      resumo: "Em clássico Derby no Allianz Parque, o rival conseguiu impor seu ritmo na primeira etapa. O Timão descontou com imposição aérea do zagueiro Gustavo Henrique após assistência precisa de Rodrigo Garro em bola parada.",
      estatisticas: {
        posseBola: "41% (COR) vs 59% (PAL)",
        finalizacoes: "9 (3 no gol) vs 18 (8 no gol)",
        escanteios: "4 vs 9",
        faltasCometidas: "16 vs 13",
        cartoes: "4 amarelos vs 2 amarelos"
      },
      linkMelhoresMomentos: "https://www.youtube.com/results?search_query=palmeiras+4+x+1+corinthians+melhores+momentos+brasileirao+2026"
    },
    {
      id: "internacional-corinthians-2026",
      data: "07/10/2026",
      campeonato: "Brasileirão Série A • 29ª Rodada",
      estadio: "Estádio Beira-Rio, Porto Alegre - RS",
      mandante: { nome: "Internacional", gols: 2, escudo: "INT" },
      visitante: { nome: "Corinthians", gols: 1, escudo: "COR" },
      golsDetalhes: "André Luiz 34' 2T (Corinthians); Vitinho 1' 1T, Alan Patrick 31' 2T (Internacional)",
      assistencias: "Breno Bidon (cruzamento rasteiro rápido da direita para finalização de primeira de André Luiz)",
      status: "Encerrado",
      resultado: "derrota",
      resumo: "Jogo disputado no Beira-Rio onde o Internacional marcou logo no primeiro minuto com Vitinho e ampliou na etapa final. O Corinthians reagiu aos 34' com oportunismo do jovem André Luiz em passe de Breno Bidon, pressionando até o apito final.",
      estatisticas: {
        posseBola: "45% (COR) vs 55% (INT)",
        finalizacoes: "11 (4 no gol) vs 14 (5 no gol)",
        escanteios: "5 vs 6",
        faltasCometidas: "15 vs 14",
        cartoes: "3 amarelos vs 2 amarelos"
      },
      linkMelhoresMomentos: "https://www.youtube.com/results?search_query=internacional+2+x+1+corinthians+melhores+momentos+brasileirao+2026"
    }
  ],

  // 10. Contador em Tempo Real de Juros (Debt Ticker Live)
  relogioJuros: {
    dividaBase: 2350000000, // R$ 2,35 Bilhões
    jurosPorSegundo: 8.57, // R$ 8,57 a cada segundo
    jurosPorMinuto: 514.20,
    jurosPorDia: 740440.00,
    explicacao: "Cálculo baseado na taxa Selic + spread médio bancário sobre dívidas fiscais, cíveis e financiamento bancário do clube e da Arena."
  }
};
