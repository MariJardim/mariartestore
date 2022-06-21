export default function initDropDownMenu(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
function handleClick(e){
  e.preventDefault();
  this.classList.add('ativo');
  outsideClick(this,()=> {
    this.classList.remove('ativo');
  });
  
};
function outsideClick(element, callback){
  const html = document.documentElement;
  html.addEventListener('click', handleOutside);
  function handleOutside(event){
    if(!element.contains(event.target)){
  callback();
    }
}}
}
