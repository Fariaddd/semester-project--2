import { saveToken, saveUser } from "./storage.js";
import { getUserName } from "./storage.js";

function headerBar(){
    const {pathname} = document.location;
    let navbar = document.querySelector("#nav-bar")
    if(navbar){
        const userName = getUserName();
        let navLinks;
        navLinks = navLinks = `
        <li class="li-navbar"><a href="/index.html" class="${pathname === "/index.html" ? "" : ""}"</a>Home</li>
        <li class="li-navbar"><a href="/auction.html" class="${pathname === "/about.html" ? "" : ""}"</a>Auction</li>
        <li class="li-navbar a"><a href="/about.html" class="${pathname === "/contact.html" ? "" : ""}"</a>About</li>
        <li class="li-navbar"><a href="/contact.html" class="${pathname === "/contact.html" ? "" : ""}"</a>Contact</li> 
        <li class="li-navbar"><a href="/signup.html" class="${pathname ==="/signup.html" ? "" : ""}"</a>sign-uP</li>
        <li class="li-navbar"><a href="/signin.html" class="${pathname ==="/signin.html" ? "" : ""}"</a>sing-IN</li>
        
        `;
        if(userName) {
            navLinks = `
            
            <li class="li-navbar" > <a href="/welcome.html" class="${pathname === "/welcome.html" ? "" : ""}"</a>Home</li>
            <li class="li-navbar" > <a href="/welcome.html" class="${pathname === "/welcome.html" ? "" : ""}"</a>Auction</li>

            <li class="li-navbar" > <a href="/about.html" class="${pathname === "/about.html" ? "" : ""}"</a>About</li>
            <li class="li-navbar"><button id="logOut">LogOut</button></li>
            
            `
            
        }
        navbar.innerHTML = `
        <ul class="flex">
           ${navLinks}
        </ul>`
    }
}
export {headerBar}

{/*
        if(userName) {
            navLinks = `
            <li class="li-navbar a"><a href="/index.html" class="${pathname === "/index.html" ? "" : ""}"</a>Home</li>
            <li class="li-navbar a"><a href="/auction.html" class="${pathname === "/about.html" ? "" : ""}"</a>Auction</li>    
            <li class="li-navbar a"><a href="/contact.html" class="${pathname === "/contact.html" ? "" : ""}"</a>Contact</li>
            <li class="li-navbar a"><a href="/about.html" class="${pathname === "/contact.html" ? "" : ""}"</a>About</li>
            <li class="li-navbar a"> <a href="/profile.html" class="${pathname === "/profile.html" ? "text-white" : ""}"</a>Account</li>         
            <li class=" text-white text-xl "><button id="logOut">Log-out</button></li> */}