const propiedades_alquiler = [
	{
		titulo: "Apartamento en el centro de la ciudad",
		src: "./assets/img/centro_ciudad.jpg",
		descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo lo que necesitas.",
		ubicacion: "Manuel de Salas 555, Ñuñoa, Santiago",
		habitaciones: 2,
        baños: 2,
        precio: 2000,
		smoke: false,
		pets: true,
        tipo: "alquiler",
	},

    {
		titulo: "Apartamento luminoso con vista al mar",
		src: "./assets/img/vista_mar.jpg",
		descripcion: " Este hermoso apartamento ofrece vistas impresionantes al mar, donde además constantemente es posible avistar delfines nadando.",
        ubicacion: "El Tabito 780, Algarrobo, Valparaíso",
		habitaciones: 3,
		baños: 3,
		precio: 2500,
		smoke: true,
		pets: true,
		tipo: "alquiler",
	},

    {
		titulo: "Condominio moderno en zona residencial",
		src: "./assets/img/moderno.jpg",
		descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial, con accesos controlados y seguridad 24/7",
        ubicacion: "Cerro Paranal 730, Antofagasta",
		habitaciones: 2,
		baños: 2,
		precio: 2200,
		smoke: false,
		pets: false,
		tipo: "alquiler",
	},      
];


const container = document.querySelector("#propiedades-alquiler");
for (let item of propiedades_alquiler) {
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
				<p class="mb-1 text-${item.smoke ? 'success' : 'danger'}">${item.smoke ? ' <i class="fas fa-smoking"></i> Se permite fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar  '} </p>
				<p class="mb-1 text-${item.pets ? 'success' : 'danger'}"> ${item.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : ' <i class="fas fa-ban"></i> No se permiten mascotas'} </p>
			</div>
		</div>
	</div>`

   	
}
