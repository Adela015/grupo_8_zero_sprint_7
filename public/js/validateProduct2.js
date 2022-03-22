window.addEventListener('load', function(){

    let form = document.querySelector('form');
    let nombre = document.querySelector('input#name');
    let nombreError = document.querySelector('#error-nombre')
    let artista = document.querySelector('input#artist');
    let artistaError = document.querySelector('#error-artista')
    let descripcion = document.querySelector('input#description');
    let descripcionError = document.querySelector('#error-descripcion')
    let precio = document.querySelector('input#price');
    let precioError = document.querySelector('#error-precio')
    let imagen = document.querySelector('input#image');
    let imagenError = document.querySelector('#error-imagen')
    let button = document.querySelector('button');

    form.addEventListener('submit', function(){

        let errores = {}

        if (nombre.value === '' || nombre.value == null){
            errores.nombre = 'Debes ingresar un nombre para el producto'
        } else if (nombre.value.length < 5){
            errores.nombre = 'El nombre debe tener más de 5 caracteres'
        }

        if (artista.value === '' || artista.value === null){
            errores.artista = 'Debes ingresar un nombre para el artista o marca'
        } else if (artista.value.length < 5){
            errores.artista = 'El artista o marca debe tener más de 5 caracteres'
        }

        if (descripcion.value === '' || descripcion.value === null){
            errores.descripcion = 'Debes agregar una descripcion al producto'
        } else if (descripcion.value.length < 20){
            errores.descripcion = 'La descripción debe tener al menos 20 caracteres'
        }

        if(precio.value === '' || precio.value === null){
            errores.precio = 'Debes agregar un precio al producto'
        }

        if(imagen.value === null){
            errores.imagen = 'Debes agregar una imagen'
        }

        if(Object.keys(errores).length >= 1 ){

            e.preventDefault();

            nombreError.innerHTML = '<li>' + errores.nombre + '</li>'
            artistaError.innerHTML = '<li>' + errores.artista + '</li>'
            descripcionError.innerHTML = '<li>' + errores.descripcion + '</li>'
            precioError.innerHTML = '<li>' + errores.precio + '</li>'
            imagenError.innerHTML = '<li>' + errores.imagen + '</li>'

        } else {
            
            form.submit()

        }


    })

})