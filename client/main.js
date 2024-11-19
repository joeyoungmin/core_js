import getNode from './lib/dom/getNode.js';

document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('#firstNumber');
  const second = document.querySelector('#secondNumber');
  const resultDiv = document.querySelector('.result');

  function updateResult() {
    const firstValue = parseFloat(first.value);
    const secondValue = parseFloat(second.value);

    if (isNaN(firstValue) || isNaN(secondValue)) {
      resultDiv.textContent = '-';
      return;
    }

    const sum = firstValue + secondValue;
    resultDiv.textContent = `Result: ${sum}`;
  }

  first.addEventListener('input', updateResult);
  second.addEventListener('input', updateResult);
});
