var numberField = document.getElementById('numberField');
 
    function increment() {
      var currentValue = parseInt(numberField.value);
      if (currentValue < 5) {
        numberField.value = currentValue + 1;
      }
    }
 
    function decrement() {
      var currentValue = parseInt(numberField.value);
      if (currentValue > 0) {
        numberField.value = currentValue - 1;
      }
    }
    