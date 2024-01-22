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
      const value = el.target.value;
      display(value);
    })
  });

  resultButton.addEventListener('click', () => {
    result.value = Math.random() * 100;
  });

  clearButton.addEventListener('click', () => {
    clear();
  });

  saveButton.addEventListener('click', () => {
    save(result.value, userip);
  });


})();