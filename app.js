
'use strict';

const scholarBase = 'https://scholar.google.com/scholar?q=';
const scholarQuery = (title) => scholarBase + encodeURIComponent('"' + title + '"');

const papers = [
  { id:'floquetSelect', year:2026, type:'preprint', venue:'arXiv preprint', title:'Tunable Floquet selection rules in a driven Ising chain', authors:'Rishi Paresh Joshi, Sanchayan Banerjee, Sneha Narasimha Moorthy, Tapan Mishra', url:'https://arxiv.org/abs/2603.23493' },
  { id:'edges', year:2025, type:'journal', venue:'Physical Review B Letter', title:'Emergence of distinct exact mobility edges in a quasiperiodic chain', authors:'Sanchayan Banerjee, Soumya Ranjan Padhi, Tapan Mishra', url:'https://doi.org/10.1103/PhysRevB.111.L220201' },
  { id:'topo', year:2025, type:'preprint', venue:'arXiv:2508.04452', title:'Reentrant topology and reverse pumping in a quasiperiodic flux ladder', authors:'Sanchayan Banerjee, Rajashri Parida, Tapan Mishra', url:'https://arxiv.org/abs/2508.04452' },
  { id:'floquetMBL', year:2025, type:'preprint', venue:'arXiv:2509.14696', title:'Multiple many-body localization transitions in a driven non-Hermitian quasiperiodic chain', authors:'Sanchayan Banerjee, Ayan Banerjee, Tapan Mishra, Flore K. Kunst', url:'https://arxiv.org/abs/2509.14696' },
  { id:'powerlaw', year:2025, type:'preprint', venue:'arXiv:2508.14724', title:'Emergence of non-trivial phases in interacting non-Hermitian quasiperiodic chains with power-law hopping', authors:'Aditi Chakrabarty, Sanchayan Banerjee, Tapan Mishra, Sanjoy Datta', url:'https://arxiv.org/abs/2508.14724' },
  { id:'spectrum', year:2024, type:'journal', venue:'Physical Review B', title:'Anomalous spectrum in a non-Hermitian quasiperiodic chain', authors:'Soumya Ranjan Padhi, Sanchayan Banerjee, Tanay Nag, Tapan Mishra', url:scholarQuery('Anomalous spectrum in a non-Hermitian quasiperiodic chain') },
  { id:'hatano', year:2024, type:'journal', venue:'Physical Review B', title:'Quasiperiodic and periodic extended Hatano–Nelson model: Anomalous localization transition and non-Hermitian skin effect', authors:'Soumya Ranjan Padhi, Ashirbad Padhan, Sanchayan Banerjee, Tapan Mishra', url:scholarQuery('Quasiperiodic and periodic extended Hatano–Nelson model Anomalous localization transition and non-Hermitian skin effect') },
  { id:'comb', year:2025, type:'preprint', venue:'arXiv:2509.26615', title:'Non-Hermitian comb effect in coupled clean and quasiperiodic chains', authors:'Soumya Ranjan Padhi, Souvik Roy, Biswajit Paul, Sanchayan Banerjee, Tapan Mishra', url:'https://arxiv.org/abs/2509.26615' }
];

const research = [
  {
    id: 'disorder',
    title: 'Interplay of disorder and topology',
    text: 'Topology, disorder and quasiperiodicity in interacting quantum matter.',
    image: 'mockup-disorder.webp',
    status: 'PUBLICATIONS + ACTIVE RESEARCH',
    focus: 'I study how disorder and quasiperiodicity reshape topological phases, edge responses and pumping phenomena. A central question is which signatures remain genuinely topological once translational symmetry is broken, and how localization and boundary physics compete with or reinforce topological structure.',
    related: 'topo'
  },
  {
    id: 'correlated',
    title: 'Equilibrium strongly correlated phases and SPT phases',
    text: 'Density-ordered, bond-ordered and symmetry-protected phases in interacting systems.',
    image: 'mockup-correlated.webp',
    status: 'ONGOING RESEARCH',
    focus: 'I explore the ground-state physics of interacting quantum matter, with emphasis on symmetry-protected topological phases and on competing density-ordered and bond-ordered phases in one- and two-dimensional systems. Ultracold atoms, Rydberg arrays and polar-molecule inspired models provide useful physical settings for these questions.',
  },
  {
    id: 'floquet',
    title: 'Floquet systems',
    text: 'Periodically driven quantum systems and nonequilibrium phase structure.',
    image: 'mockup-floquet.webp',
    status: 'PUBLICATIONS + ACTIVE RESEARCH',
    focus: 'I investigate how periodic driving reorganizes the dynamics of interacting quantum matter. Rather than treating Floquet systems as simple extensions of equilibrium physics, I am interested in how driving can generate re-entrant behavior, alter localization properties, and open dynamical regimes that are inaccessible in static Hamiltonians.',
    related: 'floquetMBL'
  },
  {
    id: 'nh',
    title: 'Non-Hermitian physics',
    text: 'Nonreciprocity, complex spectra and exceptional behavior in quantum matter.',
    image: 'mockup-nh.webp',
    status: 'PUBLICATIONS + ACTIVE RESEARCH',
    focus: 'My work in non-Hermitian physics focuses on how nonreciprocal hopping, complex spectra and boundary sensitivity modify localization, topology and many-body dynamics. I am particularly interested in when exceptional or singular spectral features correspond to physically meaningful many-body phenomena.',
    related: 'powerlaw'
  },
  {
    id: 'open',
    title: 'Open quantum systems',
    text: 'Dissipation, decoherence, measurement and steady states in interacting quantum matter.',
    image: 'mockup-open.webp',
    status: 'DEVELOPING DIRECTION',
    focus: 'I am exploring how coupling to an environment changes the behavior of interacting quantum systems. Questions about dissipation, decoherence, measurement back-action and steady states become especially interesting when combined with interactions, localization physics and the possibility of nonequilibrium critical behavior.',
  },
  {
    id: 'anderson',
    title: 'Anderson localization, multifractality and anomalous mobility edges',
    text: 'Localization, critical spectra and anomalous mobility boundaries in quasiperiodic systems.',
    image: 'mockup-anderson.webp',
    status: 'PUBLICATIONS + ACTIVE RESEARCH',
    focus: 'I study localization phenomena in quasiperiodic systems, especially multifractality and anomalous mobility edges. A key goal is to understand how critical eigenstates, energy-resolved localization boundaries and analytic structure are reflected in transport, wave-packet dynamics and experimentally relevant observables.',
    related: 'edges'
  },
  {
    id: 'chaos',
    title: 'Many-body localization, chaos and many-body critical phases',
    text: 'Thermalization, ergodicity breaking and intermediate many-body regimes.',
    image: 'mockup-chaos.webp',
    status: 'PUBLICATIONS + ACTIVE RESEARCH',
    focus: 'I investigate many-body localization, quantum chaos and many-body critical phases in interacting systems. The broader aim is to clarify how localized, critical and thermal regimes are separated, especially in driven, quasiperiodic and non-Hermitian settings where simple finite-size diagnostics can be misleading.',
    related: 'floquetMBL'
  },
  {
    id: 'transformer',
    title: 'Neural-network architectures for quantum matter',
    text: 'ANN, CNN, RNN and transformer architectures for quantum many-body representations.',
    image: 'mockup-transformer.webp',
    status: 'DEVELOPING DIRECTION',
    focus: 'I am exploring how neural-network architectures such as feed-forward networks, convolutional networks, recurrent networks and transformers can represent many-body quantum states and correlations. The main question is when these models provide useful structure beyond standard variational ansätze rather than simply increasing model complexity.',
  },
  {
    id: 'ml',
    title: 'Machine-learning applications for tensor networks and quantum circuits',
    text: 'Learning-assisted methods for quantum simulation, circuit design and numerical acceleration.',
    image: 'mockup-ml.webp',
    status: 'DEVELOPING DIRECTION',
    focus: 'I am interested in using machine learning to enhance tensor-network workflows and quantum-circuit methods. This includes data-driven strategies for improving simulation efficiency, helping allocate numerical resources, and assisting circuit design while remaining grounded in controlled physical benchmarks.',
  },
  {
    id: 'circuit',
    title: 'Topoelectric circuits',
    text: 'Electrical-network realizations of topological and non-Hermitian lattice phenomena.',
    image: 'mockup-circuit.webp',
    status: 'ONGOING RESEARCH',
    focus: 'Topoelectric circuits provide a flexible analogue platform for realizing and probing lattice physics through measurable electrical responses. I am interested in how circuit admittance can capture topology, non-Hermitian effects and boundary-localized behavior, and in how these ideas can be pushed toward experimentally realistic implementations.',
  }
];

const projects = [
  { title:'2D interacting systems', desc:'Competing orders and correlated phases in two-dimensional quantum matter.', focus:'I am extending questions about interaction-driven order, topology and quantum correlations into genuinely two-dimensional settings, where the interplay between geometry, dimensionality and strong correlations can produce physics beyond simple one-dimensional extensions.', orb:'#54a3ff', image:'mockup-correlated.webp' },
  { title:'ML-assisted numerical methods', desc:'Adaptive and reliable many-body algorithms informed by machine learning.', focus:'I am exploring whether learned strategies can make numerical many-body calculations more adaptive and efficient, especially in tensor-network simulations and quantum-circuit workflows, while keeping the resulting improvements physically interpretable and reproducible.', orb:'#58d8a9', image:'mockup-ml.webp' },
  { title:'Simulations of polar molecule systems', desc:'Quantum phases and dynamics inspired by dipolar molecular platforms.', focus:'Polar-molecule inspired models provide a rich setting for long-range interactions, correlated phases and unconventional dynamics. I am interested in building tractable models that remain relevant to realistic quantum-simulation platforms.', orb:'#73a9ff', image:'mockup-correlated.webp' },
  { title:'Topoelectric circuits', desc:'Circuit-based realizations of topology and non-Hermitian dynamics.', focus:'This direction connects abstract lattice Hamiltonians to electrical-network implementations. I am interested in both the conceptual mapping and the practical design of circuit platforms that can probe nontrivial boundary and spectral phenomena.', orb:'#ef7cbd', image:'mockup-circuit.webp' },
  { title:'Many Body Exceptional Point and Quantum Sensing', desc:'Many-body non-Hermitian physics and applications to quantum sensing.', focus:'I am exploring whether exceptional behavior in interacting non-Hermitian systems can be connected to operationally meaningful sensing protocols. The emphasis is on understanding what many-body effects add beyond single-particle sensitivity arguments.', orb:'#a987fd', image:'mockup-nh.webp' },
  { title:'Quantum sensing and open-system dynamics', desc:'Information, metrology and estimation in nonequilibrium quantum systems.', focus:'I am interested in how driving, interactions, dissipation and measurement shape the information available for parameter estimation, and in identifying sensing signatures that remain robust in realistic nonequilibrium environments.', orb:'#f2bf62', image:'mockup-open.webp' }
];

const methods = [
  { title:'Exact Diagonalization', subtitle:'Finite many-body systems', focus:'I use exact diagonalization to obtain controlled results for spectra, dynamics, entanglement and localization diagnostics, and to benchmark approximate or variational approaches.', image:'mockup-method-ed.webp' },
  { title:'2D DMRG', subtitle:'Ground states and cylinders', focus:'I use DMRG to study competing quantum phases and correlations in interacting lattices, especially in quasi-two-dimensional geometries where accurate finite-size comparisons are essential.', image:'mockup-method-dmrg.webp' },
  { title:'PEPS', subtitle:'Two-dimensional tensor networks', focus:'I use projected entangled-pair states to investigate strongly correlated quantum matter in genuinely two-dimensional settings and to compare tensor-network predictions with other many-body approaches.', image:'mockup-method-peps.webp' },
  { title:'Neural Quantum States / ML', subtitle:'ANN · CNN · RNN · Transformer · NQS · QML', focus:'I explore neural quantum states and related machine-learning architectures as representations of many-body wavefunctions, with attention to optimization, expressibility and controlled comparison against tensor-network or exact benchmarks.', image:'mockup-method-nqs.webp' },
  { title:'TEBD / TDVP', subtitle:'Tensor-network time evolution', focus:'I use TEBD and TDVP-style tensor-network time-evolution methods to study dynamics beyond exact-diagonalization sizes, with particular attention to truncation effects and the reliability of dynamical observables.', image:'mockup-method-tdvp.webp' },
  { title:'Quantum Circuits', subtitle:'Gate-based quantum simulation', focus:'I explore gate-based quantum circuits for preparing, evolving and probing interacting quantum states, and I compare circuit-based ideas against classical numerical benchmarks whenever possible.', image:'mockup-method-qc.webp' }
];

const htmlEscape = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId = id => papers.find(p => p.id === id);
const root = 'assets/';

const researchGrid = document.getElementById('researchGrid');
researchGrid.innerHTML = research.map((r, i) => `
  <button class="research-card" data-research="${i}" type="button" aria-label="Explore ${htmlEscape(r.title)}">
    <img src="${root + r.image}" alt="Scientific illustration of ${htmlEscape(r.title)}">
    <div class="card-content">
      <div class="card-title-row"><h3 class="card-title">${htmlEscape(r.title)}</h3><span class="card-arrow" aria-hidden="true">→</span></div>
      <p class="card-description">${htmlEscape(r.text)}</p>
      <span class="card-status">${htmlEscape(r.status)}</span>
    </div>
  </button>`).join('');

const featureIds = ['edges', 'topo', 'floquetMBL'];
document.getElementById('featuredPublications').innerHTML = featureIds.map(id => {
  const p = byId(id);
  return `<article class="featured-publication"><span class="pub-icon" aria-hidden="true">▤</span><div class="pub-row-copy"><strong>${htmlEscape(p.title)}</strong><small>${htmlEscape(p.venue)} (${p.year})</small></div><a class="pub-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.type === 'preprint' ? 'arXiv' : 'Paper'} ↗</a></article>`;
}).join('');

document.getElementById('projectGrid').innerHTML = projects.map((p, i) => `
  <button class="project-card" type="button" data-project="${i}" aria-label="About project ${htmlEscape(p.title)}">
    <span class="project-orb" style="--orb:${p.orb}" aria-hidden="true"></span>
    <span><strong>${htmlEscape(p.title)}</strong><small>${htmlEscape(p.desc)}</small></span>
    <span class="more" aria-hidden="true">›</span>
  </button>`).join('');

document.getElementById('methodsGrid').innerHTML = methods.map((m, i) => `
  <button class="method-card" type="button" data-method="${i}" aria-label="Explore method ${htmlEscape(m.title)}">
    <span class="method-more" aria-hidden="true">↗</span>
    <h3>${htmlEscape(m.title)}</h3>
    <div class="method-art"><img src="${root + m.image}" alt="${htmlEscape(m.title)} method illustration"></div>
    <small>${htmlEscape(m.subtitle)}</small>
  </button>`).join('');

const dialog = document.getElementById('detailDialog');
const dTitle = document.getElementById('dialogTitle');
const dKicker = document.getElementById('dialogKicker');
const dDesc = document.getElementById('dialogDescription');
const dImage = document.getElementById('dialogImage');
const dFocus = document.getElementById('dialogFocus');
const dRelated = document.getElementById('dialogRelated');
const detailLabels = { research: 'RESEARCH INTEREST', project: 'UPCOMING PROJECT', method: 'COMPUTATIONAL METHOD' };
function showDetails(entry, kind) {
  dTitle.textContent = entry.title;
  dKicker.textContent = kind === 'research' ? `${detailLabels[kind]} · ${entry.status || ''}` : detailLabels[kind];
  dDesc.textContent = kind === 'research' ? entry.text : entry.desc || entry.subtitle || '';
  dImage.src = root + entry.image;
  dImage.alt = 'Illustration related to ' + entry.title;
  dFocus.textContent = entry.focus;
  const paper = entry.related && byId(entry.related);
  dRelated.innerHTML = paper ? `<a href="${paper.url}" target="_blank" rel="noopener noreferrer">Related publication: ${htmlEscape(paper.title)} ↗</a>` : '';
  if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
}
researchGrid.addEventListener('click', e => { const b = e.target.closest('[data-research]'); if (b) showDetails(research[Number(b.dataset.research)], 'research'); });
document.getElementById('projectGrid').addEventListener('click', e => { const b = e.target.closest('[data-project]'); if (b) showDetails(projects[Number(b.dataset.project)], 'project'); });
document.getElementById('methodsGrid').addEventListener('click', e => { const b = e.target.closest('[data-method]'); if (b) showDetails(methods[Number(b.dataset.method)], 'method'); });
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

let currentFilter = 'all';
const search = document.getElementById('searchPubs');
function renderPapers() {
  const q = search.value.toLowerCase().trim();
  const filtered = papers.filter(p => (currentFilter === 'all' || p.type === currentFilter) && (p.title + ' ' + p.authors + ' ' + p.venue + ' ' + p.year).toLowerCase().includes(q));
  document.getElementById('publicationList').innerHTML = filtered.length ? filtered.map(p => `
    <article class="full-paper">
      <span class="pub-year">${p.year}</span>
      <div><h3>${htmlEscape(p.title)}</h3><p>${htmlEscape(p.authors).replaceAll('Sanchayan Banerjee', '<span class="author-em">Sanchayan Banerjee</span>')}</p></div>
      <span class="paper-venue">${htmlEscape(p.venue)}</span>
      <a class="paper-open" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.type === 'preprint' ? 'arXiv' : 'Paper'} ↗</a>
    </article>`).join('') : '<div class="no-results">No publications match that search.</div>';
}
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  currentFilter = b.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x => { const on = x === b; x.classList.toggle('selected', on); x.setAttribute('aria-pressed', String(on)); });
  renderPapers();
}));
search.addEventListener('input', renderPapers);
renderPapers();
document.getElementById('allCount').textContent = papers.length;
document.getElementById('year').textContent = new Date().getFullYear();

const mobile = document.getElementById('mobileToggle');
const nav = document.getElementById('siteNav');
mobile.addEventListener('click', () => {
  const open = mobile.getAttribute('aria-expanded') !== 'true';
  mobile.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobile.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobile.getAttribute('aria-expanded') === 'true') { mobile.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

const navItems = [...nav.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
  const ob = new IntersectionObserver(items => items.forEach(entry => {
    if (entry.isIntersecting) {
      const active = navItems.find(n => n.getAttribute('href') === '#' + entry.target.id);
      if (active) navItems.forEach(n => n.classList.toggle('active', n === active));
    }
  }), { rootMargin: '-14% 0px -68% 0px' });
  document.querySelectorAll('#home,#research,#publications,#projects,#methods,#about,#contact').forEach(section => ob.observe(section));
}

// Cursor / liquid hover effect
const blob = document.querySelector('.cursor-blob');
const core = document.querySelector('.cursor-core');
if (blob && core && window.matchMedia('(pointer:fine)').matches) {
  let targetX = window.innerWidth * 0.65, targetY = window.innerHeight * 0.28;
  let bx = targetX, by = targetY, cx = targetX, cy = targetY;
  let active = false;
  document.addEventListener('pointermove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
    active = true;
    document.body.classList.add('cursor-active');
  });
  document.addEventListener('pointerleave', () => document.body.classList.remove('cursor-active'));
  const interactive = 'a, button, .research-card, .project-card, .method-card, .outline-btn, .primary-btn, .secondary-btn, input';
  document.addEventListener('pointerover', e => {
    if (e.target.closest(interactive)) document.body.classList.add('cursor-hovering');
  });
  document.addEventListener('pointerout', e => {
    if (e.target.closest(interactive)) document.body.classList.remove('cursor-hovering');
  });
  const animate = () => {
    bx += (targetX - bx) * 0.08;
    by += (targetY - by) * 0.08;
    cx += (targetX - cx) * 0.24;
    cy += (targetY - cy) * 0.24;
    blob.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%)`;
    core.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}
