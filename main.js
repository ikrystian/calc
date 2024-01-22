(() => {
  const headerDisplay = document.querySelector('#display');
  const buttons = document.querySelectorAll('.calculator-buttons input[type="button"]')

  const display = (value) => {
    headerDisplay.value += value;
  }

  buttons.forEach(button => {
    button.addEventListener('click', (el) => {
      const value = el.target.value;
      display(value);
    })
  })
})()