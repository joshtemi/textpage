const mq = window.matchMedia("(max-width :500px)")
if(mq.matches){
   const mainNav = document.getElementById("main-nav")
   const subMenu = document.querySelectorAll(".submenu")
   const hasSubMenu = document.querySelectorAll(".has-submenu")
   const menuIcon = document.getElementById("menu-icon")


   
    // alternative method of writing a function
    // function navSlide(){
     
        
   menuIcon.addEventListener("click",function(){
       // Burger Animation
       menuIcon.classList.toggle("closeAnimation")
       // Burger Animation
       if(mainNav.style.display !="block"){
           mainNav.style.display = "block";
        //    this.innerHTML = "X"
        }else{
            mainNav.style.display = "none"
            // this.innerHTML ="MENU"
        }


        for(let i=0; i < hasSubMenu.length; i++ ){
            hasSubMenu[i].addEventListener('click', function(){
                subMenu[i].classList.toggle("display-block")
            })
            
        }
   })
} 

let bntMore = document.querySelectorAll(".more-btn")
for (let i =0; i<bntMore.length; i++){
    var moreText = document.querySelectorAll(".more");
    var dots = document.querySelectorAll(".dots");
    bntMore[i].addEventListener('click', function(){
        // moreText[i].classList.toggle('more')
        
        if (dots[i].style.display === "none") {
                    dots[i].style.display = "inline";
                    bntMore[i].innerHTML = "Read more";
                    moreText[i].style.display = "none";
                    bntMore[i].style.color='black'
        } else {
                    dots[i].style.display = "none";
                    bntMore[i].innerHTML = "Read less";
                    moreText[i].style.display = "inline";
                    bntMore[i].style.color='red'
        }
    })
}



// let btnText = document.querySelector(".more-btn");
// btnText.addEventListener("click",  function(){
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
   
//     btnText.style.color ="red"

//     // if (dots.style.display === "none") {
//     //     dots.style.display = "inline";
//     //     btnText.innerHTML = "Read more";
//     //     moreText.style.display = "none";
//     //   } else {
//     //     dots.style.display = "none";
//     //     btnText.innerHTML = "Read less";
//     //     moreText.style.display = "inline";
//     //   }
// })

// function removeAdd(){
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
   


//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//       } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//       }
//     }


//     removeAdd()