// Activar modo oscuro
const btn = document.getElementById('modo-btn');

btn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('modo', document.body.classList.contains('dark') ? 'oscuro' : 'claro');
});

// Recordar modo
window.addEventListener('DOMContentLoaded', () => {
  const modo = localStorage.getItem('modo');
  if (modo === 'oscuro') document.body.classList.add('dark');
});
