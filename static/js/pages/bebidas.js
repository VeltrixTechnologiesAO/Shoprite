const ICONS = {
  wine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>',
  cocktail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>',
  beer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1.109-.525-2.281-.796-3.5-.796-2.5 0-4.5 1.25-5.5 3-.5.875-.75 1.875-.75 2.922 0 3.944 3.5 7.374 8 7.374h1"/><path d="M5 8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
};

const HERO_IMAGE = '/static/assets/image_bebidas.png';
const HERO_FALLBACK = '/static/assets/image_logo.png';
const IMG_FALLBACK = '/static/assets/image_bebidas.png';

export default {
  title: 'Loja de Bebidas — Shoprite Angola',

  render() {
    return `
      <section class="page-hero page-hero-bebidas">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <span class="badge badge-light">Loja de Bebidas</span>
            <h1>A melhor gama de bebidas de alta qualidade para todas as celebrações</h1>
            <p>Bem-vindo ao mundo das bebidas de primeira prateleira, uma seleção de escolha das melhores marcas e preços tão baixos, que você terá que nos visitar na loja para ter certeza de que eles são reais. <strong>P.S. Os preços são reais!</strong></p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section bebidas-intro">
        <div class="container">
          <div class="bebidas-intro-inner">
            <span class="badge">Seleção premium</span>
            <h2>Um brinde à poupança de fim de semana!</h2>
            <p>Vinhos, cervejas, destilados, refrigerantes e sumos — a maior variedade ao melhor preço, sempre na sua Shoprite. Reunimos o melhor para cada ocasião: um jantar em família, um churrasco com amigos ou simplesmente o prazer de um momento a sós.</p>
          </div>

          <div class="bebidas-image-h media-box">
            ${mediaImages('/static/assets/bebidas_gama.png', 'Seleção de bebidas Shoprite', IMG_FALLBACK)}
          </div>
        </div>
      </section>

      <section class="section section-alt bebidas-destaque">
        <div class="container">
          <div class="bebidas-destaque-inner">
            <div class="bebidas-destaque-text">
              <span class="badge">Sugestão da casa</span>
              <h2>O Mojito picante e gelado</h2>
              <p class="bebidas-destaque-sub">A bebida perfeita para refrescar o fim de semana.</p>

              <p>Uma receita simples e refrescante que combina o doce da hortelã, o picante do gengibre e a frescura da lima. Todos os ingredientes à venda nas lojas Shoprite.</p>

              <div class="bebidas-receita">
                <h3>Ingredientes</h3>
                <ul class="bebidas-receita-list">
                  <li>1 lima fresca cortada em gomos</li>
                  <li>Folhas de hortelã a gosto</li>
                  <li>1 rodela fina de gengibre</li>
                  <li>1 colher de açúcar</li>
                  <li>Rum branco (opcional)</li>
                  <li>Água com gás e gelo</li>
                </ul>

                <h3>Preparação</h3>
                <ol class="bebidas-receita-list">
                  <li>Num copo alto, macere a lima, o gengibre e o açúcar.</li>
                  <li>Junte as folhas de hortelã e pressione levemente.</li>
                  <li>Adicione gelo até meio do copo.</li>
                  <li>Se quiser, junte o rum branco.</li>
                  <li>Complete com água com gás e mexa bem.</li>
                  <li>Decore com hortelã e uma rodela de lima. Sirva bem gelado.</li>
                </ol>
              </div>

              <a href="#/lojas" class="btn btn-primary bebidas-destaque-cta">
                Encontrar ingredientes
                <span class="icon">${ICONS.arrowRight}</span>
              </a>
            </div>

            <div class="bebidas-destaque-visual media-box">
              ${mediaImages('/static/assets/bebidas_mojito.png', 'Mojito picante e gelado')}
              <span class="bebidas-destaque-badge" aria-hidden="true">
                <span class="icon">${ICONS.sparkles}</span>
                18+
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="section bebidas-aviso-section">
        <div class="container">
          <div class="bebidas-aviso">
            <span class="bebidas-aviso-icon icon">${ICONS.alert}</span>
            <div>
              <strong>Aviso importante</strong>
              <p>Não para menores de 18 anos. Beba com responsabilidade. Não conduza sob o efeito do álcool.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section bebidas-cta-section">
        <div class="container">
          <div class="bebidas-cta">
            <div class="bebidas-cta-copy">
              <span class="badge badge-light">Visite-nos</span>
              <h2>Descubra a nossa seleção na loja</h2>
              <p>Encontre tudo o que precisa para a sua próxima celebração na Shoprite mais próxima. Preços reais, qualidade garantida e a maior variedade de Angola.</p>
              <div class="bebidas-cta-actions">
                <a href="#/lojas" class="btn btn-yellow">
                  Encontrar loja
                  <span class="icon">${ICONS.arrowRight}</span>
                </a>
                <a href="#/ofertas" class="btn btn-ghost btn-ghost-light">Ver folhetos</a>
              </div>
            </div>
            <div class="bebidas-cta-visual" aria-hidden="true">
              <span class="icon">${ICONS.cocktail}</span>
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
// Opcionalmente aceita uma imagem de recurso caso a principal falhe.
function mediaImages(src, alt, fallback = '') {
  const url = escapeAttr(src);
  const fb = fallback ? ` data-fallback="${escapeAttr(fallback)}"` : '';
  return `
    <img class="media-box-bg" src="${url}" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    <img class="media-box-img" src="${url}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async"${fb} />
  `;
}

// Os erros de imagem não "sobem" no DOM, por isso ouvimos na fase de captura.
// Se houver data-fallback, tenta uma vez; caso contrário mostra o estado neutro.
function onImgError(event) {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;

  const box = img.closest('.media-box');
  if (!box) return;

  const fallback = img.dataset.fallback;
  if (fallback && !img.dataset.fallbackUsed) {
    img.dataset.fallbackUsed = '1';
    img.src = fallback;
    const bg = box.querySelector('.media-box-bg');
    if (bg) bg.src = fallback;
    return;
  }

  box.classList.add('is-broken');
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
