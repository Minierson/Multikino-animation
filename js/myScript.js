
// var cont = document.getElementById('container');
// var screen = document.getElementById('coordinates');
// var screen2 = document.getElementById('coordinates2');
// var bod = document.querySelector('body');
// var contWidth = cont.offsetWidth;
// var contHeight = cont.offsetHeight;
// bod.addEventListener('click', function(){
//    var x = event.clientX;
//    var y = event.clientY;
//    var percX = ((x*100)/contWidth);
//    var percY = ((y*100)/contHeight);
//    screen.innerHTML ='x is: ' + percX.toFixed(3) +'% ' +  + percY.toFixed(3) + '%';
// });
// cont.addEventListener('click', function(){
//    var x = event.clientX;
//    var y = event.clientY;
//    var percX = ((x*100)/contWidth);
//    var percY = ((y*100)/contHeight) + 7.276;
//    screen2.innerHTML ='x is: ' + percX.toFixed(3) +'% ' +  + percY.toFixed(3) + '%';
// });

$('body').on('click', function (e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  var shapesoffsetX = $('#container').offset().left;
  var shapesoffsetY = $('#container').offset().top;

  var polygonswidth=$('#container').width();
  var polygonsheight=$('#container').height();

  var shapesmouseX = mouseX - shapesoffsetX;
  var shapesmouseY = mouseY - shapesoffsetY;

  var mousepercentX = shapesmouseX / polygonswidth;
  var mousepercentY = shapesmouseY / polygonsheight;

  var finalmouseX = (mousepercentX) * 100 ;
  var finalmouseY = (mousepercentY) * 100 ;
  var normalisedX = parseFloat(finalmouseX).toFixed(3);
  var normalisedY = parseFloat(finalmouseY).toFixed(3);
  

  console.log($('#coordinates').text(normalisedX + '% '+ normalisedY + '%'));


});