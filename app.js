console.log('App started');

var entries = [];

$('button').click(function() {
  entries.push(this.value);
  entryString = entries.toString();
  entryString = entryString.replace(',', '')
  document.getElementById('answer').textContent = entries.join('');
})

$('#clear').click(function() {
  entries = [];
  document.getElementById('answer').textContent = '0';
})

$('#equals').click(function() {
  document.getElementById('answer').textContent = 'answer';
})