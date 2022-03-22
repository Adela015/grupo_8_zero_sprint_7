window.addEventListener('load', function(){

    let correo = document.querySelector('#correo')
    let errorCorreo = document.querySelector('#error-correo')

    let contraseña = document.querySelector('input#contra')
    let errorContraseña = document.querySelector('div#error-contraseña')

    let form = document.querySelector('#form')

    let button = document.querySelector('#submit')



    button.addEventListener('click', function(e){

        e.preventDefault();

        let errores = {}

        if(correo.value === ''){
            errores.correo = 'Este campo debe estar completo'
        } else if (correo.value.includes('@') && correo.value.includes('.com') ){
            return correo.value
        } else {
            errores.correo = 'Debes ingresar un email válido'
        }
        


        if (contraseña.value === ''){
            errores.contraseña = 'Debes ingresar una contraseña'
        }


        if (Object.keys(errores).length >= 1){
            errorCorreo.innerHTML = errores.correo;
            errorContraseña.innerHTML = errores.contraseña;
        } else {
            form.submit()
        }


    })

})