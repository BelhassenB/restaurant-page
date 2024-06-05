import  {divContent, homeContent, displayHomeContent}  from './home';
import greekSaladImg from './img/greek-salad.jpeg'
import saladMechouiaImg from './img/salad-mechouia.jpg'
import tunisianCouscousImg from './img/tunisian-couscous.jpg'


function createMenu() {    

    const saladMechouia = new Image()
    saladMechouia.src = saladMechouiaImg
    
    const tunisianCouscous = new Image()
    tunisianCouscous.src = tunisianCouscousImg
    
    const greekSalad = new Image()
    greekSalad.src = greekSaladImg
    
    const menuContent = document.createElement('div')
    menuContent.id = 'menu-content'  
    
    
    const mechouiaTitle = document.createElement('h4')
    mechouiaTitle.textContent = "Tunisian Salad Mechouia / Price: $7.00"
    menuContent.append(mechouiaTitle)
    menuContent.append(saladMechouia)

    const couscousTitle = document.createElement('h4')
    couscousTitle.textContent = "Tunisian couscous / Price: $9.00"
    menuContent.append(couscousTitle)
    menuContent.append(tunisianCouscous)

    const greekSaladTitle = document.createElement('h4')
    greekSaladTitle.textContent = "Greek Salad / Price $6.00"
    menuContent.append(greekSaladTitle)
    menuContent.append(greekSalad)

    divContent.replaceChild(menuContent, homeContent)    
}

export function displayMenu() {
    const menuBtn = document.querySelector('.menu-btn') 

    menuBtn.addEventListener("click", createMenu)

} 