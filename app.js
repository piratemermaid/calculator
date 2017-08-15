console.log('App started');

var entries = [];

$('button').click(function() {
  entries.push(this.value);
  document.getElementById('answer').textContent = entries.join('');
})

$('#clear').click(function() {
  entries = [];
  document.getElementById('answer').textContent = '0';
})

$('#equals').click(function() {
  var stringEntries = document.getElementById('answer').textContent;
  console.log(eval(stringEntries));
  document.getElementById('answer').textContent = eval(stringEntries);
  entries = [];
})
