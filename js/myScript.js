
var cont = document.getElementById('container');
var screen = document.getElementById('coordinates');
var screen2 = document.getElementById('coordinates2');
var bod = document.querySelector('body');
var contWidth = cont.offsetWidth;
var contHeight = cont.offsetHeight;
bod.addEventListener('click', function(){
   var x = event.clientX;
   var y = event.clientY;
   var percX = ((x*100)/contWidth);
   var percY = ((y*100)/contHeight);
   screen.innerHTML ='x is: ' + percX.toFixed(3) +'% ' +  + percY.toFixed(3) + '%';
});
cont.addEventListener('click', function(){
   var x = event.clientX;
   var y = event.clientY;
   var percX = ((x*100)/contWidth);
   var percY = ((y*100)/contHeight) + 7.276;
   screen2.innerHTML ='x is: ' + percX.toFixed(3) +'% ' +  + percY.toFixed(3) + '%';
});
