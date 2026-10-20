const ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
};

// Imagem do hero (com alternativa se não existir). A moldura adapta-se ao
// formato real da imagem (ver setupHeroMedia), por isso nunca é cortada.
const HERO_IMAGE = '/static/assets/image_mercado.png';
const HERO_FALLBACK = '/static/assets/image_logo.png';

const SERVICOS = [
  {
    icon: 'phone',
    titulo: 'Comprar saldo de voz e dados',
    desc: 'Recarregue o seu telemóvel de qualquer operadora, de forma rápida e segura.',
    img: '/static/assets/mercado_saldo.png',
  },
  {
    icon: 'gift',
    titulo: 'Cartões de presente',
    desc: 'Ofereça cartões-presente das melhores marcas — o presente perfeito para qualquer ocasião.',
    img: '/static/assets/mercado_cartoes.png',
  },
  {
    icon: 'receipt',
    titulo: 'Pagamento de contas',
    desc: 'Pague as suas contas de serviços essenciais sem sair da loja. Rápido, seguro e prático.',
    img: '/static/assets/mercado_pagamentos.png',
  },
  {
    icon: 'card',
    titulo: 'Adquira o seu cartão e compras Shoprite na loja hoje mesmo',
    desc: 'Junte as vantagens do Money Market às suas compras do dia-a-dia. Peça o seu cartão na loja.',
    img: '/static/assets/mercado_cartao_shoprite.png',
  },
];

export default {
  title: 'Mercado Monetário — Shoprite Angola',

  render() {
    return `
      <section class="page-hero page-hero-mercado">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <span class="badge badge-light">Mercado Monetário</span>
            <h1>A única loja onde o seu dinheiro tem valor</h1>
            <p>Convenientemente situado na loja Shoprite mais próxima, o Money Market facilita a gestão do seu tempo e dinheiro. Se você precisa fazer uma transferência de dinheiro, recarregar seus dados, tempo de antena ou eletricidade, pagar uma conta ou comprar um cartão-presente — você pode fazer tudo isso na Shoprite.</p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section mercado-intro">
        <div class="container">
          <div class="mercado-intro-inner">
            <span class="badge">Serviços na loja</span>
            <h2>Tudo o que precisa, num só lugar</h2>
            <p>Os serviços do Money Market estão disponíveis na loja Shoprite mais próxima de si. Descubra tudo o que pode fazer sem sair da loja.</p>
          </div>
        </div>
      </section>

      <section class="section section-alt mercado-servicos-section">
        <div class="container">
          <div class="section-head section-head-center">
            <div>
              <span class="badge">O que oferecemos</span>
              <h2>Serviços na loja</h2>
              <p class="section-sub">Escolha o serviço que precisa e faça tudo numa só visita.</p>
            </div>
          </div>

          <div class="mercado-servicos-grid">
            ${SERVICOS.map((s, i) => `
              <article class="mercado-servico-card">
                <div class="mercado-servico-media media-box">
                  ${mediaImages(s.img, s.titulo)}
                  <span class="mercado-servico-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                </div>

                <div class="mercado-servico-body">
                  <span class="mercado-servico-icon icon">${ICONS[s.icon]}</span>
                  <h3>${escapeHtml(s.titulo)}</h3>
                  <p>${escapeHtml(s.desc)}</p>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section mercado-cta-section">
        <div class="container">
          <div class="mercado-cta">
            <div class="mercado-cta-copy">
              <span class="badge badge-light">Visite-nos</span>
              <h2>Encontre o Money Market mais próximo</h2>
              <p>Praticidade financeira ao seu alcance. Visite a loja Shoprite mais perto de si e aproveite todos os serviços do Money Market.</p>
              <div class="mercado-cta-actions">
                <a href="#/lojas" class="btn btn-yellow">
                  Encontrar loja
                  <span class="icon">${ICONS.arrowRight}</span>
                </a>
                <a href="#/contacto" class="btn btn-ghost btn-ghost-light">Fale connosco</a>
              </div>
            </div>
            <div class="mercado-cta-visual" aria-hidden="true">
              <span class="icon">${ICONS.pin}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  mount() {
    const stopHero = setupHeroMedia(document.querySelector('[data-hero-media]'));
    const grid = document.querySelector('.mercado-servicos-grid');
    if (grid) grid.addEventListener('error', onImgError, true);

    return () => {
      stopHero();
      if (grid) grid.removeEventListener('error', onImgError, true);
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
