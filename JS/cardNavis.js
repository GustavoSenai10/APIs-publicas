'use strict'

export function getNavis() {

    fetch("https://swapi.dev/api/starships/?page=1")
    .then((response) => response.json())
    .then((responseJson) =>
        responseJson.results.map((navis)=>addNavis(navis))
    )
    .catch((error)=> console.log(error));

}

function addNavis(navis){
    const navisContainer = `
    <div class="container_card_navis">
        <h1>${navis.name}</h1>
        <div class="imagem-container">
        <img src="https://starwars-visualguide.com/assets/img/starships/${navis.url.replace
        (
            /\D/g,
            ""
            )}.jpg" alt="${navis.name}">
    </div>
        <div class="info-container">
            <h2>ABOUT</h2>
            <div class="info-contant">
                <h3>Nome: ${navis.name}</h3>
                <h3>idade: ${navis.model}</h3>
                <h3>Gender:${navis.cargo_capacity}</h3>
            </div>
        
        </div>
    </div>
    
    `
    
     const div = document.getElementsByClassName('card_navis')[0];
    div.insertAdjacentHTML('beforeend',navisContainer)
}
