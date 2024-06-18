document.addEventListener("DOMContentLoaded", function() {
  const matematicaIcon = document.getElementById('matematica');
  const inssIcon = document.getElementById('inss');
  const scriptsIcon = document.getElementById('scripts');
  const contentFrame = document.getElementById('content-frame');

  matematicaIcon.addEventListener('click', function() {
    contentFrame.src = 'calculadora.html';
  });

  inssIcon.addEventListener('click', function() {
    contentFrame.src = 'inss.html';
  });

  scriptsIcon.addEventListener('click', function() {
    contentFrame.src = 'scripts.html';
  });
});
