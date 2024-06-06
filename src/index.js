import './style.css';
import RestaurantImg from './img/my-restau-image.jpg'
import { homeBtn, divContent, homePage } from './home';
import { menuBtn, menuPage } from './menu';
import { aboutBtn, aboutPage } from './about';

const displayHome = ( () => {
    homeBtn.addEventListener("click", homePage)
    
})()
const displayHomeOnLoad = (() => {
    document.addEventListener("DOMContentLoaded", homePage)
})()

const displayMenu = ( () => {
    menuBtn.addEventListener("click", menuPage )
})()

const displayAbout = (() => {
    aboutBtn.addEventListener("click", aboutPage)
})()