console.log('App started');

var entries = [], answer;

$('button').click(function() {
  if(entries.length === 0 && !isNaN(this.value)) {
    enterValue(this.value);
  }
  else if(!(isNaN(this.value) && isNaN(entries[entries.length - 1]))) {
    enterValue(this.value);
  }
  else if(entries.length > 0 && this.value === '-' && !isNaN(entries[entries.length - 2])) {
    enterValue(this.value);
  }
})

$('#clear').click(function() {
  entries = [];
})

$('#equals').click(function() {
  var stringEntries = document.getElementById('answer').textContent;
  stringEntries = stringEntries.replace('--', '+');
  answer = eval(stringEntries);
  console.log(answer);
  if(answer === Infinity || answer === -Infinity) {
    document.getElementById('answer').textContent = 'Cannot divide by 0';
  }
  else {
    document.getElementById('answer').textContent = answer;
  }
  entries = [];
})

function enterValue(val) {
  entries.push(val);
  document.getElementById('answer').textContent = entries.join('');
}
