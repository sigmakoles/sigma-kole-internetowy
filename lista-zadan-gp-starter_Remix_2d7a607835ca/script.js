document.getElementById('przyciskDodaj').addEventListener('click', function()
{
  const nowyElement = document.getElementById('element').value.trim();
  if(nowyElement != '')
  {
    document.getElementById('listaZadan').innerHTML += '<li>' + nowyElement + '</li>';
    document.getElementById('element').value = '';
    document.getElementById('komunikat').textContent = '';
  }
  else
  {
    document.getElementById('komunikat').textContent = 'Uzupełnij pole';
  }
});

document.getElementById('listaZadan').addEventListener('click', function(e)
{
  this.removeChild(e.target);
});
