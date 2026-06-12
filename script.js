// Interatividade mínima: dicas com alerta e rolagem suave para links do menu
document.addEventListener('DOMContentLoaded', function () {
  // Mensagens explicativas para cada dica
  const dicasExtras = {
    1: 'Planeje as compras: faça uma lista, evite compras por impulso e prefira quantidades que você realmente vai consumir.',
    2: 'Aproveite integralmente: cascas, talos e partes muitas vezes comestíveis podem ser usados em receitas ou conservas.',
    3: 'Prefira produtores locais: reduz transporte, fortalece a economia regional e garante alimentos mais frescos.',
    4: 'Armazene corretamente: legumes e frutas duram muito mais quando guardados na temperatura e umidade ideais.',
    5: 'Pratique os 3R\'s: reduza o desperdício, reutilize sobras criativas e recicle embalagens sempre que possível.'
  };

  // Liga as dicas (botões) ao alert
  document.querySelectorAll('.dica').forEach(function(btn){
    btn.addEventListener('click', function(){
      const key = btn.getAttribute('data-tip');
      const msg = dicasExtras[key] || 'Dica prática para consumo consciente.';
      alert(msg);
    });
  });

  // Rolagem suave via JS para navegadores que não suportam scroll-behavior (fallback)
  document.querySelectorAll('.site-nav a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      const href = link.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // ajusta foco para acessibilidade
        target.setAttribute('tabindex', '-1');
        window.setTimeout(() => target.focus({preventScroll:true}), 600);
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // close nav when clicking a link
    mainNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
      if(mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    }));
  }

  // Destaque de link ativo ao rolar (IntersectionObserver)
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = document.querySelector('.site-nav a[href="#'+id+'"]');
        if(link){
          if(entry.isIntersecting){
            navLinks.forEach(n=>n.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    },{root:null,threshold:0.45});
    sections.forEach(s=>obs.observe(s));
  }
});
