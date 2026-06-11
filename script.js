const carouselGroups = [
  {
    id: 'faciales',
    services: [
      {
        category: 'Microagujas',
        title: 'Microagujas',
        description: 'Estimula la producción de colágeno para mejorar la textura de la piel, cicatrices y líneas finas.',
      },
      {
        category: 'Limpieza Facial',
        title: 'Limpieza Facial',
        description: 'Elimina impurezas y células muertas para una piel más limpia, fresca y saludable.',
      },
      {
        category: 'Hydrafacial',
        title: 'Hydrafacial',
        description: 'Limpieza profunda, hidratación y revitalización en una sola sesión.',
      },
      {
        category: 'Vampire PRP',
        title: 'Vampire PRP',
        description: 'Regeneración natural de la piel mediante factores de crecimiento obtenidos de tu propia sangre.',
      },
      {
        category: 'Cosmelan',
        title: 'Cosmelan',
        description: 'Tratamiento líder para la eliminación de manchas y melasma.',
      },
      {
        category: 'Hollywood Peel',
        title: 'Hollywood Peel',
        description: 'Renueva la piel, unifica el tono y aporta luminosidad inmediata.',
      },
      {
        category: 'Exosomas',
        title: 'Exosomas',
        description: 'Tecnología regenerativa avanzada que favorece la reparación y el rejuvenecimiento cutáneo.',
      },
      {
        category: 'ADN de Salmón',
        title: 'ADN de Salmón',
        description: 'Bioestimulación profunda que mejora la hidratación, firmeza y calidad de la piel.',
      },
      {
        category: 'Cóctel de Ojeras',
        title: 'Cóctel de Ojeras (NCTF)',
        description: 'Tratamiento especializado que mejora pigmentación, hidratación y signos de fatiga en el contorno de ojos.',
      },
    ],
  },
  {
    id: 'estetica',
    services: [
      {
        category: 'Botox',
        title: 'Botox',
        description: 'Suaviza líneas de expresión y previene los signos visibles del envejecimiento.',
      },
      {
        category: 'Radiesse',
        title: 'Radiesse',
        description: 'Bioestimulador de colágeno que mejora la firmeza y calidad de la piel.',
      },
      {
        category: 'Rellenos',
        title: 'Rellenos Dérmicos',
        description: 'Restauran volumen, armonizan rasgos y corrigen surcos de acuerdo con tus necesidades.',
      },
    ],
  },
  {
    id: 'suero',
    services: [
      {
        category: 'Megadosis',
        title: 'Megadosis de Vitamina C',
        description: 'Potente antioxidante que fortalece el sistema inmunológico y favorece el bienestar general.',
      },
      {
        category: 'NAD+',
        title: 'Cóctel Eterna Juventud (NAD+)',
        description: 'Terapia enfocada en la energía celular, el bienestar y el envejecimiento saludable.',
      },
      {
        category: 'Myers',
        title: 'Cóctel Myers',
        description: 'Combinación de vitaminas y minerales que ayuda a mejorar energía, hidratación y recuperación.',
      },
    ],
  },
  {
    id: 'oftalmo',
    services: [
      {
        category: 'Blefaroplastia',
        title: 'Blefaroplastia',
        description: 'Cirugía que rejuvenece la mirada corrigiendo exceso de piel, bolsas y párpados caídos.',
      },
      {
        category: 'Pterigión',
        title: 'Cirugía de Pterigión',
        description: 'Procedimiento para eliminar el crecimiento de tejido sobre la superficie ocular.',
      },
      {
        category: 'Chalazión',
        title: 'Curetaje de Chalazión',
        description: 'Tratamiento quirúrgico para eliminar quistes localizados en los párpados.',
      },
      {
        category: 'Ojo Seco',
        title: 'Ojo Seco',
        description: 'Diagnóstico y tratamiento especializado para mejorar la lubricación y comodidad ocular.',
      },
    ],
  },
  {
    id: 'enfermeria',
    services: [
      {
        category: 'Inyectables',
        title: 'Inyectables',
        description: 'Aplicación segura y profesional de medicamentos prescritos.',
      },
      {
        category: 'Curaciones',
        title: 'Curaciones',
        description: 'Manejo especializado de heridas para favorecer una recuperación adecuada.',
      },
      {
        category: 'Educación',
        title: 'Educación en Salud',
        description: 'Orientación personalizada para el cuidado, prevención y promoción de la salud.',
      },
    ],
  },
  {
    id: 'adicionales',
    services: [
      {
        category: 'Depilación Láser',
        title: 'Depilación Láser',
        description: 'Tecnología avanzada para una reducción eficaz, cómoda y duradera del vello.',
        badge: 'Unica Clinica en la zona con garantia de resultados desde la primera sesion',
      },
      {
        category: 'Depilación Cuatriláser',
        title: 'Depilación Cuatriláser',
        description: 'Tecnología avanzada para una reducción eficaz, cómoda y duradera del vello.',
      },
      {
        category: 'Novias',
        title: 'Paquete de Novias',
        description: 'Programa integral para lucir una piel radiante en uno de los días más importantes de tu vida.',
      },
      {
        category: 'Tatuajes',
        title: 'Remoción de Tatuajes',
        description: 'Tratamiento láser que elimina progresivamente pigmentos no deseados.',
      },
      {
        category: 'Capilar',
        title: 'Plasma Capilar',
        description: 'Estimula el crecimiento y fortalecimiento del cabello mediante factores de crecimiento.',
      },
      {
        category: 'Mesoterapia',
        title: 'Mesoterapia',
        description: 'Aplicación de activos específicos para revitalizar la piel y tratar necesidades particulares.',
      },
      {
        category: 'Enzimas',
        title: 'Enzimas Lipolíticas',
        description: 'Ayudan a reducir grasa localizada y mejorar el contorno corporal.',
      },
      {
        category: 'Bambuterapia',
        title: 'Bambuterapia',
        description: 'Técnica corporal que favorece el drenaje, la relajación y el moldeado de la figura.',
      },
    ],
  },
];

const initializeCarouselGroup = ({ id, services }) => {
  const track = document.getElementById(`${id}-track`);
  const dots = document.getElementById(`${id}-dots`);
  const prev = document.getElementById(`${id}-prev`);
  const next = document.getElementById(`${id}-next`);

  if (!track || !dots || !prev || !next || services.length === 0) {
    return;
  }

  const duplicateCount = services.length;
  const loopedServices = [
    ...services.slice(-duplicateCount),
    ...services,
    ...services.slice(0, duplicateCount),
  ];

  track.innerHTML = loopedServices
    .map((service) => `
      <article class="service-card">
        <span class="service-category">${service.category}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        ${service.badge ? `<div class="service-badge">${service.badge}</div>` : ''}
      </article>
    `)
    .join('');

  const serviceCards = Array.from(track.querySelectorAll('.service-card'));
  const realStartIndex = duplicateCount;
  let activeIndex = 0;
  let cardOffsets = serviceCards.map((card) => card.offsetLeft);

  const normalizeIndex = (index) => {
    const total = services.length;
    return ((index % total) + total) % total;
  };

  dots.innerHTML = services
    .map(
      (_, index) => `
        <button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" aria-label="Ir al servicio ${index + 1}" aria-pressed="${index === 0 ? 'true' : 'false'}"></button>
      `,
    )
    .join('');

  const dotButtons = Array.from(dots.querySelectorAll('.carousel-dot'));

  const updateCarouselState = (index) => {
    dotButtons.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
    activeIndex = index;
  };

  const scrollToIndex = (index, behavior = 'smooth') => {
    const realIndex = normalizeIndex(index);
    const targetCard = serviceCards[realStartIndex + realIndex];

    track.scrollTo({
      left: targetCard.offsetLeft,
      behavior,
    });
    updateCarouselState(realIndex);
  };

  prev.addEventListener('click', () => scrollToIndex(activeIndex - 1));
  next.addEventListener('click', () => scrollToIndex(activeIndex + 1));
  dotButtons.forEach((dot, index) => {
    dot.addEventListener('click', () => scrollToIndex(index));
  });

  let isAdjustingLoop = false;

  const setInitialPosition = () => {
    cardOffsets = serviceCards.map((card) => card.offsetLeft);
    isAdjustingLoop = true;
    const previousScrollBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = 'auto';
    track.scrollTo({
      left: serviceCards[realStartIndex].offsetLeft,
      behavior: 'auto',
    });
    track.style.scrollBehavior = previousScrollBehavior;
    isAdjustingLoop = false;
    updateCarouselState(0);
  };

  const initializeCarousel = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(setInitialPosition);
    });
  };

  const updateLoopPosition = () => {
    if (isAdjustingLoop) {
      return;
    }

    const total = services.length;
    const currentRawIndex = cardOffsets.reduce((closestIndex, offset, index) => {
      const closestOffset = cardOffsets[closestIndex];
      return Math.abs(offset - track.scrollLeft) < Math.abs(closestOffset - track.scrollLeft)
        ? index
        : closestIndex;
    }, 0);

    if (currentRawIndex < total) {
      isAdjustingLoop = true;
      const previousScrollBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = serviceCards[currentRawIndex + total].offsetLeft;
      track.style.scrollBehavior = previousScrollBehavior;
      isAdjustingLoop = false;
    } else if (currentRawIndex >= total * 2) {
      isAdjustingLoop = true;
      const previousScrollBehavior = track.style.scrollBehavior;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = serviceCards[currentRawIndex - total].offsetLeft;
      track.style.scrollBehavior = previousScrollBehavior;
      isAdjustingLoop = false;
    }

    const normalized = normalizeIndex(currentRawIndex - realStartIndex);
    if (normalized !== activeIndex) {
      updateCarouselState(normalized);
    }
  };

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateLoopPosition);
  });

  window.addEventListener('resize', initializeCarousel);
  window.addEventListener('load', initializeCarousel);
  initializeCarousel();
};

carouselGroups.forEach(initializeCarouselGroup);

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealElements.forEach((element) => observer.observe(element));
