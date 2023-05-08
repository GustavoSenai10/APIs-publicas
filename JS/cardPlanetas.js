'use strict'

export function getPlanetas() {

    fetch("https://swapi.dev/api/planets/?page=1")
    .then((response) => response.json())
    .then((responseJson) =>
        responseJson.results.map((planetas)=>addPlanetas(planetas))
    )
    .catch((error)=> console.log(error));

}

function addPlanetas(planetas){
    const planetasContainer = `
    <div class="container_card_planetas">
        <h1>${planetas.name}</h1>
        <div class="info-container">
            <div class="imagem-container-Planeta">
            <img src="https://starwars-visualguide.com/assets/img/planets/${planetas.url.replace
            (
                /\D/g,
                ""
                )}.jpg" alt="${planetas.name}">
        </div>
            <div class="info-contant">
                <h3>Nome: ${planetas.name}</h3>
                <h3>idade: ${planetas.surface_water}</h3>
                <h3>Gender:${planetas.population}</h3>
            </div>
        
        </div>
    </div>
    
    `
    
     const div = document.getElementsByClassName('card_planetas')[0];
    div.insertAdjacentHTML('beforeend',planetasContainer)
}
