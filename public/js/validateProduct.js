window.addEventListener('load', function(){

    console.log('script funcionando')


    let form = document.querySelector('form');
    let nombre = document.querySelector('input#name');
    let artista = document.querySelector('input#artist');
    let descripcion = document.querySelector('input#description');
    let precio = document.querySelector('input#price');
    let imagen = document.querySelector('input#image');
    let button = document.querySelector('button');

    button.addEventListener('click', function(e){


        let errores = [];



        if (nombre.value === '') {
            errores.push('Debes ponerle un nombre al producto')
        } else if (nombre.value.length < 5){
            errores.push('El nombre del producto debe tener más de 5 caracteres')
        }


        if (artista.value === '') {
            errores.push('Debes ponerle un nombre al artista o marca')
        } else if (artista.value.length < 5){
            errores.push('El nombre del artista o marca debe tener más de 5 carácteres')
        }


        if (descripcion.value === '') {
            errores.push('La descripción no puede estar vacía')
        } else if (descripcion.value.length < 20){
            errores.push('La descripción debe tener al menos 20 caracteres')
        }


        if(precio.value === ''){
            errores.push('El producto tiene que tener un precio')
        }


        if(imagen.value === null){
            errores.push('Debes agregar una imágen al producto')
        }




        if(errores.length > 0){

            e.preventDefault();

            let ulErrores = document.querySelector('div.errores-front ul')

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }

        } else {
            button.submit()
        }

    })

})