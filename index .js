let password= document.getElementById("password")
let copyEl = document.getElementById("copy-el")
 function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 15
    let password = ""
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length)
   password += chars.substring(randomNumber, randomNumber +1)
   password.textContent = password
  }
  genPassword()

        //document.getElementById("password").value = password
 }

function copyPassword() {
   copyEl.textContent = document.getElementById("password")
  copyEl.textContent.select()
  document.getElementById("copy")
}