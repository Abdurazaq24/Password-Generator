let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

 function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 15
    let password = ""
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length)
   password1 += chars.substring(randomNumber, randomNumber +1)
   password2 += chars.substring(randomNumber, randomNumber +1)

  }
   document.getElementById("password1").value = password1
   document.getElementById("password2").value = password2
 }       


   

function copyPassword() {
   copyEl.textContent = document.getElementById("password-el")
  copyEl.textContent.select()
  document.getElementById("copy")
}