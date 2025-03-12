const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);



email.addEventListener('input', (e) => {
email = e.target.value
console.log(email);

})


password.addEventListener('input', (e) => {
  password = e.target.value
  console.log(password);
  
  })

inscriptionReturn.addEventListener('click', () => {
  window.location.replace("index.html");
})








form.addEventListener("submit", (e) => {
  e.preventDefault();
  
    if (email=== localStorage.getItem("userMail")&& password ===  localStorage.getItem("userPassword")) {
      console.log("Authentification réussie !")
   
  if (email && password) {
   
  


    inputs.forEach((input) => (input.value = ""));
   

    email = null;
    password = null;
   
    window.location.replace("./blog/index.html");
    
  } 
  else {
    alert("veuillez remplir correctement les champs");
  }
}
else{
  console.log("Authentification échouée !")
  alert('authentification échouéé !')
}
 
});



