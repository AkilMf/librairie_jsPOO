import { livres } from "./livres.js";
import  { Livre } from './Livre.js'
import  { Filtre } from './Filtre.js'
import { Tuile } from "./Tuile.js";
import { Panier } from "./Panier.js";
import {valideFormatLivres} from "../tests/livres.test.js";


window.addEventListener('DOMContentLoaded',function(){
    
     
    let elContainer = document.querySelector('[data-js-livres]'),
        elsFiltre = document.querySelectorAll('[data-js-filtre]'),
        elsPanier = document.querySelectorAll('[data-js-panier]');
       
        
    // Livres
    for (let i = 0; i < livres.length; i++) {
        livres[i].elParent = elContainer;
        livres[i].indice = i;
        
    }

    // Affichage des 12 premiers livres au chargement de page
    for ( let i = 0 ; i < 12 ; i++) {
        let livre1 = new Livre(livres[i]);
        livre1.injecteLivres;     
    }

    //Filtre
    for (let i = 0; i < elsFiltre.length; i++) {    
        new Filtre(elsFiltre[i]);
    }

    //Panier
    for (let i = 0; i < elsPanier.length; i++) {    
        new Panier(elsPanier[i]);
    }

    // Test de validation de livres
    valideFormatLivres();

})