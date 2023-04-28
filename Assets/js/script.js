var url = "https://digimon-api.vercel.app/api/digimon"

var contenido = document.querySelector("#contenido")

let i=0;

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)

    for (item of datos){

      contenido.innerHTML += `
      <div class="tarjeta">
        <div class="card bg-dark text-white">
          <img src="${item.img}" class="card-img-top img-normal" >
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p>${item.level}</p>
          </div>
        </div>
      </div> 
      `
       i++
}})


