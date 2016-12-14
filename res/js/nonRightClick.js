var message="Правая кнопка мыши отключена!";
function click(e) {
   if (document.all) {
      if (event.button == 2) {
          alert(message);
          return false;}
      }
   if (document.layers) {
      if (e.which == 3) {
          alert(message);
          return false;}
      }
}
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=click;
document.oncontextmenu=function(e){
  return false
}
