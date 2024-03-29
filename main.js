(() => {
  const headerDisplay = document.querySelector('#display');
  const buttons = document.querySelectorAll('.calculator-buttons input[type="button"]')
  const resultButton = document.querySelector('#result-button');
  const result = document.querySelector('.calculator-results');
  const clearButton = document.querySelector('#clear-button');
  const saveButton = document.querySelector('#save-button');

  let toClear = false

  const display = (value) => {
    headerDisplay.value += value;
  }

  const clear = () => {
    headerDisplay.value = '';
    result.value = '';
  }

  const save = (value, ip) => {
    const data = {
      value,
      ip
    };

    fetch('save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const response = data.status;
        if (response === 'success') {
          alert('Saved successfully');
          clear();
        }
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  }

  const func = (el) => {
    if (toClear) {
      clear();
      toClear = false;
    }

    if (el === '0') {
      if (headerDisplay.value === '') {
        alert('First digit of number cannot be 0 - for now, sorry');
      }

      if (headerDisplay.value[headerDisplay.value.length - 1] === '/') {
        alert('Cannot divide by 0 - dude!');
      }

      return false;
    }

    const value = el;
    display(value);
  }

  buttons.forEach(button => {
    button.addEventListener('click', (el) => {
      func(el.target.value);
    })
  });

  resultButton.addEventListener('click', () => {
    const lastChar = headerDisplay.value[headerDisplay.value.length - 1];
    if (lastChar === '*' || lastChar === '/' || lastChar === '+' || lastChar === '-') {
      alert('You cannot end equation with an operator');
      return false;
    }

    const resultValue = eval(headerDisplay.value);
    result.value = resultValue;
    toClear = true;
  });

  clearButton.addEventListener('click', () => {
    clear();
  });

  saveButton.addEventListener('click', () => {
    if (result.value === '') {
      alert('You cannot save empty result');
      return false;
    }

    save(result.value, userip);
  });

  document.addEventListener('keydown', (event) => {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
 
    if (validKeys.includes(event.key)) {
        func(event.key);
    }

    if (event.key === 'Enter') {
        resultButton.click();
    }
});

})();