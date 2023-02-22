const formulario=document.querySelector('#formulario');
	const campoNombre=document.querySelector('#nombre');
	const campoApellido=document.querySelector('#apellido');
	const campoCorreo=document.querySelector('#correo');

  let objValidar={
		nombre:false,
		apellido:false,
		correo:false
	}

  formulario.addEventListener('submit',(ev)=>{
		ev.preventDefault()
		validar();
	});


  const validar=()=>{

		const nombre=campoNombre.value;
		const apellido=campoApellido.value;
		const correo=campoCorreo.value

		if(isNaN(nombre) && nombre.trim().length>0){
			objValidar.nombre=true
		}else{
			objValidar.nombre=false
		}

    if(isNaN(apellido) && apellido.trim().length>0){
			objValidar.apellido=true
		}else{
			objValidar.apellido=false
		}

		if(isNaN(correo) && correo.trim().length>0){
			objValidar.correo=true
		}else{
			objValidar.correo=false
		}

		const arrayValidar=Object.values(objValidar)


		const valida=arrayValidar.findIndex(item=>item==false);

		if(valida === -1){
			console.log('todo ok jose luis')
            //Todo a ido bien
		}

	

	}

    // const tabla = document.getElementById('tabla-peliculas');
    // tabla.innerHTML = '';
  
    // peliculas.forEach(function(pelicula) {
    //   const fila = tabla.insertRow();
    //   fila.insertCell().innerHTML = pelicula.titulo;
    //   fila.insertCell().innerHTML = pelicula.director;
    //   fila.insertCell().innerHTML = pelicula.anio;
    //   fila.insertCell().innerHTML = pelicula.genero;
    // });