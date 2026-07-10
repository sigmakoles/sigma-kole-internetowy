let punkty = [];

let punktyRundy = [];

let aktualnyGracz;

let czyMoznaGrac;

const obrazki = [ "kosc1.png", 
                  "kosc2.png",
                  "kosc3.png",
                  "kosc4.png",
                  "kosc5.png",
                  "kosc6.png"
                ]
                  

function nowaGra(){
  
  czyMoznaGrac = true;
  
  aktualnyGracz = 0 ;
  
  punkty = [0 , 0]
  punktyRundy = 0;
  
  document.querySelector('.kosc').style.display = 'none';
  
  document.getElementById('wynik-0').textContent = '0' ;
  document.getElementById('wynik-1').textContent = '0' ;
  
  document.getElementById('aktualne-punkty-0').textContent = '0' ;
  document.getElementById('aktualne-punkty-1').textContent = '0' ;
  
  document.getElementById('nazwa-0').textContent = 'Gracz 1' ;
  document.getElementById('nazwa-1').textContent = 'Gracz 2' ;
  
  document.querySelector('.gracz-0-panel').classList.remove('zwciestwo');
  document.querySelector('.gracz-1-panel').classList.remove('zwciestwo');
  
  document.querySelector('.gracz-0-panel').classList.remove('aktywny');
  document.querySelector('.gracz-1-panel').classList.remove('aktywny'); 
  
  document.querySelector('.gracz-0-panel').classList.add('aktywny');  
}

nowaGra();








