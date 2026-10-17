const formulario = document.querySelector('#formulario-notas');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const notas = [
    Number(document.querySelector('#nota1').value),
    Number(document.querySelector('#nota2').value),
    Number(document.querySelector('#nota3').value),
  ];

  const notasValidas = notas.every((nota) => Number.isFinite(nota) && nota >= 0 && nota <= 5);
  if (!notasValidas) {
    resultado.textContent = 'Las notas deben estar entre 0 y 5.';
    resultado.className = 'resultado error';
    return;
  }

  const promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  const estado = promedio >= 3 ? 'Aprobado' : 'Reprobado';
  resultado.textContent = `Promedio: ${promedio.toFixed(2)} — ${estado}`;
  resultado.className = `resultado ${promedio >= 3 ? 'aprobado' : 'reprobado'}`;
});
