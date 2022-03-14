
  let errors = {};


  const formu = document.getElementById("formulario");
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");

  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const repassword = document.getElementById("repassword");
  const rol = document.getElementById("rol");

  console.log(firstName)
  // Declaro las Funciones

  let firstNameValidator = () => {
   // Declaro string vacio que contendra mensaje de error
   let feedback = "";
   // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
   let feedbackElement = firstName.nextElementSibling;

   // Si el nombre no valida sobreescribo feedback
   if (firstName.value.trim() == "") {
       feedback = "El nombre no puede estar vacio"
   }else if (firstName.value.length < 5) {
       feedback = "El nombre no puede tener menos de 5 caracteres"
   }

   // Si existe error se almacena en objeto errors
   if (feedback) {
    firstName.classList.add('error-input');
       errors.firstName = feedback;
   }else {
    firstName.classList.remove('error-input');
       delete errors.firstName;
   }

   // Se imprime string de error en vista
   // Utilizo el <p> hermano para publicar el error
   //feedbackElement es el siguiente hermano, es decir el P
   feedbackElement.innerText = feedback;
}



  let  lastNameValidator = () => {
 // Declaro string vacio que contendra mensaje de error
 let feedback = "";
 // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
 let feedbackElement = lastName.nextElementSibling;

 // Si el nombre no valida sobreescribo feedback
 if (lastName .value.trim() == "") {
     feedback = "El apellido no puede estar vacio"
 }else if (lastName.value.length < 5) {
     feedback = "El apellido no puede tener menos de 5 caracteres"
 }

 // Si existe error se almacena en objeto errors
 if (feedback) {
  lastName .classList.add('error-input');
     errors.lastName  = feedback;
 }else {
  lastName.classList.remove('error-input');
     delete errors.lastName ;
 }

 // Se imprime string de error en vista
 // Utilizo el <p> hermano para publicar el error
 //feedbackElement es el siguiente hermano, es decir el P
 feedbackElement.innerText = feedback;
}




  let  emailValidator = () => {

    //validando campo usuario
  }

  let  passValidator = () => {

    //validando campo usuario
  }


  let  repasswordValidator = () => {


    //validando campo usuario
  }


  let  rolValidator = () => {

    //validando campo usuario
  }

  // Ejecuto los oyentes
  // Llamo a las funciones


  formu.addEventListener("submit", (e) => {

    firstNameValidator();
    lastNameValidator();

 // si existen errores prevent default
 if (Object.keys(errors).length) {
  e.preventDefault();
} else {
  alert(`Se cargó el nuevo registro`)
}

  });


  // Si focus se sale del input se ejecuta funcion validacion
  firstName.addEventListener("blur", firstNameValidator);
  lastName.addEventListener("blur", lastNameValidator);

  email.addEventListener("blur", emailValidator);
  pass.addEventListener("blur", passValidator);
  repassword.addEventListener("blur", repasswordValidator);

  rol.addEventListener("blur", rolValidator);
