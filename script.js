/* ===========================================
   Bilal Hassan — Portfolio JS
=========================================== */

// ---------- DATA ----------
const SKILLS = [
  { name: 'HTML', icon: 'fa-brands fa-html5' },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
  { name: 'PHP', icon: 'fa-brands fa-php' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel' },
  { name: 'SQL', icon: 'fa-solid fa-database' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'C++', icon: 'fa-solid fa-code' },
  { name: 'OOP', icon: 'fa-solid fa-cubes' },
  { name: 'DSA', icon: 'fa-solid fa-diagram-project' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github' },
  { name: 'Responsive', icon: 'fa-solid fa-mobile-screen' },
];

const SERVICES = [
  { icon: 'fa-solid fa-display', title: 'Frontend Web Development', desc: 'Modern, fast, accessible UIs built with semantic HTML, CSS and vanilla JS.' },
  { icon: 'fa-solid fa-layer-group', title: 'Full Stack Development', desc: 'End-to-end web apps with PHP/Laravel backends and clean RESTful APIs.' },
  { icon: 'fa-solid fa-mobile-screen-button', title: 'Responsive Website Design', desc: 'Mobile-first layouts that look great on every screen size.' },
  { icon: 'fa-solid fa-database', title: 'Database Design (SQL)', desc: 'Well-structured, normalized schemas with reliable queries and indexes.' },
  { icon: 'fa-solid fa-code', title: 'C++ OOP Projects', desc: 'Robust object-oriented C++ systems following clean coding principles.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'UI Integration & Animations', desc: 'Pixel-perfect integrations with smooth, tasteful micro-interactions.' },
  { icon: 'fa-solid fa-user-tie', title: 'Portfolio Website Development', desc: 'Premium, recruiter-ready portfolio sites that stand out.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Basic Cybersecurity', desc: 'Security-conscious development: input validation, auth and safe patterns.' },
];

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    desc: 'Responsive developer portfolio showcasing projects, internships, skills and certifications.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    icon: 'fa-solid fa-globe',
    github: 'https://github.com/bilal00656/Bilal-Hassan-portfolio-website',
    demo: 'https://bilal00656.github.io/Bilal-Hassan-portfolio-website/'
  },
  {
    title: 'TEYZIX CORE Internship Live Portal',
    desc: 'Modern internship portal developed for TEYZIX CORE featuring live deployment, responsive sections, internship showcase and professional branding.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'PHP', 'SQL'],
    category: 'full',
    icon: 'fa-solid fa-laptop-code',
    github: 'https://github.com/bilal00656/teyzix-core-internship-portal',
    demo: 'https://bilal-hassan-teyzixcore-website.liveblog365.com/?i=1'
  },
  {
    title: 'Gym Management System',
    desc: 'Database-driven system for gym memberships, attendance and payments tracking.',
    tags: ['SQL', 'Database Systems'],
    category: 'db',
    icon: 'fa-solid fa-dumbbell',
    github: 'https://github.com/bilal00656/Gym-Management-System',
    demo: 'https://bilal00656.github.io/Gym-Management-System/login.html'
  },
  {
    title: 'ConnectMe Social Platform',
    desc: 'Full-stack social networking platform developed during Rhombix Technologies internship featuring authentication, user profiles, post sharing and responsive UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'AJAX', 'XAMPP'],
    category: 'full',
    icon: 'fa-solid fa-user-group',
    github: 'https://github.com/bilal00656/Rhombix_Technologies_Task-2',
    demo: 'https://www.linkedin.com/posts/bilal-hassan-1a4561331_fullstackdevelopment-webdevelopment-php-activity-7460675327384805376-gPjn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFONucwBuchtmgiXl2Vb8PR65Mo8nWMzuSw'
  },
  {
    title: 'TaskFlow Management System',
    desc: 'Professional task management web application built during TEYZIX CORE internship with task tracking, status management, responsive dashboard and modern UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    category: 'full',
    icon: 'fa-solid fa-list-check',
    github: 'https://github.com/bilal00656/Texzic-core-taskflow-kanban-management-system',
    demo: 'https://www.linkedin.com/posts/bilal-hassan-1a4561331_reactjs-nodejs-mongodb-activity-7459621584333369344-rZrj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFONucwBuchtmgiXl2Vb8PR65Mo8nWMzuSw'
  },
  {
    title: 'Online Shopping Store',
    desc: 'Responsive full-stack e-commerce website with modern UI and complete cart functionality.',
    tags: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    category: 'full',
    icon: 'fa-solid fa-cart-shopping',
    github: 'https://github.com/bilal00656/Online-Shopping-Website-Web_Development',
    demo: 'https://www.linkedin.com/posts/bilal-hassan-1a4561331_webdevelopment-php-mysql-activity-7458185644129972224-lnNc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFONucwBuchtmgiXl2Vb8PR65Mo8nWMzuSw'

  },
  {
    title: 'Internship Selection Prediction',
    desc: 'Machine learning project predicting internship candidate selection outcomes.',
    tags: ['Python', 'Pandas', 'ML'],
    category: 'python',
    icon: 'fa-solid fa-brain',
    github: 'https://github.com/bilal00656/Internship-Selection-Prediction-System',
    demo: 'https://www.linkedin.com/posts/bilal-hassan-1a4561331_datascience-machinelearning-python-activity-7459954286970511360-OxNP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFONucwBuchtmgiXl2Vb8PR65Mo8nWMzuSw'
  },
  {
    title: 'Air Canvas Virtual Pen',
    desc: 'AI-powered virtual drawing application using hand tracking and computer vision.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    category: 'python',
    icon: 'fa-solid fa-pen-nib',
    github: 'https://github.com/bilal00656/AI-Project-Air-Canvas-Pro-Virtual-Pen',
    demo: 'https://www.linkedin.com/posts/your-post'
  },
  {
    title: 'Skills & Internship Verification Platform',
    desc: 'Skill verification and internship validation platform with full system design documentation.',
    tags: ['Software Engineering', 'System Design'],
    category: 'full',
    icon: 'fa-solid fa-shield-halved',
    github: 'https://github.com/your-repo-link',
    demo: 'https://www.linkedin.com/posts/your-post'
  },
  {
    title: 'Library Management System',
    desc: 'C++ OOP-based system with authentication, role-based access, book management, issue/return, search, due dates and file handling.',
    tags: ['C++', 'OOP', 'File Handling'],
    category: 'cpp',
    icon: 'fa-solid fa-book',
    github: 'https://github.com/your-repo-link',
    demo: 'https://www.linkedin.com/posts/your-post'
  },
  {
    title: 'Hostel Management System',
    desc: 'Hostel management system using DSA concepts for student records and room allocation.',
    tags: ['C++', 'DSA'],
    category: 'cpp',
    icon: 'fa-solid fa-building',
    github: 'https://github.com/your-repo-link',
    demo: 'https://www.linkedin.com/posts/your-post'
  },
];

const CERTS = [
  { title: 'Introduction to C++', issuer: 'SoloLearn', img: 'assets/certificates/cpp.jpg' },
  { title: 'Introduction to SQL', issuer: 'SoloLearn', img: 'assets/certificates/sql.png' },
  { title: 'Introduction to Python', issuer: 'SoloLearn', img: 'assets/certificates/python.jpg' },
  { title: 'Introduction to HTML', issuer: 'SoloLearn', img: 'assets/certificates/html.jpg' },
  { title: 'Introduction to CSS', issuer: 'SoloLearn', img: 'assets/certificates/css.jpg' },
];

// ---------- LOADER ----------
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 500);
});



// ---------- NAVBAR ----------
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 500);

  // scroll progress
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('scrollProgress').style.width = pct + '%';

  // active section
  const y = window.scrollY + 120;
  document.querySelectorAll('section[id]').forEach(sec => {
    if (sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (link) link.classList.add('active');
    }
  });
});

document.getElementById('backTop').addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// ---------- TYPING ----------
const phrases = ['Full Stack Developer', 'BS Computer Science Student', 'Cybersecurity Enthusiast', 'Problem Solver'];
const typedEl = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;
function type() {
  const word = phrases[pi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; setTimeout(type, 80); }
  else if (deleting && ci > 0) { ci--; setTimeout(type, 40); }
  else {
    if (!deleting) { deleting = true; setTimeout(type, 1400); }
    else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 200); }
  }
}
type();

// ---------- RENDER SKILLS ----------
document.querySelector('.skills-grid').innerHTML = SKILLS.map(s => `
  <div class="skill reveal"><i class="${s.icon}"></i><span>${s.name}</span></div>
`).join('');

// ---------- RENDER SERVICES ----------
document.querySelector('.services-grid').innerHTML = SERVICES.map(s => `
  <div class="glass service reveal">
    <div class="service-icon"><i class="${s.icon}"></i></div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>
`).join('');

// ---------- RENDER PROJECTS ----------
const projectsGrid = document.getElementById('projectsGrid');
function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = PROJECTS
    .filter(p => filter === 'all' || p.category === filter || (filter === 'web' && (p.category === 'web' || p.category === 'full')))
    .map(p => `
      <article class="project">
        <div class="project-thumb"><i class="${p.icon}"></i></div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="project-links">
           <a href="${p.github || '#'}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
           <a href="${p.demo || '#'}" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> Demo</a>
          </div>
        </div>
      </article>
    `).join('');
}
renderProjects();

document.getElementById('filterBar').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderProjects(e.target.dataset.filter);
});

// ---------- RENDER CERTIFICATES ----------
const certGrid = document.getElementById('certGrid');
certGrid.innerHTML = CERTS.map(c => `
  <div class="glass cert reveal" data-img="${c.img}">
    <div class="cert-img-wrap"><img src="${c.img}" alt="${c.title}" loading="lazy" /></div>
    <h3>${c.title}</h3>
    <p>Issued by ${c.issuer}</p>
    <div class="cert-actions">
      <button type="button" data-view="${c.img}"><i class="fa-solid fa-eye"></i> View</button>
      <a href="${c.img}" download><i class="fa-solid fa-download"></i> Download</a>
    </div>
  </div>
`).join('');

// ---------- LIGHTBOX ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
const lbClose = document.getElementById('lightboxClose');
certGrid.addEventListener('click', e => {
  const btn = e.target.closest('[data-view], .cert');
  if (!btn) return;
  if (e.target.closest('a[download]')) return;
  const src = btn.dataset.view || btn.dataset.img;
  if (!src) return;
  lbImg.src = src;
  lb.classList.add('show');
});
lbClose.addEventListener('click', () => lb.classList.remove('show'));
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('show'); });

// ---------- COUNTERS ----------
const counters = document.querySelectorAll('.counter');
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const target = +el.dataset.target;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      n += step;
      if (n >= target) { el.textContent = target + '+'; return; }
      el.textContent = n;
      requestAnimationFrame(tick);
    };
    tick();
    counterObs.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObs.observe(c));

// ---------- REVEAL ANIMATIONS ----------
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
// observe dynamically added reveals
setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObs.observe(el)), 100);

// ---------- CONTACT FORM ----------
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');

  if (!name || !email || !subject || !message) {
    msg.style.color = '#ff6b6b';
    msg.textContent = 'Please fill out every field.';
    return;
  }

  // Opens user's email client with prefilled content
  const body = encodeURIComponent(`Hi Bilal,\n\n${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:bilaltohassan2@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  msg.style.color = 'var(--cyan)';
  msg.textContent = 'Opening your email client… Thank you!';
  form.reset();
});

// placeholders required for floating labels trick
['name', 'email', 'subject', 'message'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.setAttribute('placeholder', ' ');
});

// ---------- YEAR ----------
document.getElementById('year').textContent = new Date().getFullYear();
