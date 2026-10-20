const ICONS = {
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
};

const HERO_IMAGE = '/static/assets/image_saude.png';
const HERO_FALLBACK = '/static/assets/image_logo.png';
const CARD_FALLBACK = '/static/assets/logo.png';

const TIPS = {
  pele: {
    tag: 'PELE',
    titulo: 'Pele para manter esse brilho',
    resumo: 'Brilhe! Arrase todos os dias com uma pele saudável e radiante.',
    cardImg: '/static/assets/saude_pele.png',
    heroImg: '/static/assets/saude_pele.png',
    detailImg: '/static/assets/saude_pele_detail.png',
    icon: 'drop',
    cor: '#F472B6',
    subtitulo: 'Brilhe! Arrase todos os dias com uma pele saudável e radiante.',
    intro: 'Cuidar da sua pele é importante e manter uma rotina regular de cuidados para manter a sua pele com um aspeto saudável é uma obrigação! Siga estas dicas recomendadas para ter uma boa aparência e sentir-se no seu melhor com uma pele bonita e radiante:',
    dicas: [
      { titulo: 'Limpar', texto: 'Comece a sua rotina de cuidados da pele com um produto de limpeza suave que remova a maquilhagem, a sujidade e a oleosidade sem secar a pele. Procure um produto de limpeza com ingredientes naturais como o óleo da árvore do chá, mel ou aloé vera. Para eliminar quaisquer restos de óleo ou sujidade e manter o equilíbrio do pH da sua pele, escolha um tónico com ingredientes à base de água de rosas ou hamamélis. Ambos são excelentes para reduzir a inflamação e a vermelhidão.' },
      { titulo: 'Hidratar, hidratar, hidratar!', texto: 'Escolha um hidratante com óleos naturais como manteiga de karité, óleo de argão ou óleo de jojoba. Isto deixa a sua pele com um brilho bonito e mantém-na com um aspeto hidratado.' },
      { titulo: 'Não se esqueça de aplicar protetor solar', texto: 'Certifique-se de que utiliza um protetor solar de largo espetro com um FPS 50 para proteger a sua pele do forte sol africano.' },
    ],
    conclusao: 'Um produto de limpeza suave, um tónico, um hidratante, um protetor solar e uma máscara facial constituem um bom regime de cuidados da pele. Pode manter a sua pele saudável, hidratada e brilhante durante todo o ano, optando por produtos naturais.',
    ctaSocial: 'Partilhe os seus produtos essenciais para a pele favoritos connosco nas redes sociais, marcando @Shoprite e utilizando a palavra-chave #ShopriteCabeloeBeleza.',
  },

  cabelo: {
    tag: 'CABELO',
    titulo: 'Cabelo que o ajuda a brilhar',
    resumo: 'A manutenção de um cabelo natural saudável pode ser uma viagem divertida e gratificante.',
    cardImg: '/static/assets/saude_cabelo.png',
    heroImg: '/static/assets/saude_cabelo.png',
    detailImg: '/static/assets/saude_cabelo_detail.png',
    icon: 'sparkle',
    cor: '#A855F7',
    subtitulo: 'Cabelo que o ajuda a brilhar!',
    intro: 'A manutenção de um cabelo natural saudável pode ser uma viagem divertida e gratificante. Ter uma rotina capilar requer tempo, esforço e consistência. O cabelo natural tem tudo a ver com conhecer o seu tipo de cabelo e utilizar os produtos certos que funcionam melhor para o seu cabelo.',
    intro2: 'Aqui estão algumas dicas simples para começar a sua viagem:',
    destaque: 'Mantenha o seu cabelo hidratado utilizando óleos naturais como o óleo de coco, de jojoba ou de grainhas de uva.',
    dicas: [
      { titulo: 'Champô e amaciador sem sulfatos', texto: 'Para evitar retirar os óleos naturais do seu cabelo, utilize um champô e um amaciador sem sulfatos.' },
      { titulo: 'Limite o calor', texto: 'Tente limitar a quantidade de calor que aplica ao seu cabelo. Se tiver de usar calor, mantenha a temperatura baixa e aplique um spray protetor contra o calor.' },
      { titulo: 'Proteja enquanto dorme', texto: 'Para proteger o seu cabelo enquanto dorme, envolva-o num lenço de cetim ou numa touca para evitar a quebra e o embaraço.' },
      { titulo: 'Desembarace com cuidado', texto: 'Utilize um pente de dentes largos ou os seus dedos para desembaraçar o seu cabelo. Vá subindo desde as pontas até às raízes. Estilos protectores como tranças, torcidos ou tranças são os seus melhores amigos!' },
    ],
    ctaSocial: 'Partilhe a sua rotina capilar e as suas dicas connosco nas redes sociais, marcando @Shoprite e utilizando a palavra-chave #ShopriteCabeloeBeleza.',
  },

  'cuidados-corporais': {
    tag: 'CUIDADOS CORPORAIS',
    titulo: 'Cuidados corporais para acender o seu brilho',
    resumo: 'Mantenha a sua pele saudável, radiante e com um aspeto mais jovem durante mais tempo.',
    cardImg: '/static/assets/saude_corpo.png',
    heroImg: '/static/assets/saude_corpo.png',
    detailImg: '/static/assets/saude_corpo_detail.png',
    icon: 'heart',
    cor: '#F97316',
    subtitulo: 'Cuidados corporais para acender o seu brilho!',
    intro: 'Mantenha a sua pele saudável, radiante e com um aspeto mais jovem durante mais tempo. Siga estas dicas e dê à sua pele os cuidados e a atenção de que ela necessita. O melhor cuidado é o autocuidado.',
    dicas: [
      { titulo: 'Hidratar imediatamente após o duche', texto: 'O excesso de água na sua pele é retido pelo seu hidratante, mantendo a sua pele hidratada.' },
      { titulo: 'Faça exercício regularmente', texto: 'Quando faz exercício, o seu corpo envia mais sangue para a sua pele, ajudando-a a manter-se firme.' },
      { titulo: 'Esfoliar ou escovar a seco', texto: 'Não se esqueça de esfoliar! Utilize um esfoliante de duche, uma escova ou uma bucha para remover suavemente as células mortas da pele.' },
    ],
    conclusao: 'Mantenha a sua rotina de cuidados corporais consistente e não hesite em experimentar diferentes produtos para descobrir o que funciona melhor para a sua pele.',
    ctaSocial: 'Partilhe a sua rotina de cuidados corporais connosco nas redes sociais, marcando @Shoprite e utilizando a palavra-chave #ShopriteCabeloeBeleza.',
  },

  tosquiagem: {
    tag: 'TOSQUIAGEM',
    titulo: 'Tosquiagem para obter uma pele radiante',
    resumo: 'O asseio regular é a base de uma aparência polida e confiante.',
    cardImg: '/static/assets/saude_tosquiagem.png',
    heroImg: '/static/assets/saude_tosquiagem.png',
    detailImg: '/static/assets/saude_tosquiagem_detail.png',
    icon: 'scissors',
    cor: '#06B6D4',
    subtitulo: 'Tosquiagem para obter uma pele radiante!',
    intro: 'O asseio regular é a base de uma aparência polida e confiante. Experimente estas dicas simples para melhorar a sua rotina de cuidados de beleza:',
    dicas: [
      { titulo: 'Mantenha o seu rosto limpo e fresco', texto: 'Lave o rosto duas vezes por dia com um produto de limpeza suave para remover a sujidade, o óleo e as impurezas. Em seguida, aplique um hidratante leve para manter a sua pele hidratada e saudável.' },
      { titulo: 'Mantenha uma barba bem cuidada ou faça a barba', texto: 'Para a barba, utilize um óleo ou bálsamo nutritivo para amaciar os pêlos e domar o frisado. Se fizer a barba, opte por um aftershave calmante para evitar irritações e queimaduras da lâmina.' },
      { titulo: 'Cuide do seu cabelo diariamente', texto: 'Utilize um champô e um amaciador adequados ao seu tipo de cabelo para o manter limpo e maleável. Acrescente um produto de modelação, como pomada ou cera, para obter um aspeto polido.' },
      { titulo: 'Não se esqueça dos cuidados com o corpo', texto: 'Esfolie o seu corpo regularmente para manter a pele suave e livre de pêlos encravados. Em seguida, aplique uma loção corporal hidratante para manter a humidade.' },
      { titulo: 'Cheire tão bem como a sua aparência', texto: 'Escolha uma fragrância ou desodorizante de assinatura para se manter fresco durante todo o dia. Um pouco de spray nos pontos de pulsação, como os pulsos e o pescoço, pode fazer uma grande diferença.' },
    ],
    conclusao: 'Torne os cuidados de beleza parte da sua rotina diária e explore novos produtos para descobrir o que funciona melhor para si.',
    ctaSocial: 'Partilhe a sua viagem de cuidados connosco nas redes sociais, marcando SHOPRITE e utilizando o hashtag #ShopriteCabeloeBeleza.',
  },
};

const ORDER = ['pele', 'cabelo', 'cuidados-corporais', 'tosquiagem'];

export default {
  title: 'Saúde e Beleza — Shoprite Angola',

  render(params) {
    const slug = params[0] || null;
    return slug && TIPS[slug] ? this._renderDetail(slug) : this._renderList();
  },

  _renderList() {
    return `
      <section class="page-hero page-hero-health">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <span class="badge badge-light">Saúde e Beleza</span>
            <h1>Preços baixos para o seu brilho</h1>
            <p>Sinta-se bem e comece o seu dia com confiança! Temos dicas de autocuidado para manter o cabelo, a pele e o corpo no seu melhor.</p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${HERO_IMAGE}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section health-intro">
        <div class="container">
          <div class="health-intro-inner">
            <span class="badge">Autocuidado</span>
            <h2>Dicas para se sentir bem, todos os dias</h2>
            <p>Reunimos os melhores conselhos de saúde e beleza para que cuide de si com confiança. Encontre todos os produtos nas lojas Shoprite, sempre com preços baixos.</p>
          </div>
        </div>
      </section>

      <section class="section section-alt health-tips-section">
        <div class="container">
          <div class="section-head section-head-center">
            <div>
              <span class="badge">Cuidados essenciais</span>
              <h2>Dicas por área</h2>
              <p class="section-sub">Explore cada área e descubra como manter o seu bem-estar em dia.</p>
            </div>
          </div>

          <div class="health-tips-grid">
            ${ORDER.map((slug) => {
              const d = TIPS[slug];
              return `
                <a href="#/saude-beleza/${slug}" class="health-tip-card" aria-label="Ver dica de ${escapeAttr(d.tag)}">
                  <div class="health-tip-media media-box">
                    ${mediaImages(d.cardImg, d.titulo, CARD_FALLBACK)}
                    <span class="health-tip-tag" style="--tag-color: ${d.cor}">
                      <span class="icon">${ICONS[d.icon]}</span>
                      ${escapeHtml(d.tag)}
                    </span>
                  </div>

                  <div class="health-tip-body">
                    <h3>${escapeHtml(d.titulo)}</h3>
                    <p>${escapeHtml(d.resumo)}</p>

                    <span class="health-tip-cta">
                      Ver dicas
                      <span class="icon">${ICONS.arrowRight}</span>
                    </span>
                  </div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="health-cta">
            <div class="health-cta-copy">
              <span class="badge badge-light">Na sua Shoprite</span>
              <h2>Tudo o que precisa para o seu autocuidado</h2>
              <p>Encontre uma seleção completa de produtos de higiene, cosmética e cuidados pessoais nas lojas Shoprite — sempre com preços baixos.</p>
              <div class="health-cta-actions">
                <a href="#/lojas" class="btn btn-yellow">
                  Encontrar loja
                  <span class="icon">${ICONS.arrowRight}</span>
                </a>
                <a href="#/ofertas" class="btn btn-ghost btn-ghost-light">Ver folhetos</a>
              </div>
            </div>
            <div class="health-cta-visual" aria-hidden="true">
              <span class="icon">${ICONS.pin}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  _renderDetail(slug) {
    const d = TIPS[slug];
    const others = ORDER.filter((s) => s !== slug).slice(0, 3);

    return `
      <section class="page-hero page-hero-health">
        <div class="container page-hero-inner">
          <div class="page-hero-copy">
            <a href="#/saude-beleza" class="health-back">
              <span class="icon">${ICONS.arrowLeft}</span>
              Voltar a Saúde e Beleza
            </a>
            <span class="badge badge-light" style="--tag-color: ${d.cor}">${escapeHtml(d.tag)}</span>
            <h1>${escapeHtml(d.subtitulo)}</h1>
            <p>${escapeHtml(d.intro)}</p>
          </div>

          <div class="page-hero-media media-box" data-hero-media>
            <img class="media-box-bg" src="${d.heroImg}" alt="" aria-hidden="true" decoding="async" />
            <img class="media-box-img" src="${d.heroImg}" alt="" aria-hidden="true" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section class="section health-detail">
        <div class="container">
          <div class="health-detail-intro">
            <div class="health-detail-text">
              ${d.intro2 ? `<p>${escapeHtml(d.intro2)}</p>` : ''}
              ${d.destaque ? `
                <div class="health-detail-highlight">
                  <span class="icon">${ICONS.check}</span>
                  <p>${escapeHtml(d.destaque)}</p>
                </div>
              ` : ''}
            </div>

            <div class="health-detail-image media-box">
              ${mediaImages(d.detailImg, d.titulo, d.cardImg)}
            </div>
          </div>

          <div class="health-detail-tips">
            <h2>As nossas dicas</h2>

            <div class="health-tips-list">
              ${d.dicas.map((t, i) => `
                <article class="health-tip-item">
                  <div class="health-tip-number" aria-hidden="true">
                    <span>${String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div class="health-tip-content">
                    <h3>${escapeHtml(t.titulo)}</h3>
                    <p>${escapeHtml(t.texto)}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>

          ${d.conclusao ? `
            <div class="health-detail-outro">
              <span class="icon">${ICONS.sparkle}</span>
              <p>${escapeHtml(d.conclusao)}</p>
            </div>
          ` : ''}

          <div class="health-social">
            <div class="health-social-copy">
              <span class="badge">Partilhe connosco</span>
              <h3>Mostre-nos o seu brilho</h3>
              <p>${escapeHtml(d.ctaSocial)}</p>
            </div>
            <div class="health-social-actions">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="social-btn social-instagram">
                <span class="icon">${ICONS.instagram}</span>
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="social-btn social-facebook">
                <span class="icon">${ICONS.facebook}</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div class="health-related">
            <h2>Explore também</h2>
            <div class="health-related-grid">
              ${others.map((s) => {
                const o = TIPS[s];
                return `
                  <a href="#/saude-beleza/${s}" class="health-related-card">
                    <div class="health-related-media media-box">
                      ${mediaImages(o.cardImg, o.titulo, CARD_FALLBACK)}
                    </div>
                    <div class="health-related-body">
                      <span class="health-related-tag" style="--tag-color: ${o.cor}">${escapeHtml(o.tag)}</span>
                      <h3>${escapeHtml(o.titulo)}</h3>
                      <span class="link-more">Ver dicas ${ICONS.arrowRight}</span>
                    </div>
                  </a>
                `;
              }).join('')}
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
