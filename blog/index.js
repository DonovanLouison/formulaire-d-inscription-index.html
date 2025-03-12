let lastScroll = 0
let header = document.querySelector('header')
let main = document.querySelector('main')
let cursor = document.querySelector('.cursor')
let barre = document.querySelector('.header-list')
let barreDisplayNone = document.querySelectorAll('.displayNone')
let sidebar = document.querySelector('.side-bar')





const sideBarDisplay = () => {
    if (window.innerWidth > 980) {
        sidebar.style.display = "none"
    barre.style.display = 'flex'
}}


barre.addEventListener('click',()=>{
    if(window.innerWidth >=700){
            sidebar.style.right= -20+ "px"
    sidebar.style.display= "block"
    sideBarDisplay()
    }
    else if ( window.innerWidth <= 750 &&  window.innerWidth >= 580 ){
        
    sidebar.style.right= 0+ "px"
    sidebar.style.display= "block"
    paddingProb.style.padding = `30px 13px 0 25px`
    sideBarDisplay()
    }
    else{
        sidebar.style.right= 0+ "px"
        sidebar.style.display= "block"
        paddingProb.style.padding = `30px 13px 0 25px`
        sideBarDisplay()
    }

  

    barre.style.display = "none"

})

window.addEventListener('resize', function () {
    sideBarDisplay()
  });


xmark.addEventListener('click',()=>{
    sidebar.style.right= -500+ "px"
    setTimeout(()=>{
        sidebar.style.display= "none"
        barre.style.display = "flex"
    },100)
})







main.style.setProperty('--op', 10+ "%")
window.addEventListener('scroll', ()=>{
    if (window.scrollY < 870) {
        header.style.setProperty("--top", 0 + "px")
        if(window.scrollY >= 0 && window.scrollY < 100){
            header.style.backgroundColor = `transparent`
            header.style.boxShadow = `none`
        }
        else{
            header.style.backgroundColor = `rgb(11, 11, 11)`
        }
    }  
    else if (window.scrollY < lastScroll){
        header.style.setProperty("--top", 0 + "px")
        if (window.scrollY > 870) {
        header.style.backgroundColor = `rgb(11, 11, 11)`}
       
    }
    else {
        header.style.setProperty("--top", -130 + "px")
    }
lastScroll = window.scrollY
}
)

window.addEventListener('scroll', ()=>{
lastScroll = window.scrollY
        main.style.setProperty('--op', (lastScroll / 9)+ "%")}
    
)
window.addEventListener('mousemove', (e)=>{
cursor.style.setProperty('--top', e.pageY + "px")
cursor.style.setProperty('--left', e.pageX + "px")
})

function handleScroll (){
const scroll = window.scrollY 
const translateValue = scroll * 0.2

main.style.transform = `translateY(${translateValue}px)`}

window.addEventListener('scroll', ()=>{
    if (window.scrollY){
        handleScroll()
    }
}
    
    
)

document.addEventListener('DOMContentLoaded', function () {
    const minWidth = 375; // Largeur minimale de la fenêtre (en pixels)
  
    // Fonction pour vérifier et forcer la largeur minimale
    function enforceMinWidth() {
      if (window.innerWidth < minWidth) {
        // Redimensionne la fenêtre à la largeur minimale
        window.resizeTo(minWidth, window.innerHeight);
      }
    }
  
    // Appliquer la vérification lors du redimensionnement
    window.addEventListener('resize', enforceMinWidth);
  
    // Appliquer la vérification immédiatement après le chargement
    enforceMinWidth();
  });

  barreDisplayNone.forEach((element)=>{element.addEventListener('click', ()=>{
    if(sidebar.style.display != "none")
    sidebar.style.right= -500+ "px"
    setTimeout(()=>{
        sidebar.style.display= "none"
        barre.style.display = "flex"
    },100)
  })})
console.log(barreDisplayNone)