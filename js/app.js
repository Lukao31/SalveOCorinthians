/**
 * Salve o Corinthians - Lógica da Aplicação Interativa
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicializações
  initLiveDebtTicker();
  renderFatosDossie('todos');
  renderIntervencaoJudicial();
  initFinancialCharts();
  initSafielSimulator();
  renderUltimosJogos();
  renderPaulistaoMiniSecao();
  renderTitulos('todos', '', 'todos');
  renderIdolos('todos');
  renderEstatisticas();
  renderFontes();
  initHinoPlayer();
  initFundacaoModal();
  setupEventListeners();
  setupScrollSpy();
});

/* ==========================================================================
   1. Dossiê da Gestão & Fatos (Erros e Acertos)
   ========================================================================== */
function renderFatosDossie(filtro = 'todos') {
  const container = document.getElementById('dossie-grid');
  if (!container) return;

  const fatos = CORINTHIANS_DATA.fatosGestao;
  const fatosFiltrados = fatos.filter(item => {
    if (filtro === 'todos') return true;
    if (filtro === 'acerto' || filtro === 'erro' || filtro === 'misto') {
      return item.tipo === filtro;
    }
    return item.categoria.toLowerCase() === filtro.toLowerCase();
  });

  container.innerHTML = fatosFiltrados.map(item => {
    const badgeClass = item.tipo === 'acerto' ? 'badge-acerto' : (item.tipo === 'erro' ? 'badge-erro' : 'badge-misto');
    const badgeIcon = item.tipo === 'acerto' ? 'fa-check' : (item.tipo === 'erro' ? 'fa-triangle-exclamation' : 'fa-scale-balanced');
    const badgeLabel = item.tipo === 'acerto' ? 'Acerto / Vitória' : (item.tipo === 'erro' ? 'Erro / Crítico' : 'Misto / Conturbado');

    return `
      <article class="dossie-card ${item.tipo}" data-id="${item.id}">
        <div>
          <div class="dossie-card-header">
            <span class="dossie-periodo">${item.periodo}</span>
            <span class="badge ${badgeClass}"><i class="fa-solid ${badgeIcon}"></i> ${badgeLabel}</span>
          </div>
          <div class="dossie-presidente"><i class="fa-solid fa-user-tie"></i> ${item.presidente}</div>
          <h3 class="dossie-title">${item.titulo}</h3>
          <p class="dossie-resumo">${item.resumo}</p>

          <div class="dossie-box positivo">
            <div class="dossie-box-title"><i class="fa-solid fa-plus-circle"></i> Fato & Impacto Positivo</div>
            <p>${item.impactoPositivo}</p>
          </div>

          <div class="dossie-box negativo">
            <div class="dossie-box-title"><i class="fa-solid fa-circle-exclamation"></i> Fato & Erro / Risco</div>
            <p>${item.impactoNegativo}</p>
          </div>
        </div>

        <div class="dossie-footer">
          <div class="dossie-sources">
            <i class="fa-solid fa-bookmark"></i> Fontes: <span>${item.fontes.join(', ')}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   2. Balanço Financeiro & Gráficos (Chart.js)
   ========================================================================== */
let chartDividaInstance = null;
let chartComposicaoInstance = null;
let chartReceitasInstance = null;

function initFinancialCharts() {
  const financas = CORINTHIANS_DATA.financas;

  // Chart 1: Histórico de Evolução da Dívida
  const ctxDivida = document.getElementById('chartDivida');
  if (ctxDivida) {
    const labels = financas.historicoDivida.map(item => item.ano);
    const dataValues = financas.historicoDivida.map(item => item.valor);

    chartDividaInstance = new Chart(ctxDivida, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Dívida do Clube (R$ Milhões)',
          data: dataValues,
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#000000',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 9
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#ffffff', font: { family: 'Inter', weight: 600 } }
          },
          tooltip: {
            backgroundColor: '#161616',
            borderColor: '#ffffff',
            borderWidth: 1,
            titleColor: '#ffffff',
            bodyColor: '#e0e0e0',
            callbacks: {
              afterLabel: function(context) {
                const index = context.dataIndex;
                return 'Contexto: ' + financas.historicoDivida[index].contexto;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.06)' },
            ticks: { color: '#a0a0a0', font: { family: 'Inter' } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.06)' },
            ticks: {
              color: '#a0a0a0',
              font: { family: 'Inter' },
              callback: val => 'R$ ' + val + 'M'
            }
          }
        }
      }
    });
  }

  // Chart 2: Composição da Dívida
  const ctxComp = document.getElementById('chartComposicao');
  if (ctxComp) {
    const compLabels = financas.composicaoDivida.map(item => item.categoria);
    const compValues = financas.composicaoDivida.map(item => item.valor);
    const compColors = financas.composicaoDivida.map(item => item.cor);

    chartComposicaoInstance = new Chart(ctxComp, {
      type: 'doughnut',
      data: {
        labels: compLabels,
        datasets: [{
          data: compValues,
          backgroundColor: compColors,
          borderColor: '#0a0a0a',
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#c0c0c0',
              font: { family: 'Inter', size: 11 },
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: '#161616',
            borderColor: '#ffffff',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return ' ' + context.label + ': R$ ' + context.raw + ' Milhões';
              }
            }
          }
        },
        cutout: '65%'
      }
    });
  }

  // Chart 3: Fontes de Receita
  const ctxRec = document.getElementById('chartReceitas');
  if (ctxRec) {
    const recLabels = financas.composicaoReceita.map(item => item.fonte);
    const recValues = financas.composicaoReceita.map(item => item.valor);

    chartReceitasInstance = new Chart(ctxRec, {
      type: 'bar',
      data: {
        labels: recLabels,
        datasets: [{
          label: 'Receita Estimada (R$ Milhões)',
          data: recValues,
          backgroundColor: '#ffffff',
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#161616',
            borderColor: '#ffffff',
            borderWidth: 1,
            callbacks: {
              label: ctx => ' R$ ' + ctx.raw + ' Milhões'
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.06)' },
            ticks: { color: '#a0a0a0', callback: val => 'R$ ' + val + 'M' }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#ffffff', font: { family: 'Inter', size: 12, weight: 600 } }
          }
        }
      }
    });
  }
}

/* ==========================================================================
   3. Simulador Interativo do Projeto SAFIEL
   ========================================================================== */
function initSafielSimulator() {
  const rangeTorcedores = document.getElementById('range-torcedores');
  const rangeValor = document.getElementById('range-valor');

  const lblTorcedores = document.getElementById('lbl-torcedores-val');
  const lblValor = document.getElementById('lbl-valor-val');

  const resMensal = document.getElementById('res-arrecadacao-mes');
  const resAnual = document.getElementById('res-arrecadacao-ano');
  const resMesesArena = document.getElementById('res-meses-arena');
  const resMesesTotal = document.getElementById('res-meses-total');

  if (!rangeTorcedores || !rangeValor) return;

  function updateCalculos() {
    const numTorcedores = parseInt(rangeTorcedores.value, 10);
    const valorMensal = parseInt(rangeValor.value, 10);

    // Formatação de torcedores
    let torcedoresFormatados = '';
    if (numTorcedores >= 1000000) {
      torcedoresFormatados = (numTorcedores / 1000000).toFixed(1) + ' Milhões de Fiéis';
    } else {
      torcedoresFormatados = (numTorcedores / 1000).toLocaleString('pt-BR') + ' mil Fiéis';
    }
    lblTorcedores.textContent = torcedoresFormatados;
    lblValor.textContent = 'R$ ' + valorMensal + ' / mês';

    // Cálculos
    const arrecadacaoMensal = numTorcedores * valorMensal;
    const arrecadacaoAnual = arrecadacaoMensal * 12;

    const dividaArena = 700000000;      // R$ 700 milhões
    const dividaTotal = 2150000000;     // R$ 2,15 bilhões

    const mesesArena = Math.ceil(dividaArena / arrecadacaoMensal);
    const mesesTotal = Math.ceil(dividaTotal / arrecadacaoMensal);

    resMensal.textContent = 'R$ ' + formatarMoedaAbreviada(arrecadacaoMensal);
    resAnual.textContent = 'R$ ' + formatarMoedaAbreviada(arrecadacaoAnual);
    
    if (mesesArena < 12) {
      resMesesArena.textContent = mesesArena + ' meses';
    } else {
      resMesesArena.textContent = (mesesArena / 12).toFixed(1) + ' anos';
    }

    if (mesesTotal < 12) {
      resMesesTotal.textContent = mesesTotal + ' meses';
    } else {
      resMesesTotal.textContent = (mesesTotal / 12).toFixed(1) + ' anos';
    }
  }

  rangeTorcedores.addEventListener('input', updateCalculos);
  rangeValor.addEventListener('input', updateCalculos);
  updateCalculos();
}

function formatarMoedaAbreviada(valor) {
  if (valor >= 1000000000) {
    return (valor / 1000000000).toFixed(2) + ' Bi';
  }
  if (valor >= 1000000) {
    return (valor / 1000000).toFixed(1) + ' Mi';
  }
  if (valor >= 1000) {
    return (valor / 1000).toFixed(0) + ' mil';
  }
  return valor.toLocaleString('pt-BR');
}

/* ==========================================================================
   4. Vitrine de Títulos (Ordem Cronológica, Masculino & As Brabas, e Todos os 31 Paulistões)
   ========================================================================== */
let titulosOrdemAsc = true; // Padrão: Cronológica (1914 ➔ 2026)
let currentTituloModalidade = 'todos'; // 'todos' | 'Masculino' | 'Feminino'
let currentTituloCategoria = 'todos';
let titulosAtivosNaVitrine = [];
let currentTituloModalId = null;

function renderPaulistaoMiniSecao() {
  const grid = document.getElementById('paulistao-all31-grid');
  if (!grid || !CORINTHIANS_DATA || !Array.isArray(CORINTHIANS_DATA.titulos)) return;

  const paulistoes = CORINTHIANS_DATA.titulos
    .filter(item => item.modalidade === 'Masculino' && item.paulistaEdicao)
    .sort((a, b) => (a.ordem || parseInt(a.ano, 10)) - (b.ordem || parseInt(b.ano, 10)));

  grid.innerHTML = paulistoes.map((item, idx) => {
    const edicaoNum = idx + 1;
    const resumoCurto = item.detalhe.length > 132 ? item.detalhe.slice(0, 129) + '...' : item.detalhe;
    return `
      <article class="paulistao-top5-card" onclick="abrirModalTitulo('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirModalTitulo('${item.id}');}" aria-label="${item.ano}: ${item.titulo} - Clique para expandir foto do elenco campeão">
        <div class="paulistao-top5-img-wrap">
          <img src="${item.fotoElenco}" alt="Elenco Campeão Paulista de ${item.ano} - ${item.titulo}" class="paulistao-top5-img" loading="lazy">
          <span class="paulistao-top5-rank">#${edicaoNum} • ${item.ano}</span>
          <div class="paulistao-top5-zoom"><i class="fa-solid fa-expand"></i> Expandir Elenco</div>
        </div>
        <div class="paulistao-top5-body">
          <h5>${item.paulistaEdicao} • ${item.ano}</h5>
          <p>${resumoCurto}</p>
        </div>
      </article>
    `;
  }).join('');
}

function atualizarBannerModalidadeTitulos(totalExibidos) {
  const statusEl = document.getElementById('titulos-modalidade-status');
  if (!statusEl) return;

  const ordemTxt = titulosOrdemAsc ? 'Ordem Cronológica (1914 ➔ 2026)' : 'Ordem Mais Recentes (2026 ➔ 1914)';

  if (currentTituloModalidade === 'Masculino') {
    statusEl.innerHTML = `Exibindo <strong>Futebol Masculino</strong> em <strong>${ordemTxt}</strong> • <strong>${totalExibidos} conquistas</strong> com foto histórica de todos os elencos campeões.`;
  } else if (currentTituloModalidade === 'Feminino') {
    statusEl.innerHTML = `Exibindo <strong>As Brabas (Futebol Feminino)</strong> em <strong>${ordemTxt.replace('1914', '2016')}</strong> • <strong>${totalExibidos} conquistas</strong> da maior dinastia feminina das Américas.`;
  } else {
    statusEl.innerHTML = `Exibindo <strong>Ambos Juntos (Futebol Masculino + As Brabas)</strong> por <strong>${ordemTxt}</strong> • <strong>${totalExibidos} conquistas oficiais</strong> lado a lado no mesmo formato.`;
  }
}

function renderTitulos(categoria = currentTituloCategoria, termoBusca = '', modalidade = currentTituloModalidade) {
  const container = document.getElementById('titulos-grid');
  if (!container) return;

  currentTituloCategoria = categoria;
  currentTituloModalidade = modalidade;

  const titulos = CORINTHIANS_DATA.titulos;
  let filtrados = titulos.filter(item => {
    const itemMod = item.modalidade || 'Masculino';
    const matchMod = modalidade === 'todos' || itemMod.toLowerCase() === modalidade.toLowerCase();
    const matchCat = categoria === 'todos' || item.categoria.toLowerCase() === categoria.toLowerCase();
    const matchTermo = !termoBusca ||
      item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.ano.includes(termoBusca) ||
      (item.legendaElenco && item.legendaElenco.toLowerCase().includes(termoBusca.toLowerCase())) ||
      item.detalhe.toLowerCase().includes(termoBusca.toLowerCase()) ||
      itemMod.toLowerCase().includes(termoBusca.toLowerCase());
    return matchMod && matchCat && matchTermo;
  });

  // Ordenação cronológica rigorosa (intercalando Masculino e Feminino por ano/mês quando ambos juntos)
  filtrados.sort((a, b) => {
    const ordemA = typeof a.ordem !== 'undefined' ? a.ordem : parseInt(a.ano, 10);
    const ordemB = typeof b.ordem !== 'undefined' ? b.ordem : parseInt(b.ano, 10);
    return titulosOrdemAsc ? (ordemA - ordemB) : (ordemB - ordemA);
  });

  atualizarBannerModalidadeTitulos(filtrados.length);

  if (filtrados.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #888;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Nenhuma conquista encontrada com os filtros ou termos selecionados.</p>
      </div>
    `;
    return;
  }

  titulosAtivosNaVitrine = filtrados;

  container.innerHTML = filtrados.map(item => {
    const isBrabas = item.modalidade === 'Feminino';
    const modBadgeHtml = isBrabas
      ? `<span class="titulo-modalidade-badge is-brabas"><i class="fa-solid fa-crown"></i> As Brabas • Feminino</span>`
      : `<span class="titulo-modalidade-badge is-masculino"><i class="fa-solid fa-shield-halved"></i> Masculino${item.paulistaEdicao ? ' • ' + item.paulistaEdicao : ''}</span>`;

    return `
    <div class="titulo-card ${isBrabas ? 'titulo-card-brabas' : ''}" onclick="abrirModalTitulo('${item.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirModalTitulo('${item.id}');}" tabindex="0" role="button" aria-label="${item.titulo} (${item.ano}) - Clique para expandir foto do elenco campeão">
      <div class="titulo-card-content">
        <div>
          <div class="d-flex justify-content-between align-items-center" style="gap: 0.4rem; flex-wrap: wrap;">
            <div class="titulo-card-ano">${item.ano}</div>
            <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
              ${modBadgeHtml}
              <span class="badge badge-misto">${item.categoria}</span>
            </div>
          </div>
          <div class="titulo-card-cat"><i class="fa-solid fa-location-dot"></i> ${item.sede}</div>
          <h4 class="titulo-card-nome">${item.titulo}</h4>
          <p class="titulo-card-detalhe">${item.detalhe}</p>
        </div>

        <div class="titulo-card-hover-hint">
          <span><i class="fa-solid fa-users-viewfinder"></i> Ver Elenco • Clique na Foto p/ Expandir</span>
          <i class="fa-solid fa-expand"></i>
        </div>
      </div>

      <!-- Camada do Elenco Campeão revelada ao passar o mouse -->
      <div class="titulo-card-elenco-overlay">
        <div class="titulo-elenco-img-wrapper" onclick="event.stopPropagation(); abrirModalTitulo('${item.id}')" title="Clique na foto para expandir o elenco campeão e sua legenda">
          <img src="${item.fotoElenco}" alt="Elenco Campeão do Corinthians - ${item.titulo} (${item.ano})" class="titulo-elenco-img" loading="lazy">
          <div class="titulo-elenco-badge">
            <i class="fa-solid ${isBrabas ? 'fa-crown' : 'fa-trophy'}"></i> ${isBrabas ? 'As Brabas Campeãs' : 'Elenco Campeão'} • ${item.ano}
          </div>
          <div class="titulo-elenco-zoom-hint">
            <i class="fa-solid fa-expand"></i> <span>Ver Foto &amp; Legenda</span>
          </div>
        </div>
        <div class="titulo-elenco-legenda" onclick="event.stopPropagation(); abrirModalTitulo('${item.id}')">
          <div>
            <div class="titulo-elenco-legenda-titulo">
              <i class="fa-solid fa-camera-retro"></i> Legenda do Título
            </div>
            <p class="titulo-elenco-legenda-texto">${item.legendaElenco}</p>
          </div>
          <button class="btn-expandir-elenco" type="button" onclick="event.stopPropagation(); abrirModalTitulo('${item.id}')" aria-label="Expandir foto do elenco de ${item.titulo}">
            <i class="fa-regular fa-image"></i> Ver Foto e Legenda Expandida
          </button>
        </div>
      </div>
    </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. Panteão dos Ídolos e Lendas Alvinegras (Futebol Masculino e Feminino)
   ========================================================================== */
let currentIdoloFiltro = 'todos';
let currentIdoloSort = 'cronologica';

function renderIdolos(filtro = currentIdoloFiltro, termoBusca = '', modoSort = currentIdoloSort) {
  const container = document.getElementById('idolos-grid');
  if (!container) return;

  // Se o filtro selecionado for 'mais-considerados', força ordenação por idolatria
  if (filtro === 'mais-considerados') {
    modoSort = 'idolatria';
  }

  const idolos = CORINTHIANS_DATA.idolos;
  let filtrados = idolos.filter(item => {
    const matchFiltro = filtro === 'todos' || 
      filtro === 'mais-considerados' ||
      item.tag === filtro || 
      (Array.isArray(item.tags) && item.tags.includes(filtro));
    const matchTermo = !termoBusca ||
      item.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.posicao.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.legado.toLowerCase().includes(termoBusca.toLowerCase()) ||
      (item.periodo && item.periodo.toLowerCase().includes(termoBusca.toLowerCase()));
    return matchFiltro && matchTermo;
  });

  // Ordenação: 'cronologica' (ordem de estreia 1945 -> atual) ou 'idolatria' (ranking histórico GE / Placar / SCCP)
  if (modoSort === 'idolatria') {
    filtrados.sort((a, b) => (a.rankingIdolatria || 999) - (b.rankingIdolatria || 999));
  } else {
    // Padrão: Cronológica
    filtrados.sort((a, b) => (a.anoEstreia || 9999) - (b.anoEstreia || 9999));
  }

  if (filtrados.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #888;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; margin-bottom: 0.75rem; display: block; opacity: 0.5;"></i>
        <p>Nenhuma lenda alvinegra encontrada com essa busca ou categoria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtrados.map(item => {
    const numTitulos = item.numTitulos !== undefined ? item.numTitulos : (item.titulos ? item.titulos.split(',').length : 0);
    const isGoleiro = item.isGoleiro || (item.posicao && item.posicao.toLowerCase().includes('goleir'));
    const statMeioNum = isGoleiro
      ? `<i class="fa-solid fa-hand" style="font-size: 0.9em; margin-right: 2px;"></i> ${item.penaltisDefendidos || 0}`
      : `${item.gols}`;
    const statMeioLbl = isGoleiro ? 'Pênaltis Salvos' : 'Gols';
    const statMeioClass = isGoleiro ? 'idolo-stat-item idolo-stat-penaltis' : 'idolo-stat-item';

    // Badge visual superior e box de contexto conforme o modo de ordenação
    let orderBadgeHtml = '';
    let contextBoxHtml = '';

    if (modoSort === 'idolatria') {
      const top1Class = item.rankingIdolatria === 1 ? 'badge-idolatria-top1' : '';
      let badgeLabel = '';
      if (item.rankingIdolatria === 1) {
        badgeLabel = '🥇 #1 MAIOR ÍDOLO (GE)';
      } else if (item.rankingIdolatria === 2) {
        badgeLabel = '🥈 #2 HISTÓRICO';
      } else if (item.rankingIdolatria === 3) {
        badgeLabel = '🥉 #3 HISTÓRICO';
      } else {
        badgeLabel = `<i class="fa-solid fa-crown text-gold"></i> #${item.rankingIdolatria} NO RANKING`;
      }

      orderBadgeHtml = `
        <span class="idolo-card-order-badge badge-idolatria ${top1Class}">
          ${badgeLabel}
        </span>
      `;
      contextBoxHtml = `
        <div class="idolo-card-ranking-box">
          <div><i class="fa-solid fa-award text-gold"></i> <strong>#${item.rankingIdolatria} no Reconhecimento da Fiel:</strong> ${item.rankingDestaque || 'Lenda consagrada na história do Timão.'}</div>
          <span class="ranking-fonte"><i class="fa-solid fa-shield-halved"></i> Fonte: ${item.rankingFonte || 'Votações Históricas GE / Revista Placar / Acervo SCCP'}</span>
        </div>
      `;
    } else {
      orderBadgeHtml = `
        <span class="idolo-card-order-badge badge-cronologia">
          <i class="fa-regular fa-calendar-days"></i> Estreia em ${item.anoEstreia || item.periodo.split(' ')[0]}
        </span>
      `;
      contextBoxHtml = `
        <div class="idolo-card-era-box">
          <i class="fa-solid fa-timeline"></i> <strong>Linha do Tempo:</strong> Estreou no Timão em ${item.anoEstreia} (${item.periodo}) • ${item.rankingDestaque ? item.rankingDestaque.split('(')[0].trim() : 'Glórias eternas'}
        </div>
      `;
    }

    return `
    <div class="idolo-card" onclick="abrirModalIdolo('${item.id}')" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver foto e história de ${item.nome}">
      <div class="idolo-card-thumb-wrapper">
        ${orderBadgeHtml}
        <img src="${item.foto}" alt="${item.nome}" class="idolo-card-thumb" loading="lazy">
        <div class="idolo-card-thumb-overlay">
          <span><i class="fa-solid fa-expand"></i> Ver Foto & Momento</span>
        </div>
        <span class="idolo-card-tag">${item.tag === 'as-brabas' ? 'AS BRABAS' : item.tag.toUpperCase()}</span>
      </div>

      <div class="idolo-card-content">
        <div class="idolo-top">
          <div>
            <h4 class="idolo-nome">${item.nome}</h4>
            <div class="idolo-posicao">${item.posicao} • ${item.periodo}</div>
          </div>
        </div>

        ${contextBoxHtml}

        <div class="idolo-stats-bar">
          <div class="idolo-stat-item">
            <span class="idolo-stat-num">${item.jogos}</span>
            <span class="idolo-stat-lbl">Partidas</span>
          </div>
          <div class="${statMeioClass}">
            <span class="idolo-stat-num">${statMeioNum}</span>
            <span class="idolo-stat-lbl">${statMeioLbl}</span>
          </div>
          <div class="idolo-stat-item idolo-stat-trofeus">
            <span class="idolo-stat-num"><i class="fa-solid fa-trophy"></i> ${numTitulos}</span>
            <span class="idolo-stat-lbl">Títulos</span>
          </div>
        </div>

        ${isGoleiro && item.penaltisDecisivos ? `
        <div class="idolo-card-penaltis-box">
          <div class="idolo-card-penaltis-header">
            <i class="fa-solid fa-hand-holding-hand"></i> <strong>Pênaltis Decisivos Pegos:</strong>
          </div>
          <div class="idolo-card-penaltis-texto">${item.penaltisDecisivos}</div>
        </div>
        ` : ''}

        <div class="idolo-card-titulos-box">
          <div class="idolo-card-titulos-header">
            <i class="fa-solid fa-trophy"></i> <strong>Títulos Conquistados:</strong>
          </div>
          <div class="idolo-card-titulos-texto">${item.titulos}</div>
        </div>

        <blockquote class="idolo-quote">${item.frase}</blockquote>
        <p class="idolo-legado">${item.legado}</p>

        <div class="idolo-card-actions">
          <button class="btn-ver-foto-idolo" type="button" onclick="event.stopPropagation(); abrirModalIdolo('${item.id}')">
            <i class="fa-regular fa-image"></i> Ver Foto e Momento Histórico
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

/* ==========================================================================
   6. Estatísticas & Invasões
   ========================================================================== */
function renderEstatisticas() {
  const containerArtilheiros = document.getElementById('table-artilheiros-body');
  const containerJogos = document.getElementById('table-jogos-body');
  const containerBrabasArtilheiras = document.getElementById('table-brabas-artilheiras-body');
  const containerBrabasJogos = document.getElementById('table-brabas-jogos-body');
  const containerBrabasFeitos = document.getElementById('brabas-feitos-grid');
  const containerInvasoes = document.getElementById('invasoes-grid');

  if (containerArtilheiros) {
    containerArtilheiros.innerHTML = CORINTHIANS_DATA.estatisticas.maioresArtilheiros.map((item, idx) => `
      <tr>
        <td class="strong">${idx + 1}º ${item.nome}</td>
        <td class="strong" style="color: #ffffff;">${item.gols}</td>
        <td>${item.jogos}</td>
        <td>${item.media}</td>
      </tr>
    `).join('');
  }

  if (containerJogos) {
    containerJogos.innerHTML = CORINTHIANS_DATA.estatisticas.maisJogos.map((item, idx) => `
      <tr>
        <td class="strong">${idx + 1}º ${item.nome}</td>
        <td class="strong" style="color: #ffffff;">${item.jogos}</td>
        <td>${item.anos}</td>
      </tr>
    `).join('');
  }

  // Estatísticas das Brabas
  if (containerBrabasArtilheiras && CORINTHIANS_DATA.estatisticas.brabas) {
    containerBrabasArtilheiras.innerHTML = CORINTHIANS_DATA.estatisticas.brabas.maioresArtilheiras.map((item, idx) => `
      <tr>
        <td class="strong"><span style="color: #c084fc; margin-right: 4px;">${idx + 1}º</span> ${item.nome}</td>
        <td class="strong" style="color: #ffffff;">${item.gols}</td>
        <td>${item.jogos}</td>
        <td>${item.media}</td>
      </tr>
    `).join('');
  }

  if (containerBrabasJogos && CORINTHIANS_DATA.estatisticas.brabas) {
    containerBrabasJogos.innerHTML = CORINTHIANS_DATA.estatisticas.brabas.maisJogos.map((item, idx) => `
      <tr>
        <td class="strong"><span style="color: #c084fc; margin-right: 4px;">${idx + 1}º</span> ${item.nome}</td>
        <td class="strong" style="color: #ffffff;">${item.jogos}</td>
        <td>${item.anos}</td>
      </tr>
    `).join('');
  }

  if (containerBrabasFeitos && CORINTHIANS_DATA.estatisticas.brabas) {
    containerBrabasFeitos.innerHTML = CORINTHIANS_DATA.estatisticas.brabas.feitosHistoricos.map(item => `
      <div class="braba-feito-card">
        <div class="braba-feito-icone"><i class="${item.icone}"></i></div>
        <div class="braba-feito-titulo">${item.titulo}</div>
        <div class="braba-feito-desc">${item.desc}</div>
      </div>
    `).join('');
  }

  if (containerInvasoes) {
    containerInvasoes.innerHTML = CORINTHIANS_DATA.estatisticas.invasoesMemoraveis.map((item) => {
      const fotoDestaque = item.fotos && item.fotos[0] ? item.fotos[0].url : '';
      return `
        <div class="invasao-card" onclick="abrirModalInvasao('${item.id}')" role="button" tabindex="0" aria-label="Ver 3 fotos e relatos de ${item.nome}" onkeydown="if(event.key==='Enter') abrirModalInvasao('${item.id}')">
          <div class="invasao-card-img-wrap">
            <img src="${fotoDestaque}" alt="${item.nome}" class="invasao-card-img" loading="lazy">
            <div class="invasao-badge-ano">${item.ano}</div>
            <div class="invasao-badge-fotos"><i class="fa-solid fa-camera"></i> 3 Fotos Históricas</div>
          </div>
          <div class="invasao-card-body">
            <h4 class="invasao-nome">${item.nome}</h4>
            <div class="invasao-publico"><i class="fa-solid fa-users"></i> ${item.publico}</div>
            <p class="invasao-fato">${item.fato}</p>
            <div class="invasao-btn-action">
              <span>Ver Fotos & Relatos</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   7. Fontes Confiáveis & Links
   ========================================================================== */
function renderFontes() {
  const container = document.getElementById('fontes-grid');
  if (!container) return;

  container.innerHTML = CORINTHIANS_DATA.fontes.map(item => `
    <div class="fonte-card">
      <div>
        <div class="fonte-badge">${item.tipo}</div>
        <h4 class="fonte-nome">${item.nome}</h4>
        <p class="fonte-foco">${item.foco}</p>
        <div class="fonte-destaque">
          <i class="fa-solid fa-circle-check"></i> ${item.destaque}
        </div>
      </div>
      <div>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-fonte-link">
          Acessar Canal / Conteúdo <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Eventos e Interações de UI
   ========================================================================== */
function setupEventListeners() {
  // Filtros Dossiê
  const dossieBtns = document.querySelectorAll('.dossie-filter-btn');
  dossieBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dossieBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFatosDossie(btn.getAttribute('data-filter'));
    });
  });

  // Filtros Títulos (Categorias, Busca, Ordem Cronológica e Seletor Masculino / As Brabas / Ambos Juntos)
  const tituloBtns = document.querySelectorAll('.titulo-filter-btn');
  const tituloModBtns = document.querySelectorAll('.titulos-mod-pill');
  const btnTitulosModPrev = document.getElementById('btn-titulos-mod-prev');
  const btnTitulosModNext = document.getElementById('btn-titulos-mod-next');
  const btnTitulosModFlip = document.getElementById('btn-titulos-mod-flip');
  const searchTitulos = document.getElementById('search-titulos');
  let currentTituloCat = 'todos';
  const modosModalidade = ['todos', 'Masculino', 'Feminino'];

  function setModalidadeTitulos(novaMod) {
    currentTituloModalidade = novaMod;
    tituloModBtns.forEach(b => {
      const isMatch = b.getAttribute('data-modalidade') === novaMod;
      b.classList.toggle('active', isMatch);
      b.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
    renderTitulos(currentTituloCat, searchTitulos ? searchTitulos.value : '', currentTituloModalidade);
  }

  tituloModBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setModalidadeTitulos(btn.getAttribute('data-modalidade') || 'todos');
    });
  });

  function ciclarModalidadeTitulos(delta) {
    const idxAtual = modosModalidade.indexOf(currentTituloModalidade);
    const proxIdx = (idxAtual + delta + modosModalidade.length) % modosModalidade.length;
    setModalidadeTitulos(modosModalidade[proxIdx]);
  }

  if (btnTitulosModPrev) btnTitulosModPrev.addEventListener('click', () => ciclarModalidadeTitulos(-1));
  if (btnTitulosModNext) btnTitulosModNext.addEventListener('click', () => ciclarModalidadeTitulos(1));
  if (btnTitulosModFlip) btnTitulosModFlip.addEventListener('click', () => ciclarModalidadeTitulos(1));

  tituloBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tituloBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTituloCat = btn.getAttribute('data-filter');
      renderTitulos(currentTituloCat, searchTitulos ? searchTitulos.value : '', currentTituloModalidade);
    });
  });

  if (searchTitulos) {
    searchTitulos.addEventListener('input', (e) => {
      renderTitulos(currentTituloCat, e.target.value, currentTituloModalidade);
    });
  }

  // Alternador de Ordem Cronológica de Títulos
  const btnOrdemTitulos = document.getElementById('btn-ordem-titulos');
  if (btnOrdemTitulos) {
    btnOrdemTitulos.addEventListener('click', () => {
      titulosOrdemAsc = !titulosOrdemAsc;
      btnOrdemTitulos.innerHTML = titulosOrdemAsc
        ? '<i class="fa-solid fa-arrow-down-1-9"></i> <span>Ordem: 1914 ➔ 2026</span>'
        : '<i class="fa-solid fa-arrow-down-9-1"></i> <span>Ordem: 2026 ➔ 1914</span>';
      renderTitulos(currentTituloCat, searchTitulos ? searchTitulos.value : '', currentTituloModalidade);
    });
  }

  // Filtros e Ordenação de Ídolos e Lendas
  const idoloBtns = document.querySelectorAll('.idolo-filter-btn');
  const searchIdolos = document.getElementById('search-idolos');
  const idoloSortBtns = document.querySelectorAll('.idolo-sort-btn');
  const sortCaptionText = document.getElementById('idolos-sort-caption-text');

  idoloBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      idoloBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentIdoloFiltro = btn.getAttribute('data-filter');

      // Se o usuário selecionou o filtro 'mais-considerados', sincroniza o botão de ordenação
      if (currentIdoloFiltro === 'mais-considerados') {
        currentIdoloSort = 'idolatria';
        idoloSortBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-sort') === 'idolatria');
        });
        if (sortCaptionText) {
          sortCaptionText.innerHTML = 'Exibindo na <strong>ordem dos mais considerados ídolos</strong> segundo dados e fontes confiáveis (Megaenquete Globo Esporte com 100k+ votos, Revista Placar, Acervo SCCP e taças).';
        }
      }

      renderIdolos(currentIdoloFiltro, searchIdolos ? searchIdolos.value : '', currentIdoloSort);
    });
  });

  if (searchIdolos) {
    searchIdolos.addEventListener('input', (e) => {
      renderIdolos(currentIdoloFiltro, e.target.value, currentIdoloSort);
    });
  }

  idoloSortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      idoloSortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentIdoloSort = btn.getAttribute('data-sort');

      if (currentIdoloSort === 'cronologica') {
        if (currentIdoloFiltro === 'mais-considerados') {
          currentIdoloFiltro = 'todos';
          idoloBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'todos');
          });
        }
        if (sortCaptionText) {
          sortCaptionText.innerHTML = 'Exibindo lendas em <strong>ordem cronológica de estreia</strong> no Corinthians (do clássico esquadrão de 1945 às Brabas).';
        }
      } else if (currentIdoloSort === 'idolatria') {
        if (currentIdoloFiltro === 'todos') {
          currentIdoloFiltro = 'mais-considerados';
          idoloBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'mais-considerados');
          });
        }
        if (sortCaptionText) {
          sortCaptionText.innerHTML = 'Exibindo na <strong>ordem dos mais considerados ídolos</strong> segundo dados e fontes confiáveis (Megaenquete Globo Esporte com 100k+ votos, Revista Placar, Acervo SCCP e taças).';
        }
      }

      renderIdolos(currentIdoloFiltro, searchIdolos ? searchIdolos.value : '', currentIdoloSort);
    });
  });

  // Mobile Menu Toggle com Fechamento Automático ao Clicar
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Auto-fechar ao navegar em telas mobile/tablets
    const navItems = navMenu.querySelectorAll('.nav-link, .btn-safiel-header, .btn-hino-header');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 1180) {
          navMenu.classList.remove('active');
        }
      });
    });
  }

  // Switcher 3D Flip de Estatísticas (Masculino / As Brabas)
  setupStatsSwitcher();
}

function setupStatsSwitcher() {
  const panelMasc = document.getElementById('stats-panel-masculino');
  const panelBrabas = document.getElementById('stats-panel-brabas');
  const btnPrev = document.getElementById('btn-stats-prev');
  const btnNext = document.getElementById('btn-stats-next');
  const btnMasc = document.getElementById('btn-stats-masc');
  const btnBrabas = document.getElementById('btn-stats-brabas');
  const btnFlipCenter = document.getElementById('btn-stats-flip-center');

  if (!panelMasc || !panelBrabas) return;

  let currentStatsMode = 'masculino';

  function setStatsMode(mode) {
    currentStatsMode = mode;
    if (mode === 'brabas') {
      panelMasc.classList.add('flipped');
      panelBrabas.classList.add('flipped');
      if (btnMasc) {
        btnMasc.classList.remove('active');
        btnMasc.setAttribute('aria-selected', 'false');
      }
      if (btnBrabas) {
        btnBrabas.classList.add('active');
        btnBrabas.setAttribute('aria-selected', 'true');
      }
    } else {
      panelMasc.classList.remove('flipped');
      panelBrabas.classList.remove('flipped');
      if (btnBrabas) {
        btnBrabas.classList.remove('active');
        btnBrabas.setAttribute('aria-selected', 'false');
      }
      if (btnMasc) {
        btnMasc.classList.add('active');
        btnMasc.setAttribute('aria-selected', 'true');
      }
    }
  }

  function toggleStatsMode() {
    setStatsMode(currentStatsMode === 'masculino' ? 'brabas' : 'masculino');
  }

  if (btnPrev) btnPrev.addEventListener('click', toggleStatsMode);
  if (btnNext) btnNext.addEventListener('click', toggleStatsMode);
  if (btnFlipCenter) btnFlipCenter.addEventListener('click', toggleStatsMode);
  if (btnMasc) btnMasc.addEventListener('click', () => setStatsMode('masculino'));
  if (btnBrabas) btnBrabas.addEventListener('click', () => setStatsMode('brabas'));
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   8. Relógio de Juros em Tempo Real (Live Debt Ticker)
   ========================================================================== */
function initLiveDebtTicker() {
  const tickerAmountEl = document.getElementById('live-ticker-amount');
  const tickerSecondsEl = document.getElementById('live-ticker-seconds');
  const heroLiveDebtEl = document.getElementById('hero-live-debt-amount');
  const debtClockMainEl = document.getElementById('debt-clock-main-val');

  if (!tickerAmountEl && !heroLiveDebtEl) return;

  const jurosPorSegundo = CORINTHIANS_DATA.relogioJuros ? CORINTHIANS_DATA.relogioJuros.jurosPorSegundo : 8.57;
  const dividaBase = CORINTHIANS_DATA.relogioJuros ? CORINTHIANS_DATA.relogioJuros.dividaBase : 2350000000;
  
  let segundosPassados = 0;

  function updateTicker() {
    segundosPassados++;
    const jurosAcumulados = segundosPassados * jurosPorSegundo;
    const dividaAtualizada = dividaBase + jurosAcumulados;

    const jurosFormatado = 'R$ ' + jurosAcumulados.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    if (tickerAmountEl) {
      tickerAmountEl.textContent = jurosFormatado;
    }
    if (tickerSecondsEl) {
      tickerSecondsEl.textContent = `(${segundosPassados}s navegando no portal)`;
    }
    if (heroLiveDebtEl) {
      heroLiveDebtEl.textContent = 'R$ ' + (dividaAtualizada / 1000000000).toFixed(3) + ' Bi';
    }
    if (debtClockMainEl) {
      debtClockMainEl.textContent = jurosFormatado;
    }
  }

  setInterval(updateTicker, 1000);
  updateTicker();
}

/* ==========================================================================
   9. Renderizador da Intervenção Judicial
   ========================================================================== */
function renderIntervencaoJudicial() {
  const containerRazoes = document.getElementById('intervencao-razoes-grid');
  const containerFavor = document.getElementById('intervencao-list-favor');
  const containerContra = document.getElementById('intervencao-list-contra');

  const data = CORINTHIANS_DATA.intervencaoJudicial;
  if (!data) return;

  if (containerRazoes) {
    containerRazoes.innerHTML = data.razoes.map((razao, idx) => `
      <div class="razao-card">
        <div class="razao-num">0${idx + 1}</div>
        <h4 class="razao-title">${razao.titulo}</h4>
        <p class="razao-desc">${razao.descricao}</p>
      </div>
    `).join('');
  }

  if (containerFavor && data.prosEContras) {
    containerFavor.innerHTML = data.prosEContras.argumentosFavor.map(item => `
      <li>${item}</li>
    `).join('');
  }

  if (containerContra && data.prosEContras) {
    containerContra.innerHTML = data.prosEContras.argumentosContra.map(item => `
      <li>${item}</li>
    `).join('');
  }
}

/* ==========================================================================
   10. Feed de Últimos Jogos do Corinthians
   ========================================================================== */
function renderUltimosJogos() {
  const container = document.getElementById('jogos-feed-grid');
  if (!container) return;

  const jogos = CORINTHIANS_DATA.ultimosJogos;
  if (!jogos || jogos.length === 0) return;

  container.innerHTML = jogos.map(jogo => {
    let badgeResultado = '';
    if (jogo.status === 'Agendado') {
      badgeResultado = `<span class="badge badge-misto" style="background: rgba(212, 175, 55, 0.15); border-color: rgba(212, 175, 55, 0.5); color: #fbbf24;"><i class="fa-solid fa-calendar-check"></i> Próximo Jogo</span>`;
    } else if (jogo.resultado === 'vitoria') {
      badgeResultado = `<span class="badge badge-acerto"><i class="fa-solid fa-check"></i> Vitória</span>`;
    } else if (jogo.resultado === 'empate') {
      badgeResultado = `<span class="badge badge-misto"><i class="fa-solid fa-equals"></i> Empate</span>`;
    } else {
      badgeResultado = `<span class="badge badge-erro"><i class="fa-solid fa-xmark"></i> Derrota</span>`;
    }

    const scoreBoxContent = jogo.status === 'Agendado'
      ? `<span class="score-clock"><i class="fa-regular fa-clock"></i> ${jogo.horario || '20:00'}</span>`
      : `<span>${jogo.mandante.gols}</span><span class="score-x">x</span><span>${jogo.visitante.gols}</span>`;

    const btnTexto = jogo.status === 'Agendado'
      ? 'Acompanhar Pré-Jogo & Transmissão'
      : 'Assistir Melhores Momentos no YouTube';

    return `
    <article class="jogo-card ${jogo.status === 'Agendado' ? 'jogo-card-agendado' : ''}">
      <div>
        <div class="jogo-meta-top">
          <span class="jogo-campeonato">${jogo.campeonato}</span>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            ${badgeResultado}
            <span class="badge badge-misto"><i class="fa-regular fa-calendar"></i> ${jogo.data}</span>
          </div>
        </div>

        <div style="font-size: 0.78rem; color: #888; margin-bottom: 0.75rem;">
          <i class="fa-solid fa-location-dot"></i> ${jogo.estadio}
        </div>

        <div class="jogo-scoreboard">
          <div class="jogo-team">
            <div class="jogo-team-wrap">
              ${jogo.mandante.logo ? `<img src="${jogo.mandante.logo}" alt="Escudo do ${jogo.mandante.nome}" class="jogo-team-logo" loading="lazy">` : ''}
              <span class="jogo-team-name">${jogo.mandante.nome}</span>
            </div>
          </div>
          <div class="jogo-score-box">
            ${scoreBoxContent}
          </div>
          <div class="jogo-team">
            <div class="jogo-team-wrap">
              ${jogo.visitante.logo ? `<img src="${jogo.visitante.logo}" alt="Escudo do ${jogo.visitante.nome}" class="jogo-team-logo" loading="lazy">` : ''}
              <span class="jogo-team-name">${jogo.visitante.nome}</span>
            </div>
          </div>
        </div>

        <!-- Autores dos Gols e Assistências Claramente Discriminados -->
        <div class="jogo-gols-assistencias">
          <div class="jogo-lance-row">
            <span class="lance-label"><i class="fa-solid fa-futbol"></i> Gols:</span>
            <span class="lance-val">${jogo.golsDetalhes}</span>
          </div>
          <div class="jogo-lance-row">
            <span class="lance-label"><i class="fa-solid fa-shoe-prints"></i> Assistências:</span>
            <span class="lance-val">${jogo.assistencias}</span>
          </div>
        </div>

        <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin: 1rem 0;">
          ${jogo.resumo}
        </p>

        <div class="jogo-stats-preview">
          <div class="jogo-stat-row">
            <span>Posse de Bola:</span>
            <strong>${jogo.estatisticas.posseBola}</strong>
          </div>
          <div class="jogo-stat-row">
            <span>Finalizações:</span>
            <strong>${jogo.estatisticas.finalizacoes}</strong>
          </div>
          <div class="jogo-stat-row">
            <span>Escanteios:</span>
            <strong>${jogo.estatisticas.escanteios}</strong>
          </div>
          <div class="jogo-stat-row">
            <span>Faltas Cometidas:</span>
            <strong>${jogo.estatisticas.faltasCometidas}</strong>
          </div>
        </div>
      </div>

      <div style="margin-top: 1.25rem;">
        <a href="${jogo.linkMelhoresMomentos}" target="_blank" rel="noopener noreferrer" class="btn-melhores-momentos btn-youtube">
          <i class="fa-brands fa-youtube" style="color: #ff0000; font-size: 1.2rem;"></i> ${btnTexto}
        </a>
      </div>
    </article>
    `;
  }).join('');
}

/* ==========================================================================
   11. Controle do Modal de Foto e História do Ídolo (Sem IA - Fotos Reais)
   ========================================================================== */
function abrirModalIdolo(id) {
  const idolo = CORINTHIANS_DATA.idolos.find(item => item.id === id);
  if (!idolo) return;

  const modal = document.getElementById('idolo-modal');
  if (!modal) return;

  const imgEl = document.getElementById('modal-idolo-foto');
  const momentoEl = document.getElementById('modal-idolo-momento');
  const fonteEl = document.getElementById('modal-idolo-fonte');
  const tagEl = document.getElementById('modal-idolo-tag');
  const periodoEl = document.getElementById('modal-idolo-periodo');
  const nomeEl = document.getElementById('modal-idolo-nome');
  const posicaoEl = document.getElementById('modal-idolo-posicao');
  const jogosEl = document.getElementById('modal-idolo-jogos');
  const golsEl = document.getElementById('modal-idolo-gols');
  const titulosEl = document.getElementById('modal-idolo-titulos');
  const fraseEl = document.getElementById('modal-idolo-frase');
  const legadoEl = document.getElementById('modal-idolo-legado');

  const isGoleiro = idolo.isGoleiro || (idolo.posicao && idolo.posicao.toLowerCase().includes('goleir'));
  const golsLabelEl = document.getElementById('modal-idolo-gols-label');
  const penaltisBoxEl = document.getElementById('modal-idolo-penaltis-box');
  const penaltisTextoEl = document.getElementById('modal-idolo-penaltis-texto');

  if (imgEl) {
    imgEl.src = idolo.foto;
    imgEl.alt = `${idolo.nome} - Momento Histórico Real`;
  }
  if (momentoEl) {
    momentoEl.innerHTML = `<strong><i class="fa-solid fa-camera-retro"></i> Momento Histórico Real:</strong> ${idolo.fotoMomento}`;
  }
  if (fonteEl) {
    fonteEl.innerHTML = `<i class="fa-solid fa-landmark"></i> <strong>Arquivo / Fonte:</strong> ${idolo.fonteFoto || 'Acervo Público / Wikimedia Commons'}`;
  }
  if (tagEl) tagEl.textContent = idolo.tag === 'as-brabas' ? 'AS BRABAS' : (idolo.tag ? idolo.tag.toUpperCase() : 'LENDA ALVINEGRA');
  if (periodoEl) periodoEl.innerHTML = `Estreia em ${idolo.anoEstreia || idolo.periodo} • <i class="fa-solid fa-crown text-gold"></i> #${idolo.rankingIdolatria || '-'} no Reconhecimento da Fiel`;
  if (nomeEl) nomeEl.textContent = idolo.nome;
  if (posicaoEl) {
    posicaoEl.innerHTML = `${idolo.posicao} • ${idolo.periodo}${idolo.rankingDestaque ? `<br><span style="color: var(--gold-primary); font-size: 0.88em; font-weight: 500; display: inline-block; margin-top: 0.35rem;"><i class="fa-solid fa-star"></i> #${idolo.rankingIdolatria} no Reconhecimento Histórico: ${idolo.rankingDestaque}</span>` : ''}`;
  }
  if (jogosEl) jogosEl.textContent = idolo.jogos;

  if (isGoleiro) {
    if (golsEl) {
      golsEl.innerHTML = `<i class="fa-solid fa-hand text-gold" style="font-size: 0.9em; margin-right: 2px;"></i> ${idolo.penaltisDefendidos || 0}`;
    }
    if (golsLabelEl) {
      golsLabelEl.textContent = 'Pênaltis Defendidos';
    }
    if (penaltisBoxEl && penaltisTextoEl && idolo.penaltisDecisivos) {
      penaltisTextoEl.textContent = idolo.penaltisDecisivos;
      penaltisBoxEl.style.display = 'block';
    } else if (penaltisBoxEl) {
      penaltisBoxEl.style.display = 'none';
    }
  } else {
    if (golsEl) {
      golsEl.textContent = idolo.gols;
    }
    if (golsLabelEl) {
      golsLabelEl.textContent = 'Gols';
    }
    if (penaltisBoxEl) {
      penaltisBoxEl.style.display = 'none';
    }
  }

  if (titulosEl) titulosEl.textContent = idolo.titulos;
  if (fraseEl) fraseEl.textContent = idolo.frase;
  if (legadoEl) legadoEl.textContent = idolo.legado;

  const numTitulos = idolo.numTitulos !== undefined ? idolo.numTitulos : (idolo.titulos ? idolo.titulos.split(',').length : 0);
  const tacasCountEl = document.getElementById('modal-idolo-tacas-count');
  const tacasLabelEl = document.getElementById('modal-idolo-tacas-label');
  if (tacasCountEl) tacasCountEl.innerHTML = `<i class="fa-solid fa-trophy text-gold"></i> ${numTitulos}`;
  if (tacasLabelEl) tacasLabelEl.textContent = `${numTitulos} Conquistas`;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModalIdolo() {
  const modal = document.getElementById('idolo-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Controle do Modal de Foto e Legenda do Elenco Campeão & Mural das Glórias
   ========================================================================== */
let currentMuralModalIndex = null;

const MURAL_MOMENTOS = [
  {
    ano: '1954',
    categoria: 'Estadual • IV Centenário',
    titulo: 'Esquadrão de Ouro — Campeão do IV Centenário de São Paulo',
    sede: 'Estádio do Pacaembu (São Paulo - SP)',
    foto: 'assets/images/mural/mural_01_1954_centenario.jpg?v=2.8.0',
    fonteFoto: 'Acervo Histórico do SCCP / Memorial Corinthians',
    detalhe: 'No ano em que a cidade de São Paulo celebrou seus 400 anos, o Corinthians vestiu azul pela última vez ou imortalizou o manto listrado diante do rival Palmeiras para conquistar o título mais cobiçado do século XX paulista.',
    legenda: 'O lendário esquadrão de 1954 posando com as faixas de Campeão do IV Centenário: Gylmar dos Santos Neves, Homero, Olavo, Idário (sangue e raça na lateral), Goiano, Roberto Belangero, Cláudio Christóvam de Pinho (o maior artilheiro da história alvinegra), Luizinho (o Pequeno Polegar), Baltazar (o Cabecinha de Ouro), Carbone e Simão.'
  },
  {
    ano: '1977',
    categoria: 'Estadual • Libertação',
    titulo: 'O Fim dos 22 Anos de Sofrimento — Paulistão de 1977',
    sede: 'Estádio do Morumbi (São Paulo - SP) • 146.082 torcedores',
    foto: 'assets/images/mural/mural_02_1977_libertacao.jpg?v=2.8.0',
    fonteFoto: 'Acervo Histórico do SCCP / Gazeta Press / Memorial Corinthians',
    detalhe: 'Foram 22 anos, 8 meses e 7 dias de lágrimas, promessas e uma fidelidade que assombrou o mundo: quanto mais o título demorava, mais a Fiel Torcida crescia. Na noite de 13 de outubro de 1977, aos 36 minutos do segundo tempo, a bola sobrou na área da Ponte Preta e Basílio soltou a bomba que libertou uma nação inteira.',
    legenda: 'Elenco imortal da Libertação de 1977 no gramado do Morumbi: Tobias, Zé Maria (o Super Zé), Moisés, Ademir, Wladimir, Ruço, Basílio (o Pé de Anjo de 77), Luciano, Vaguinho, Geraldão e Romeu, comandados pelo mestre Oswaldo Brandão.'
  },
  {
    ano: '1982–1983',
    categoria: 'Estadual • Democracia',
    titulo: 'Democracia Corinthiana — Bicampeonato Paulista (1982–1983)',
    sede: 'Estádio do Morumbi (São Paulo - SP)',
    foto: 'assets/images/mural/mural_03_1983_socrates.jpg?v=2.8.0',
    fonteFoto: 'Acervo Histórico Placar / Memorial Corinthians',
    detalhe: 'Em plena ditadura militar no Brasil, o Corinthians provou que liberdade, consciência política e futebol-arte caminham juntos. Todas as decisões do departamento de futebol eram tomadas pelo voto igualitário, do roupeiro ao craque da Seleção.',
    legenda: 'Dr. Sócrates celebrando de braços abertos no Morumbi: líder intelectual e técnico da Democracia Corinthiana ao lado de Wladimir, Casagrande, Zenon e Biro-Biro, eternizando a faixa "Ganhar ou perder, mas sempre com democracia".'
  },
  {
    ano: '1990',
    categoria: 'Nacional • 1º Brasileirão',
    titulo: 'O Brasil é Alvinegro — 1º Campeonato Brasileiro (1990)',
    sede: 'Estádio do Morumbi (São Paulo - SP) • 100.858 pagantes',
    foto: 'assets/images/mural/mural_04_1990_brasileirao.jpg?v=2.8.0',
    fonteFoto: 'Agência Estado / Acervo Meu Timão',
    detalhe: 'Apontado como azarão no início do campeonato, o Corinthians de Nelsinho Baptista superou gigantes a poder de suor, cobranças de falta mortais do Craque Neto, milagres de Ronaldo Giovanelli e o carrinho eterno de Tupãzinho na final contra o São Paulo.',
    legenda: 'O Xodó da Fiel, Craque Neto, vibrando de punhos cerrados com a faixa de capitão e o manto branco na campanha épica do primeiro título brasileiro da história do Sport Club Corinthians Paulista em 16 de dezembro de 1990.'
  },
  {
    ano: '2000',
    categoria: 'Mundial • FIFA',
    titulo: 'O Topo do Mundo no Maracanã — 1º Mundial de Clubes da FIFA',
    sede: 'Estádio do Maracanã (Rio de Janeiro - RJ) • 73.000 presentes',
    foto: 'assets/images/mural/mural_05_2000_mundial_rincon.jpg?v=2.8.0',
    fonteFoto: 'FIFA / Getty Images / Acervo Meu Timão',
    detalhe: 'Após empatar em 2 a 2 com o poderoso Real Madrid (com Dida defendendo pênalti de Anelka e dois gols antológicos de Edílson Capetinha), o Timão enfrentou o Vasco no Maracanã tomado por mais de 30 mil corinthianos e venceu na dramática disputa por pênaltis.',
    legenda: 'O capitão colombiano Freddy Rincón ergue a taça do 1º Campeonato Mundial de Clubes da FIFA no gramado do Maracanã em 14 de janeiro de 2000, cercado por Vampeta, Edu Gaspar, Dida e pelo técnico Oswaldo de Oliveira.'
  },
  {
    ano: '2000',
    categoria: 'Mundial • FIFA',
    titulo: 'O Grito do Pé de Anjo — Marcelinho Carioca Campeão Mundial (2000)',
    sede: 'Estádio do Maracanã (Rio de Janeiro - RJ)',
    foto: 'assets/images/mural/mural_06_2000_marcelinho.jpg?v=2.8.0',
    fonteFoto: 'AFP / Getty Images / Acervo Meu Timão',
    detalhe: 'Maior vencedor de troféus da história do clube (10 conquistas), Marcelinho Carioca viveu no Maracanã a consagração máxima de uma geração que conquistou o Bicampeonato Brasileiro (1998–1999) e o Mundo (2000).',
    legenda: 'Com a faixa na testa e a medalha dourada da FIFA no peito, Marcelinho Carioca solta o grito de campeão mundial segurando o troféu oficial da FIFA após a batalha nos pênaltis no Maracanã.'
  },
  {
    ano: '2009',
    categoria: 'Nacional • Copa do Brasil',
    titulo: 'Renascido das Cinzas — Ronaldo Fenômeno e a Copa do Brasil (2009)',
    sede: 'Estádio Beira-Rio (Porto Alegre - RS) / Pacaembu (São Paulo - SP)',
    foto: 'assets/images/mural/mural_07_2009_ronaldo.jpg?v=2.8.0',
    fonteFoto: 'Daniel Augusto Jr. / Agência Corinthians',
    detalhe: 'Do momento mais doloroso de sua história no fim de 2007 à volta por cima mais avassaladora do futebol mundial: em 2009, com Mano Menezes e Ronaldo Fenômeno em estado de graça, o Timão foi campeão paulista invicto e tricampeão da Copa do Brasil.',
    legenda: 'Ronaldo Fenômeno e o garoto Dentinho celebram no vestiário do Beira-Rio com a taça da Copa do Brasil de 2009 e a medalha no peito após despacharem o Internacional na grande decisão.'
  },
  {
    ano: '2011',
    categoria: 'Nacional • Pentacampeonato',
    titulo: 'Um Domingo e o Corinthians Campeão — O Penta por Sócrates (2011)',
    sede: 'Estádio do Pacaembu (São Paulo - SP)',
    foto: 'assets/images/mural/mural_08_2011_socrates_fiel.jpg?v=2.8.0',
    fonteFoto: 'Daniel Augusto Jr. / Agência Corinthians / Meu Timão',
    detalhe: 'Em 1983, o Doutor Sócrates havia profetizado: "Quero morrer num domingo e com o Corinthians campeão". Na manhã de domingo, 4 de dezembro de 2011, Sócrates partiu; à tarde, em um Pacaembu em lágrimas e de punho cerrado, o Timão segurou o Derby e sagrou-se Pentacampeão Brasileiro.',
    legenda: 'A Fiel Torcida ergue o punho cerrado e estende a bandeira "Sócrates, o Doutor da Fiel" nas arquibancadas do Pacaembu no dia da conquista do Campeonato Brasileiro de 2011.'
  },
  {
    ano: '2012',
    categoria: 'Continental • Libertadores Invicta',
    titulo: 'A Libertação Invicta da América — Copa Libertadores de 2012',
    sede: 'Estádio do Pacaembu (São Paulo - SP) • 40.186 presentes',
    foto: 'assets/images/mural/mural_09_2012_libertadores_alessandro.jpg?v=2.8.0',
    fonteFoto: 'CONMEBOL / Agência Corinthians / Meu Timão',
    detalhe: 'Foram décadas de espera, provocações e cicatrizes até a campanha mais perfeita da história continental: 14 jogos, 8 vitórias, 6 empates, 0 derrotas e apenas 4 gols sofridos. Com gols de Romarinho na Bombonera e dois de Emerson Sheik no Pacaembu contra o Boca Juniors, a América finalmente se curvou ao Timão.',
    legenda: 'O capitão Alessandro ergue a inédita e invicta Taça Libertadores da América no palco de premiação do Pacaembu na noite histórica de 4 de julho de 2012.'
  },
  {
    ano: '2012',
    categoria: 'Mundial • O Milagre de Yokohama',
    titulo: 'Sofrido no Limite, Merecido p/ Sempre — O Milagre de Cássio (2012)',
    sede: 'International Stadium Yokohama (Japão) • 68.275 presentes',
    foto: 'assets/images/mural/mural_10_2012_cassio_milagre.jpg?v=2.8.0',
    fonteFoto: 'Getty Images / FIFA / Acervo Histórico',
    detalhe: 'Se uma única imagem pudesse resumir o que significa vencer "à maneira corinthiana — sofrida, suada e merecida", seria esta: aos 40 minutos do 2º tempo da final do Mundial contra o poderoso Chelsea, Fernando Torres fica cara a cara na pequena área e Cássio voa no limite humano para operar o milagre que garantiu a taça.',
    legenda: 'O voo imortal do camisa 12 Cássio Ramos espalmando o chute à queima-roupa de Fernando Torres em Yokohama sob o olhar aflito de Alessandro e Paulo André, consagrando Cássio como Bola de Ouro da FIFA.'
  },
  {
    ano: '2012',
    categoria: 'Mundial • Bicampeão FIFA',
    titulo: 'O Mundo é Preto e Branco de Novo — Bicampeão Mundial FIFA (2012)',
    sede: 'International Stadium Yokohama (Japão)',
    foto: 'assets/images/mural/mural_11_2012_mundial_podio.jpg?v=2.8.0',
    fonteFoto: 'Daniel Augusto Jr. / Agência Corinthians / FIFA',
    detalhe: 'Empurrado pela maior invasão transcontinental da história do futebol — mais de 30 mil corinthianos que cruzaram o planeta até o Japão —, o Corinthians venceu o Chelsea por 1 a 0 com cabeçada eterna de Paolo Guerrero e conquistou o Bicampeonato Mundial da FIFA.',
    legenda: 'O técnico Tite de braços erguidos ao céu e os heróis alvinegros (Jorge Henrique, Emerson Sheik, Danilo, Fábio Santos, Cássio, Paulinho, Ralf e Guerrero) soltando o grito de Bicampeão Mundial no pódio da FIFA em Yokohama.'
  },
  {
    ano: '2017',
    categoria: 'Nacional • Hegemonia na Arena',
    titulo: 'Hegemonia na Casa do Povo — Heptacampeonato Brasileiro (2015–2017)',
    sede: 'Neo Química Arena (São Paulo - SP)',
    foto: 'assets/images/mural/mural_12_2017_hepta_arena.jpg?v=2.8.0',
    fonteFoto: 'Daniel Augusto Jr. / Agência Corinthians',
    detalhe: 'Após o massacre histórico do Hexa em 2015 sob o comando de Tite e Renato Augusto, o Timão de Fábio Carille desafiou todas as previsões da imprensa em 2017 (quando foi chamado de "quarta força"), fez o melhor primeiro turno invicto da história dos pontos corridos e ergueu o Heptacampeonato Brasileiro em Itaquera.',
    legenda: 'Sob chuva de papel picado prateado na Neo Química Arena lotada, o capitão Cássio ergue a taça do Heptacampeonato Brasileiro de 2017 ao lado de Jô, Balbuena, Guilherme Arana, Rodriguinho, Fagner, Maycon e Romero.'
  }
];

function abrirModalMural(index) {
  const item = MURAL_MOMENTOS[index];
  if (!item) return;

  currentMuralModalIndex = index;
  currentTituloModalId = null;

  const modal = document.getElementById('titulo-modal');
  if (!modal) return;

  const imgEl = document.getElementById('modal-titulo-foto');
  const legendaEl = document.getElementById('modal-titulo-legenda');
  const fonteEl = document.getElementById('modal-titulo-fonte');
  const catEl = document.getElementById('modal-titulo-categoria');
  const anoEl = document.getElementById('modal-titulo-ano');
  const nomeEl = document.getElementById('modal-titulo-nome');
  const sedeEl = document.getElementById('modal-titulo-sede');
  const statAnoEl = document.getElementById('modal-titulo-stat-ano');
  const statCatEl = document.getElementById('modal-titulo-stat-cat');
  const detalheEl = document.getElementById('modal-titulo-detalhe');
  const elencoDescEl = document.getElementById('modal-titulo-elenco-desc');

  if (imgEl) {
    imgEl.src = item.foto;
    imgEl.alt = `${item.titulo} (${item.ano})`;
  }
  if (legendaEl) {
    legendaEl.innerHTML = `<strong><i class="fa-solid fa-camera-retro"></i> Registro Histórico do Mural (${index + 1}/${MURAL_MOMENTOS.length}):</strong> ${item.legenda}`;
  }
  if (fonteEl) {
    fonteEl.innerHTML = `<i class="fa-solid fa-landmark"></i> <strong>Arquivo / Fonte Confiável:</strong> ${item.fonteFoto}`;
  }
  if (catEl) catEl.textContent = item.categoria.toUpperCase();
  if (anoEl) anoEl.innerHTML = `<i class="fa-solid fa-fire-flame-curved text-gold"></i> Mural das Glórias • ${item.ano}`;
  if (nomeEl) nomeEl.textContent = item.titulo;
  if (sedeEl) {
    sedeEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.sede}`;
  }
  if (statAnoEl) statAnoEl.textContent = item.ano;
  if (statCatEl) statCatEl.textContent = item.categoria;
  if (detalheEl) detalheEl.textContent = item.detalhe;
  if (elencoDescEl) {
    elencoDescEl.textContent = item.legenda;
  }

  const btnPrev = document.getElementById('modal-titulo-btn-prev');
  const btnNext = document.getElementById('modal-titulo-btn-next');
  if (btnPrev) btnPrev.disabled = index <= 0;
  if (btnNext) btnNext.disabled = index >= MURAL_MOMENTOS.length - 1;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function abrirModalTitulo(id) {
  currentMuralModalIndex = null;
  const naVitrine = (titulosAtivosNaVitrine && titulosAtivosNaVitrine.some(item => item.id === id));
  const lista = naVitrine ? titulosAtivosNaVitrine : CORINTHIANS_DATA.titulos;
  const titulo = lista.find(item => item.id === id) || CORINTHIANS_DATA.titulos.find(item => item.id === id);
  if (!titulo) return;

  currentTituloModalId = titulo.id;
  const modal = document.getElementById('titulo-modal');
  if (!modal) return;

  const imgEl = document.getElementById('modal-titulo-foto');
  const legendaEl = document.getElementById('modal-titulo-legenda');
  const fonteEl = document.getElementById('modal-titulo-fonte');
  const catEl = document.getElementById('modal-titulo-categoria');
  const anoEl = document.getElementById('modal-titulo-ano');
  const nomeEl = document.getElementById('modal-titulo-nome');
  const sedeEl = document.getElementById('modal-titulo-sede');
  const statAnoEl = document.getElementById('modal-titulo-stat-ano');
  const statCatEl = document.getElementById('modal-titulo-stat-cat');
  const detalheEl = document.getElementById('modal-titulo-detalhe');
  const elencoDescEl = document.getElementById('modal-titulo-elenco-desc');

  const isBrabas = titulo.modalidade === 'Feminino';
  const modLabel = isBrabas ? 'AS BRABAS • FEMININO' : (titulo.paulistaEdicao ? `MASCULINO • ${titulo.paulistaEdicao.toUpperCase()}` : 'FUTEBOL MASCULINO');

  if (imgEl) {
    imgEl.src = titulo.fotoElenco;
    imgEl.alt = `Elenco Campeão do Corinthians - ${titulo.titulo} (${titulo.ano})`;
  }
  if (legendaEl) {
    legendaEl.innerHTML = `<strong><i class="fa-solid fa-camera-retro"></i> Momento &amp; Elenco Campeão:</strong> ${titulo.legendaElenco}`;
  }
  if (fonteEl) {
    fonteEl.innerHTML = `<i class="fa-solid fa-landmark"></i> <strong>Arquivo / Fonte:</strong> ${titulo.fonteFoto || 'Acervo Histórico do SCCP / Memorial Corinthians / Meu Timão'}`;
  }
  if (catEl) catEl.textContent = `${titulo.categoria.toUpperCase()} • ${modLabel}`;
  if (anoEl) anoEl.innerHTML = `<i class="fa-solid ${isBrabas ? 'fa-crown' : 'fa-calendar-check'} text-gold"></i> Conquista de ${titulo.ano}`;
  if (nomeEl) nomeEl.textContent = titulo.titulo;
  if (sedeEl) {
    sedeEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${titulo.sede}`;
  }
  if (statAnoEl) statAnoEl.textContent = titulo.ano;
  if (statCatEl) statCatEl.textContent = isBrabas ? `${titulo.categoria} (Brabas)` : titulo.categoria;
  if (detalheEl) detalheEl.textContent = titulo.detalhe;
  if (elencoDescEl) {
    elencoDescEl.textContent = titulo.legendaElenco;
  }

  // Atualizar botões de navegação
  const currentIndex = lista.findIndex(item => item.id === titulo.id);
  const btnPrev = document.getElementById('modal-titulo-btn-prev');
  const btnNext = document.getElementById('modal-titulo-btn-next');
  if (btnPrev) {
    btnPrev.disabled = currentIndex <= 0;
  }
  if (btnNext) {
    btnNext.disabled = currentIndex === -1 || currentIndex >= lista.length - 1;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModalTitulo() {
  const modal = document.getElementById('titulo-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentMuralModalIndex = null;
  if (document.activeElement && document.activeElement.closest && (document.activeElement.closest('.titulos-grid') || document.activeElement.closest('.historia-mural-grid') || document.activeElement.closest('.paulistao-hegemonia-box'))) {
    document.activeElement.blur();
  }
}

function navegarModalTitulo(direcao) {
  if (currentMuralModalIndex !== null) {
    const novoMuralIdx = currentMuralModalIndex + direcao;
    if (novoMuralIdx >= 0 && novoMuralIdx < MURAL_MOMENTOS.length) {
      abrirModalMural(novoMuralIdx);
    }
    return;
  }
  if (!currentTituloModalId) return;
  const naVitrine = (titulosAtivosNaVitrine && titulosAtivosNaVitrine.some(item => item.id === currentTituloModalId));
  const lista = naVitrine ? titulosAtivosNaVitrine : CORINTHIANS_DATA.titulos;
  const currentIndex = lista.findIndex(item => item.id === currentTituloModalId);
  if (currentIndex === -1) return;
  const novoIndex = currentIndex + direcao;
  if (novoIndex >= 0 && novoIndex < lista.length) {
    abrirModalTitulo(lista[novoIndex].id);
  }
}

// Tornar funções acessíveis globalmente no escopo de janela
window.abrirModalIdolo = abrirModalIdolo;
window.fecharModalIdolo = fecharModalIdolo;
window.abrirModalTitulo = abrirModalTitulo;
window.abrirModalMural = abrirModalMural;
window.fecharModalTitulo = fecharModalTitulo;
window.navegarModalTitulo = navegarModalTitulo;

// Ouvintes para o modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('idolo-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', fecharModalIdolo);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        fecharModalIdolo();
      }
    });
  }

  // Ouvintes do Modal de Títulos (Elenco Campeão)
  const modalTitulo = document.getElementById('titulo-modal');
  const closeBtnTitulo = document.getElementById('modal-titulo-close-btn');
  const btnTituloPrev = document.getElementById('modal-titulo-btn-prev');
  const btnTituloNext = document.getElementById('modal-titulo-btn-next');

  if (closeBtnTitulo) {
    closeBtnTitulo.addEventListener('click', fecharModalTitulo);
  }

  if (modalTitulo) {
    modalTitulo.addEventListener('click', (e) => {
      if (e.target === modalTitulo) {
        fecharModalTitulo();
      }
    });
  }

  if (btnTituloPrev) {
    btnTituloPrev.addEventListener('click', () => navegarModalTitulo(-1));
  }

  if (btnTituloNext) {
    btnTituloNext.addEventListener('click', () => navegarModalTitulo(1));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharModalIdolo();
      fecharModalInvasao();
      fecharModalTitulo();
    }
  });

  // Ouvintes do Modal de Invasões
  const modalInvasao = document.getElementById('invasao-modal');
  const closeBtnInvasao = document.getElementById('modal-invasao-close-btn');
  const btnPrev = document.getElementById('modal-invasao-btn-prev');
  const btnNext = document.getElementById('modal-invasao-btn-next');

  if (closeBtnInvasao) {
    closeBtnInvasao.addEventListener('click', fecharModalInvasao);
  }

  if (modalInvasao) {
    modalInvasao.addEventListener('click', (e) => {
      if (e.target === modalInvasao) {
        fecharModalInvasao();
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => mudarFotoInvasao(-1));
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => mudarFotoInvasao(1));
  }

  // Teclas de seta para alternar fotos
  document.addEventListener('keydown', (e) => {
    const modalInvasaoAtivo = document.getElementById('invasao-modal');
    if (modalInvasaoAtivo && modalInvasaoAtivo.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        mudarFotoInvasao(-1);
      } else if (e.key === 'ArrowRight') {
        mudarFotoInvasao(1);
      }
    }

    const modalTituloAtivo = document.getElementById('titulo-modal');
    if (modalTituloAtivo && modalTituloAtivo.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        navegarModalTitulo(-1);
      } else if (e.key === 'ArrowRight') {
        navegarModalTitulo(1);
      }
    }
  });
});

/* ==========================================================================
   Modal de Invasões da Fiel (Galeria de 3 Fotos & Relatos Históricos)
   ========================================================================== */
let invasaoAtual = null;
let fotoInvasaoIndex = 0;

function abrirModalInvasao(id) {
  if (!CORINTHIANS_DATA || !CORINTHIANS_DATA.estatisticas || !CORINTHIANS_DATA.estatisticas.invasoesMemoraveis) {
    return;
  }

  const invasao = CORINTHIANS_DATA.estatisticas.invasoesMemoraveis.find(i => i.id === id);
  if (!invasao) return;

  invasaoAtual = invasao;
  fotoInvasaoIndex = 0;

  const modal = document.getElementById('invasao-modal');
  if (!modal) return;

  // Header meta
  const badgeEl = document.getElementById('modal-invasao-badge');
  const dataEl = document.getElementById('modal-invasao-data');
  const nomeEl = document.getElementById('modal-invasao-nome');
  const subtituloEl = document.getElementById('modal-invasao-subtitulo');
  const localEl = document.getElementById('modal-invasao-local');
  const publicoEl = document.getElementById('modal-invasao-publico');
  const resultadoEl = document.getElementById('modal-invasao-resultado');
  const resumoTextoEl = document.getElementById('modal-invasao-resumo-texto');

  if (badgeEl) badgeEl.textContent = invasao.ano;
  if (dataEl) dataEl.textContent = invasao.data || invasao.ano;
  if (nomeEl) nomeEl.textContent = invasao.nome;
  if (subtituloEl) subtituloEl.textContent = invasao.competicao || 'Momento Histórico';
  if (localEl) localEl.textContent = invasao.local || 'Estádio';
  if (publicoEl) publicoEl.textContent = invasao.publico || 'Multidão Alvinegra';
  if (resultadoEl) resultadoEl.textContent = `${invasao.adversario || ''} • ${invasao.resultado || ''}`;
  if (resumoTextoEl) resumoTextoEl.textContent = invasao.resumoDetalhado || invasao.fato;

  // Renderizar Miniaturas
  renderThumbnailsInvasao();

  // Exibir a primeira foto
  atualizarFotoInvasao();

  // Renderizar Relatos Históricos
  const relatosList = document.getElementById('modal-invasao-relatos-list');
  if (relatosList) {
    if (invasao.relatos && invasao.relatos.length > 0) {
      relatosList.innerHTML = invasao.relatos.map(r => `
        <div class="relato-card">
          <div class="relato-quote-badge"><i class="fa-solid fa-quote-left"></i></div>
          <blockquote class="relato-citacao">"${r.citacao}"</blockquote>
          <div class="relato-author-meta">
            <div class="relato-author-name">${r.autor}</div>
            <div class="relato-author-cargo">${r.cargo}</div>
            <div class="relato-fonte-tag"><i class="fa-solid fa-circle-check"></i> <strong>Fonte:</strong> ${r.fonte}</div>
          </div>
        </div>
      `).join('');
    } else {
      relatosList.innerHTML = '<p class="text-muted">Relatos em processo de catalogação histórica.</p>';
    }
  }

  // Renderizar Cortes & Vídeos
  const videosList = document.getElementById('modal-invasao-videos-list');
  if (videosList) {
    if (invasao.cortesVideos && invasao.cortesVideos.length > 0) {
      videosList.innerHTML = invasao.cortesVideos.map(v => {
        const queryEncoded = encodeURIComponent(v.buscaRecomendada || v.titulo);
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${queryEncoded}`;
        return `
          <div class="video-card">
            <div class="video-info">
              <h5 class="video-titulo"><i class="fa-brands fa-youtube" style="color: #ff0000; margin-right: 0.4rem;"></i>${v.titulo}</h5>
              <div class="video-veiculo"><i class="fa-solid fa-broadcast-tower"></i> ${v.veiculo}</div>
              <p class="video-desc">${v.descricao}</p>
            </div>
            <a href="${youtubeSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-watch">
              <i class="fa-solid fa-play"></i> Assistir Registro
            </a>
          </div>
        `;
      }).join('');
    } else {
      videosList.innerHTML = '<p class="text-muted">Vídeos e cortes catalogados nas fontes parceiras.</p>';
    }
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModalInvasao() {
  const modal = document.getElementById('invasao-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function mudarFotoInvasao(delta) {
  if (!invasaoAtual || !invasaoAtual.fotos || invasaoAtual.fotos.length === 0) return;
  fotoInvasaoIndex = (fotoInvasaoIndex + delta + invasaoAtual.fotos.length) % invasaoAtual.fotos.length;
  atualizarFotoInvasao();
}

function selecionarFotoInvasao(index) {
  if (!invasaoAtual || !invasaoAtual.fotos || !invasaoAtual.fotos[index]) return;
  fotoInvasaoIndex = index;
  atualizarFotoInvasao();
}

function atualizarFotoInvasao() {
  if (!invasaoAtual || !invasaoAtual.fotos || !invasaoAtual.fotos[fotoInvasaoIndex]) return;
  const foto = invasaoAtual.fotos[fotoInvasaoIndex];

  const imgEl = document.getElementById('modal-invasao-foto-img');
  const contadorEl = document.getElementById('modal-invasao-foto-contador');
  const tituloEl = document.getElementById('modal-invasao-foto-titulo');
  const descEl = document.getElementById('modal-invasao-foto-desc');
  const creditoEl = document.getElementById('modal-invasao-foto-credito-val');

  if (imgEl) {
    imgEl.src = foto.url;
    imgEl.alt = foto.titulo;
  }
  if (contadorEl) {
    contadorEl.textContent = `Foto ${fotoInvasaoIndex + 1} de ${invasaoAtual.fotos.length}`;
  }
  if (tituloEl) {
    tituloEl.textContent = foto.titulo;
  }
  if (descEl) {
    descEl.textContent = foto.legenda;
  }
  if (creditoEl) {
    creditoEl.textContent = foto.credito;
  }

  // Atualizar classe ativa nas miniaturas
  const thumbs = document.querySelectorAll('.gallery-thumb-item');
  thumbs.forEach((th, idx) => {
    if (idx === fotoInvasaoIndex) {
      th.classList.add('active');
    } else {
      th.classList.remove('active');
    }
  });
}

function renderThumbnailsInvasao() {
  const container = document.getElementById('modal-invasao-thumbs');
  if (!container || !invasaoAtual || !invasaoAtual.fotos) return;

  container.innerHTML = invasaoAtual.fotos.map((f, idx) => `
    <button class="gallery-thumb-item ${idx === fotoInvasaoIndex ? 'active' : ''}" onclick="selecionarFotoInvasao(${idx})" aria-label="Foto ${idx + 1}: ${f.titulo}">
      <img src="${f.url}" alt="${f.titulo}">
      <span class="thumb-badge-num">Foto ${idx + 1}</span>
    </button>
  `).join('');
}

// Tornar funções acessíveis globalmente
window.abrirModalInvasao = abrirModalInvasao;
window.fecharModalInvasao = fecharModalInvasao;
window.mudarFotoInvasao = mudarFotoInvasao;
window.selecionarFotoInvasao = selecionarFotoInvasao;

/* ==========================================================================
   10. Player Oficial do Hino do Corinthians (Simples, Compacto & Objetivo)
   ========================================================================== */
function initHinoPlayer() {
  const audio = document.getElementById('corinthians-anthem-audio');
  const playerContainer = document.getElementById('hino-player-container');
  const miniRestoreBtn = document.getElementById('hino-mini-restore');
  const navBtn = document.getElementById('btn-toggle-hino-nav');
  const playBtn = document.getElementById('hino-btn-play');
  const playIcon = document.getElementById('hino-icon-play');
  const muteBtn = document.getElementById('hino-btn-mute');
  const volumeIcon = document.getElementById('hino-icon-volume');
  const minimizeBtn = document.getElementById('hino-btn-minimize');
  const progressWrap = document.getElementById('hino-progress-wrap');
  const progressFill = document.getElementById('hino-progress-fill');
  const timeDisplay = document.getElementById('hino-time-display');
  const vinyl = document.getElementById('hino-vinyl');
  const miniVinyl = document.getElementById('hino-mini-vinyl');

  if (!audio || !playerContainer) return;

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updateTimeDisplay() {
    if (!timeDisplay) return;
    const current = audio.currentTime || 0;
    const duration = audio.duration || 0;
    timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  }

  function setPlayingState(isPlaying) {
    if (isPlaying) {
      playerContainer.classList.add('is-playing');
      if (playIcon) playIcon.className = 'fa-solid fa-pause';
      if (navBtn) navBtn.classList.add('is-playing');
      if (vinyl) vinyl.classList.add('rotating');
      if (miniVinyl) miniVinyl.classList.add('rotating');
    } else {
      playerContainer.classList.remove('is-playing');
      if (playIcon) playIcon.className = 'fa-solid fa-play';
      if (navBtn) navBtn.classList.remove('is-playing');
      if (vinyl) vinyl.classList.remove('rotating');
      if (miniVinyl) miniVinyl.classList.remove('rotating');
    }
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play().then(() => {
        setPlayingState(true);
      }).catch(err => {
        console.warn('Playback prevented:', err);
      });
    } else {
      audio.pause();
      setPlayingState(false);
    }
  }

  function minimizePlayer() {
    playerContainer.classList.add('minimized');
  }

  function restorePlayer() {
    playerContainer.classList.remove('minimized');
  }

  // Alternar play/pause ou restaurar pelo botão da barra de navegação no header
  if (navBtn) {
    navBtn.addEventListener('click', () => {
      if (playerContainer.classList.contains('minimized')) {
        restorePlayer();
      }
      togglePlay();
    });
  }

  // Controles do player compacto
  if (playBtn) {
    playBtn.addEventListener('click', togglePlay);
  }

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      minimizePlayer();
    });
  }

  if (miniRestoreBtn) {
    miniRestoreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      restorePlayer();
    });
  }

  // Mute / Unmute
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      audio.muted = !audio.muted;
      if (volumeIcon) {
        volumeIcon.className = audio.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
      }
    });
  }

  // Atualização da timeline e scrubbing
  audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime || 0;
    const duration = audio.duration || 0;
    updateTimeDisplay();
    if (duration > 0 && progressFill) {
      const pct = (current / duration) * 100;
      progressFill.style.width = `${pct}%`;
      if (progressWrap) progressWrap.setAttribute('aria-valuenow', Math.round(pct));
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    updateTimeDisplay();
  });

  audio.addEventListener('ended', () => {
    setPlayingState(false);
    audio.currentTime = 0;
    if (progressFill) progressFill.style.width = '0%';
    updateTimeDisplay();
  });

  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      if (width > 0 && audio.duration) {
        const targetPercent = Math.max(0, Math.min(1, clickX / width));
        audio.currentTime = targetPercent * audio.duration;
      }
    });
  }
}

/* ==========================================================================
   11. Modal Interativo da Galeria da Fundação de 1910 (Memória Visual Expandida)
   ========================================================================== */
let currentFundacaoIndex = 0;

function getFundacaoFotos() {
  const data = (typeof CORINTHIANS_DATA !== 'undefined' ? CORINTHIANS_DATA : (window.CORINTHIANS_DATA || {}));
  return data?.fundacao?.fotosHistoricas || [];
}

function abrirModalFundacao(index) {
  const modal = document.getElementById('fundacao-modal');
  const fotos = getFundacaoFotos();

  if (!modal || !fotos.length) {
    console.warn('Modal de fundação ou fotos não encontradas.');
    return;
  }

  const idx = parseInt(index, 10);
  currentFundacaoIndex = isNaN(idx) || idx < 0 || idx >= fotos.length ? 0 : idx;

  renderFundacaoModalFoto(fotos[currentFundacaoIndex], currentFundacaoIndex, fotos.length);
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharModalFundacao() {
  const modal = document.getElementById('fundacao-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderFundacaoModalFoto(fotoObj, index, total) {
  if (!fotoObj) return;
  const imgEl = document.getElementById('modal-fundacao-foto');
  const tituloEl = document.getElementById('modal-fundacao-titulo');
  const catEl = document.getElementById('modal-fundacao-categoria');
  const fonteEl = document.getElementById('modal-fundacao-fonte');
  const detalheEl = document.getElementById('modal-fundacao-detalhe');
  const contadorEl = document.getElementById('modal-fundacao-contador');
  const navIndicatorEl = document.getElementById('modal-fundacao-nav-indicator');

  if (imgEl) {
    imgEl.src = fotoObj.foto;
    imgEl.alt = fotoObj.titulo;
  }
  if (tituloEl) {
    tituloEl.textContent = fotoObj.titulo;
  }
  if (catEl) {
    catEl.innerHTML = `<i class="fa-solid fa-landmark"></i> ${fotoObj.categoria || 'Origem 1910'}`;
  }
  if (fonteEl) {
    fonteEl.innerHTML = `<i class="fa-solid fa-building-columns"></i> Fonte: ${fotoObj.fonte || 'Acervo Histórico'}`;
  }
  if (detalheEl) {
    detalheEl.textContent = fotoObj.legenda || '';
  }

  const totalNum = total || getFundacaoFotos().length || 4;
  const currentNum = (typeof index === 'number' ? index + 1 : currentFundacaoIndex + 1);

  if (contadorEl) {
    contadorEl.innerHTML = `<i class="fa-solid fa-camera"></i> Foto ${currentNum} de ${totalNum}`;
  }
  if (navIndicatorEl) {
    navIndicatorEl.textContent = `${currentNum} / ${totalNum}`;
  }
}

function navegarFundacaoModal(direcao) {
  const fotos = getFundacaoFotos();
  if (!fotos.length) return;
  currentFundacaoIndex = (currentFundacaoIndex + direcao + fotos.length) % fotos.length;
  renderFundacaoModalFoto(fotos[currentFundacaoIndex], currentFundacaoIndex, fotos.length);
}

function initFundacaoModal() {
  const modal = document.getElementById('fundacao-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-fundacao-close-btn');
  const prevBtn = document.getElementById('modal-fundacao-btn-prev');
  const nextBtn = document.getElementById('modal-fundacao-btn-next');

  // Adicionar ouvintes para todos os cards e fotos da galeria de fundação
  const photoCards = document.querySelectorAll('.fundacao-photo-card');
  photoCards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      e.preventDefault();
      abrirModalFundacao(idx);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirModalFundacao(idx);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', fecharModalFundacao);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navegarFundacaoModal(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => navegarFundacaoModal(1));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      fecharModalFundacao();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      fecharModalFundacao();
    } else if (e.key === 'ArrowLeft') {
      navegarFundacaoModal(-1);
    } else if (e.key === 'ArrowRight') {
      navegarFundacaoModal(1);
    }
  });
}

// Expor funções globalmente para chamadas via onclick ou console
window.abrirModalFundacao = abrirModalFundacao;
window.fecharModalFundacao = fecharModalFundacao;
window.navegarFundacaoModal = navegarFundacaoModal;
