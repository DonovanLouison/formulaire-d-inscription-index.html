let lastScroll = 0
let header = document.querySelector('header')
let main = document.querySelector('main')
let cursor = document.querySelector('.cursor')
let barre = document.querySelector('.header-list')
let barreDisplayNone = document.querySelectorAll('.displayNone')
let sidebar = document.querySelector('.side-bar')
let paddingProb = document.querySelector('header > .container')
console.log(paddingProb);




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








window.addEventListener('mousemove', (e)=>{
cursor.style.setProperty('--top', e.pageY + "px")
cursor.style.setProperty('--left', e.pageX + "px")
})



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