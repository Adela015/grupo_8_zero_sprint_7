
// creo un evento en window al cargar

window.addEventListener('load', function(){

    // pruebo en consola
    console.log('ESTA VIVO')


    // defino las variables que agarran a los elementos de la vista

    let nombre = document.querySelector('#nombre')
    let errorNombre = document.querySelector('#error-nombre')

    let apellido = document.querySelector('#apellido')
    let errorApellido = document.querySelector('#error-apellido')

    let email = document.querySelector('#email')
    let errorEmail = document.querySelector('#error-email')

    let contraseña = document.querySelector('#contraseña')
    let errorContraseña = document.querySelector('#error-contraseña')

    let avatar = document.querySelector('#avatar')
    let button = document.querySelector('#button')

    // agrego un evento al button para realizar las validaciones

    button.addEventListener('click', function(e){
        
    // prevengo la acción de enviar el formulario hasta que se realicen las validaciones

        e.preventDefault() 
        
        // creo un objeto literal que contendrá los errores de cada campo

        let errores = {};

        // envio los errores al objeto como una llave con un valor si la condición no se cumple

        if (nombre.value === ''){
            errores.nombre = 'Este campo debe estar completo'
        } else if (nombre.value.length < 2 ){
            errores.nombre = 'El nombre debe tener al menos dos caracteres'
        }


        if (apellido.value === ''){
            errores.apellido = 'Este campo tiene que estar completo'
        } else if (apellido.value.length < 2 ){
            errores.apellido = 'El apellido debe tener al menos 2 caracteres'
        }


        if (email.value === ''){
            errores.email = 'Este campo debe estar completo'
        } else if (email.value.includes('@') && email.value.includes('.com')) {
            return email.value
        } else {
            errores.email = 'Debes ingresar un email válido'
        }


        if (contraseña.value === ''){
            errores.contraseña = 'Este campo tiene que estar completo'
        } else if (contraseña.value.length < 8){
            errores.contraseña= 'La contraseña debe tener al menos 8 caracteres'
        }

        //falta del avatar

        if (Object.keys(errores).length >= 1){
            errorNombre.innerHTML = errores.nombre;
            errorApellido.innerHTML = errores.apellido;
            errorEmail.innerHTML = errores.email;
            errorContraseña.innerHTML = errores.contraseña;
        } else {
            form.submit();
        }



    })



})