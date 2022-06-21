export default function initSlide(){
  const slide = document.querySelector('.slide');
  const wrapper = document.querySelector('.wrapper')
  const distance = {
    finalPosition: 0,
    startX: 0,
    movement: 0
  }
function moveSlide(xDistance){
  distance.movePosition = xDistance;
  slide.style.transform = `translate3d(${xDistance}px, 0, 0)`
}


  function updatePosition(clientX){
    distance.movement = (distance.startX - clientX) * 1.6;
    return distance.finalPosition - distance.movement 
 }
  function onStart(e){
    e.preventDefault();
    distance.startX = e.clientX;
    wrapper.addEventListener('mousemove', onMove);
   }
   function onMove(e){
   const finalPosition = updatePosition(e.clientX);
   moveSlide(finalPosition)
   }

   function onEnd(e){
    wrapper.removeEventListener('mousemove', onMove);
    distance.finalPosition = distance.movePosition
   }
   function addSlideEvents(){
    wrapper.addEventListener('mousedown', onStart);
    wrapper.addEventListener('mouseup', onEnd)
   }
   addSlideEvents()
}
