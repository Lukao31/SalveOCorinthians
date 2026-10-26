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
  renderTitulos('todos');
  renderIdolos('todos');
  renderEstatisticas();
  renderFontes();
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
          backgroundColor: ['#ffffff', '#cccccc', '#888888', '#555555', '#2c2c2c'],
          borderColor: '#111111',
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
   4. Vitrine de Títulos (Ordem Cronológica & Fotos de Elencos Campeões)
   ========================================================================== */
let titulosOrdemAsc = true; // Padrão: Cronológica (1914 ➔ 2024)

function renderTitulos(categoria = 'todos', termoBusca = '') {
  const container = document.getElementById('titulos-grid');
  if (!container) return;

  const titulos = CORINTHIANS_DATA.titulos;
  let filtrados = titulos.filter(item => {
    const matchCat = categoria === 'todos' || item.categoria.toLowerCase() === categoria.toLowerCase();
    const matchTermo = !termoBusca || 
      item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.ano.includes(termoBusca) ||
      (item.legendaElenco && item.legendaElenco.toLowerCase().includes(termoBusca.toLowerCase())) ||
      item.detalhe.toLowerCase().includes(termoBusca.toLowerCase());
    return matchCat && matchTermo;
  });

  // Ordenação cronológica rigorosa
  filtrados.sort((a, b) => {
    const ordemA = typeof a.ordem !== 'undefined' ? a.ordem : parseInt(a.ano, 10);
    const ordemB = typeof b.ordem !== 'undefined' ? b.ordem : parseInt(b.ano, 10);
    return titulosOrdemAsc ? (ordemA - ordemB) : (ordemB - ordemA);
  });

  if (filtrados.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #888;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Nenhuma conquista encontrada com os termos selecionados.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtrados.map(item => `
    <div class="titulo-card" onclick="this.classList.toggle('active-elenco')" tabindex="0" role="region" aria-label="${item.titulo} (${item.ano})">
      <div class="titulo-card-content">
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="titulo-card-ano">${item.ano}</div>
            <span class="badge badge-misto">${item.categoria}</span>
          </div>
          <div class="titulo-card-cat"><i class="fa-solid fa-location-dot"></i> ${item.sede}</div>
          <h4 class="titulo-card-nome">${item.titulo}</h4>
          <p class="titulo-card-detalhe">${item.detalhe}</p>
        </div>

        <div class="titulo-card-hover-hint">
          <span><i class="fa-solid fa-users-viewfinder"></i> Passe o mouse p/ ver o elenco</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <!-- Camada do Elenco Campeão revelada ao passar o mouse -->
      <div class="titulo-card-elenco-overlay">
        <div class="titulo-elenco-img-wrapper">
          <img src="${item.fotoElenco}" alt="Elenco Campeão do Corinthians - ${item.titulo} (${item.ano})" class="titulo-elenco-img" loading="lazy">
          <div class="titulo-elenco-badge">
            <i class="fa-solid fa-trophy"></i> Elenco Campeão • ${item.ano}
          </div>
        </div>
        <div class="titulo-elenco-legenda">
          <div class="titulo-elenco-legenda-titulo">
            <i class="fa-solid fa-camera-retro"></i> Legenda do Título
          </div>
          <p class="titulo-elenco-legenda-texto">${item.legendaElenco}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Panteão dos Ídolos
   ========================================================================== */
function renderIdolos(filtro = 'todos', termoBusca = '') {
  const container = document.getElementById('idolos-grid');
  if (!container) return;

  const idolos = CORINTHIANS_DATA.idolos;
  const filtrados = idolos.filter(item => {
    const matchFiltro = filtro === 'todos' || item.tag === filtro;
    const matchTermo = !termoBusca ||
      item.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.posicao.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.legado.toLowerCase().includes(termoBusca.toLowerCase());
    return matchFiltro && matchTermo;
  });

  if (filtrados.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #888;">
        <p>Nenhum ídolo encontrado com essa busca.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtrados.map(item => {
    const numTitulos = item.titulos ? item.titulos.split(',').length : 0;
    return `
    <div class="idolo-card" onclick="abrirModalIdolo('${item.id}')" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver foto e história de ${item.nome}">
      <div class="idolo-card-thumb-wrapper">
        <img src="${item.foto}" alt="${item.nome}" class="idolo-card-thumb" loading="lazy">
        <div class="idolo-card-thumb-overlay">
          <span><i class="fa-solid fa-expand"></i> Ver Foto & Momento</span>
        </div>
        <span class="idolo-card-tag">${item.tag.toUpperCase()}</span>
      </div>

      <div class="idolo-card-content">
        <div class="idolo-top">
          <div>
            <h4 class="idolo-nome">${item.nome}</h4>
            <div class="idolo-posicao">${item.posicao} • ${item.periodo}</div>
          </div>
        </div>

        <div class="idolo-stats-bar">
          <div class="idolo-stat-item">
            <span class="idolo-stat-num">${item.jogos}</span>
            <span class="idolo-stat-lbl">Partidas</span>
          </div>
          <div class="idolo-stat-item">
            <span class="idolo-stat-num">${item.gols}</span>
            <span class="idolo-stat-lbl">Gols</span>
          </div>
          <div class="idolo-stat-item idolo-stat-trofeus">
            <span class="idolo-stat-num"><i class="fa-solid fa-trophy"></i> ${numTitulos}</span>
            <span class="idolo-stat-lbl">Títulos</span>
          </div>
        </div>

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

  if (containerInvasoes) {
    containerInvasoes.innerHTML = CORINTHIANS_DATA.estatisticas.invasoesMemoraveis.map(item => `
      <div class="invasao-card">
        <div class="invasao-ano">${item.ano}</div>
        <h4 class="invasao-nome">${item.nome}</h4>
        <div class="invasao-publico"><i class="fa-solid fa-users"></i> ${item.publico}</div>
        <p class="invasao-fato">${item.fato}</p>
      </div>
    `).join('');
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

  // Filtros Títulos
  const tituloBtns = document.querySelectorAll('.titulo-filter-btn');
  const searchTitulos = document.getElementById('search-titulos');
  let currentTituloCat = 'todos';

  tituloBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tituloBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTituloCat = btn.getAttribute('data-filter');
      renderTitulos(currentTituloCat, searchTitulos ? searchTitulos.value : '');
    });
  });

  if (searchTitulos) {
    searchTitulos.addEventListener('input', (e) => {
      renderTitulos(currentTituloCat, e.target.value);
    });
  }

  // Alternador de Ordem Cronológica de Títulos
  const btnOrdemTitulos = document.getElementById('btn-ordem-titulos');
  if (btnOrdemTitulos) {
    btnOrdemTitulos.addEventListener('click', () => {
      titulosOrdemAsc = !titulosOrdemAsc;
      btnOrdemTitulos.innerHTML = titulosOrdemAsc
        ? '<i class="fa-solid fa-arrow-down-1-9"></i> <span>Ordem: 1914 ➔ 2024</span>'
        : '<i class="fa-solid fa-arrow-down-9-1"></i> <span>Ordem: 2024 ➔ 1914</span>';
      renderTitulos(currentTituloCat, searchTitulos ? searchTitulos.value : '');
    });
  }

  // Filtros Ídolos
  const idoloBtns = document.querySelectorAll('.idolo-filter-btn');
  const searchIdolos = document.getElementById('search-idolos');
  let currentIdoloFiltro = 'todos';

  idoloBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      idoloBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentIdoloFiltro = btn.getAttribute('data-filter');
      renderIdolos(currentIdoloFiltro, searchIdolos ? searchIdolos.value : '');
    });
  });

  if (searchIdolos) {
    searchIdolos.addEventListener('input', (e) => {
      renderIdolos(currentIdoloFiltro, e.target.value);
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
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
      ? `<span style="font-size: 1.15rem; font-weight: 800; color: #fbbf24; letter-spacing: 0.05em;"><i class="fa-regular fa-clock"></i> ${jogo.horario || '20:00'}</span>`
      : `<span>${jogo.mandante.gols}</span><span style="font-size: 1.2rem; color: #666;">x</span><span>${jogo.visitante.gols}</span>`;

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
            <span class="jogo-team-name">${jogo.mandante.nome}</span>
          </div>
          <div class="jogo-score-box">
            ${scoreBoxContent}
          </div>
          <div class="jogo-team">
            <span class="jogo-team-name">${jogo.visitante.nome}</span>
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
  if (tagEl) tagEl.textContent = idolo.tag.toUpperCase();
  if (periodoEl) periodoEl.textContent = idolo.periodo;
  if (nomeEl) nomeEl.textContent = idolo.nome;
  if (posicaoEl) posicaoEl.textContent = `${idolo.posicao} • ${idolo.periodo}`;
  if (jogosEl) jogosEl.textContent = idolo.jogos;
  if (golsEl) golsEl.textContent = idolo.gols;
  if (titulosEl) titulosEl.textContent = idolo.titulos;
  if (fraseEl) fraseEl.textContent = idolo.frase;
  if (legadoEl) legadoEl.textContent = idolo.legado;

  const numTitulos = idolo.titulos ? idolo.titulos.split(',').length : 0;
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

// Tornar funções acessíveis globalmente no escopo de janela
window.abrirModalIdolo = abrirModalIdolo;
window.fecharModalIdolo = fecharModalIdolo;

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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharModalIdolo();
    }
  });
});


