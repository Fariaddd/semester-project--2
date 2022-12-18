import { clearStorage, getToken ,getUserName } from "./storage";
import { headerBar } from "./auth.js";



headerBar();
const logOutBtn = document.querySelector("#logOut");
if (logOutBtn) {
  logOutBtn.addEventListener("click", function () {
    console.log("I am clicked");
    clearStorage();
    window.location.replace("/signIn.html");
  });
}





