window.addEventListener('load', function(){

    console.log('script funcionando')

    let form = document.querySelector('form')

    let nombre = document.querySelector('#name')
    let nombreError = document.querySelector('#error-nombre')

    let artista = document.querySelector('#artist')
    let artistaError = document.querySelector('#error-artista')
    
    let descripcion = document.querySelector('#description')
    let descripcionError = document.querySelector('#error-descripcion')

    let precio = document.querySelector('#price')
    let precioError = document.querySelector('#error-precio')

    let imagen = document.querySelector('#image')
    let imagenError = document.querySelector('#error-imagen')

    let button = document.querySelector('#button')

    button.addEventListener('click', function(e){

        e.preventDefault();

        let errores = {}

        if(nombre.value === ''){
            errores.nombre = 'Este campo debe estar completo'
        } else if (nombre.value.length < 5){
            errores.nombre = 'El nombre del producto debe tener al menos 5 carácteres'
        }


        if(artista.value === ''){
            errores.artista = 'Este campo debe estar completo'
        } else if (artista.value.length < 2){
            errores.artista = 'El nombre del artista/marca debe tener al menos 2 carácteres'
        }


        if(descripcion.value === ''){
            errores.descripcion = 'Debes agregar una descripción al producto'
        } else if(descripcion.value.length < 20){
            errores.descripcion = 'La descripción debe tener al menos 20 carácteres'
        }


        if(precio.value === '' || precio.value === '0'){
            errores.precio = 'Debes agregar un valor al producto'
        }


        if(imagen.value === null){
            errores.imagen = 'Debes agregar una imagen del producto'
        }

        if (Object.keys(errores).length >= 1){

            nombreError.innerHTML = errores.nombre
            artistaError.innerHTML = errores.artista
            descripcionError.innerHTML = errores.descripcion
            precioError.innerHTML = errores.precio
            imagenError.innerHTML = errores.imagen

        } else {

            form.submit();

        }

    })

})