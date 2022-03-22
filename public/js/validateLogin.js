window.addEventListener('load', function(){


    let form = document.querySelector('form')
    let correo = document.querySelector('input#correo')
    let contraseña = document.querySelector('input#contra')
    let erroresFront = document.querySelector('div.errores-front ul')
    let button = document.querySelector('input#submit')

    button.addEventListener('click', function(e){

        let errores = [];

        

        if (correo.value === '' || correo.value === null){
            errores.push('Debes ingresar un correo')
        } 

        if (contraseña.value === '' || contraseña.value === null){
            errores.push('Debes ingresar una contraseña')
        }


        if (errores.length > 0) {
        
            e.preventDefault();

            for (let i = 0; i < errores.length; i++) {
                erroresFront.innerHTML += '<li>' + errores[i] + '</li>'

        } 

        } else {

            button.submit()

        }



    })


})