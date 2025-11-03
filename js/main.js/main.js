// Rolagem suave até os projetos
document.querySelector('#btn-projects').addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#projects-section');
  target.scrollIntoView({ behavior: 'smooth' });
});
