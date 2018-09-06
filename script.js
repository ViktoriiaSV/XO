window.onload = function(){
 for(let i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}  
   let hod = 0;
    
    
    
  document.getElementById('game').onclick = function(Event){
      console.log(Event);
      if(Event.target.className == 'block'){
          if(hod%2==0){
              Event.target.innerHTML = 'x';
          }
          else {
             Event.target.innerHTML = '0'; 
          }
          hod++;
          checkWinner();
      }
      
  }  
    
 function checkWinner(){
     let allBlock = document.getElementsByClassName('block');
     //console.log(allBlock);
     if(allBlock[0].innerHTML=='x' && allBlock[1].innerHTML=='x' && allBlock[2].innerHTML=='x')
         alert('Winner X');
     
     if(allBlock[3].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[5].innerHTML=='x')
         alert('Winner X');
     
     if(allBlock[6].innerHTML=='x' && allBlock[7].innerHTML=='x' && allBlock[8].innerHTML=='x')
         alert('Winner X');
     
     if(allBlock[0].innerHTML=='x' && allBlock[3].innerHTML=='x' && allBlock[6].innerHTML=='x')
         alert('Winner X');
     
     if(allBlock[1].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[7].innerHTML=='x')
         alert('Winner X');
     
     if(allBlock[2].innerHTML=='x' && allBlock[5].innerHTML=='x' && allBlock[8].innerHTML=='x')
         alert('Winner X');
     
     //diagonal1
     if(allBlock[0].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[8].innerHTML=='x')
         alert('Winner X');
     
     //diagonal2
     if(allBlock[2].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[6].innerHTML=='x')
         alert('Winner X');
     
     // o
     if(allBlock[0].innerHTML=='0' && allBlock[1].innerHTML=='0' && allBlock[2].innerHTML=='0')
         alert('Winner 0');
     
     if(allBlock[3].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[5].innerHTML=='0')
         alert('Winner 0');
     
     if(allBlock[6].innerHTML=='0' && allBlock[7].innerHTML=='0' && allBlock[8].innerHTML=='0')
         alert('Winner 0');
     
     if(allBlock[0].innerHTML=='0' && allBlock[3].innerHTML=='0' && allBlock[6].innerHTML=='0')
         alert('Winner 0');
     
     if(allBlock[1].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[7].innerHTML=='0')
         alert('Winner X');
     
     if(allBlock[2].innerHTML=='0' && allBlock[5].innerHTML=='0' && allBlock[8].innerHTML=='0')
         alert('Winner 0');
     
     //diagonal1
     if(allBlock[0].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[8].innerHTML=='0')
         alert('Winner 0');
     
     //diagonal2
     if(allBlock[2].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[6].innerHTML=='0')
         alert('Winner 0');
 }
    
    
}

