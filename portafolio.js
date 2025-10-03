console.log("hola");
const trabajos = [
	{
          title:"Lapsi",
          category: "Taller Producto",
          photo:"img/lapsi.png",
          description:"Asiento plegable<br><br>Juan Contreras"
        },
        {
        title:"Blitz cookies",
          category: "Taller Mercado",
          photo:"img/blitz.png",
          description:"Galletas para jugar ajedrez<br><br>Juan Contreras"
        },
        {
          title:"Lampara Flor",
          category: "Estructuras y materiales",
          photo:"img/lamp.png",
          description:"Lampara con petalos plegables<br><br>Juan Contreras"
        },
        {
          title:"Agarradera de madera",
          category: "Modelos y prototipos",
          photo:"img/handle.png",
          description:"Escultura de madera para abrir puertas sin tener contacto directo<br><br>Juan Contreras"
        },
]

 const parrafos = document.querySelector("#gary");
        trabajos.forEach((v) => {
          parrafos.innerHTML +=
           `<div class="gallery-item">
                    <img src="${v.photo}" alt="${v.category}">
                    <div class="gallery-overlay">
                        <h3>${v.title}</h3>
                        <p>${v.description}</p>
                    </div>
                </div>`;
        });