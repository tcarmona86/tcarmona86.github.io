const propiedades_venta = [
        {
		titulo: "Villa de lujo en zona exclusiva",
		src: "./assets/img/villa.jpg",
		descripcion: "Esta villa de lujo está ubicada en un exlusivo sector de Lo Barneche, cuenta con amplios espacio y toda la privacidad que necesitas.",
        ubicacion: "Rubo al cerro 750, Lo Barnechea, Santiago",
		habitaciones: 8,
		baños: 10,
		precio: 15000,
		smoke: false,
		pets: false,
		tipo: "venta",
	},
	
	{
		titulo: "Casa Rodante de lujo",
		src: "./assets/img/casa_rodante.jpg",
		descripcion: "Casa rodante de lujo, totalmete equipada para vivir tus aventuras",
		ubicacion: "Ruta B-400, Mejillones, Antofagasta",
		habitaciones: 3,
        baños: 1,
		precio: 1200,
		smoke: false,
		pets: true,
        tipo: "venta",
	},

    {
		titulo: "Apartamento de lujo",
		src: "./assets/img/exclusivo.jpg",
		descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial, cercano a viñas y reservas natrales",
        ubicacion: "Paseo Norte 19511, Peñalolen, Santiago",
		habitaciones: 5,
		baños: 3,
		precio: 5000,
		smoke: false,
		pets: false,
		tipo: "venta",
	},

]

const container = document.querySelector("#propiedades-venta");
for (let item of propiedades_venta) {
	container.innerHTML += `     
	<div class="col-md-3 mb-4">
		<div class="card h-100">
			<img src="${item.src}" class="card-img-top" alt="Imagen de ${item.titulo}"/>
			<div class="card-body column">
				<h5 class="card-title">${item.titulo}</h5>
				<p class="card-text">${item.descripcion}</p>
				<p class="mb-1"><i class="fas fa-map-marker-alt"></i> ${item.ubicacion}</p>
				<p class="mb-1"><i class="fas fa-bed"></i> ${item.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${item.baños} Baños</p>
				<p class="mb-1"><i class="fas fa-dollar-sign"></i> ${item.precio}</p>
				<p class="mb-1 text-${item.smoke ? 'success' : 'danger'}">${item.smoke ? ' <i class="fas fa-smoking"></i> Se permite fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar  '}</p>
				<p class="mb-1 text-${item.pets ? 'success' : 'danger'}"> ${item.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : ' <i class="fas fa-ban"></i> No se permiten mascotas'}</p>
			</div>
		</div>
	</div>`

   	
}