console.log("hola");
const trabajos = [
	{
          title:"Lapsi",
          category: "Taller Producto",
          photo:"img/lapsi.png",
          description:"Asiento plegable para niños en transporte publico<br><br>Juan Contreras"
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
        {
          title:"Trofeo de la Tirana",
          category: "Estructuras y materiales",
          photo:"img/trofeo.png",
          description:"Trofeo del festival La Tirana Musical<br><br>Felipe Barría"
        },        
        {
          title:"Cafetera Giralt",
          category: "Taller producto",
          photo:"img/coffee.png",
          description:"Render de la Cafetera Giralt marca Roig<br><br>Felipe Barría"
        },
        {
          title:"DELUZIO",
          category: "Taller producto",
          photo:"img/kiosko.png",
          description:"Kiosko de providencia<br><br>Felipe Barría"
        },
        {
          title:"Banco apilable",
          category: "Estructura y materiales",
          photo:"img/silla.png",
          description:"Banco que puede aguantar hasta 100kg<br><br>Felipe Barría"
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