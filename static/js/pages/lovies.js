const ICONS = {
  baby: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
};

const HERO_IMAGE = '/static/assets/image_lovies.png';
const HERO_FALLBACK = '/static/assets/image_logo.png';

const PRODUTOS = [
  '/static/assets/lovies_toalhetes.png',
  '/static/assets/lovies_creme.png',
  '/static/assets/lovies_vaselina.png',
  '/static/assets/lovies_fraldas_prod.png',
];

const CARDS = [
  '/static/assets/lovies_soft_skin.png',
  '/static/assets/lovies_pure_wipes.png',
  '/static/assets/lovies_tender_care.png',
];

const FAQS = [
  {
    q: 'O que é o creme aquoso?',
    a: 'O creme aquoso é um emoliente suave e hidratante adequado para a pele sensível do bebé. Ajuda a hidratar e a acalmar a pele seca ou irritada. Pode ser utilizado como substituto do sabonete durante o banho ou como hidratante após o banho para manter a pele do seu bebé macia e saudável.',
  },
  {
    q: 'As toalhitas para bebés são seguras para os recém-nascidos e como escolher as toalhitas certas?',
    a: 'As toalhitas para bebés são seguras para os recém-nascidos, mas é essencial escolher toalhitas concebidas para peles sensíveis e sem químicos agressivos. Procure as opções Lovies sem perfume e hipoalergénicas para minimizar o risco de irritação da pele.',
  },
  {
    q: 'Posso utilizar vaselina para prevenir as assaduras das fraldas?',
    a: 'Sim, a vaselina pode ser utilizada para ajudar a prevenir as erupções da fralda. Aplique uma camada fina de vaselina na pele limpa e seca do seu bebé antes de lhe colocar uma fralda nova. Estes produtos criam uma barreira protetora para reduzir a fricção e a humidade que podem contribuir para as assaduras.',
  },
  {
    q: 'Quais são as vantagens de utilizar fraldas descartáveis em vez de fraldas reutilizáveis?',
    a: 'São incrivelmente cómodas, pois podem ser facilmente deitadas fora após a utilização, eliminando a necessidade de lavar e secar. As fraldas descartáveis são também altamente absorventes, o que significa que podem conter mais humidade, mantendo o seu bebé seco durante mais tempo. São uma escolha popular para os pais em viagem, uma vez que são fáceis de transportar e de deitar fora quando viajam.',
  },
  {
    q: 'É seguro utilizar pó de talco para bebés na pele do meu bebé?',
    a: 'O pó de talco para bebés é seguro para a pele do seu bebé se for utilizado com cuidado. É melhor evitar aplicá-lo diretamente no corpo do bebé, uma vez que a inalação de partículas de pó pode ser prejudicial. Em vez disso, polvilhe uma pequena quantidade na sua mão, longe do rosto do seu bebé, e depois aplique-o suavemente em áreas propensas à humidade, como a zona da fralda, para a manter seca.',
  },
];

export default {
  title: 'Lovies — Cuidados do Bebé | Shoprite Angola',

  render() {
    return `
      <section class="page-hero page-hero-lovies">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <span class="badge badge-light">Lovies</span>
            <h1>Low Price Baby Promotion</h1>
            <p>Cuidados do bebé — fraldas, toalhetes e muito mais da Lovies. A gama Lovies de produtos de qualidade para bebés proporciona ao seu filho conforto e amor através dos cuidados mais delicados.</p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section lovies-intro">
        <div class="container">
          <div class="lovies-intro-inner">
            <span class="badge">A gama Lovies</span>
            <h2>Cuidados delicados para o seu bebé</h2>
            <p>Explore a nossa gama exclusiva de toalhetes suaves para bebé, pó de talco hiperabsorvente, vaselina sem parabenos, creme aquoso hipoalergénico e fraldas e cuecas de qualidade superior que bloqueiam a humidade.</p>
          </div>

          <div class="lovies-produtos">
            ${PRODUTOS.map((src) => `
              <div class="lovies-produto media-box">
                ${mediaImages(src, 'Produto Lovies')}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section section-alt lovies-feature">
        <div class="container">
          <div class="lovies-feature-inner">
            <div class="lovies-feature-text">
              <span class="badge">Top Quality Comfort and Care</span>
              <h2>Uma fralda com todas as caraterísticas que os bebés precisam e os pais adoram!</h2>
              <p>As fraldas e as cuecas Lovies foram concebidas a pensar no conforto e no bem-estar do seu bebé. Com até <strong>12 horas de proteção contra a secura</strong>, as nossas fraldas garantem que o seu pequeno se mantém confortável e seco durante todo o dia e toda a noite.</p>
              <p>As nossas tiras adesivas que não irritam e que podem voltar a ser fechadas facilitam as mudanças de fralda, assegurando o ajuste perfeito.</p>

              <ul class="lovies-feature-list">
                <li><span class="icon">${ICONS.check}</span> Até 12 horas de proteção contra a secura</li>
                <li><span class="icon">${ICONS.check}</span> Tiras adesivas reutilizáveis que não irritam</li>
                <li><span class="icon">${ICONS.check}</span> Ajuste perfeito para o conforto do bebé</li>
                <li><span class="icon">${ICONS.check}</span> Qualidade superior aprovada pelos pais</li>
              </ul>
            </div>

            <div class="lovies-feature-image media-box">
              ${mediaImages('/static/assets/lovies_fraldas_feature.png', 'Fraldas Lovies')}
            </div>
          </div>
        </div>
      </section>

      <section class="section lovies-feature lovies-feature-reverse">
        <div class="container">
          <div class="lovies-feature-inner">
            <div class="lovies-feature-image media-box">
              ${mediaImages('/static/assets/lovies_toalhetes_feature.png', 'Toalhetes Lovies')}
            </div>

            <div class="lovies-feature-text">
              <span class="badge">Essenciais para a frescura</span>
              <h2>Toalhetes para bebés e artigos de higiene pessoal para cuidados delicados</h2>
              <p>Toalhetes suaves concebidos especificamente para a pele sensível do bebé. Sem perfume, hipoalergénicos e seguros para os recém-nascidos — a escolha certa para a rotina diária de cuidados.</p>

              <div class="lovies-pills">
                <span class="lovies-pill"><span class="icon">${ICONS.heart}</span> Soft on Skin</span>
                <span class="lovies-pill"><span class="icon">${ICONS.sparkles}</span> Pure Baby Wipes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt lovies-cards">
        <div class="container">
          <div class="section-head section-head-center">
            <div>
              <span class="badge">Comfort is happiness</span>
              <h2>Tender Care for their Skin</h2>
              <p class="section-sub">Cada produto Lovies é desenvolvido com a delicadeza que a pele do bebé merece.</p>
            </div>
          </div>

          <div class="lovies-cards-grid">
            ${CARDS.map((src) => `
              <div class="lovies-card media-box">
                ${mediaImages(src, 'Lovies — cuidados do bebé')}
              </div>
            `).join('')}
          </div>

          <div class="lovies-quote">
            <span class="icon">${ICONS.heart}</span>
            <p>Lovies — Aprovado pelos pais, adorado pelos bebés.</p>
          </div>
        </div>
      </section>

      <section class="section lovies-faq-section">
        <div class="container">
          <div class="section-head section-head-center">
            <div>
              <span class="badge">Perguntas frequentes</span>
              <h2>Tudo o que precisa de saber</h2>
              <p class="section-sub">Respostas às perguntas mais comuns dos pais sobre os cuidados do bebé.</p>
            </div>
          </div>

          <div class="lovies-faq">
            ${FAQS.map((f, i) => `
              <details class="lovies-faq-item" ${i === 0 ? 'open' : ''}>
                <summary>
                  <span class="lovies-faq-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                  <span class="lovies-faq-q">${escapeHtml(f.q)}</span>
                  <span class="lovies-faq-toggle icon">${ICONS.plus}</span>
                </summary>
                <div class="lovies-faq-a">
                  <p>${escapeHtml(f.a)}</p>
                </div>
              </details>
            `).join('')}
          </div>

          <div class="lovies-faq-note">
            <span class="icon">${ICONS.baby}</span>
            <p>Consulte sempre o seu pediatra ou profissional de saúde para obter recomendações e orientações específicas sobre produtos para bebés e rotinas de cuidados com a pele do seu filho.</p>
          </div>
        </div>
      </section>

      <section class="section lovies-cta-section">
        <div class="container">
          <div class="lovies-cta">
            <div class="lovies-cta-copy">
              <span class="badge badge-light">Promoção</span>
              <h2>Low Price Baby Promotion</h2>
              <p>Aproveite a nossa promoção de produtos Lovies — preços baixos em tudo o que o seu bebé precisa, disponível nas lojas Shoprite.</p>
              <div class="lovies-cta-actions">
                <a href="#/lojas" class="btn btn-yellow">
                  Encontrar loja
                  <span class="icon">${ICONS.arrowRight}</span>
                </a>
                <a href="#/ofertas" class="btn btn-ghost btn-ghost-light">Ver folhetos</a>
              </div>
            </div>
            <div class="lovies-cta-visual" aria-hidden="true">
              <span class="icon">${ICONS.baby}</span>
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
