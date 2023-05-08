'use strict'

export function getpersonagens() {

    fetch("https://swapi.dev/api/people/?page=5")
    .then((response) => response.json())
    .then((responseJson) =>
        responseJson.results.map((personagens)=>addPrsonagens(personagens))
    )
    .catch((error)=> console.log(error));

}
function addPrsonagens(personagens){
    const personagensContainer = `
    <div class="container_card_personagens">
        <h1>${personagens.name}</h1>
        <div class="imagem-container">
            <img src="https://starwars-visualguide.com/assets/img/characters/${personagens.url.replace
            (
                /\D/g,
                ""
                )}.jpg" alt="${personagens.name}">
        </div>
        <div class="info-container">
            <div class="info-contant">
                <h3>Nome: ${personagens.name}</h3>
                <h3>idade: ${personagens.birth_year}</h3>
                <h3>Gender: ${personagens.gender}</h3>
                <h3>height: ${personagens.height}</h3>
            </div>
        
        </div>
    </div>
    
    `
    
     const div = document.getElementsByClassName('card_personagens')[0];
    div.insertAdjacentHTML('beforeend',personagensContainer)
}
