document.querySelectorAll('.quiz-box').forEach((box) => {
  const result = box.querySelector('.quiz-result');
  box.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.choice === box.dataset.answer;
      result.textContent = isCorrect ? 'Правильно: 2FA додає другий рівень перевірки.' : 'Ні. Краще рішення — двофакторна автентифікація.';
      result.style.color = isCorrect ? '#22c55e' : '#fb7185';
    });
  });
});

const checklist = document.querySelector('.security-checklist');
if (checklist) {
  const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const bar = checklist.querySelector('.progress-bar');
  const text = checklist.querySelector('.progress-text');
  const update = () => {
    const done = inputs.filter((input) => input.checked).length;
    const percent = Math.round((done / inputs.length) * 100);
    bar.style.width = percent + '%';
    text.textContent = `Виконано: ${percent}%`;
  };
  inputs.forEach((input) => input.addEventListener('change', update));
  update();
}