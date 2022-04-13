const mq = window.matchMedia("(max-width :500px)")
if(mq.matches){
   const mainNav = document.getElementById("main-nav")
   const subMenu = document.querySelectorAll(".submenu")
   const hasSubMenu = document.querySelectorAll(".has-submenu")
   const menuIcon = document.getElementById("menu-icon")

   menuIcon.addEventListener("click",function(){
       if(mainNav.style.display !="block"){
           mainNav.style.display = "block";
           this.innerHTML = "X"
        }else{
            mainNav.style.display = "none"
            this.innerHTML ="MENU"
        }


        for(let i=0; i < hasSubMenu.length; i++ ){
            hasSubMenu[i].addEventListener('click', function(){
                subMenu[i].classList.toggle("display-block")
            })
            
        }
   })
}