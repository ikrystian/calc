(() => {
  const headerDisplay = document.querySelector('#display');
  const buttons = document.querySelectorAll('.calculator-buttons input[type="button"]')
  const resultButton = document.querySelector('#result-button');
  const result = document.querySelector('.calculator-results');
  const clearButton = document.querySelector('#clear-button');
  const saveButton = document.querySelector('#save-button');

  let toClear = false;

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
        console.log('Data saved:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  }



  const handleClick = (event) => {
    if(toClear) {
      clear();
      toClear = false;
    }

    const buttonValue = event.target.value;

    switch (buttonValue) {
      case '÷':
        event.target.value = '/';
        break;
      case 'x':
        event.target.value = '*';
        break;
      case '0':
        handleZeroClick();
        break;
      default:
        display(buttonValue);
    }
  }

  const handleZeroClick = () => {
    if (headerDisplay.value === '') {
      alert('First digit of number cannot be 0 - for now, sorry');
    }

    if (headerDisplay.value.endsWith('/')) {
      alert('Cannot divide by 0 - dude!');
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });

  resultButton.addEventListener('click', () => {
    const resultValue = eval(headerDisplay.value);
    console.log(resultValue);
    result.value = resultValue;
    toClear = true;
  });

  clearButton.addEventListener('click', () => {
    clear();
  });

  saveButton.addEventListener('click', () => {
    save(result.value, userip);
  });


})();