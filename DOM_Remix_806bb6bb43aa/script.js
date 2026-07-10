document.getElementById('tekst').textContent = 'Giganci Programowania';
document.getElementById('tekst').innerHTML = '<h1>Lubię JavaScripta</h1>';
document.getElementById('btnTlumacz').addEventListener('click', function() {
  document.getElementById('doPrzetlumaczenia').textContent = 'The most common JavaScript language are websites. These scripts are most often used to conne ct by responding to events, validating data entered in the form, or creating complex visual effects.'  
});
document.getElementById('zaloguj').addEventListener('click', function(){
   const loginDB = "Giganci";
  const passDB = "qwerty";
  const login = document.getElementById('login').value;
  const pass = document.getElementById('pass').value;
  
  if(login.length == 0 || pass.length == 0){
    document.getElementById("infoLogowanie").textContent = "Uzupełnij pola";
  }
  else if(loginDB == login && passDB == pass)
  {
    document.getElementById("infoLogowanie").textContent = "Zalogowano pomyślnie";
  }
  else
  {
    document.getElementById("infoLogowanie").textContent = "Login lub hasło się nie zgadzają";
  }
})