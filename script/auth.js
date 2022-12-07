import { saveToken, saveUser } from "./storage.js";
import { getUserName } from "./storage.js";

function headerBar(){
    const {pathname} = document.location;
    const navbar = document.querySelector("#navbar")
    if(navbar){
        const userName = getUserName();
        let navLinks;
        navLinks = `
        <li><a href="/signup.html" class="${pathname ==="/signup.html" ? "" : ""}"</a></li>
        <li><a href="/signin.html" class="${pathname ==="/signin.html" ? "" : ""}"</a></li>
        `;
        if(userName) {
            navLinks = `
            <li> <a href="/welcome.html" class="${pathname === "/index.html" ? "" : ""}"></a></li>
            <li class="p-8"><button id="logOut">LogOut</button></li>
            `
        }
    }
}
export {headerBar}
