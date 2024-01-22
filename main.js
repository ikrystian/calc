(() => {
  const headerDisplay = document.querySelector('#display');
  const buttons = document.querySelectorAll('.calculator-buttons input[type="button"]')
  const resultButton = document.querySelector('#result-button');
  const result = document.querySelector('.calculator-results');
  const clearButton = document.querySelector('#clear-button');
  const saveButton = document.querySelector('#save-button');
  
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

  buttons.forEach(button => {
    button.addEventListener('click', (el) => {
      if(el.target.value === '÷') {
        el.target.value = '/';
      }

      if(el.target.value === 'x') {
        el.target.value = '*';
      }
      
      if(el.target.value === '0' && headerDisplay.value === '') { 
        alert('First digit of number cannot be 0 - for now, sorry');
        return false;
      }

      const value = el.target.value;
      display(value);
    })
  });

  resultButton.addEventListener('click', () => {
    
    const resultValue = eval(headerDisplay.value);
    console.log(resultValue);
    result.value = resultValue;
  });

  clearButton.addEventListener('click', () => {
    clear();
  });

  saveButton.addEventListener('click', () => {
    save(result.value, userip);
  });


})();