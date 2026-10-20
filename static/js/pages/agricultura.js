const ICONS = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  basket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
};

const HERO_IMAGE = '/static/assets/image_agricultura.png';
const HERO_FALLBACK = '/static/assets/image_logo.png';

export default {
  title: 'Agricultura Angolana — Shoprite Angola',

  render() {
    return `
      <section class="page-hero page-hero-agricultura">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <span class="badge badge-light">Agricultura Angolana</span>
            <h1>Conheça os Agricultores Orgulhosamente Locais</h1>
            <p>Produtos Frescos na Shoprite — temos o orgulho de trabalhar em parceria com agricultores locais de todo o país, trazendo o melhor da produção nacional diretamente para as nossas prateleiras — garantindo o acesso a fruta e legumes frescos, de qualidade e cultivados localmente.</p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section agricultura-intro">
        <div class="container">
          <div class="agricultura-intro-inner">
            <span class="badge">Agricultores Locais</span>
            <h2>Do campo angolano diretamente para a sua mesa</h2>
            <p>Apoiamos quem produz em Angola. Cada fruta, cada legume, cada produto que vê nas nossas prateleiras conta a história de um agricultor angolano — do trabalho, do esforço e do orgulho de cultivar a nossa terra.</p>
          </div>

          <div class="agricultura-beneficios">
            <div class="agricultura-beneficio">
              <span class="agricultura-beneficio-icon icon">${ICONS.sprout}</span>
              <h3>Frescura real</h3>
              <p>Do campo à loja no mesmo dia, para garantir o máximo de sabor e nutrientes.</p>
            </div>
            <div class="agricultura-beneficio">
              <span class="agricultura-beneficio-icon icon">${ICONS.users}</span>
              <h3>Produtores locais</h3>
              <p>Trabalhamos diretamente com agricultores de várias províncias de Angola.</p>
            </div>
            <div class="agricultura-beneficio">
              <span class="agricultura-beneficio-icon icon">${ICONS.basket}</span>
              <h3>Variedade nacional</h3>
              <p>Fruta, legumes, hortícolas e produtos sazonais da nossa terra.</p>
            </div>
            <div class="agricultura-beneficio">
              <span class="agricultura-beneficio-icon icon">${ICONS.award}</span>
              <h3>Qualidade garantida</h3>
              <p>Selecionamos rigorosamente cada produto antes de chegar à sua loja.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt agricultura-farmers-section">
        <div class="container">
          <div class="section-head section-head-center">
            <div>
              <span class="badge">Local Farmers</span>
              <h2>Quem produz o que chega à sua mesa</h2>
              <p class="section-sub">Conheça alguns dos agricultores que fazem parte da família Shoprite.</p>
            </div>
          </div>

          <div class="agricultura-farmers-grid">
            <article class="agricultura-farmer-card">
              <div class="agricultura-farmer-media media-box">
                ${mediaImages('/static/assets/agricultura_farmer_1.png', 'Três agricultores locais')}
              </div>
              <div class="agricultura-farmer-body">
                <span class="agricultura-farmer-tag">Produtores locais</span>
                <h3>Do campo para a sua mesa</h3>
                <p>Um compromisso com a terra, com as pessoas e com o futuro de Angola. Cada colheita é tratada com o cuidado que só quem ama o que faz consegue dar.</p>
              </div>
            </article>

            <article class="agricultura-farmer-card">
              <div class="agricultura-farmer-media media-box">
                ${mediaImages('/static/assets/agricultura_farmer_2.png', 'Agricultora local')}
              </div>
              <div class="agricultura-farmer-body">
                <span class="agricultura-farmer-tag">Produtora local</span>
                <h3>Orgulhosamente angolana</h3>
                <p>Cada produto que cultivamos traz o sabor da nossa terra e o esforço de quem trabalha todos os dias para alimentar as famílias angolanas.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section agricultura-cta-section">
        <div class="container">
          <div class="agricultura-cta">
            <div class="agricultura-cta-copy">
              <span class="badge badge-light">Apoie o local</span>
              <h2>Valorize quem produz em Angola</h2>
              <p>Cada compra de um produto nacional é um passo para uma economia mais forte e para o reconhecimento do trabalho dos nossos agricultores.</p>
              <div class="agricultura-cta-actions">
                <a href="#/lojas" class="btn btn-yellow">
                  Encontrar loja
                  <span class="icon">${ICONS.arrowRight}</span>
                </a>
                <a href="#/ofertas" class="btn btn-ghost btn-ghost-light">Ver folhetos</a>
              </div>
            </div>
            <div class="agricultura-cta-visual" aria-hidden="true">
              <span class="icon">${ICONS.leaf}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  mount() {
    const stopHero = setupHeroMedia(document.querySelector('[data-hero-media]'));
    document.addEventListener('error', onImgError, true);
    return () => {
      stopHero();
      document.removeEventListener('error', onImgError, true);
    };
  },
};

// Imagem completa: a principal (contain) + cópia desfocada a preencher a moldura.
function mediaImages(src, alt) {
  const url = escapeAttr(src);
  return `
    <img class="media-box-bg" src="${url}" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    <img class="media-box-img" src="${url}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
  `;
}

// Os erros de imagem não "sobem" no DOM, por isso ouvimos na fase de captura.
function onImgError(event) {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  img.closest('.media-box')?.classList.add('is-broken');
}

// Hero: a moldura passa a ter o formato real da imagem (limitado a 1.2–2.4).
// Se a imagem não existir, usa a alternativa uma única vez.
function setupHeroMedia(box) {
  if (!box) return () => {};

  const main = box.querySelector('.media-box-img');
  const bg = box.querySelector('.media-box-bg');
  if (!main) return () => {};

  const applyRatio = () => {
    if (!main.naturalWidth || !main.naturalHeight) return;
    const ratio = Math.min(2.4, Math.max(1.2, main.naturalWidth / main.naturalHeight));
    box.style.setProperty('--ratio', ratio.toFixed(4));
  };

  let usedFallback = false;
  const onError = () => {
    if (usedFallback) {
      box.classList.add('is-broken');
      return;
    }
    usedFallback = true;
    main.src = HERO_FALLBACK;
    if (bg) bg.src = HERO_FALLBACK;
  };

  main.addEventListener('load', applyRatio);
  main.addEventListener('error', onError);
  if (main.complete) applyRatio();

  return () => {
    main.removeEventListener('load', applyRatio);
    main.removeEventListener('error', onError);
  };
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[ch]);
}

function escapeAttr(value) {
  return escapeHtml(value);
}
