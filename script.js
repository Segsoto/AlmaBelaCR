const services = [
  {
    category: 'Antiedad avanzado',
    title: 'Radiesse® + Exosomas',
    description: 'Combinación orientada a estimular colágeno, firmeza y una mejora visible en la calidad de la piel con un enfoque elegante y natural.',
  },
  {
    category: 'Calidad de piel',
    title: 'Polinucleótidos',
    description: 'Apoyo regenerativo para la textura de la piel y el área de ojeras, con una línea de trabajo centrada en hidratación y reparación.',
  },
  {
    category: 'Luminosidad flash',
    title: 'Hollywood Peel',
    description: 'Tratamiento pensado para aportar brillo, frescura y una apariencia descansada en poco tiempo.',
  },
  {
    category: 'Tecnología facial',
    title: 'Microagujas / Dermapen',
    description: 'Estimulación controlada de la piel para mejorar su aspecto general, acompañada de protocolos profesionales.',
  },
  {
    category: 'Contorno facial',
    title: 'Encimas para papada',
    description: 'Alternativa no quirúrgica para apoyar la redefinición del área submentoniana bajo evaluación profesional.',
  },
  {
    category: 'Bienestar interno',
    title: 'Sueroterapia con NAD+',
    description: 'Terapias intravenosas para personas con fatiga, estrés o exigencia física que buscan recuperar energía celular desde adentro.',
  },
  {
    category: 'Respaldo médico',
    title: 'Blefaroplastia',
    description: 'Procedimiento para párpados caídos orientado por criterio oftalmológico especializado y seguridad clínica.',
  },
  {
    category: 'Ojo seco',
    title: 'Valoración y tratamiento ocular',
    description: 'Atención enfocada en mejorar la calidad de vida de pacientes con molestias oculares y sequedad.',
  },
  {
    category: 'Cuidado complementario',
    title: 'Depilación láser y faciales clínicos',
    description: 'Servicios de apoyo para una rutina estética integral, manteniendo el estándar profesional de la clínica.',
  },
];

const servicesTrack = document.getElementById('services-track');
const carouselDots = document.getElementById('carousel-dots');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

if (servicesTrack && carouselDots && carouselPrev && carouselNext) {
  const duplicateCount = services.length;
  const loopedServices = [
    ...services.slice(-duplicateCount),
    ...services,
    ...services.slice(0, duplicateCount),
  ];

  servicesTrack.innerHTML = loopedServices
    .map(
      (service) => `
        <article class="service-card" data-service-index="${services.indexOf(service)}">
          <span class="service-category">${service.category}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `,
    )
    .join('');

  const serviceCards = Array.from(servicesTrack.querySelectorAll('.service-card'));
  const realStartIndex = duplicateCount;
  let activeIndex = 0;
  let cardOffsets = serviceCards.map((card) => card.offsetLeft);

  const normalizeIndex = (index) => {
    const total = services.length;
    return ((index % total) + total) % total;
  };

  carouselDots.innerHTML = services
    .map(
      (_, index) => `
        <button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" aria-label="Ir al servicio ${index + 1}" aria-pressed="${index === 0 ? 'true' : 'false'}"></button>
      `,
    )
    .join('');

  const dotButtons = Array.from(carouselDots.querySelectorAll('.carousel-dot'));

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

    servicesTrack.scrollTo({
      left: targetCard.offsetLeft,
      behavior,
    });
    updateCarouselState(realIndex);
  };

  carouselPrev.addEventListener('click', () => {
    scrollToIndex(activeIndex - 1);
  });

  carouselNext.addEventListener('click', () => {
    scrollToIndex(activeIndex + 1);
  });

  dotButtons.forEach((dot, index) => {
    dot.addEventListener('click', () => scrollToIndex(index));
  });

  let isAdjustingLoop = false;

  const setInitialPosition = () => {
    cardOffsets = serviceCards.map((card) => card.offsetLeft);
    isAdjustingLoop = true;
    const previousScrollBehavior = servicesTrack.style.scrollBehavior;
    servicesTrack.style.scrollBehavior = 'auto';
    servicesTrack.scrollTo({
      left: serviceCards[realStartIndex].offsetLeft,
      behavior: 'auto',
    });
    servicesTrack.style.scrollBehavior = previousScrollBehavior;
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
      return Math.abs(offset - servicesTrack.scrollLeft) < Math.abs(closestOffset - servicesTrack.scrollLeft)
        ? index
        : closestIndex;
    }, 0);

    if (currentRawIndex < total) {
      isAdjustingLoop = true;
      const previousScrollBehavior = servicesTrack.style.scrollBehavior;
      servicesTrack.style.scrollBehavior = 'auto';
      servicesTrack.scrollLeft = serviceCards[currentRawIndex + total].offsetLeft;
      servicesTrack.style.scrollBehavior = previousScrollBehavior;
      isAdjustingLoop = false;
    } else if (currentRawIndex >= total * 2) {
      isAdjustingLoop = true;
      const previousScrollBehavior = servicesTrack.style.scrollBehavior;
      servicesTrack.style.scrollBehavior = 'auto';
      servicesTrack.scrollLeft = serviceCards[currentRawIndex - total].offsetLeft;
      servicesTrack.style.scrollBehavior = previousScrollBehavior;
      isAdjustingLoop = false;
    }

    const normalized = normalizeIndex(currentRawIndex - realStartIndex);
    if (normalized !== activeIndex) {
      updateCarouselState(normalized);
    }
  };

  servicesTrack.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateLoopPosition);
  });

  window.addEventListener('resize', () => {
    initializeCarousel();
  });

  window.addEventListener('load', initializeCarousel);
  initializeCarousel();
}

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
