import { Filtre } from './Filtre.js';
import { livres } from './livres.js';
import { Tuile } from './Tuile.js';


export class Livre{

    
    #titre;
    #auteur;
    #description;
    #prix;
    #editeur;
    #pages;
    #image;
    #nouveaute;
    #categorie;
    #elParent;
    #indice;

    constructor(livre){

        this.#titre = livre.titre;
        this.#auteur = livre.auteur;
        this.#description = livre.description;
        this.#prix = livre.prix;
        this.#editeur = livre.editeur;
        this.#pages = livre.pages;
        this.#image = livre.image;
        this.#nouveaute = livre.nouveaute
        this.#categorie = livre.categorie;
        this.#elParent = livre.elParent;
        this.#indice = livre.indice;
    }


    #injecteLivre(){ 
        let dom = ` <article class="grille__item livre" data-js-livre data-js-indice=${this.#indice}>
                        <img src="${this.#image}" alt="${this.#titre}" class="livre__image">
                        <div>
                            <p>${this.#titre}</p>
                            <p><strong>${this.#prix} $</strong></p>
                            <button>Ajouter</button>
                        </div>
                    </article>`;
        this.#elParent.insertAdjacentHTML('beforeend',dom);

        new Tuile(this.#elParent.lastElementChild);
    }

    get injecteLivres(){
        return this.#injecteLivre();
    }



}