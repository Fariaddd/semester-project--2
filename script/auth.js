import { saveToken, saveUser } from "./storage.js";
import { getUserName } from "./storage.js";

function headerBar() {
  const { pathname } = document.location;
  let navbar = document.querySelector("#nav-bar");
  if (navbar) {
    const userName = getUserName();
    let navLinks;
    navLinks = navLinks = `
        <li class="li-navbar nav-container"><a href="/index.html" class="${
          pathname === "/index.html" ? "" : ""
        }"</a>Home</li>
        <li class="li-navbar nav-container"><a href="/listing.html" class="${
          pathname === "/about.html" ? "" : ""
        }"</a>listing</li>
        <li class="li-navbar nav-container"><a href="/contact.html" class="${
          pathname === "/contact.html" ? "" : ""
        }"</a>Contact</li> 
        <li class="li-navbar nav-container"><a href="/signup.html" class="${
          pathname === "/signup.html" ? "" : ""
        }"</a>signUP</li>
        <li class="li-navbar nav-container"><a href="/signin.html" class="${
          pathname === "/signin.html" ? "" : ""
        }"</a>singIN</li>
        
        `;
    if (userName) {
      navLinks = `
            
            <li class="li-navbar  nav-container  " > <a href="/welcome.html" class="${
              pathname === "/welcome.html" ? "" : ""
            }"</a>Home</li>
            <li class="li-navbar  nav-container "><a href="/contact.html" class="${
              pathname === "/contact.html" ? "" : ""
            }"</a>Contact</li> 
            <li class="li-navbar  nav-container "> <a href="/newListing.html" class="${
              pathname === "/newListing.html" ? "" : ""
            }"</a>newListing</li>
            <li class="li-navbar  nav-container "> <a href="/listing.html" class="${
              pathname === "/listing.html" ? "" : ""
            }"</a>Listing</li>
            <li class="li-navbar  nav-container "> <a href="/profile.html" class="${
              pathname === "/profile.html" ? "" : ""
            }"</a>Account</li>
            <li class="li-navbar  nav-container  text-white text-xl font-normal"><button id="logOut">LogOut</button></li>
            `;
    }
    navbar.innerHTML = `
        <ul class="flex">
           ${navLinks}
        </ul>`;
  }
}
export { headerBar };
