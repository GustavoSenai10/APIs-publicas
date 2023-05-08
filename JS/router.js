'use strict'

import {getpersonagens} from './cardPersonagens.js'
import {getNavis} from './cardNavis.js'
import {getPlanetas} from './cardPlanetas.js'

const routes = {
    '/'             :   '/pages/home.html',
    '/navis'        :   '/pages/navis.html',
    '/personagens'  :   '/pages/personagens.html',
    '/planetas'     :   '/pages/planetas.html',
    

}



const route = async () =>{

    window.event.preventDefault()
    
    window.history.pushState({},"",window.event.target.href)
    
    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/personagens'){
        getpersonagens()
    }
    
    if(window.location.pathname == '/navis'){
        getNavis()
    }

    if(window.location.pathname == '/planetas'){
        getPlanetas()
    }
}


window.route = route