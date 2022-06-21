export default function activeMenu(){
  const menu = document.querySelectorAll('.nav-bar li');

  menu.forEach((item)=>{
    
  function activeClass(e){
    e.preventDefault();
    removeClass();
    item.classList.add('active')
  }
    item.addEventListener('click', activeClass)
  })
  function removeClass(){
     for(let i=0; i<menu.length; i++){
    const item = menu[i];
    item.classList.remove('active')
  }
  }
}

activeMenu();