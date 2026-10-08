/**
 * HOSPITAL GERAL DE PALMAS (HGP) - PORTAL DE LINKS ÚTEIS & SUPORTE DE TI
 * Core Interactive Logic & Application Engine (Pure Black & White Edition)
 */

// ==========================================================================
// 1. Data Store: All Hospital Systems & Links (Exact mapping from original UI)
// ==========================================================================
const DEFAULT_SYSTEMS = [
  // --- Normas & Documentos Principais ---
  {
    id: "chamado_ati",
    title: "Abrir Chamado para a ATI (Agência de Tecnologia)",
    acronym: "ATI",
    category: "suporte",
    description: "Abertura de chamados de TI para a Agência de Tecnologia da Informação.",
    defaultUrl: "https://chamados.ati.to.gov.br/otrs/customer.pl?Action=Logout",
    status: "Online",
    iconCategory: "suporte",
    imageUrl: "ati_novo2.jpg"
  },
  {
    id: "suporte_whatsapp",
    title: "Suporte TI (WhatsApp)",
    acronym: "WHATSAPP",
    category: "suporte",
    description: "Abrir chamado de suporte de TI via WhatsApp.",
    defaultUrl: "https://api.whatsapp.com/send/?phone=556330275205&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0",
    status: "Online",
    iconCategory: "suporte",
    imageUrl: "suporte_whatsapp.png"
  },
  // --- Gestão & Comunicação ---
  {
    id: "intranet_sesau",
    title: "Intranet SESAU",
    acronym: "INTRANET",
    category: "gestao",
    description: "Portal corporativo da Secretaria de Estado da Saúde do Tocantins.",
    defaultUrl: "https://sistemas.saude.to.gov.br/intranet/",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "intranet.png"
  },
  {
    id: "ellos_ecm",
    title: "Ellos ECM",
    acronym: "ECM",
    category: "gestao",
    description: "Sistema de Gestão Eletrônica de Conteúdo e Processos Administrativos.",
    defaultUrl: "https://secad2.ellosecm.com.br/Default.aspx",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "ellos.png"
  },

  // --- MV & Prontuário ---
  {
    id: "plano_gerenciamento",
    title: "Plano de Gerenciamento de Serviço de Saúde",
    acronym: "PGRSS",
    category: "normas",
    description: "Documento oficial do Plano de Gerenciamento de Resíduos de Serviço de Saúde.",
    defaultUrl: "https://drive.google.com/file/d/1HuMrgFhlRl1YuYC6mw4cbfd3JnvmCqYA/view",
    status: "Online",
    iconCategory: "normas",
    imageUrl: "plano_gerenciamento.png"
  },
  {
    id: "codigos_medicamentos_mv",
    title: "Códigos dos Medicamentos SOUL MV",
    acronym: "TABELA MV",
    category: "mv",
    description: "Tabela de consulta e padronização dos códigos de fármacos e insumos no MV.",
    defaultUrl: "https://script.google.com/macros/s/AKfycbwLvtEJjIHfpnQzsDBFLJ9sxypwQ6jSqcVnIiSu07-QX9E0FFUuWeU1KyeOURw3nz99Ag/exec",
    status: "Online",
    iconCategory: "mv",
    imageUrl: "codigos_mv.png"
  },
  {
    id: "mv_soul",
    title: "MV SOUL",
    acronym: "SISTEMA MV",
    category: "mv",
    description: "Sistema Integrado de Gestão Hospitalar (Internação, Faturamento, Suprimentos).",
    defaultUrl: "http://sgh.saude.to.gov.br/mvautenticador-cas/login?service=http%3A%2F%2Fsgh.saude.to.gov.br%3A80%2Fglobal%2F",
    status: "Online",
    iconCategory: "mv",
    imageUrl: "soulmv_novo_3.png"
  },
  {
    id: "mv_pep",
    title: "MV PEP",
    acronym: "PEP MV",
    category: "mv",
    description: "Prontuário Eletrônico do Paciente - Evolução Médica, Enfermagem e Prescrição.",
    defaultUrl: "http://sgh.saude.to.gov.br/mvautenticador-cas/login?service=http%3A%2F%2Fsgh.saude.to.gov.br%3A80%2Fmvpep%2Findex.html%3Ft%3D1791401711582",
    status: "Online",
    iconCategory: "mv",
    imageUrl: "mvpep.png"
  },
  {
    id: "mv_sacr",
    title: "MV SACR",
    acronym: "CLASSIFICAÇÃO",
    category: "mv",
    description: "Sistema de Acolhimento com Classificação de Risco (Manchester).",
    defaultUrl: "http://sgh.saude.to.gov.br/mvsacr/",
    status: "Online",
    iconCategory: "mv",
    imageUrl: "mvsacr.png"
  },
  {
    id: "stox",
    title: "STOK (Controle de Estoque)",
    acronym: "ESTOQUE",
    category: "sistemas",
    description: "Gestão de estoque, farmácia central e dispensação de medicamentos.",
    defaultUrl: "https://to-producao.ecosistemas.com.br/stok/Logar.do",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "stok.png"
  },
  {
    id: "mobile_med",
    title: "Mobile Med",
    acronym: "LAUDOS",
    category: "mv",
    description: "Plataforma mobile para visualização de exames de imagem e laudos radiológicos.",
    defaultUrl: "https://portal.mobilemed.com.br/login",
    status: "Online",
    iconCategory: "mv",
    imageUrl: "mobilemed.png"
  },
  {
    id: "sistemas_saude",
    title: "Sistemas Saúde",
    acronym: "PORTAL SAÚDE",
    category: "sistemas",
    description: "Portal integrado de acesso aos sistemas de saúde do Estado do Tocantins.",
    defaultUrl: "https://portaldesistemas.to.gov.br/public/filters?opcao=1&q%5Borgao_id_eq%5D=165",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "sistemas_saude.png"
  },

  // --- Laboratório & Exames ---
  {
    id: "biopsia",
    title: "Biopsia (Anatomia Patológica)",
    acronym: "PATOLOGIA",
    category: "sistemas",
    description: "Sistema de cadastro e emissão de laudos de exames anatomopatológicos.",
    defaultUrl: "https://pathoweb.com.br/login/auth?format=",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "biopsia.png"
  },
  {
    id: "neolab",
    title: "Neolab",
    acronym: "LABORATÓRIO",
    category: "sistemas",
    description: "Sistema de Informações Laboratoriais (LIS) e resultados de exames de sangue.",
    defaultUrl: "https://neolabdiagnostico.com.br/",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "neolab.png"
  },

  // --- Regulação & SUS ---
  {
    id: "ser",
    title: "SER (Sistema de Regulação)",
    acronym: "REGULAÇÃO",
    category: "regulacao",
    description: "Sistema Estaduais de Regulação de cirurgias, consultas e exames.",
    defaultUrl: "https://to-producao.ecosistemas.com.br/ser/",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "ser.png"
  },

  {
    id: "sisreg",
    title: "SISREG (Sistema Nacional de Regulação)",
    acronym: "SISREG",
    category: "regulacao",
    description: "Sistema Nacional de Regulação do Ministério da Saúde.",
    defaultUrl: "https://sisregiii.saude.gov.br/",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "sisreg.png"
  },

  // --- E-mail & Documentos ---
  {
    id: "gmail",
    title: "Gmail Institucional",
    acronym: "E-MAIL",
    category: "gestao",
    description: "Correio eletrônico corporativo do Governo do Estado / SESAU.",
    defaultUrl: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S-2011026223%3A1778525630524628&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWa2Pau_jtt5bGO-SWl8324SR17veFQrx356WW2_OMuQsMjT_9HlLi8JrYwICU75wDDV3wKfTw_ahQ",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "gmail.png"
  },
  {
    id: "sgd",
    title: "SGD (Gestão de Documentos)",
    acronym: "DOCUMENTOS",
    category: "gestao",
    description: "Sistema de Gestão de Documentos Eletrônicos e Protocolo Oficial.",
    defaultUrl: "https://sgd.to.gov.br/",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "sgd.png"
  },
  {
    id: "fcazus",
    title: "FCAZUS",
    acronym: "CADASTRO",
    category: "regulacao",
    description: "Ficha Cadastral Unificada de Prestadores e Estabelecimentos SUS.",
    defaultUrl: "http://fcaz-hgp.saude.to.gov.br/#",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "fcazus.png"
  },
  {
    id: "cnes",
    title: "CNES",
    acronym: "MINISTÉRIO",
    category: "regulacao",
    description: "Cadastro Nacional de Estabelecimentos de Saúde (Ministério da Saúde).",
    defaultUrl: "http://cnes.datasus.gov.br/",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "cnes.png"
  },

  // --- Educação & Vigilância ---
  {
    id: "ead",
    title: "EAD (Plataforma Ensino)",
    acronym: "TREINAMENTO",
    category: "normas",
    description: "Ambiente Virtual de Aprendizagem e Treinamentos Continuados HGP.",
    defaultUrl: "https://ead.hgp.to.gov.br/login/index.php",
    status: "Online",
    iconCategory: "normas",
    imageUrl: "ead.png"
  },
  {
    id: "sim",
    title: "SIM (Sistema sobre Mortalidade)",
    acronym: "VIGILÂNCIA",
    category: "sistemas",
    description: "Sistema de Informação sobre Mortalidade e Declarações de Óbito.",
    defaultUrl: "http://sim.saude.gov.br/default.asp",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "sim.png"
  },
  {
    id: "siscan",
    title: "SISCAN / SIRCAN",
    acronym: "ONCOLOGIA",
    category: "sistemas",
    description: "Sistema de Informação do Câncer (Rastreamento Mama e Colo Uterino).",
    defaultUrl: "https://siscan.saude.gov.br/login.jsf",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "siscan.png"
  },
  {
    id: "scpa",
    title: "SCPA",
    acronym: "PRODUÇÃO",
    category: "gestao",
    description: "Sistema de Controle da Produção Ambulatorial e Hospitalar.",
    defaultUrl: "https://autorizador.saude.gov.br/login",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "scpa.png"
  },
  {
    id: "sisaiveh",
    title: "SISAIVEH / SISAIH01",
    acronym: "EPIDEMIOLOGIA",
    category: "sistemas",
    description: "Sistema de Agravos e Vigilância Epidemiológica Hospitalar.",
    defaultUrl: "http://sihd.datasus.gov.br/versao/versao_sisaih01.php",
    status: "Online",
    iconCategory: "sistemas",
    imageUrl: "sisaiveh.png"
  },
  {
    id: "sigtap",
    title: "SIGTAP",
    acronym: "TABELA SUS",
    category: "regulacao",
    description: "Sistema de Gerenciamento da Tabela de Procedimentos do SUS.",
    defaultUrl: "http://sigtap.datasus.gov.br/tabela-unificada/app/download.jsp",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "sigtap.png"
  },
  {
    id: "nep",
    title: "NEP (Núcleo Educação Permanente)",
    acronym: "EDUCAÇÃO",
    category: "normas",
    description: "Portal e informações do Núcleo de Educação Permanente do HGP.",
    defaultUrl: "https://sites.google.com/view/nepdohgp2025/calendario-de-reservas-mensal-nep",
    status: "Online",
    iconCategory: "normas",
    imageUrl: "nep.png"
  },
  {
    id: "apac",
    title: "APAC",
    acronym: "ALTA COMPLEXIDADE",
    category: "regulacao",
    description: "Autorização de Procedimentos de Alta Complexidade do SUS.",
    defaultUrl: "http://w3.datasus.gov.br/sia/index.php?area=0302",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "apac.png"
  },
  {
    id: "cadweb",
    title: "CADWEB",
    acronym: "CARTÃO SUS",
    category: "regulacao",
    description: "Cadastro Nacional de Usuários do Sistema Único de Saúde.",
    defaultUrl: "https://cadastro.saude.gov.br/operador/",
    status: "Online",
    iconCategory: "regulacao",
    imageUrl: "cadweb.png"
  },
  {
    id: "apurasus",
    title: "ApurASUS",
    acronym: "CUSTOS",
    category: "gestao",
    description: "Sistema de Apuração e Gestão de Custos do SUS.",
    defaultUrl: "http://apurasus.saude.gov.br/apurasus/principal/visaoGeral.jsf",
    status: "Online",
    iconCategory: "gestao",
    imageUrl: "apurasus.png"
  },

];

// SVG Icon Helpers
function getCategoryIconSvg(category) {
  switch (category) {
    case 'mv':
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
    case 'regulacao':
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
    case 'sistemas':
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
    case 'gestao':
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`;
    case 'normas':
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
    case 'suporte':
    default:
      return `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
  }
}

// ==========================================================================
// 2. Application State Management
// ==========================================================================
class AppState {
  constructor() {
    this.systems = this.loadConfiguredUrls();
    this.favorites = this.loadFavorites();
    this.activeCategory = "all";
    this.searchQuery = "";
    this.viewMode = "grid"; // 'grid' or 'list'
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem("hgp_favorites");
      return saved ? JSON.parse(saved) : ["mv_soul", "mv_pep", "codigos_medicamentos_mv"];
    } catch (e) {
      return ["mv_soul", "mv_pep"];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem("hgp_favorites", JSON.stringify(this.favorites));
    } catch (e) {}
  }

  toggleFavorite(id) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(favId => favId !== id);
      showToast("Sistema removido dos favoritos.");
    } else {
      this.favorites.push(id);
      showToast("Sistema adicionado aos favoritos!");
    }
    this.saveFavorites();
  }

  isFavorite(id) {
    return this.favorites.includes(id);
  }

  loadConfiguredUrls() {
    try {
      const saved = localStorage.getItem("hgp_custom_urls");
      if (saved) {
        const customMap = JSON.parse(saved);
        return DEFAULT_SYSTEMS.map(sys => ({
          ...sys,
          url: customMap[sys.id] || sys.defaultUrl
        }));
      }
    } catch (e) {}
    return DEFAULT_SYSTEMS.map(sys => ({ ...sys, url: sys.defaultUrl }));
  }

  saveCustomUrls(customMap) {
    try {
      localStorage.setItem("hgp_custom_urls", JSON.stringify(customMap));
      this.systems = this.loadConfiguredUrls();
      showToast("URLs configuradas salvas com sucesso!");
    } catch (e) {}
  }

  resetCustomUrls() {
    localStorage.removeItem("hgp_custom_urls");
    this.systems = DEFAULT_SYSTEMS.map(sys => ({ ...sys, url: sys.defaultUrl }));
    showToast("Endereços restaurados para o padrão.");
  }
}

const state = new AppState();

// ==========================================================================
// 3. UI Rendering & DOM Manipulation
// ==========================================================================

function renderLinksGrid() {
  const container = document.getElementById("linksGrid");
  const noResults = document.getElementById("noResults");
  const countText = document.getElementById("resultsCountText");

  if (!container) return;

  // Filter logic
  const filtered = state.systems.filter(sys => {
    // Category check
    if (state.activeCategory === "favorites") {
      if (!state.favorites.includes(sys.id)) return false;
    } else if (state.activeCategory !== "all") {
      if (sys.category !== state.activeCategory) return false;
    }

    // Search query check
    if (state.searchQuery.trim() !== "") {
      const query = state.searchQuery.toLowerCase();
      const matchTitle = sys.title.toLowerCase().includes(query);
      const matchAcronym = sys.acronym.toLowerCase().includes(query);
      const matchDesc = sys.description.toLowerCase().includes(query);
      return matchTitle || matchAcronym || matchDesc;
    }

    return true;
  });

  // Update counter text
  countText.textContent = `Exibindo ${filtered.length} de ${state.systems.length} sistemas`;
  updateTabCounts();

  if (filtered.length === 0) {
    container.style.display = "none";
    noResults.style.display = "block";
    return;
  }

  container.style.display = state.viewMode === "grid" ? "grid" : "flex";
  noResults.style.display = "none";

  // Build Cards HTML
  container.innerHTML = filtered.map(sys => {
    const isFav = state.isFavorite(sys.id);
    const iconSvg = getCategoryIconSvg(sys.iconCategory);

    if (sys.imageUrl) {
      let extraStyle = "";
      if (["mv_sacr", "intranet_sesau", "mobile_med", "ellos_ecm", "apac", "cadweb", "apurasus", "codigos_medicamentos_mv", "siscan", "sisaiveh", "ser", "sisreg", "sistemas_saude"].includes(sys.id)) {
        extraStyle = 'style="transform: scale(1.6);"';
      } else if (["cnes", "neolab"].includes(sys.id)) {
        extraStyle = 'style="transform: scale(1.05);"';
      } else if (sys.id === "suporte_whatsapp") {
        extraStyle = 'style="transform: scale(1.0);"';
      }
      return `
        <div class="link-card link-card-has-image" data-id="${sys.id}">
          <img src="${sys.imageUrl}" alt="${sys.title}" class="card-full-image" ${extraStyle} crossorigin="anonymous" />
          <a href="${sys.url}" target="_blank" rel="noopener" class="card-image-link-overlay"></a>
        </div>
      `;
    }

    return `
      <div class="link-card" data-id="${sys.id}">
        <div class="card-top">
          <div class="card-icon-wrap icon-cat-${sys.iconCategory}">
            ${iconSvg}
          </div>
          <div class="card-actions-top">
            <button class="star-btn ${isFav ? 'is-favorite' : ''}" data-star-id="${sys.id}" title="${isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="card-body">
          <span class="card-tag">${sys.acronym}</span>
          <h3 class="card-title">${sys.title}</h3>
          <p class="card-description">${sys.description}</p>
        </div>

        <div class="card-footer">
          <div class="card-status-badge">
            <span class="mini-dot"></span>
            <span>${sys.status}</span>
          </div>

          <a 
            href="${sys.url}" 
            class="card-launch-btn" 
            ${sys.isModalTrigger ? `onclick="openModal('${sys.url.replace('#', '')}'); return false;"` : 'target="_blank" rel="noopener"'}
          >
            <span>Acessar</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Attach Star Events
  container.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-star-id');
      state.toggleFavorite(id);
      renderLinksGrid();
    });
  });

  // Apply dynamic solid backgrounds to image cards
  applySolidImageBackgrounds(container);
}

function applySolidImageBackgrounds(container) {
  const imageCards = container.querySelectorAll('.link-card-has-image');
  imageCards.forEach(card => {
    const img = card.querySelector('.card-full-image');
    if (!img) return;
    
    const setBg = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || 100;
        canvas.height = img.naturalHeight || 100;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const forceWhiteBg = [
          "mobile_med", "mv_soul", "chamado_ati", 
          "intranet_sesau", "ellos_ecm", "mv_pep", 
          "mv_sacr", "stox", "apac", "ead", "sgd", "gmail", "cadweb", "plano_gerenciamento"
        ];
        if (forceWhiteBg.includes(card.dataset.id)) {
          card.style.setProperty('background', '#ffffff', 'important');
          return;
        }

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const midY = Math.floor(canvas.height / 2);
        let finalR = 255, finalG = 255, finalB = 255;
        let found = false;

        // Scan from left to center to find the first non-white/non-transparent pixel
        for (let x = 0; x < canvas.width; x++) {
          const index = (midY * canvas.width + x) * 4;
          const r = imgData[index];
          const g = imgData[index+1];
          const b = imgData[index+2];
          const a = imgData[index+3];
          
          if (a > 50 && (r < 240 || g < 240 || b < 240)) {
            finalR = r; finalG = g; finalB = b;
            found = true;
            break;
          }
        }

        // Fallback to top-left if nothing found
        if (!found) {
          finalR = imgData[0]; finalG = imgData[1]; finalB = imgData[2];
        }

        card.style.setProperty('background', `rgb(${finalR}, ${finalG}, ${finalB})`, 'important');
      } catch (err) {
        console.warn("Could not extract image background color", err);
      }
    };

    if (img.complete) {
      setBg();
    } else {
      img.addEventListener('load', setBg);
    }
  });
}

function updateTabCounts() {
  const cAll = document.getElementById("countAll"); if(cAll) cAll.textContent = state.systems.length;
  const cFav = document.getElementById("countFavorites"); if(cFav) cFav.textContent = state.favorites.length;
  const cMv = document.getElementById("countMv"); if(cMv) cMv.textContent = state.systems.filter(s => s.category === 'mv').length;
  const cReg = document.getElementById("countRegulacao"); if(cReg) cReg.textContent = state.systems.filter(s => s.category === 'regulacao').length;
  const cSis = document.getElementById("countSistemas"); if(cSis) cSis.textContent = state.systems.filter(s => s.category === 'sistemas').length;
  const cGes = document.getElementById("countGestao"); if(cGes) cGes.textContent = state.systems.filter(s => s.category === 'gestao').length;
  const cNor = document.getElementById("countNormas"); if(cNor) cNor.textContent = state.systems.filter(s => s.category === 'normas').length;
}

// Global System Launcher Helper
function openSystemUrl(url) {
  if (url.startsWith('#')) {
    openModal(url.replace('#', ''));
  } else {
    window.open(url, '_blank');
  }
}

// ==========================================================================
// 4. Modal Engine
// ==========================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

function initModalListeners() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.is-open').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
}

// Config Links Editor Modal
function renderConfigLinksModal() {
  const container = document.getElementById("configLinksContainer");
  if (!container) return;

  container.innerHTML = state.systems.map(sys => `
    <div class="config-link-row">
      <span class="config-link-title">${sys.title}</span>
      <input type="text" data-config-id="${sys.id}" value="${sys.url}" placeholder="URL ou IP local do servidor..." />
    </div>
  `).join('');
}

// ==========================================================================
// 5. Toast System
// ==========================================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast`;
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 6. Real-time Clock
// ==========================================================================

function startClock() {
  const timeEl = document.getElementById("clockTime");
  const dateEl = document.getElementById("clockDate");

  function update() {
    const now = new Date();
    if (timeEl) {
      timeEl.textContent = now.toLocaleTimeString("pt-BR", { hour12: false });
    }
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString("pt-BR", {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 7. Event Listeners Initialization
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initial Render
  renderLinksGrid();
  startClock();
  initModalListeners();

  // Search Input Listener
  const searchInput = document.getElementById("searchInput");
  const btnClearSearch = document.getElementById("btnClearSearch");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      btnClearSearch.style.display = state.searchQuery.length > 0 ? "block" : "none";
      renderLinksGrid();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      btnClearSearch.style.display = "none";
      renderLinksGrid();
      searchInput.focus();
    });
  }

  // Keyboard Shortcut Ctrl+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Category Tabs Listener
  const categoryTabs = document.getElementById("categoryTabs");
  if (categoryTabs) {
    categoryTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;

      categoryTabs.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      state.activeCategory = btn.getAttribute("data-category");
      renderLinksGrid();
    });
  }

  // View Mode Switcher (Grid / List)
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  const linksGrid = document.getElementById("linksGrid");

  if (viewGridBtn && viewListBtn && linksGrid) {
    viewGridBtn.addEventListener("click", () => {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      linksGrid.classList.remove("view-list");
      linksGrid.classList.add("view-grid");
      state.viewMode = "grid";
      renderLinksGrid();
    });

    viewListBtn.addEventListener("click", () => {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      linksGrid.classList.remove("view-grid");
      linksGrid.classList.add("view-list");
      state.viewMode = "list";
      renderLinksGrid();
    });
  }

  // Header & Centered Hero Quick Action Buttons
  document.getElementById("btnSobreaviso")?.addEventListener("click", () => openModal("modalSobreaviso"));
  document.getElementById("btnOvernightCenter")?.addEventListener("click", () => openModal("modalSobreaviso"));

  document.getElementById("btnTelefones")?.addEventListener("click", () => openModal("modalTelefones"));
  document.getElementById("btnRamaisATI")?.addEventListener("click", () => openModal("modalRamaisATI"));
  document.getElementById("btnRamaisTerceirizadas")?.addEventListener("click", () => openModal("modalTerceirizadas"));

  document.getElementById("btnCustomLinks")?.addEventListener("click", () => {
    renderConfigLinksModal();
    openModal("modalConfigLinks");
  });

  // Reset Filters Button in Empty State
  document.getElementById("btnResetFilters")?.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    state.activeCategory = "all";
    if (btnClearSearch) btnClearSearch.style.display = "none";

    const allTab = categoryTabs?.querySelector('[data-category="all"]');
    if (allTab) {
      categoryTabs.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
      allTab.classList.add("active");
    }
    renderLinksGrid();
  });

  // Theme Toggle Listener
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("hgp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("hgp_theme", nextTheme);
      showToast(`Tema ${nextTheme === "dark" ? "Escuro" : "Claro"} ativado!`);
    });
  }

  // Phone List Filter in Modal
  const phoneSearchInput = document.getElementById("phoneSearchInput");
  const phonesTable = document.getElementById("phonesTable");
  if (phoneSearchInput && phonesTable) {
    phoneSearchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const rows = phonesTable.querySelectorAll("tbody tr");
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? "" : "none";
      });
    });
  }

  // ATI Phone List Filter in Modal
  const atiSearchInput = document.getElementById("atiSearchInput");
  const atiTable = document.getElementById("atiTable");
  if (atiSearchInput && atiTable) {
    atiSearchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const rows = atiTable.querySelectorAll("tbody tr");
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? "" : "none";
      });
    });
  }

  // Save Configured URLs Modal Buttons
  document.getElementById("btnSaveConfigUrls")?.addEventListener("click", () => {
    const inputs = document.querySelectorAll("#configLinksContainer input");
    const customMap = {};
    inputs.forEach(input => {
      const id = input.getAttribute("data-config-id");
      const value = input.value.trim();
      if (id && value) customMap[id] = value;
    });

    state.saveCustomUrls(customMap);
    closeModal("modalConfigLinks");
    renderLinksGrid();
  });

  document.getElementById("btnResetDefaultUrls")?.addEventListener("click", () => {
    state.resetCustomUrls();
    closeModal("modalConfigLinks");
    renderLinksGrid();
  });
});
