export default function initSlide(){
  const slide = document.querySelector('.slide');
  const wrapper = document.querySelector('.wrapper')

  function onStart(e){
    e.preventDefault();
    wrapper.addEventListener('mousemove', onMove);
    
    
   }
   function onMove(e){
    
   }
   function onEnd(e){
    
    wrapper.removeEventListener('mousemove', onMove)
   }
   function addSlideEvents(){
    wrapper.addEventListener('mousedown', onStart);
    wrapper.addEventListener('mouseup', onEnd)
   }
   addSlideEvents()
}
