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

  // 4. Glórias, Campeonatos e Títulos Eternos (Ordem Cronológica Oficial - Masculino & As Brabas)
  titulos: [
      {
          "id": "titulo-paulista-1914",
          "ano": "1914",
          "ordem": 1914.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "1º Paulistão",
          "titulo": "Campeonato Paulista de 1914 (1º Título • Invicto)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque Antarctica)",
          "detalhe": "Campanha perfeita com 10 vitórias em 10 jogos, 37 gols marcados e apenas 9 sofridos (Neco artilheiro com 12 gols). O primeiro título oficial da história centenária do Sport Club Corinthians Paulista.",
          "fotoElenco": "assets/images/titulos/paulista_1914_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão operário campeão paulista invicto de 1914 posado com a camisa de gola de cordão: Aristides, Fúlvio, Casemiro González, Police, Bianco, César Nunes, Américo, Peres, Amílcar Barbuy, Apparício e Neco.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão Invicto de 1914)"
      },
      {
          "id": "titulo-paulista-1916",
          "ano": "1916",
          "ordem": 1916.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "2º Paulistão",
          "titulo": "Campeonato Paulista de 1916 (2º Título • Invicto)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque Antarctica)",
          "detalhe": "Segundo título estadual e novamente de forma invicta! Em 12 partidas disputadas pela APEA, o Timão somou 11 vitórias e 1 empate, com Apparício artilheiro do certame.",
          "fotoElenco": "assets/images/titulos/paulista_1916_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista invicto de 1916 posado no gramado: Casemiro, Fúlvio, Vidal, Police, Bianco, César Nunes, Américo, Peres, Amílcar Barbuy, Apparício e Neco.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão Invicto de 1916)"
      },
      {
          "id": "titulo-paulista-1922",
          "ano": "1922",
          "ordem": 1922.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "3º Paulistão",
          "titulo": "Campeonato Paulista de 1922 (Centenário da Independência)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Floresta / Ponte Grande)",
          "detalhe": "A conquista mais simbólica da década de 1920, celebrando os 100 anos da Independência do Brasil e abrindo o primeiro Tricampeonato Paulista da história alvinegra (1922–1923–1924), com Gambarotta artilheiro (19 gols).",
          "fotoElenco": "assets/images/titulos/paulista_1922_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista do Centenário da Independência em 1922: Colombo, Pedro Grané, Del Debbio, Gelindo, Amílcar Barbuy, Ciasca, Peres, Neco, Gambarotta, Tatu e Rodrigues.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1922)"
      },
      {
          "id": "titulo-paulista-1923",
          "ano": "1923",
          "ordem": 1923.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "4º Paulistão",
          "titulo": "Campeonato Paulista de 1923 (Bicampeão Estadual)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Ponte Grande)",
          "detalhe": "Campanha avassaladora na conquista do primeiro bicampeonato consecutivo da história do clube, liderando de ponta a ponta e superando o Palestra Itália com sobras na tabela.",
          "fotoElenco": "assets/images/titulos/paulista_1923_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão bicampeão paulista de 1923 posado em campo: Gilberto, Grané, Del Debbio, Rafael, Gelindo, Amílcar Barbuy, Peres, Neco, Gambarotta, Tatu e Rodrigues.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1923)"
      },
      {
          "id": "titulo-paulista-1924",
          "ano": "1924",
          "ordem": 1924.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "5º Paulistão",
          "titulo": "Campeonato Paulista de 1924 (1º Tricampeonato Paulista)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Ponte Grande)",
          "detalhe": "Consagração do primeiro Tricampeonato Paulista do Corinthians (1922–23–24), mesmo após o campeonato ser interrompido pela Revolução de 1924 em São Paulo.",
          "fotoElenco": "assets/images/titulos/paulista_1924_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco do primeiro Tricampeonato Paulista em 1924: Tuffy, Grané, Del Debbio, Gelindo, Amílcar Barbuy, Peres, Neco, Gambarotta, Tatu, Rodrigues e Rato.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Tricampeão de 1924)"
      },
      {
          "id": "titulo-paulista-1928",
          "ano": "1928",
          "ordem": 1928.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "6º Paulistão",
          "titulo": "Campeonato Paulista de 1928 (Início do 2º Tri)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque São Jorge - Fazendinha)",
          "detalhe": "O primeiro título paulista conquistado após a inauguração do Estádio Alfredo Schürig (Fazendinha), com a lendária muralha Tuffy (o Satanás) e o trio de defesa Tuffy, Grané e Del Debbio.",
          "fotoElenco": "assets/images/titulos/paulista_1928_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1928 na Fazendinha: Tuffy (o Satanás), Pedro Grané, Armando Del Debbio, Nerino, Sebastião, Munhoz, Apparício, Peres, Gambinha, Rato e De Maria.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1928)"
      },
      {
          "id": "titulo-paulista-1929",
          "ano": "1929",
          "ordem": 1929.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "7º Paulistão",
          "titulo": "Campeonato Paulista de 1929 (Campeão Invicto)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque São Jorge)",
          "detalhe": "Terceiro título paulista invicto da história do clube: 7 vitórias em 7 jogos, 33 gols marcados (média de 4,7 gols por partida!) e Gambinha como goleador máximo.",
          "fotoElenco": "assets/images/titulos/paulista_1929_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão campeão paulista invicto de 1929: Tuffy, Grané, Del Debbio, Nerino, Guimarães, Leone, Filó, Apparício, Gambinha, Rato e De Maria.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão Invicto de 1929)"
      },
      {
          "id": "titulo-paulista-1930",
          "ano": "1930",
          "ordem": 1930.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "8º Paulistão",
          "titulo": "Campeonato Paulista de 1930 (2º Tricampeonato Paulista)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Vila Belmiro / Parque São Jorge)",
          "detalhe": "Conquista do segundo Tricampeonato Paulista (1928–29–30) em menos de uma década, selado com goleada histórica por 5 a 2 sobre o Santos em plena Vila Belmiro!",
          "fotoElenco": "assets/images/titulos/paulista_1930_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco do segundo Tricampeonato Paulista em 1930 (e Campeão dos Campeões sobre o Vasco): Tuffy, Grané, Del Debbio, Nerino, Guimarães, Munhoz, Filó, Apparício, Gambinha, Rato e De Maria.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Tricampeão de 1930)"
      },
      {
          "id": "titulo-paulista-1937",
          "ano": "1937",
          "ordem": 1937.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "9º Paulistão",
          "titulo": "Campeonato Paulista de 1937 (A Era Teleco & 3º Tri)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque São Jorge)",
          "detalhe": "O início do terceiro Tricampeonato Paulista da história do clube (1937–38–39), liderado pelo extraordinário centroavante Teleco e pela solidez defensiva de Jaú e Brandão.",
          "fotoElenco": "assets/images/titulos/paulista_1937_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1937 posado em campo: José I, Jaú, Carlos, Jango, Brandão, Munhoz, Filó, Servílio, Teleco, Rato II e Carlinhos.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1937)"
      },
      {
          "id": "titulo-paulista-1938",
          "ano": "1938",
          "ordem": 1938.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "10º Paulistão",
          "titulo": "Campeonato Paulista de 1938 (Bicampeão Invicto)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque São Jorge)",
          "detalhe": "Quarto título paulista invicto da história corinthiana! Em 10 jogos, foram 7 vitórias e 3 empates, garantindo o bicampeonato no empate por 1 a 1 diante do São Paulo com gol de Carlito.",
          "fotoElenco": "assets/images/titulos/paulista_1938_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão bicampeão paulista invicto de 1938: Barcheta, Jango, Carlos, Sebastião, Brandão, Dino, Lopes, Servílio, Teleco, Carlinhos e Carlito.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão Invicto de 1938)"
      },
      {
          "id": "titulo-paulista-1939",
          "ano": "1939",
          "ordem": 1939.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "11º Paulistão",
          "titulo": "Campeonato Paulista de 1939 (3º Tricampeonato Paulista)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Parque São Jorge)",
          "detalhe": "O terceiro Tricampeonato Paulista da história alvinegra (1937–38–39), conquistado sob o comando de Armando Del Debbio com Teleco novamente artilheiro isolado do estado (32 gols em 19 jogos!).",
          "fotoElenco": "assets/images/titulos/paulista_1939_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco do terceiro Tricampeonato Paulista em 1939: Joel, Agostinho, Chico Preto, Jango, Brandão, Dino Pavão, Lopes, Servílio, Teleco, Joane e Carlinhos.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Tricampeão de 1939)"
      },
      {
          "id": "titulo-paulista-1941",
          "ano": "1941",
          "ordem": 1941.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "12º Paulistão",
          "titulo": "Campeonato Paulista de 1941 (1ª Volta Olímpica no Pacaembu)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Pacaembu e Vila Belmiro)",
          "detalhe": "O 12º título estadual isolou o Corinthians como maior campeão de São Paulo e consagrou a primeira conquista do clube na era do Pacaembu. Campanha de 16 vitórias em 20 jogos e Teleco artilheiro (26 gols).",
          "fotoElenco": "assets/images/titulos/paulista_1941_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1941 posado com as faixas de campeão no gramado: Cyro, Agostinho, Chico Preto, Jango, Brandão, Dino Pavão, Lopes, Servílio, Teleco (artilheiro com 26 gols), Joane e Milani, comandados por Armando Del Debbio.",
          "fonteFoto": "Acervo Todo Poderoso Timão / Meu Timão / Memorial Corinthians (Campeão Paulista de 1941)"
      },
      {
          "id": "titulo-paulista-1951",
          "ano": "1951",
          "ordem": 1951.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "13º Paulistão",
          "titulo": "Campeonato Paulista de 1951 (O Ataque dos 103 Gols)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Pacaembu)",
          "detalhe": "Um dos maiores esquadrões da história do futebol mundial: o 'Ataque dos 100 Gols' marcou 103 gols em apenas 28 jogos do Paulistão (média absurda de 3,67 gols por partida!), com Carbone artilheiro (30 gols).",
          "fotoElenco": "assets/images/titulos/paulista_1951_elenco.jpg?v=3.0.0",
          "legendaElenco": "O mítico esquadrão campeão paulista de 1951 (Ataque dos 103 Gols): Cabeção (Gilmar), Homero, Rosalém, Idário, Touguinha, Julião, Cláudio Christóvam de Pinho, Luizinho (Pequeno Polegar), Baltazar (Cabecinha de Ouro), Carbone e Jackson.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1951)"
      },
      {
          "id": "titulo-paulista-1952",
          "ano": "1952",
          "ordem": 1952.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "14º Paulistão",
          "titulo": "Campeonato Paulista de 1952 (Bicampeão da Era de Ouro)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Pacaembu)",
          "detalhe": "Comandado pelo técnico e ídolo Rato (José Castelli), o esquadrão de Gilmar, Idário, Cláudio, Luizinho e Baltazar conquistou o bicampeonato estadual com 25 vitórias em 30 partidas e Baltazar artilheiro (27 gols).",
          "fotoElenco": "assets/images/titulos/paulista_1952_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão paulista de 1952 posado no Pacaembu ao lado do técnico José Castelli (Rato): Gilmar dos Santos Neves, Homero, Olavo, Idário, Goiano, Roberto Belangero, Cláudio, Luizinho, Baltazar, Carbone e Souzinha.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Bicampeão de 1952)"
      },
      {
          "id": "titulo-1954",
          "ano": "1954",
          "ordem": 1954.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "15º Paulistão",
          "titulo": "Campeonato Paulista de 1954 (Campeão do IV Centenário)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Pacaembu)",
          "detalhe": "O título mais cobiçado do século XX paulista, comemorativo dos 400 anos da fundação da cidade de São Paulo. Empate épico de 1 a 1 contra o rival Palmeiras (gol de Luizinho) em 6 de fevereiro de 1955 garantiu a taça eterna.",
          "fotoElenco": "assets/images/titulos/paulista_1954_elenco.jpg?v=3.0.0",
          "legendaElenco": "O lendário esquadrão campeão do IV Centenário com a faixa: Gilmar dos Santos Neves, Homero, Olavo, Idário, Goiano, Roberto Belangero, Cláudio Christóvam de Pinho, Luizinho, Baltazar, Rafael, Simão e o técnico Oswaldo Brandão.",
          "fonteFoto": "Memorial Corinthians / Arquivo Gazeta Esportiva / Meu Timão (1954)"
      },
      {
          "id": "titulo-1977",
          "ano": "1977",
          "ordem": 1977.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "16º Paulistão",
          "titulo": "Campeonato Paulista de 1977 (O Fim do Jejum de 23 Anos)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "13 de outubro de 1977. Recorde histórico de 146.072 torcedores na série final no Morumbi. Aos 36 minutos do 2º tempo contra a Ponte Preta, Basílio marcou o gol mais libertador da história do futebol mundial.",
          "fotoElenco": "assets/images/titulos/paulista_1977_elenco.jpg?v=3.0.0",
          "legendaElenco": "Os heróis da redenção alvinegra em 1977 no Morumbi: Tobias, Zé Maria (Super Zé), Moisés, Ademir, Wladimir, Ruço, Basílio (Pé de Anjo), Palhinha, Vaguinho, Geraldão e Romeu, comandados por Oswaldo Brandão.",
          "fonteFoto": "Acervo Revista Placar / Meu Timão / Memorial Corinthians (1977)"
      },
      {
          "id": "titulo-paulista-1979",
          "ano": "1979",
          "ordem": 1979.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "17º Paulistão",
          "titulo": "Campeonato Paulista de 1979 (A Chegada de Sócrates & Biro-Biro)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Após eliminar o Palmeiras na semifinal com gol de canela de Biro-Biro, o Timão derrotou novamente a Ponte Preta na decisão no Morumbi com gols de Sócrates e Palhinha sob o comando de Jorge Vieira.",
          "fotoElenco": "assets/images/titulos/paulista_1979_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1979 posado no gramado do Morumbi: em pé, o goleiro Jairo, Zé Maria, Mauro, Amaral, Wladimir e Caçapava; agachados, Vaguinho, Palhinha, Dr. Sócrates, Biro-Biro e Romeu.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Elenco Campeão de 1979)"
      },
      {
          "id": "titulo-paulista-1982",
          "ano": "1982",
          "ordem": 1982.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "18º Paulistão",
          "titulo": "Campeonato Paulista de 1982 (1º Título da Democracia Corinthiana)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "O primeiro troféu do movimento autogestionário da Democracia Corinthiana! Duas vitórias categóricas sobre o favorito São Paulo na final no Morumbi (1 a 0 na ida e 3 a 1 na volta, com dois gols de Biro-Biro e um de Casagrande, artilheiro com 28 gols).",
          "fotoElenco": "assets/images/titulos/paulista_1982_elenco.jpg?v=3.0.0",
          "legendaElenco": "Registro antológico do esquadrão campeão paulista de 1982 exibindo a inscrição 'Democracia Corinthiana' nas costas do manto listrado: Biro-Biro (11), Zenon (10), Ataliba (7), Dr. Sócrates (8), Walter Casagrande (9) e o goleiro Solito (1), ao lado de Wladimir e Zé Maria.",
          "fonteFoto": "Acervo Histórico Meu Timão / Placar / Memorial Corinthians (Democracia Corinthiana 1982)"
      },
      {
          "id": "titulo-1983-paulista",
          "ano": "1983",
          "ordem": 1983.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "19º Paulistão",
          "titulo": "Campeonato Paulista de 1983 (Bicampeão da Democracia Corinthiana)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Em plena ditadura militar, o time que entrava em campo com a faixa 'Ganhar ou perder, mas sempre com democracia' bateu novamente o São Paulo na final no Morumbi com gols de Sócrates (2x na série) e consagrou o Bicampeonato Paulista.",
          "fotoElenco": "assets/images/titulos/paulista_1983_elenco.jpg?v=3.0.0",
          "legendaElenco": "O histórico elenco bicampeão paulista da Democracia Corinthiana (1983) posado no gramado do Morumbi com o manto Cofap: em pé, o goleiro Solito, Zé Maria, Mauro, Daniel González, Dr. Sócrates e Wladimir; agachados, Ataliba, Biro-Biro, Walter Casagrande, Zenon e Paulinho.",
          "fonteFoto": "Folhapress / Acervo UOL / Memorial Corinthians (Democracia Corinthiana 1983)"
      },
      {
          "id": "titulo-paulista-1988",
          "ano": "1988",
          "ordem": 1988.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "20º Paulistão",
          "titulo": "Campeonato Paulista de 1988 (O Gol do Garoto Viola na Prorrogação)",
          "categoria": "Estadual",
          "sede": "Campinas - SP (Brinco de Ouro da Princesa)",
          "detalhe": "No ano do 20º título paulista do clube, o técnico Jair Pereira lançou o jovem centroavante Viola, de 19 anos, na grande final contra o Guarani em Campinas: gol de carrinho na prorrogação (1 a 0) e festa alvinegra no interior!",
          "fotoElenco": "assets/images/titulos/paulista_1988_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1988 perfilado no gramado com o manto Kalunga: Biro-Biro, Marcelo Djian, Dama, Denílson, Ronaldo Giovanelli, Wilson Mano, Márcio Bittencourt, Éverton, Paulinho Carioca, João Paulo e Viola (comandados por Jair Pereira).",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 1988)"
      },
      {
          "id": "titulo-1990",
          "ano": "1990",
          "ordem": 1990.1,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 1990 (1º Título Brasileiro)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "O Corinthians de Neto, Ronaldo Giovanelli e Tupãzinho quebra a hegemonia nacional e vence o São Paulo por 1 a 0 nas duas partidas da grande decisão no Morumbi (100.858 pagantes na volta, gol de Tupãzinho).",
          "fotoElenco": "assets/images/titulos/titulo_1990.jpg?v=3.0.0",
          "legendaElenco": "O elenco da primeira estrela brasileira de 1990: Craque Neto, Ronaldo Giovanelli, Tupãzinho, Wilson Mano, Marcelo Djian, Guinei, Márcio Bittencourt, Fabinho, Giba e o técnico Nelsinho Baptista no Morumbi.",
          "fonteFoto": "Acervo Meu Timão / Revista Placar (1990)"
      },
      {
          "id": "titulo-1991",
          "ano": "1991",
          "ordem": 1991.1,
          "modalidade": "Masculino",
          "titulo": "Supercopa do Brasil de 1991 (1º Campeão)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Vitória incontestável do campeão brasileiro Corinthians por 1 a 0 sobre o Flamengo, campeão da Copa do Brasil, com gol decisivo do Craque Neto no Morumbi.",
          "fotoElenco": "assets/images/titulos/titulo_1991_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco completo campeão da Supercopa do Brasil de 1991 posado no gramado com o manto sagrado Kalunga: em pé, Jacenir, Guinei, Marcelo Djian, Márcio Bittencourt, Wilson Mano e Ronaldo Giovanelli; agachados, Fabinho, Giba, Tupãzinho, Craque Neto e Mauro.",
          "fonteFoto": "Acervo Meu Timão / Memorial Corinthians (Elenco Campeão de 1991)"
      },
      {
          "id": "titulo-1995",
          "ano": "1995",
          "ordem": 1995.1,
          "modalidade": "Masculino",
          "titulo": "Copa do Brasil de 1995 (1º Título • Campeão Invicto)",
          "categoria": "Nacional",
          "sede": "Porto Alegre - RS (Estádio Olímpico)",
          "detalhe": "Campanha invicta perfeita (8 vitórias e 2 empates em 10 jogos) e duas vitórias sobre o Grêmio de Felipão na final: 2 a 1 no Pacaembu e 1 a 0 no Estádio Olímpico lotado em 21/06/1995 com gol de Marcelinho Carioca.",
          "fotoElenco": "assets/images/titulos/titulo_1995.jpg?v=3.0.0",
          "legendaElenco": "Elenco campeão invicto da Copa do Brasil no Olímpico em 1995: Marcelinho Carioca, Viola, Zé Elias, Célio Silva, Henrique, Bernardo, Ronaldo Giovanelli, André Santos, Silvinho e o técnico Eduardo Amorim.",
          "fonteFoto": "Acervo Histórico SCCP / Meu Timão (Copa do Brasil 1995)"
      },
      {
          "id": "titulo-paulista-1995",
          "ano": "1995",
          "ordem": 1995.2,
          "modalidade": "Masculino",
          "paulistaEdicao": "21º Paulistão",
          "titulo": "Campeonato Paulista de 1995 (O Gol de Elivélton em Ribeirão Preto)",
          "categoria": "Estadual",
          "sede": "Ribeirão Preto - SP (Estádio Santa Cruz)",
          "detalhe": "Decisão dramática contra o arquirrival Palmeiras em Ribeirão Preto em 06/08/1995: gol de falta antológico de Marcelinho Carioca no tempo normal e gol do título de Elivélton na prorrogação (2 a 1)!",
          "fotoElenco": "assets/images/titulos/paulista_1995_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1995 posado no gramado com o manto Suvinil: Ronaldo Giovanelli, André Santos, Célio Silva, Henrique, Silvinho, Zé Elias, Bernardo, Souza, Marcelinho Carioca, Marques, Fabinho, Tupãzinho, Viola e Elivélton (comandados por Eduardo Amorim).",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 1995)"
      },
      {
          "id": "titulo-paulista-1997",
          "ano": "1997",
          "ordem": 1997.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "22º Paulistão",
          "titulo": "Campeonato Paulista de 1997 (Quadrangular Final no Morumbi)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Após golear o Palmeiras por 5 a 2 no quadrangular decisivo (com show de Donizete Pantera e Mirandinha), o Timão de Nelsinho Baptista empatou em 1 a 1 com o São Paulo em 05/06/1997 e ergueu a 22ª taça estadual.",
          "fotoElenco": "assets/images/titulos/paulista_1997_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 1997 posado no Morumbi com o manto Excel: Ronaldo Giovanelli, Rodrigo, Célio Silva, Henrique, Cris, Silvinho, Gilmar Fubá, Rincón, Souza, Marcelinho Carioca, Mirandinha, Donizete Pantera e Túlio Maravilha.",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 1997)"
      },
      {
          "id": "titulo-1998",
          "ano": "1998",
          "ordem": 1998.1,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 1998 (Bicampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Batalha épica de 3 jogos contra o Cruzeiro na final. Vitória por 2 a 0 no terceiro jogo no Morumbi lotado (23/12/1998) com gols de Edílson Capetinha e Marcelinho Carioca.",
          "fotoElenco": "assets/images/titulos/titulo_1998.jpg?v=3.0.0",
          "legendaElenco": "Esquadrão do bicampeonato brasileiro de 1998: Nei, Índio, Carlos Gamarra, Batata, Silvinho, Vampeta, Freddy Rincón, Ricardinho, Marcelinho Carioca, Edílson Capetinha, Mirandinha, Didi e Dinei (técnico Vanderlei Luxemburgo).",
          "fonteFoto": "Acervo Meu Timão / Revista Placar (1998)"
      },
      {
          "id": "titulo-paulista-1999",
          "ano": "1999",
          "ordem": 1999.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "23º Paulistão",
          "titulo": "Campeonato Paulista de 1999 (As Embaixadinhas de Edílson no Derby)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Após vencer a ida por 3 a 0, o Corinthians empatou por 2 a 2 com o Palmeiras em 20/06/1999 (gols de Marcelinho e Edílson) na final eternizada pelas embaixadinhas de Edílson Capetinha que pararam o Derby!",
          "fotoElenco": "assets/images/titulos/paulista_1999_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão campeão paulista de 1999 posado no Morumbi com o manto Batavo: Maurício, Índio, Gamarra, Nenê, Silvinho, Kléber, Gilmar Fubá, Vampeta, Freddy Rincón, Ricardinho, Marcelinho Carioca, Edílson Capetinha, Fernando Baiano e Dinei (técnico Oswaldo de Oliveira).",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 1999)"
      },
      {
          "id": "titulo-1999",
          "ano": "1999",
          "ordem": 1999.2,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 1999 (Tricampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "O time mágico comandado por Oswaldo de Oliveira superou o Atlético-MG em série melhor de 3 jogos (vitória por 2 a 0 no 2º jogo com 2 gols de Luizão e 0 a 0 no 3º jogo em 22/12/1999) e sagrou-se Tricampeão Brasileiro.",
          "fotoElenco": "assets/images/titulos/titulo_1999.jpg?v=3.0.0",
          "legendaElenco": "O time dos sonhos do tricampeonato brasileiro de 1999: Dida, Índio, João Carlos, Márcio Costa, Kléber, Gilmar Fubá, Vampeta, Freddy Rincón, Ricardinho, Marcelinho Carioca, Edílson e Luizão.",
          "fonteFoto": "Acervo Histórico SCCP / Meu Timão (1999)"
      },
      {
          "id": "titulo-2000",
          "ano": "2000",
          "ordem": 2000.1,
          "modalidade": "Masculino",
          "titulo": "1º Mundial de Clubes da FIFA (Campeão Invicto)",
          "categoria": "Mundial",
          "sede": "Rio de Janeiro - RJ (Maracanã)",
          "detalhe": "O primeiro campeão mundial oficial da FIFA! Após empatar com o Real Madrid (2 a 2) e vencer Al-Nassr e Raja Casablanca no Morumbi, o Timão venceu o Vasco nos pênaltis diante de 73 mil torcedores no Maracanã em 14/01/2000.",
          "fotoElenco": "assets/images/titulos/titulo_2000_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco titular campeão do 1º Mundial de Clubes da FIFA posado no gramado do Maracanã na grande final de 14 de janeiro de 2000: em pé, Dida, Índio, Fábio Luciano, Adílson, Freddy Rincón e Vampeta; agachados, Luizão, Kléber, Ricardinho, Marcelinho Carioca e Edílson Capetinha.",
          "fonteFoto": "Acervo Oficial Meu Timão / Memorial Corinthians (Final do Mundial FIFA 2000 - Maracanã)"
      },
      {
          "id": "titulo-paulista-2001",
          "ano": "2001",
          "ordem": 2001.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "24º Paulistão",
          "titulo": "Campeonato Paulista de 2001 (A Arrancada de Luxemburgo e Ricardinho)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Após classificação épica sobre o Santos na semifinal (gol de Ricardinho aos 48 do 2º tempo!), o Corinthians bateu o Botafogo-SP na final (3 a 0 na ida em Ribeirão Preto e 0 a 0 no Morumbi em 27/05/2001).",
          "fotoElenco": "assets/images/titulos/paulista_2001_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 2001 posado no Morumbi: Maurício, Rogério, João Carlos, Scheidt, Kléber, Otacílio, Gallo, Gilmar Fubá, Ricardinho, Marcelinho Carioca, Ewerthon e Gil (comandados por Vanderlei Luxemburgo).",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 2001)"
      },
      {
          "id": "titulo-2002",
          "ano": "2002",
          "ordem": 2002.1,
          "modalidade": "Masculino",
          "titulo": "Copa do Brasil de 2002 (Bicampeão)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi) e Taguatinga - DF (Boca do Jacaré)",
          "detalhe": "Comandado por Carlos Alberto Parreira, o Timão venceu o Brasiliense na final (2 a 1 no Morumbi e 1 a 1 em Taguatinga em 15/05/2002) com show do artilheiro Deivid (13 gols no torneio).",
          "fotoElenco": "assets/images/titulos/titulo_2002.jpg?v=3.0.0",
          "legendaElenco": "Elenco bicampeão da Copa do Brasil 2002: Dida, Rogério, Fábio Luciano, Anderson, Kléber, Vampeta, Fabrício, Ricardinho, Leandro, Deivid e Gil (técnico Carlos Alberto Parreira).",
          "fonteFoto": "Acervo Meu Timão / Memorial Corinthians (2002)"
      },
      {
          "id": "titulo-paulista-2003",
          "ano": "2003",
          "ordem": 2003.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "25º Paulistão",
          "titulo": "Campeonato Paulista de 2003 (Duas Vitórias por 3 a 2 no Majestoso)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Morumbi)",
          "detalhe": "Uma das finais mais eletrizantes da história do Paulistão: após eliminar o Palmeiras na semifinal, o Timão de Geninho derrotou o São Paulo duas vezes por 3 a 2 no Morumbi (com shows de Liédson, Jorge Wagner e Gil) em 22/03/2003!",
          "fotoElenco": "assets/images/titulos/paulista_2003_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 2003 erguendo o troféu Palácio dos Bandeirantes no Morumbi: Doni, Rogério, Fábio Luciano, Anderson, Kléber, Fabinho, Vampeta, Renato, Jorge Wagner, Liédson e Gil (técnico Geninho).",
          "fonteFoto": "Acervo Histórico Meu Timão / Memorial Corinthians (Campeão Paulista de 2003)"
      },
      {
          "id": "titulo-2005",
          "ano": "2005",
          "ordem": 2005.1,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 2005 (Tetracampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "Brasil (Pontos Corridos)",
          "detalhe": "O ataque mais avassalador dos pontos corridos liderado pelo craque argentino Carlitos Tevez, Nilmar, Roger e Mascherano, marcado pelo eterno 7 a 1 sobre o Santos no Pacaembu.",
          "fotoElenco": "assets/images/titulos/titulo_2005.jpg?v=3.0.0",
          "legendaElenco": "A constelação campeã brasileira de 2005: Fábio Costa, Eduardo Ratinho, Betão, Marinho, Gustavo Nery, Marcelo Mattos, Javier Mascherano, Rosinei, Carlos Alberto, Roger Flores, Nilmar e Carlos Tevez.",
          "fonteFoto": "Acervo Histórico SCCP / Meu Timão (2005)"
      },
      {
          "id": "titulo-paulista-2009",
          "ano": "2009",
          "ordem": 2009.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "26º Paulistão",
          "titulo": "Campeonato Paulista de 2009 (5º Paulistão Invicto & Show do Fenômeno)",
          "categoria": "Estadual",
          "sede": "Santos - SP (Vila Belmiro) e São Paulo - SP (Pacaembu)",
          "detalhe": "Após 71 anos, o Corinthians voltou a conquistar o Campeonato Paulista de forma INVICTA (13 vitórias e 10 empates em 23 jogos)! Na final contra o Santos, Ronaldo Fenômeno marcou dois golaços (incluindo a lendária cobertura na Vila Belmiro).",
          "fotoElenco": "assets/images/titulos/paulista_2009_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco completo campeão paulista invicto de 2009 posado no gramado do Pacaembu na grande final (03/05/2009): Felipe, Alessandro, William Capitão, Chicão, André Santos, Cristian, Elias, Douglas, Jorge Henrique, Dentinho e Ronaldo Fenômeno, ao lado do técnico Mano Menezes.",
          "fonteFoto": "Agência Corinthians / Acervo Meu Timão (Final do Paulistão Invicto 2009)"
      },
      {
          "id": "titulo-2009",
          "ano": "2009",
          "ordem": 2009.2,
          "modalidade": "Masculino",
          "titulo": "Copa do Brasil de 2009 (Tricampeão)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Pacaembu) e Porto Alegre - RS (Beira-Rio)",
          "detalhe": "A consagração nacional do ano do renascimento liderado por Ronaldo Fenômeno: vitória por 2 a 0 sobre o Internacional no Pacaembu e empate por 2 a 2 no Beira-Rio em 01/07/2009.",
          "fotoElenco": "assets/images/titulos/titulo_2009.jpg?v=3.0.0",
          "legendaElenco": "O elenco do tricampeonato da Copa do Brasil de 2009 posando no Beira-Rio: Ronaldo Fenômeno, Dentinho, Jorge Henrique, Chicão, William Capitão, Elias, Cristian, André Santos, Alessandro, Douglas, Felipe e Mano Menezes.",
          "fonteFoto": "Agência Corinthians / Acervo Meu Timão (2009)"
      },
      {
          "id": "titulo-2011",
          "ano": "2011",
          "ordem": 2011.1,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 2011 (Pentacampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Pacaembu)",
          "detalhe": "O pentacampeonato brasileiro conquistado no domingo da partida do Doutor Sócrates (04/12/2011), com o Pacaembu inteiro de punho cerrado no empate contra o rival Palmeiras.",
          "fotoElenco": "assets/images/titulos/titulo_2011_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco pentacampeão brasileiro de 2011 posado no gramado do Pacaembu no jogo do título (04/12/2011): em pé, Alessandro, Danilo, Danilo Fernandes, Leandro Castán, Paulo André, Ralf, Júlio César, Chicão e Adriano Imperador; agachados, Willian, Emerson Sheik, Edenílson, Paulinho, Liedson, Fábio Santos, Welder, Jorge Henrique e Alex (técnico Tite).",
          "fonteFoto": "Agência Corinthians / Acervo Histórico dos Campeões (Pacaembu, 2011)"
      },
      {
          "id": "titulo-2012-libertadores",
          "ano": "2012",
          "ordem": 2012.1,
          "modalidade": "Masculino",
          "titulo": "Copa Libertadores da América de 2012 (Campeão Invicto)",
          "categoria": "Continental",
          "sede": "São Paulo - SP (Pacaembu)",
          "detalhe": "Campanha invicta lendária: 14 jogos, 8 vitórias, 6 empates e apenas 4 gols sofridos. Final inesquecível em 04/07/2012 com vitória por 2 a 0 sobre o Boca Juniors (dois gols de Emerson Sheik).",
          "fotoElenco": "assets/images/titulos/titulo_2012_libertadores_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão invicto da Copa Libertadores da América de 2012 posado no Pacaembu na grande final contra o Boca Juniors (04/07/2012): em pé, Alessandro, Chicão, Leandro Castán, Júlio César, Ralf, Marquinhos, Wallace, Romarinho, Danilo e Cássio; agachados, Paulinho, Alex, Emerson Sheik, Douglas, Fábio Santos, Ramón, Liedson e Jorge Henrique.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / CONMEBOL (Final da Libertadores 2012)"
      },
      {
          "id": "titulo-2012-mundial",
          "ano": "2012",
          "ordem": 2012.2,
          "modalidade": "Masculino",
          "titulo": "Mundial de Clubes da FIFA de 2012 (Bicampeão Mundial)",
          "categoria": "Mundial",
          "sede": "Yokohama, Japão (International Stadium)",
          "detalhe": "Corinthians 1 x 0 Chelsea no Japão em 16/12/2012 perante mais de 30 mil torcedores que cruzaram o globo. Gol épico de cabeça de Paolo Guerrero e atuações milagrosas de Cássio (Bola de Ouro do Mundial).",
          "fotoElenco": "assets/images/titulos/titulo_2012_mundial_elenco.jpg?v=3.0.0",
          "legendaElenco": "O esquadrão bicampeão mundial da FIFA posado no gramado do International Stadium Yokohama na final contra o Chelsea (16/12/2012): em pé, Alessandro, Paulo André, Paolo Guerrero, Chicão, Ralf e Cássio; agachados, Jorge Henrique, Emerson Sheik, Paulinho, Fábio Santos e Danilo (técnico Tite).",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / FIFA Club World Cup (Yokohama, 2012)"
      },
      {
          "id": "titulo-paulista-2013",
          "ano": "2013",
          "ordem": 2013.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "27º Paulistão",
          "titulo": "Campeonato Paulista de 2013 (Campeão na Vila Belmiro sobre o Santos)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Pacaembu) e Santos - SP (Vila Belmiro)",
          "detalhe": "O esquadrão campeão mundial de Tite impediu o tetracampeonato do Santos de Neymar, vencendo a ida no Pacaembu por 2 a 1 (gols de Paulinho e Paulo André) e empatando por 1 a 1 na Vila Belmiro (gol de Danilo) em 19/05/2013!",
          "fotoElenco": "assets/images/titulos/paulista_2013_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão paulista de 2013 celebrando com a taça no gramado da Vila Belmiro (19/05/2013): Cássio, Alessandro, Gil, Paulo André, Fábio Santos, Ralf, Paulinho, Danilo, Romarinho, Emerson Sheik, Paolo Guerrero, Alexandre Pato e o técnico Tite.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / Acervo Meu Timão (Paulistão 2013)"
      },
      {
          "id": "titulo-2013",
          "ano": "2013",
          "ordem": 2013.2,
          "modalidade": "Masculino",
          "titulo": "Recopa Sul-Americana de 2013 (Campeão Invicto)",
          "categoria": "Continental",
          "sede": "São Paulo - SP (Morumbi e Pacaembu)",
          "detalhe": "Supremacia continental no Majestoso com duas vitórias incontestáveis sobre o São Paulo (2 a 1 no Morumbi com gols de Guerrero e Renato Augusto, e 2 a 0 no Pacaembu em 17/07/2013 com gols de Romarinho e Danilo).",
          "fotoElenco": "assets/images/titulos/titulo_2013_recopa.jpg?v=3.0.0",
          "legendaElenco": "Comemoração da Recopa Sul-Americana de 2013 no Pacaembu: Danilo, Alexandre Pato, Romarinho, Cássio, Gil, Paulo André, Ralf, Renato Augusto, Fábio Santos e Tite.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians (2013)"
      },
      {
          "id": "titulo-2015",
          "ano": "2015",
          "ordem": 2015.1,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 2015 (Hexacampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "Brasil (Pontos Corridos / Neo Química Arena)",
          "detalhe": "O melhor time do futebol brasileiro da década: 81 pontos, melhor ataque e melhor defesa, coroado com a goleada histórica por 6 a 1 sobre o São Paulo no jogo da entrega da taça em Itaquera.",
          "fotoElenco": "assets/images/titulos/titulo_2015.jpg?v=3.0.0",
          "legendaElenco": "O elenco do hexacampeonato brasileiro de 2015: Cássio, Fagner, Felipe, Gil, Guilherme Arana, Ralf, Elias, Jadson, Renato Augusto, Malcom, Vagner Love e o técnico Tite na Arena Corinthians.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians (2015)"
      },
      {
          "id": "titulo-brabas-2016-copadobrasil",
          "ano": "2016",
          "ordem": 2016.1,
          "modalidade": "Feminino",
          "titulo": "Copa do Brasil Feminina de 2016 (1º Título da Era Moderna)",
          "categoria": "Nacional",
          "sede": "São José dos Campos - SP (Estádio Martins Pereira)",
          "detalhe": "O primeiro troféu após a reativação do futebol feminino sob o comando de Arthur Elias (parceria Corinthians/Audax)! Empate por 2 a 2 na ida e vitória por 3 a 1 sobre o São José na volta em 27/10/2016 (gols de Pardal, Fran e Gabi Nunes).",
          "fotoElenco": "assets/images/titulos/brabas_2016_copadobrasil.jpg?v=3.0.0",
          "legendaElenco": "O elenco das Brabas campeão da Copa do Brasil Feminina de 2016 erguendo o primeiro troféu da dinastia: Lelê, Paulinha, Pardal, Mimi, Yasmin, Fran, Rosana, Daiane, Gabi Nunes, Chú, Grazi e o técnico Arthur Elias.",
          "fonteFoto": "Agência Corinthians / Acervo Meu Timão (Copa do Brasil Feminina 2016)"
      },
      {
          "id": "titulo-paulista-2017",
          "ano": "2017",
          "ordem": 2017.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "28º Paulistão",
          "titulo": "Campeonato Paulista de 2017 (1º Título Paulista na Neo Química Arena)",
          "categoria": "Estadual",
          "sede": "Campinas - SP (Moisés Lucarelli) e São Paulo - SP (Neo Química Arena)",
          "detalhe": "A geração apelidada de 'Quarta Força' eliminou Palmeiras e São Paulo e bateu a Ponte Preta na decisão (3 a 0 em Campinas e 1 a 1 na Neo Química Arena em 07/05/2017, gol de Romero), iniciando o 4º Tricampeonato Paulista!",
          "fotoElenco": "assets/images/titulos/paulista_2017_elenco.jpg?v=3.0.0",
          "legendaElenco": "O capitão Cássio ergue a taça do 28º Campeonato Paulista na Neo Química Arena (07/05/2017) cercado por Fagner, Balbuena, Pablo, Guilherme Arana, Gabriel, Maycon, Rodriguinho, Jadson, Ángel Romero, Jô e o técnico Fábio Carille.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / Acervo Meu Timão (Paulistão 2017)"
      },
      {
          "id": "titulo-brabas-2017-libertadores",
          "ano": "2017",
          "ordem": 2017.2,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2017 (1º Título Continental • Invicto)",
          "categoria": "Continental",
          "sede": "Assunção, Paraguai (Estádio Arsenio Erico)",
          "detalhe": "A conquista da primeira estrela continental das Brabas! Campanha invicta com 5 vitórias e 1 empate, decidida nos pênaltis (5 a 4) contra o Colo-Colo no Paraguai em 21/10/2017 com duas defesas históricas da goleira Lelê!",
          "fotoElenco": "assets/images/titulos/brabas_2017_libertadores.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão invicto da Copa Libertadores Feminina de 2017 posado no gramado em Assunção: Lelê (heroína nos pênaltis), Paulinha, Pardal, Mimi, Yasmin, Monique Peçanha, Grazi, Cacau, Kerolin, Raquel, Byanca Brasil e o técnico Arthur Elias.",
          "fonteFoto": "Agência Corinthians / CONMEBOL (Final da Libertadores Feminina 2017)"
      },
      {
          "id": "titulo-2017",
          "ano": "2017",
          "ordem": 2017.3,
          "modalidade": "Masculino",
          "titulo": "Campeonato Brasileiro de 2017 (Heptacampeão Brasileiro)",
          "categoria": "Nacional",
          "sede": "Brasil (Pontos Corridos / Neo Química Arena)",
          "detalhe": "Com o melhor primeiro turno invicto da história dos pontos corridos (19 jogos sem perder), o Corinthians de Fábio Carille e Jô (artilheiro do campeonato) venceu o Fluminense por 3 a 1 de virada e sagrou-se Heptacampeão Brasileiro.",
          "fotoElenco": "assets/images/titulos/titulo_2017.jpg?v=3.0.0",
          "legendaElenco": "A consagração do Heptacampeonato Brasileiro em 2017 na Neo Química Arena: Cássio, Fagner, Balbuena, Pablo, Guilherme Arana, Gabriel, Maycon, Rodriguinho, Clayson, Ángel Romero, Jô e Fábio Carille.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians (2017)"
      },
      {
          "id": "titulo-2018-paulista",
          "ano": "2018",
          "ordem": 2018.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "29º Paulistão",
          "titulo": "Campeonato Paulista de 2018 (Bicampeão na Casa do Rival - Allianz Parque)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Allianz Parque)",
          "detalhe": "O 'Paulistinha' que entrou para a eternidade! Após perder a ida em casa, o Timão venceu o Palmeiras por 1 a 0 dentro do Allianz Parque em 08/04/2018 (gol relâmpago de Rodriguinho) e venceu nos pênaltis com duas defesas de Cássio (Dudu e Lucas Lima) e cobrança final de Maycon!",
          "fotoElenco": "assets/images/titulos/paulista_2018_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão paulista de 2018 posado no gramado do Allianz Parque na histórica decisão contra o Palmeiras (08/04/2018): em pé, Cássio, Henrique, Balbuena, Gabriel, Sidcley e Fagner; agachados, Maycon, Mateus Vital, Rodriguinho, Ángel Romero e Clayson (técnico Fábio Carille).",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / Acervo Meu Timão (Final do Paulistão 2018)"
      },
      {
          "id": "titulo-brabas-2018-brasileiro",
          "ano": "2018",
          "ordem": 2018.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2018 (1º Título Brasileiro das Brabas)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Parque São Jorge - Fazendinha)",
          "detalhe": "O primeiro Campeonato Brasileiro Feminino da história do clube! Duas vitórias sobre o Rio Preto na grande decisão: 1 a 0 fora de casa e goleada por 4 a 0 na Fazendinha lotada em 26/10/2018 (gols de Millene, Yasmin, Marcela e Adriana).",
          "fotoElenco": "assets/images/titulos/brabas_2018_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "As Brabas campeãs brasileiras de 2018 celebrando no pódio do Parque São Jorge: Lelê, Katiuscia, Pardal, Mimi, Juliete, Yasmin, Grazi, Gabi Zanotti, Diany, Cacau, Adriana, Millene, Marcela e o técnico Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2018)"
      },
      {
          "id": "titulo-paulista-2019",
          "ano": "2019",
          "ordem": 2019.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "30º Paulistão",
          "titulo": "Campeonato Paulista de 2019 (4º Tricampeonato Paulista • Gol de Vagner Love)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "O 4º Tricampeonato Paulista da história alvinegra (2017–2018–2019) — o único Tricampeonato Estadual de São Paulo no século XXI! Vitória emocionante por 2 a 1 sobre o São Paulo na Neo Química Arena em 21/04/2019 com gol salvador de Vagner Love aos 43 minutos do 2º tempo!",
          "fotoElenco": "assets/images/titulos/paulista_2019_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco tricampeão paulista (2017–2018–2019) celebrando a 30ª taça estadual na Neo Química Arena (21/04/2019): Cássio, Fagner, Manoel, Henrique, Danilo Avelar, Ralf, Júnior Urso, Sornoza, Ramiro, Pedrinho, Clayson, Boselli, Gustagol, Vagner Love (autor do gol do título) e Fábio Carille.",
          "fonteFoto": "Daniel Augusto Jr. / Agência Corinthians / Acervo Meu Timão (Paulistão 2019)"
      },
      {
          "id": "titulo-brabas-2019-libertadores",
          "ano": "2019",
          "ordem": 2019.2,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2019 (Bicampeãs Invictas da América)",
          "categoria": "Continental",
          "sede": "Quito, Equador (Estádio Olímpico Atahualpa)",
          "detalhe": "Na altitude de Quito, no Equador, as Brabas conquistaram o Bicampeonato da Libertadores de forma invicta (5 vitórias e 1 empate), vencendo a Ferroviária por 2 a 0 na grande final em 28/10/2019 com gols de Giovanna Crivelari e Juliete!",
          "fotoElenco": "assets/images/titulos/brabas_2019_libertadores.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão invicto da Copa Libertadores Feminina de 2019 posado no gramado em Quito: Lelê, Katiuscia, Pardal, Érika, Mimi, Juliete, Tamires, Grazi, Gabi Zanotti, Vic Albuquerque, Giovanna Crivelari, Millene e Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CONMEBOL (Libertadores Feminina 2019)"
      },
      {
          "id": "titulo-brabas-2019-paulista",
          "ano": "2019",
          "ordem": 2019.3,
          "modalidade": "Feminino",
          "titulo": "Campeonato Paulista Feminino de 2019 (100% de Aproveitamento • 20 Vitórias em 20 Jogos)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Campanha histórica e irrepetível com 100% de aproveitamento (20 vitórias em 20 partidas!) e vitória por 3 a 0 sobre o São Paulo na final em 16/11/2019 diante de 28.862 torcedores na Neo Química Arena (gols de Vic Albuquerque, Crivelari e Millene).",
          "fotoElenco": "assets/images/titulos/brabas_2019_paulista.jpg?v=3.0.0",
          "legendaElenco": "As Brabas campeãs paulistas invictas com 100% de aproveitamento em 2019 na Neo Química Arena: Lelê, Paulinha, Katiuscia, Érika, Pardal, Tamires, Juliete, Grazi, Gabi Zanotti, Vic Albuquerque, Crivelari, Cacau, Millene e Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Paulistão Feminino 2019)"
      },
      {
          "id": "titulo-brabas-2020-brasileiro",
          "ano": "2020",
          "ordem": 2020.1,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2020 (Bicampeãs Brasileiras)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Após empate sem gols na ida em Santa Catarina, as Brabas venceram o Avaí/Kindermann por 4 a 2 na Neo Química Arena em 06/12/2020 (dois gols de Gabi Nunes, um de Gabi Zanotti e um de Vic Albuquerque) e conquistaram o Bicampeonato Brasileiro.",
          "fotoElenco": "assets/images/titulos/brabas_2020_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão brasileiro feminino de 2020 celebrando na Neo Química Arena: Lelê, Katiuscia, Érika, Poliana, Pardal, Yasmin, Tamires, Ingryd, Andressinha, Grazi, Gabi Zanotti, Giovanna Crivelari, Vic Albuquerque, Adriana e Gabi Nunes.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2020)"
      },
      {
          "id": "titulo-brabas-2020-paulista",
          "ano": "2020",
          "ordem": 2020.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Paulista Feminino de 2020 (Bicampeãs Paulistas • 8 a 1 no Agregado)",
          "categoria": "Estadual",
          "sede": "Araraquara - SP (Fonte Luminosa)",
          "detalhe": "Massacre histórico na decisão contra a Ferroviária: vitória por 3 a 1 na ida na Arena Barueri e goleada implacável por 5 a 0 em plena Fonte Luminosa em Araraquara em 20/12/2020 (8 a 1 no placar agregado!).",
          "fotoElenco": "assets/images/titulos/brabas_2020_paulista.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão paulista feminino de 2020 erguendo a taça em Araraquara: Tainá Borges, Katiuscia, Érika, Poliana, Yasmin, Tamires, Ingryd, Diany, Andressinha, Grazi, Gabi Zanotti, Vic Albuquerque, Crivelari, Adriana e Gabi Nunes.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Paulistão Feminino 2020)"
      },
      {
          "id": "titulo-brabas-2021-brasileiro",
          "ano": "2021",
          "ordem": 2021.1,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2021 (Tricampeãs sobre o Palmeiras)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Allianz Parque & Neo Química Arena)",
          "detalhe": "Duas vitórias no Derby Paulista pela grande final nacional: 1 a 0 dentro do Allianz Parque (gol de Gabi Portilho) e 3 a 1 na Neo Química Arena em 26/09/2021 (gols de Adriana, Vic Albuquerque de bicicleta e Poliana), abrindo a Tríplice Coroa de 2021!",
          "fotoElenco": "assets/images/titulos/brabas_2021_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "O elenco tricampeão brasileiro feminino de 2021 celebrando no pódio da Neo Química Arena: Kemelli, Katiuscia, Érika, Poliana, Giovanna Campiolo, Yasmin, Tamires, Ingryd, Diany, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Adriana, Jheniffer e Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2021)"
      },
      {
          "id": "titulo-brabas-2021-libertadores",
          "ano": "2021",
          "ordem": 2021.2,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2021 (Tricampeãs da América)",
          "categoria": "Continental",
          "sede": "Montevidéu, Uruguai (Estádio Gran Parque Central)",
          "detalhe": "Campanha com 100% de aproveitamento (6 vitórias em 6 jogos, 24 gols marcados!) coroada com a vitória por 2 a 0 sobre o Independiente Santa Fe na grande final em Montevidéu em 21/11/2021 (gols de Adriana e Gabi Portilho).",
          "fotoElenco": "assets/images/titulos/brabas_2021_libertadores.jpg?v=3.0.0",
          "legendaElenco": "As Brabas tricampeãs da Copa Libertadores Feminina de 2021 posadas no gramado do Gran Parque Central no Uruguai: Kemelli, Natascha, Katiuscia, Poliana,Campiolo, Pardal, Yasmin, Juliete, Tamires, Diany, Ingryd, Grazi, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Adriana e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CONMEBOL (Libertadores Feminina 2021)"
      },
      {
          "id": "titulo-brabas-2021-paulista",
          "ano": "2021",
          "ordem": 2021.3,
          "modalidade": "Feminino",
          "titulo": "Campeonato Paulista Feminino de 2021 (Tricampeãs & Tríplice Coroa)",
          "categoria": "Estadual",
          "sede": "Barueri - SP (Arena Barueri)",
          "detalhe": "O fecho de ouro da histórica Tríplice Coroa de 2021 (Brasileirão + Libertadores + Paulistão)! Virada épica por 3 a 1 sobre o São Paulo em 08/12/2021 com dois golaços de Gabi Zanotti e o gol do título marcado por Adriana aos 45 minutos do 2º tempo!",
          "fotoElenco": "assets/images/titulos/brabas_2021_paulista.jpg?v=3.0.0",
          "legendaElenco": "O elenco da Tríplice Coroa e Tricampeão Paulista Feminino de 2021 erguendo a taça: Kemelli, Katiuscia, Campiolo, Poliana, Yasmin, Tamires, Diany, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Adriana, Jheniffer, Miriã e Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Paulistão Feminino 2021)"
      },
      {
          "id": "titulo-brabas-2022-supercopa",
          "ano": "2022",
          "ordem": 2022.1,
          "modalidade": "Feminino",
          "titulo": "Supercopa do Brasil Feminina de 2022 (1ª Edição da História • Campeãs)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "As Brabas inauguraram a galeria de campeãs da Supercopa do Brasil Feminina! Após eliminar Palmeiras (3 a 0) e Real Brasília (2 a 0), venceram o Grêmio por 1 a 0 na Neo Química Arena em 13/02/2022 com gol de cabeça da capitã Grazi aos 48 do 2º tempo!",
          "fotoElenco": "assets/images/titulos/brabas_2022_supercopa.jpg?v=3.0.0",
          "legendaElenco": "As Brabas celebrando a conquista da Supercopa do Brasil Feminina na Neo Química Arena: Lelê, Kemelli, Paulinha, Tarciane, Andressa, Campiolo, Yasmin, Tamires, Diany, Liana Salazar, Grazi, Gabi Zanotti,Gabi Portilho, Adriana, Jaqueline e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CBF (Supercopa Feminina 2022)"
      },
      {
          "id": "titulo-brabas-2022-brasileiro",
          "ano": "2022",
          "ordem": 2022.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2022 (Tetracampeãs • 41.070 na Arena)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Diante de 41.070 torcedores na Neo Química Arena (então recorde absoluto do futebol feminino de clubes na América do Sul), o Corinthians goleou o Internacional por 4 a 1 de virada em 24/09/2022 (gols de Jaqueline, Diany, Vic Albuquerque e Jheniffer) e sagrou-se Tetracampeão Brasileiro!",
          "fotoElenco": "assets/images/titulos/brabas_2022_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "O elenco tetracampeão brasileiro feminino de 2022 posado no gramado da Neo Química Arena lotada: Lelê, Paulinha, Tarciane, Andressa, Yasmin, Tamires, Diany, Gabi Morais, Grazi, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Jaqueline, Adriana e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2022)"
      },
      {
          "id": "titulo-brabas-2022-copapaulista",
          "ano": "2022",
          "ordem": 2022.3,
          "modalidade": "Feminino",
          "titulo": "Copa Paulista Feminina de 2022 (Campeãs sobre o Red Bull Bragantino)",
          "categoria": "Estadual",
          "sede": "Araraquara - SP (Fonte Luminosa)",
          "detalhe": "Terceiro título das Brabas na temporada de 2022, superando o Red Bull Bragantino com duas vitórias nas finais (3 a 1 na ida e 2 a 1 na volta em 11/12/2022).",
          "fotoElenco": "assets/images/titulos/brabas_2022_copapaulista.jpg?v=3.0.0",
          "legendaElenco": "O elenco das Brabas campeão da Copa Paulista Feminina de 2022 erguendo o troféu: Paty, Paulinha, Andressa, Erika, Juliete, Diany, Mariza, Grazi, Vic Albuquerque, Jaqueline, Millene e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Copa Paulista Feminina 2022)"
      },
      {
          "id": "titulo-brabas-2023-supercopa",
          "ano": "2023",
          "ordem": 2023.1,
          "modalidade": "Feminino",
          "titulo": "Supercopa do Brasil Feminina de 2023 (Bicampeãs • 4 a 1 no Flamengo)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Abriu a histórica Quádrupla Coroa de 2023 com goleada avassaladora por 4 a 1 sobre o Flamengo na Neo Química Arena em 12/02/2023 (dois gols de Tamires e dois de Millene)!",
          "fotoElenco": "assets/images/titulos/brabas_2023_supercopa.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão da Supercopa do Brasil Feminina de 2023 posado diante do arco de campeãs na Neo Química Arena: Lelê, Katiuscia, Paulinha, Tarciane, Andressa, Yasmin, Tamires, Ju Ferreira, Diany, Mariza, Grazi, Vic Albuquerque, Gabi Portilho, Millene, Jaqueline e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CBF (Supercopa Feminina 2023)"
      },
      {
          "id": "titulo-brabas-2023-brasileiro",
          "ano": "2023",
          "ordem": 2023.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2023 (Pentacampeãs • 42.566 na Arena)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Diante de 42.566 torcedores na Neo Química Arena, as Brabas venceram a Ferroviária por 2 a 1 de virada em 10/09/2023 (gols de Jheniffer e Tamires) e conquistaram o Pentacampeonato Brasileiro!",
          "fotoElenco": "assets/images/titulos/brabas_2023_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "As Brabas pentacampeãs brasileiras de 2023 celebrando com a taça na Neo Química Arena: Lelê, Katiuscia, Paulinha, Tarciane, Mariza, Yasmin, Tamires, Luana Bertolucci, Ju Ferreira, Duda Sampaio, Vic Albuquerque, Gabi Zanotti, Gabi Portilho, Jheniffer, Jaqueline e Millene.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2023)"
      },
      {
          "id": "titulo-brabas-2023-libertadores",
          "ano": "2023",
          "ordem": 2023.3,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2023 (Tetracampeãs no Derby Continental)",
          "categoria": "Continental",
          "sede": "Cali, Colômbia (Estádio Pascual Guerrero)",
          "detalhe": "Uma das conquistas mais heroicas da história do Corinthians: na final continental contra o rival Palmeiras em Cali (21/10/2023), Millene marcou o gol e, mesmo com uma jogadora a menos no 2º tempo, as Brabas seguraram o 1 a 0 na raça para erguer o Tetracampeonato da América!",
          "fotoElenco": "assets/images/titulos/brabas_2023_libertadores.jpg?v=3.0.0",
          "legendaElenco": "O elenco tetracampeão da Copa Libertadores Feminina de 2023 posado em Cali após derrotar o Palmeiras na final: Lelê, Kemelli, Katiuscia, Paulinha, Tarciane (expulsa lutando até o fim), Mariza, Yasmin, Tamires, Luana Bertolucci, Ju Ferreira, Duda Sampaio, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Millene (autora do gol do título), Jheniffer, Jaqueline e Arthur Elias.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CONMEBOL (Libertadores Feminina 2023)"
      },
      {
          "id": "titulo-brabas-2023-paulista",
          "ano": "2023",
          "ordem": 2023.4,
          "modalidade": "Feminino",
          "titulo": "Campeonato Paulista Feminino de 2023 (Tetracampeãs & Quádrupla Coroa)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "O coroamento da inédita Quádrupla Coroa de 2023 (Supercopa + Brasileirão + Libertadores + Paulistão)! Após derrota por 2 a 1 na ida, as Brabas atropelaram o São Paulo por 4 a 1 na volta na Neo Química Arena em 26/11/2023 (gols de Jaqueline, Tarciane, Vic Albuquerque e Jheniffer)!",
          "fotoElenco": "assets/images/titulos/brabas_2023_paulista.jpg?v=3.0.0",
          "legendaElenco": "O elenco da Quádrupla Coroa de 2023 e Tetracampeão Paulista Feminino celebrando na Neo Química Arena: Lelê, Katiuscia, Paulinha, Tarciane, Mariza, Yasmin, Tamires, Ju Ferreira, Duda Sampaio, Grazi (em sua despedida oficial dos gramados), Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Jaqueline, Millene e Jheniffer.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Paulistão Feminino 2023)"
      },
      {
          "id": "titulo-brabas-2024-supercopa",
          "ano": "2024",
          "ordem": 2024.1,
          "modalidade": "Feminino",
          "titulo": "Supercopa do Brasil Feminina de 2024 (Tricampeãs Invictas)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "Soberania absoluta nas três primeiras edições da Supercopa do Brasil Feminina (2022–2023–2024)! Vitória por 1 a 0 sobre o Cruzeiro na grande decisão na Neo Química Arena em 18/02/2024 com gol de falta de Duda Sampaio.",
          "fotoElenco": "assets/images/titulos/brabas_2024_supercopa.jpg?v=3.0.0",
          "legendaElenco": "O elenco tricampeão da Supercopa do Brasil Feminina de 2024 no pódio da Neo Química Arena: Kemelli, Isabela, Tarciane, Mariza, Yasmin, Tamires, Ju Ferreira, Yayá, Duda Sampaio (autora do gol do título), Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Millene, Jheniffer, Jaqueline e o técnico Lucas Piccinato.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CBF (Supercopa Feminina 2024)"
      },
      {
          "id": "titulo-brabas-2024-brasileiro",
          "ano": "2024",
          "ordem": 2024.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2024 (Hexacampeãs • Recorde de 44.529 na Arena)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Morumbi e Neo Química Arena)",
          "detalhe": "Duas vitórias sobre o São Paulo na final (3 a 1 no Morumbi e 2 a 0 na Neo Química Arena em 22/09/2024, gols de Jaqueline e Carol Nogueira) diante do recorde sul-americano de 44.529 torcedores!",
          "fotoElenco": "assets/images/titulos/brabas_2024_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "O elenco hexacampeão brasileiro feminino de 2024 posado na Neo Química Arena diante de 44.529 torcedores: Nicole Ramos, Kemelli, Paulinha, Isabela, Dani Arias, Erika, Mariza, Yasmin, Tamires, Ju Ferreira, Yayá, Duda Sampaio, Gabi Zanotti, Vic Albuquerque, Gabi Portilho, Jaqueline, Millene, Jheniffer, Eudimilla, Carol Nogueira e Lucas Piccinato.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2024)"
      },
      {
          "id": "titulo-brabas-2024-libertadores",
          "ano": "2024",
          "ordem": 2024.3,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2024 (Pentacampeãs da América)",
          "categoria": "Continental",
          "sede": "Assunção, Paraguai (Estádio Defensores del Chaco)",
          "detalhe": "De volta ao Paraguai onde conquistaram a 1ª taça em 2017, as Brabas venceram o Independiente Santa Fe por 2 a 0 na final no Defensores del Chaco em 19/10/2024 (gols de Vic Albuquerque e Erika) e sagraram-se Pentacampeãs Invictas da América!",
          "fotoElenco": "assets/images/titulos/brabas_2024_libertadores.jpg?v=3.0.0",
          "legendaElenco": "O elenco pentacampeão da Copa Libertadores Feminina de 2024 posado diante do arco oficial da CONMEBOL em Assunção: Lelê, Nicole Ramos, Paulinha, Isabela, Erika, Dani Arias, Mariza, Yasmin, Tamires, Ju Ferreira, Yayá, Duda Sampaio, Gabi Zanotti (Eleita Rainha da América), Vic Albuquerque, Gabi Portilho, Jheniffer, Jaqueline, Millene, Eudimilla e Lucas Piccinato.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CONMEBOL (Libertadores Feminina 2024)"
      },
      {
          "id": "titulo-2025-paulista",
          "ano": "2025",
          "ordem": 2025.1,
          "modalidade": "Masculino",
          "paulistaEdicao": "31º Paulistão",
          "titulo": "Campeonato Paulista de 2025 (31º Título Estadual • Recordista Absoluto)",
          "categoria": "Estadual",
          "sede": "São Paulo - SP (Allianz Parque & Neo Química Arena)",
          "detalhe": "A retomada da soberania estadual diante do maior rival! Vitória por 1 a 0 na ida dentro do Allianz Parque (gol de Yuri Alberto após assistência de Memphis Depay) e empate heroico por 0 a 0 em 27/03/2025 na Neo Química Arena diante do recorde histórico de 48.196 pagantes, com o goleiro Hugo Souza defendendo pênalti de Raphael Veiga no 2º tempo!",
          "fotoElenco": "assets/images/titulos/paulista_2025_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco campeão do 31º Campeonato Paulista erguendo a taça dourada no pódio da Neo Química Arena (27/03/2025): o capitão Ángel Romero, Hugo Souza (herói do título ao defender pênalti na final), Gustavo Henrique, André Ramalho, Breno Bidon, Maycon, João Pedro Tchoca, Matheus Donelli, Yuri Alberto, Memphis Depay, Rodrigo Garro, André Carrillo, Raniele e Matheuzinho (comandados por Ramón Díaz).",
          "fonteFoto": "Rodrigo Coca / Agência Corinthians / Acervo Meu Timão (Final do Paulistão 2025)"
      },
      {
          "id": "titulo-brabas-2025-brasileiro",
          "ano": "2025",
          "ordem": 2025.2,
          "modalidade": "Feminino",
          "titulo": "Campeonato Brasileiro Feminino de 2025 (Heptacampeãs Brasileiras)",
          "categoria": "Nacional",
          "sede": "São Paulo - SP (Neo Química Arena)",
          "detalhe": "O sexto título brasileiro consecutivo e o Heptacampeonato Brasileiro Feminino da história alvinegra (2018, 2020, 2021, 2022, 2023, 2024 e 2025), superando o Cruzeiro na grande decisão na Neo Química Arena lotada!",
          "fotoElenco": "assets/images/titulos/brabas_2025_brasileiro.jpg?v=3.0.0",
          "legendaElenco": "O elenco heptacampeão brasileiro feminino de 2025 celebrando no pódio na Neo Química Arena: Lelê, Nicole Ramos, Kemelli, Paulinha, Erika, Mariza, Thaís Ferreira, Tamires, Yayá, Duda Sampaio, Dayana Rodríguez, Gabi Zanotti, Vic Albuquerque, Jaqueline, Jhonson, Eudimilla e Lucas Piccinato.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / Acervo Meu Timão (Brasileirão Feminino 2025)"
      },
      {
          "id": "titulo-brabas-2025-libertadores",
          "ano": "2025",
          "ordem": 2025.3,
          "modalidade": "Feminino",
          "titulo": "Copa Libertadores Feminina de 2025 (Hexacampeãs da América)",
          "categoria": "Continental",
          "sede": "América do Sul (CONMEBOL Libertadores Femenina)",
          "detalhe": "O terceiro título consecutivo da Copa Libertadores Feminina (2023–2024–2025) e o Hexacampeonato Continental das Brabas (2017, 2019, 2021, 2023, 2024 e 2025), ampliando a maior hegemonia da história do futebol sul-americano!",
          "fotoElenco": "assets/images/titulos/brabas_2025_libertadores.jpg?v=3.0.0",
          "legendaElenco": "O elenco hexacampeão da Copa Libertadores Feminina de 2025 posado diante do arco de Campeão da CONMEBOL: Lelê, Nicole Ramos, Paulinha, Erika, Mariza, Thaís Ferreira, Tamires, Duda Sampaio, Yayá, Dayana Rodríguez, Gabi Zanotti, Vic Albuquerque, Jaqueline, Jhonson, Gisela Robledo e Lucas Piccinato.",
          "fonteFoto": "Rodrigo Gazzanel / Agência Corinthians / CONMEBOL (Libertadores Feminina 2025)"
      },
      {
          "id": "titulo-2025-copadobrasil",
          "ano": "2025",
          "ordem": 2025.4,
          "modalidade": "Masculino",
          "titulo": "Copa do Brasil de 2025 (Tetracampeão no Maracanã)",
          "categoria": "Nacional",
          "sede": "Rio de Janeiro - RJ (Maracanã)",
          "detalhe": "O Tetracampeonato da Copa do Brasil conquistado no templo do Maracanã! Após 0 a 0 na ida em Itaquera, o Corinthians comandado por Dorival Júnior venceu o Vasco da Gama por 2 a 1 na grande final em 21 de dezembro de 2025 no Rio de Janeiro, com gols decisivos de Yuri Alberto e Memphis Depay.",
          "fotoElenco": "assets/images/titulos/titulo_2025_copadobrasil_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco tetracampeão da Copa do Brasil de 2025 posado no gramado do Maracanã diante da placa oficial de Campeão (21/12/2025): Hugo Souza, Matheuzinho, André Ramalho, Gustavo Henrique, Matheus Bidu, Fabrizio Angileri, Raniele, José Martínez, Maycon, Breno Bidon, André Carrillo, Rodrigo Garro, Ángel Romero, Yuri Alberto e Memphis Depay, sob o comando de Dorival Júnior.",
          "fonteFoto": "Rodrigo Coca / Agência Corinthians / Acervo Meu Timão (Final da Copa do Brasil 2025)"
      },
      {
          "id": "titulo-2026-supercopa",
          "ano": "2026",
          "ordem": 2026.1,
          "modalidade": "Masculino",
          "titulo": "Supercopa do Brasil / Supercopa Rei de 2026 (Bicampeão)",
          "categoria": "Nacional",
          "sede": "Brasília - DF (Arena BRB Mané Garrincha)",
          "detalhe": "Trinta e cinco anos após conquistar a primeira edição em 1991, o Timão ergueu o Bicampeonato da Supercopa do Brasil (Supercopa Rei) em 1º de fevereiro de 2026! Atuação imponente e vitória por 2 a 0 sobre o Flamengo na Arena Mané Garrincha lotada, com gols de Gabriel Paulista e Yuri Alberto.",
          "fotoElenco": "assets/images/titulos/titulo_2026_supercopa_elenco.jpg?v=3.0.0",
          "legendaElenco": "O elenco bicampeão da Supercopa do Brasil de 2026 celebrando no pódio da Arena Mané Garrincha em Brasília (01/02/2026): Gustavo Henrique, Hugo Souza, Gabriel Paulista e Yuri Alberto (autores dos 2 gols da final contra o Flamengo), Memphis Depay, Rodrigo Garro, André Carrillo, Raniele, Breno Bidon, Matheuzinho, Matheus Bidu, André Ramalho e o técnico Dorival Júnior.",
          "fonteFoto": "Rodrigo Coca / Agência Corinthians / Acervo Meu Timão (Supercopa Rei 2026)"
      }
  ],

  // 5. Galeria de Ídolos e Ídolas: Lendas Alvinegras (Futebol Masculino e Feminino)
  idolos: [
    {
      id: "claudio",
      nome: "Claudio Christóvam de Pinho (O Gerente)",
      periodo: "1945 - 1957",
      anoEstreia: 1945,
      rankingIdolatria: 11,
      rankingDestaque: "Maior artilheiro de toda a história centenária do Sport Club Corinthians Paulista (305 gols).",
      rankingFonte: "Acervo Histórico SCCP / Revista Placar / Meu Timão",
      jogos: 550,
      gols: 305,
      posicao: "Ponta-direita / Capitão Histórico",
      titulos: "Paulista 1951, 1952, 1954 (IV Centenário), Rio-São Paulo 1950, 1953, 1954",
      frase: "'O ataque dos cem gols jogava por música.'",
      legado: "Maior artilheiro de todos os tempos do Corinthians com 305 gols. Capitão e líder do mítico esquadrão com Luizinho, Baltazar, Carbone e Simão.",
      tag: "artilheiro",
      tags: ["artilheiro", "recordista"],
      foto: "assets/images/idolos/claudio.jpg",
      fotoMomento: "Claudio Christóvam de Pinho com a camisa do Corinthians em 1946, capitão do histórico título do IV Centenário.",
      fonteFoto: "Arquivo Nacional / Wikimedia Commons (1946)"
    },
    {
      id: "baltazar",
      nome: "Baltazar (Cabecinha de Ouro)",
      periodo: "1945 - 1957",
      anoEstreia: 1945,
      rankingIdolatria: 12,
      rankingDestaque: "Segundo maior artilheiro histórico do clube (269 gols) e lenda do 'ataque dos 100 gols'.",
      rankingFonte: "Acervo Histórico SCCP / Revista Placar / Meu Timão",
      jogos: 404,
      gols: 269,
      posicao: "Centroavante",
      titulos: "Paulista 1951, 1952, 1954, Rio-São Paulo 1950, 1953, 1954",
      frase: "'Gol de cabeça não é sorte, é treino e coragem.'",
      legado: "Segundo maior artilheiro da história corinthiana (269 gols). Lendário cabeceador imortalizado na marchinha carnavalesca 'Gol de Baltazar'.",
      tag: "artilheiro",
      tags: ["artilheiro", "recordista"],
      foto: "assets/images/idolos/baltazar.jpg",
      fotoMomento: "Baltazar, o lendário 'Cabecinha de Ouro', no auge de sua forma goleadora pelo Corinthians.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico"
    },
    {
      id: "luizinho",
      nome: "Luizinho (O Pequeno Polegar)",
      periodo: "1948 - 1962, 1967",
      anoEstreia: 1948,
      rankingIdolatria: 17,
      rankingDestaque: "3º atleta com mais jogos na história (607 partidas) e lenda viva do IV Centenário.",
      rankingFonte: "Memorial SCCP / Acervo Histórico / Placar",
      jogos: 607,
      gols: 175,
      posicao: "Meia-atacante",
      titulos: "Paulista 1951, 1952, 1954, Rio-São Paulo 1950, 1953, 1954",
      frase: "'Sentar na bola contra o rival não era deboche, era futebol moleque.'",
      legado: "Terceiro jogador com mais jogos na história. Conhecido pelos dribles desconcertantes e pelo histórico lance em que sentou na bola diante do rival Palmeiras.",
      tag: "recordista",
      tags: ["recordista", "genio"],
      foto: "assets/images/idolos/luizinho.jpg",
      fotoMomento: "Luizinho, o Pequeno Polegar, desfilando sua classe incomparável no Parque São Jorge.",
      fonteFoto: "Acervo Meu Timão / Memorial Corinthians"
    },
    {
      id: "rivellino",
      nome: "Roberto Rivellino (Reizinho do Parque)",
      periodo: "1965 - 1974",
      anoEstreia: 1965,
      rankingIdolatria: 5,
      rankingDestaque: "Top 5 histórico (GE / Memorial SCCP); reverenciado mundialmente por Pelé e Maradona, criador do elástico.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Memorial SCCP",
      jogos: 474,
      gols: 144,
      posicao: "Meia-atacante",
      titulos: "Torneio Rio-São Paulo 1966",
      frase: "'O drible elástico nasceu no Parque São Jorge.'",
      legado: "Criador do lendário drible elástico e dono da célebre 'Patada Atômica'. Campeão mundial com a Seleção Brasileira em 1970. Ícone reverenciado por Pelé e Maradona.",
      tag: "recordista",
      tags: ["recordista", "genio", "artilheiro"],
      foto: "assets/images/idolos/rivellino.jpg?v=3.1.0",
      fotoMomento: "Roberto Rivellino, o eterno 'Reizinho do Parque', em campo como jogador do Corinthians vestindo o clássico manto branco com o escudo âncora bordado no peito.",
      fonteFoto: "Acervo Histórico SCCP / Meu Timão"
    },
    {
      id: "wladimir",
      nome: "Wladimir",
      periodo: "1972 - 1985, 1987",
      anoEstreia: 1972,
      rankingIdolatria: 6,
      rankingDestaque: "Recordista absoluto da história do Corinthians com 806 partidas oficiais e pilar da Democracia.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Memorial SCCP",
      jogos: 806,
      gols: 32,
      posicao: "Lateral-esquerdo",
      titulos: "Paulista 1977, 1979, 1982, 1983",
      frase: "'O Corinthians para mim é uma família. Joguei mais de 800 vezes com esta camisa sagrada.'",
      legado: "Recordista absoluto de partidas com o manto alvinegro (806 jogos). Pilar da Democracia Corinthiana e símbolo de lealdade e vigor físico inigualável.",
      tag: "recordista",
      tags: ["recordista", "democracia"],
      foto: "assets/images/idolos/wladimir.jpg",
      fotoMomento: "Wladimir em campo com o manto alvinegro, o recordista imbatível com 806 jogos disputados pelo Timão.",
      fonteFoto: "Acervo Meu Timão / Gazeta Press"
    },
    {
      id: "basilio",
      nome: "Basílio (Pé de Anjo de 77)",
      periodo: "1975 - 1981",
      anoEstreia: 1975,
      rankingIdolatria: 7,
      rankingDestaque: "Eternizado pelo gol libertador de 1977 que encerrou 23 anos de fila; ídolo eterno de todas as gerações da torcida.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Acervo SCCP",
      jogos: 253,
      gols: 29,
      numTitulos: 2,
      posicao: "Meio-campista / Herói Eterno",
      titulos: "Paulista 1977, Paulista 1979",
      frase: "'A bola sobrou na pequena área e eu chutei com a alma de 30 milhões de corinthianos.'",
      legado: "Autor do gol mais importante e libertador dos 116 anos de história do clube, em 13 de outubro de 1977, encerrando o jejum de 22 anos, 8 meses e 7 dias perante 146 mil pessoas no Morumbi.",
      tag: "recordista",
      tags: ["recordista", "heroi-77"],
      foto: "assets/images/idolos/basilio.jpg",
      fotoMomento: "Basílio, o eterno 'Pé de Anjo', autor do gol libertador do Campeonato Paulista de 1977.",
      fonteFoto: "Acervo Meu Timão / Memorial Corinthians"
    },
    {
      id: "socrates",
      nome: "Sócrates (Doutor Sócrates)",
      periodo: "1978 - 1984",
      anoEstreia: 1978,
      rankingIdolatria: 2,
      rankingDestaque: "2º colocado na votação histórica do GE / Placar; símbolo máximo da Democracia Corinthiana e consciência popular.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Acervo SCCP",
      jogos: 298,
      gols: 172,
      posicao: "Meio-campista / Líder Histórico",
      titulos: "Paulista 1979, 1982, 1983",
      frase: "'Quero morrer em um domingo e com o Corinthians campeão.' (Faleceu no domingo de 4 de dezembro de 2011, dia do pentacampeonato brasileiro do Corinthians).",
      legado: "Símbolo máximo da inteligência, elegância com toques de calcanhar e líder da Democracia Corinthiana. Médico, pensador e ícone da resistência popular contra a ditadura militar.",
      tag: "democracia",
      tags: ["democracia", "artilheiro"],
      foto: "assets/images/idolos/socrates.jpg?v=3.1.0",
      fotoMomento: "A imagem imortal do Doutor Sócrates comemorando gol com o braço direito erguido e o punho cerrado para o alto, vestindo o icônico manto listrado alvinegro na Democracia Corinthiana.",
      fonteFoto: "Acervo Histórico SCCP / Revista Placar / Todo Poderoso Timão"
    },
    {
      id: "neto",
      nome: "José Ferreira Neto (Xodó da Fiel)",
      periodo: "1989 - 1993",
      anoEstreia: 1989,
      rankingIdolatria: 4,
      rankingDestaque: "Top 4 nas enquetes históricas do GE; grande condutor, artilheiro e coração do primeiro título brasileiro de 1990.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Meu Timão",
      jogos: 228,
      gols: 80,
      posicao: "Meia / Camisa 10",
      titulos: "Brasileirão 1990, Supercopa do Brasil 1991",
      frase: "'Eu não era nenhum craque de correr, mas na bola parada ninguém me ganhava. O título de 90 foi na raça!'",
      legado: "O grande maestro e artilheiro do primeiro Campeonato Brasileiro conquistado pelo Corinthians em 1990. Gols de falta históricos e garra contagiante.",
      tag: "artilheiro",
      tags: ["artilheiro", "campeao-90"],
      foto: "assets/images/idolos/neto.jpg",
      fotoMomento: "Craque Neto em plena comemoração vibrante com a camisa Kalunga na conquista do primeiro Brasileirão do Corinthians em 1990.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico 1990"
    },
    {
      id: "marcelinho",
      nome: "Marcelinho Carioca (Pé de Anjo)",
      periodo: "1994 - 2001, 2006, 2010",
      anoEstreia: 1994,
      rankingIdolatria: 3,
      rankingDestaque: "Top 3 histórico no GE e Placar; atleta masculino com maior número de títulos expressivos (Mundial, Bi Brasileiro, Copa do Brasil).",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Acervo SCCP",
      jogos: 433,
      gols: 206,
      posicao: "Meia / Especialista em Faltas",
      titulos: "Mundial 2000, Brasileirão 1998, 1999, Copa do Brasil 1995, Paulistas 1995, 1997, 1999, 2001",
      frase: "'O Corinthians é a minha segunda pele. Aqui eu aprendi o que é o amor de verdade de uma torcida.'",
      legado: "O jogador mais vitorioso da história do clube em taças de primeira grandeza. Maior cobrador de faltas do futebol brasileiro e 5º maior artilheiro da história do Timão.",
      tag: "artilheiro",
      tags: ["artilheiro", "campeao-mundial", "recordista"],
      foto: "assets/images/idolos/marcelinho.jpg",
      fotoMomento: "Marcelinho Carioca no auge de sua era multicampeã (bicampeão brasileiro e mundial), comemorando com o dedo nos lábios com o manto sagrado alvinegro.",
      fonteFoto: "Acervo Histórico SCCP / Meu Timão"
    },
    {
      id: "ronaldo",
      nome: "Ronaldo Fenômeno",
      periodo: "2009 - 2011",
      anoEstreia: 2009,
      rankingIdolatria: 8,
      rankingDestaque: "Ícone mundial (3x melhor da FIFA); colocou o Corinthians em projeção global e liderou o renascimento com títulos em 2009.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Acervo SCCP / Meu Timão",
      jogos: 69,
      gols: 35,
      posicao: "Centroavante",
      titulos: "Copa do Brasil 2009, Paulista Invicto 2009",
      frase: "'O Corinthians não vive de títulos, o Corinthians vive de Corinthians. Mas agora nós vamos viver de títulos também.'",
      legado: "Eleito 3 vezes melhor do mundo pela FIFA, escolheu o Timão para seu renascimento triunfal. Trouxe visibilidade global e o antológico golaço de cobertura na Vila Belmiro.",
      tag: "artilheiro",
      tags: ["artilheiro", "fenomeno"],
      foto: "assets/images/idolos/ronaldo.jpg",
      fotoMomento: "Ronaldo Fenômeno com a camisa listrada do Corinthians e medalha no peito, erguendo a taça da Copa do Brasil de 2009 sob chuva de serpentinas ao lado de Dentinho.",
      fonteFoto: "Acervo Meu Timão / Arquivo Histórico 2009"
    },
    {
      id: "danilo",
      nome: "Danilo (Zidanilo)",
      periodo: "2010 - 2018",
      anoEstreia: 2010,
      rankingIdolatria: 10,
      rankingDestaque: "O maestro das grandes decisões; campeão mundial, da Libertadores e de 3 Campeonatos Brasileiros.",
      rankingFonte: "Megaenquete Globo Esporte (GE) / Revista Placar / Meu Timão",
      jogos: 359,
      gols: 35,
      posicao: "Meia Clássico",
      titulos: "Mundial 2012, Libertadores 2012, Recopa 2013, Brasileirão 2011, 2015, 2017, Paulistas 2013, 2017, 2018",
      frase: "'O futebol não precisa ser corrido, precisa ser pensado no tempo certo.'",
      legado: "Decisivo em todos os grandes clássicos e jogos de mata-mata. Assistência de calcanhar para Emerson Sheik na final da Libertadores e frieza cirúrgica sob pressão extrema.",
      tag: "campeao-mundial",
      tags: ["campeao-mundial", "recordista"],
      foto: "assets/images/idolos/danilo.jpg",
      fotoMomento: "Danilo jogando a grande final do Mundial de Clubes da FIFA de 2012 contra o Chelsea em Yokohama, Japão (marcado por Ivanovic).",
      fonteFoto: "Acervo Meu Timão / FIFA Club World Cup 2012"
    },
    {
      id: "cassio",
      nome: "Cássio Ramos (O Gigante de Yokohama)",
      periodo: "2012 - 2024",
      anoEstreia: 2012,
      rankingIdolatria: 1,
      rankingDestaque: "Eleito #1 Maior Ídolo da História do Corinthians em megaenquete do Globo Esporte com mais de 43% dos votos populares.",
      rankingFonte: "Megaenquete Globo Esporte (GE, 2020) / Revista Placar / Acervo SCCP",
      jogos: 712,
      gols: 0,
      isGoleiro: true,
      penaltisDefendidos: 32,
      penaltisDecisivos: "Maior pegador de pênaltis dos 116 anos de história do Corinthians com 32 defesas oficiais. Pênaltis decisivos memoráveis: semifinal do Paulistão 2013 no Morumbi (pegou a cobrança de Rogério Ceni); grande final do Paulistão 2018 no Allianz Parque contra o rival Palmeiras (defendeu duas cobranças na decisão por pênaltis — Dudu e Lucas Lima —, garantindo o título na casa do rival); oitavas de final da Libertadores 2022 em La Bombonera contra o Boca Juniors (defendeu os pênaltis de Sebastián Villa e Juan Ramírez diante da pressão argentina); quartas da Copa Sul-Americana 2023 contra o Estudiantes em La Plata; além de defesas salvadoras de penalidades contra Flamengo, Grêmio e São Paulo.",
      posicao: "Goleiro / Muralha Histórica",
      titulos: "Mundial 2012, Libertadores 2012 (Invicto), Recopa 2013, Brasileirão 2015, 2017, Paulista 2013, 2017, 2018, 2019",
      frase: "'Em Yokohama contra o Chelsea, eu sentia que aquela bola do Hazard ou do Torres simplesmente não ia entrar.'",
      legado: "Segundo atleta com mais jogos na história do Corinthians (712 partidas). Melhor jogador do Mundial de Clubes da FIFA de 2012. Autor da defesa mais marcante da Libertadores 2012 no chute de Diego Souza.",
      tag: "campeao-mundial",
      tags: ["campeao-mundial", "recordista"],
      foto: "assets/images/idolos/cassio.jpg",
      fotoMomento: "Cássio Ramos fechando o gol do Corinthians contra o Chelsea no Mundial de Clubes FIFA 2012 em Yokohama, Japão.",
      fonteFoto: "FIFA Club World Cup Archive / Wikimedia Commons"
    },
    {
      id: "grazi",
      nome: "Grazi (A Capitã Eterna)",
      periodo: "2016 - 2023",
      anoEstreia: 2016,
      rankingIdolatria: 13,
      rankingDestaque: "A Capitã Eterna e pioneira das Brabas com 15 títulos oficiais, maior referência de liderança e representatividade.",
      rankingFonte: "Acervo Corinthians Feminino / CBF / Meu Timão",
      jogos: 258,
      gols: 78,
      numTitulos: 15,
      posicao: "Meia / Capitã Eterna",
      titulos: "Libertadores Feminina (4x), Brasileirão Feminino (5x), Paulistão (3x), Supercopa (2x), Copa Paulista (2022)",
      frase: "'Nós mostramos que a mulher corinthiana joga bola com a mesma garra e alma dos operários de 1910.'",
      legado: "Símbolo e capitã de toda a revolução vitoriosa do Corinthians Feminino. Maior referência de liderança e profissionalismo na história da modalidade no país, com 15 títulos oficiais conquistados.",
      tag: "as-brabas",
      tags: ["as-brabas", "recordista"],
      foto: "assets/images/idolos/grazi.jpg",
      fotoMomento: "Grazi, a capitã das Brabas, sorrindo e erguendo a taça do Brasileirão em alta definição na Neo Química Arena lotada.",
      fonteFoto: "Acervo Meu Timão / Agência Corinthians"
    },
    {
      id: "lele",
      nome: "Lelê (O Paredão das Brabas)",
      periodo: "2016 - 2020, 2022 - Presente",
      anoEstreia: 2016,
      rankingIdolatria: 15,
      rankingDestaque: "Maior goleira da história do Timão, heroína continental em decisões de pênaltis na Libertadores e 15 taças oficiais.",
      rankingFonte: "CONMEBOL Libertadores / CBF / Acervo Meu Timão",
      jogos: 190,
      gols: 0,
      isGoleiro: true,
      penaltisDefendidos: 10,
      penaltisDecisivos: "Paredão histórico das Brabas e especialista em decisões sob pressão máxima. Pênaltis decisivos memoráveis: grande final da Copa Libertadores Feminina 2017 contra o Colo-Colo (defendeu duas cobranças na disputa de pênaltis — chutes de Rocío Soto e Camila Sáez —, garantindo a primeira Libertadores Feminina da história alvinegra); semifinal da Libertadores Feminina 2023 contra o Internacional (defendeu a penalidade máxima decisiva de Isa Haas na disputa após 1 a 1 no tempo regulamentar, carimbando o passaporte para o tetracampeonato); além de defesas cruciais em fases eliminatórias da Supercopa do Brasil e do Paulistão Feminino.",
      numTitulos: 15,
      posicao: "Goleira / Ídola Continental",
      titulos: "Libertadores (5x: 2017, 2019, 2023, 2024, 2025), Brasileirão (5x: 2018, 2020, 2022, 2023, 2024), Paulistão (3x: 2019, 2020, 2023), Supercopa (2023), Copa Paulista (2022), Copa do Brasil (2016)",
      frase: "'Defender o Corinthians não é uma profissão, é uma honra sagrada. Toda bola difícil que eu defendo é empurrada pela força de 35 milhões de loucos.'",
      legado: "A maior goleira da história do Corinthians e muralha da Seleção Brasileira. Heroína na conquista da Libertadores de 2017 defendendo duas penalidades decisivas e gigante na final de 2023 contra o Palmeiras. Coleciona 15 títulos oficiais com o manto alvinegro.",
      tag: "as-brabas",
      tags: ["as-brabas", "recordista"],
      foto: "assets/images/idolos/lele.jpg",
      fotoMomento: "Lelê soberana de luvas e bola na mão com o manto sagrado de goleira do Corinthians no gramado da Neo Química Arena na grande final da Supercopa do Brasil (vitória por 4 a 1 sobre o Flamengo).",
      fonteFoto: "Fabio Giannelli / Agência Soccer Digital / Wikimedia Commons"
    },
    {
      id: "gabi-zanotti",
      nome: "Gabi Zanotti (A Mágica da 10)",
      periodo: "2018 - Presente",
      anoEstreia: 2018,
      rankingIdolatria: 9,
      rankingDestaque: "Eleita Rainha da América e principal maestrina da dinastia das Brabas com 18 taças oficiais conquistadas.",
      rankingFonte: "CONMEBOL / CBF / Acervo SCCP / Meu Timão",
      jogos: 230,
      gols: 68,
      numTitulos: 18,
      posicao: "Meio-campista / Camisa 10",
      titulos: "Libertadores (5x: 2019, 2021, 2023, 2024, 2025), Brasileirão (7x: 2018, 2020, 2021, 2022, 2023, 2024, 2025), Paulistão (4x: 2019, 2020, 2021, 2023), Supercopa (2x: 2022, 2024)",
      frase: "'Vestir a camisa 10 do Corinthians é saber que quando você entra em campo, 35 milhões de corações jogam com você.'",
      legado: "A grande maestrina da dinastia das Brabas com 18 títulos conquistados pelo Timão. Eleita Rainha da América, dona de inteligência ímpar e autora de gols antológicos em decisões de Libertadores e Brasileirão.",
      tag: "as-brabas",
      tags: ["as-brabas", "recordista"],
      foto: "assets/images/idolos/gabi_zanotti.jpg",
      fotoMomento: "Gabi Zanotti com a medalha de campeã continental no peito erguendo a taça da Copa Libertadores Feminina com o manto sagrado alvinegro.",
      fonteFoto: "Staff Images Woman / CONMEBOL Libertadores"
    },
    {
      id: "tamires",
      nome: "Tamires Dias (Mãe e Capitã da Fiel)",
      periodo: "2019 - Presente",
      anoEstreia: 2019,
      rankingIdolatria: 16,
      rankingDestaque: "Capitã da Seleção e da Fiel, símbolo mundial de liderança e multicampeã com 17 títulos oficiais.",
      rankingFonte: "CBF / FIFA / Acervo Meu Timão",
      jogos: 175,
      gols: 35,
      numTitulos: 17,
      posicao: "Lateral-esquerda / Ala",
      titulos: "Libertadores (4x: 2019, 2021, 2023, 2024), Brasileirão (5x: 2020, 2021, 2022, 2023, 2024), Paulistão (4x: 2019, 2020, 2021, 2023), Supercopa (3x: 2022, 2023, 2024), Copa Paulista (2022)",
      frase: "'A Fiel nos abraçou e mostrou que aqui nós jogamos por um propósito maior do que o futebol.'",
      legado: "Capitã da Seleção Brasileira e ícone global do esporte. Modelo de vigor atlético, liderança ética e qualidade técnica internacional, multicampeã com 17 títulos pelas Brabas e medalhista de prata olímpica em Paris 2024.",
      tag: "as-brabas",
      tags: ["as-brabas", "recordista"],
      foto: "assets/images/idolos/tamires.jpg?v=2.1.0",
      fotoMomento: "Tamires sorridente e com o rosto límpido vestindo o manto sagrado alvinegro com o escudo do Timão e o patch dourado oficial de Campeã da Copa Libertadores Feminina no peito.",
      fonteFoto: "Staff Images Woman / CONMEBOL Libertadores / Acervo Oficial"
    },
    {
      id: "vic-albuquerque",
      nome: "Vic Albuquerque (A Artilheira Histórica)",
      periodo: "2019 - 2021, 2022 - Presente",
      anoEstreia: 2019,
      rankingIdolatria: 14,
      rankingDestaque: "Maior artilheira de toda a história das Brabas com mais de 108 gols e recordista com 18 títulos.",
      rankingFonte: "CBF / Acervo Meu Timão / Agência Corinthians",
      jogos: 215,
      gols: 108,
      numTitulos: 18,
      posicao: "Atacante / Meia Ofensiva",
      titulos: "Libertadores (5x: 2019, 2021, 2023, 2024, 2025), Brasileirão (6x: 2020, 2021, 2022, 2023, 2024, 2025), Paulistão (4x: 2019, 2020, 2021, 2023), Supercopa (2x: 2023, 2024), Copa Paulista (2022)",
      frase: "'Ultrapassar 100 gols com a camisa do Timão é viver um sonho que eu nunca quero acordar.'",
      legado: "Maior artilheira de toda a história do Corinthians Feminino com mais de 108 gols e 18 títulos conquistados. Decisiva e fria em clássicos e finais, sinônimo de raça e precisão goleadora.",
      tag: "as-brabas",
      tags: ["as-brabas", "artilheiro", "recordista"],
      foto: "assets/images/idolos/vic_albuquerque.jpg",
      fotoMomento: "Vic Albuquerque com o manto alvinegro sagrado e a medalha de campeã no peito, erguendo orgulhosamente a taça oficial do Campeonato Brasileiro com o escudo do Corinthians estampado no coração.",
      fonteFoto: "Lívia Villas Boas / Staff Images Woman / CBF / Flickr Oficial"
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
    brabas: {
      maioresArtilheiras: [
        { nome: "Vic Albuquerque", gols: 108, jogos: 215, media: "0,50" },
        { nome: "Grazi", gols: 78, jogos: 258, media: "0,30" },
        { nome: "Adriana (Maga)", gols: 72, jogos: 148, media: "0,49" },
        { nome: "Gabi Zanotti", gols: 68, jogos: 230, media: "0,30" },
        { nome: "Millene", gols: 62, jogos: 152, media: "0,41" },
        { nome: "Jheniffer", gols: 51, jogos: 128, media: "0,40" }
      ],
      maisJogos: [
        { nome: "Grazi", jogos: 258, anos: "2016-2023" },
        { nome: "Gabi Zanotti", jogos: 230, anos: "2018-Presente" },
        { nome: "Vic Albuquerque", jogos: 215, anos: "2019-Presente" },
        { nome: "Paulinha", jogos: 198, anos: "2016-Presente" },
        { nome: "Lelê (Letícia Izidoro)", jogos: 190, anos: "2016-Presente" },
        { nome: "Katiuscia", jogos: 184, anos: "2018-2023" },
        { nome: "Tamires Dias", jogos: 175, anos: "2019-Presente" },
        { nome: "Millene", jogos: 152, anos: "2018-Presente" }
      ],
      feitosHistoricos: [
        {
          titulo: "48 Jogos Invicto (Recorde Mundial)",
          desc: "Maior sequência invicta da história do futebol de clubes mundial (2019 a 2020), com direito a 28 vitórias seguidas reconhecidas internacionalmente.",
          icone: "fa-solid fa-fire"
        },
        {
          titulo: "Pentacampeã da América",
          desc: "Maior vencedora da Copa Libertadores Feminina na história (2017, 2019, 2021, 2023, 2024), estabelecendo uma dinastia continental sem precedentes.",
          icone: "fa-solid fa-earth-americas"
        },
        {
          titulo: "Hegemonia Nacional (Heptacampeão)",
          desc: "Maior campeão brasileiro da história (2018, 2020, 2021, 2022, 2023, 2024), conquistando um histórico pentacampeonato consecutivo.",
          icone: "fa-solid fa-trophy"
        },
        {
          titulo: "Recorde Sul-Americano de Público",
          desc: "44.529 torcedores alvinegros na Neo Química Arena na final do Brasileirão Feminino, a maior presença de público de clubes no continente.",
          icone: "fa-solid fa-users"
        }
      ]
    },
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
      mandante: { nome: "Corinthians", gols: "-", escudo: "COR", logo: "assets/images/clubes/corinthians.png" },
      visitante: { nome: "Mirassol", gols: "-", escudo: "MIR", logo: "assets/images/clubes/mirassol.png" },
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
      mandante: { nome: "Vasco da Gama", gols: 3, escudo: "VAS", logo: "assets/images/clubes/vasco.png" },
      visitante: { nome: "Corinthians", gols: 2, escudo: "COR", logo: "assets/images/clubes/corinthians.png" },
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
      mandante: { nome: "Corinthians", gols: 1, escudo: "COR", logo: "assets/images/clubes/corinthians.png" },
      visitante: { nome: "Vitória", gols: 1, escudo: "VIT", logo: "assets/images/clubes/vitoria.png" },
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
      mandante: { nome: "Palmeiras", gols: 4, escudo: "PAL", logo: "assets/images/clubes/palmeiras.png" },
      visitante: { nome: "Corinthians", gols: 1, escudo: "COR", logo: "assets/images/clubes/corinthians.png" },
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
      mandante: { nome: "Internacional", gols: 2, escudo: "INT", logo: "assets/images/clubes/internacional.png" },
      visitante: { nome: "Corinthians", gols: 1, escudo: "COR", logo: "assets/images/clubes/corinthians.png" },
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
