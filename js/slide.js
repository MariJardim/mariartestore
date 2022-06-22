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
    let movetype;
    if(e.type === 'mousedown'){
      e.preventDefault();
      distance.startX = e.clientX;
      movetype = 'mousemove'
    } else{
      distance.startX = e.changedTouches[0].clientX;
      movetype = 'touchmove'
    }
    wrapper.addEventListener(movetype, onMove);
   }
   function onMove(e){
    const pointerPosition = (e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX)
   const finalPosition = updatePosition(pointerPosition);
   moveSlide(finalPosition)
   }

   function onEnd(e){
    const movetype = (e.type === 'mouseup' ? 'mousemove' : 'touchmove')
    wrapper.removeEventListener(movetype, onMove);
    distance.finalPosition = distance.movePosition
   }
   function addSlideEvents(){
    wrapper.addEventListener('mousedown', onStart);
    wrapper.addEventListener('touchstart', onStart);
    wrapper.addEventListener('mouseup', onEnd)
    wrapper.addEventListener('touchend', onEnd)
   }
   addSlideEvents()
}
