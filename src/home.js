export const divContent = document.querySelector('#content')
export const homeContent = document.createElement('div')
homeContent.id = 'home-content'

export function HomeContent() {    

    const h2 = document.createElement("h2")
    h2.textContent = "Welcome to my restaurant"

    const h3 = document.createElement("h3")
    h3.textContent = "The Restaurant"
    h3.style.fontStyle = "italic"

    const p = document.createElement("p")
    p.textContent = "Welcome to our Mediterranean restaurant, where vibrant flavors and fresh ingredients come together to create an unforgettable dining experience."

    
    homeContent.append(h2)
    homeContent.append(h3)
    homeContent.append(p)    
    divContent.append(homeContent)
    
}

export function displayHomeContent() {
    document.addEventListener("DOMContentLoaded", HomeContent)
}



export function dispalyHomeContentOnClick() {
    const homeBtn = document.querySelector('#home-btn')
    homeBtn.addEventListener("click", HomeContent)
}