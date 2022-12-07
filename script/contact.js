const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorMessage = document.querySelectorAll(".error");

function  validateForm(){
    clearMessages()
    let errorFlag = false;
  if(nameInput.value.length < 1){
    errorMessage[0].innerText = "Name can not be blank";
    nameInput.classList.add("error-border")
    errorFlag = true;
  }
  if(!emailIsValid(email.value)){
    errorMessage[1].innerText = "Invaid email address, it must be @stud.noroff.no or @noroff.no";
    email.classList.add("error-border")
    errorFlag = true;
  }
  if(message.value.length < 1){
    errorMessage[2].innerText = "Please write your message";
    message.classList.add("error-border")
    errorFlag = true;
  }
  if(!errorFlag){
    success.innerText = "Success!"
  }
}
function clearMessages(){
    for(let i = 0; i < errorMessage.length; i++){
    errorMessage[i].innerText = "";}
    success.classList.remove("error-border");
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
function emailIsValid(email){
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
    return pattern.test(email);
}