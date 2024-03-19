import { livres } from "./livres.js";
import { Livre } from "./Livre.js";
import { Tuile } from './Tuile.js';

export class Filtre{
    #type;

    constructor(el){
        
        this._el = el;
        this.#type = this._el.dataset.jsFiltre;
        this.elLivres = document.querySelector('[data-js-livres]')
        this._elUl = this._el.parentNode;

        this.#init();
    }

    #init(){

        this._el.addEventListener('click',this.#reset.bind(this));

        this._el.addEventListener('click',this.#filtre.bind(this));
    }

    /**
     * clear livres avant d afficher les nouveaux selon le filtre
     */
    #reset(){
        
        while (this.elLivres.firstChild) {
            this.elLivres.removeChild(this.elLivres.firstChild);
        }
    }
 
    /**
     * application des filtres
     */
    #filtre(){
       
        if (this.#type == 'nouveautes'){
            for (let i = 0; i < livres.length; i++){

                if(livres[i].nouveaute == true) {
                    let livre1 = new Livre(livres[i]);
                    livre1.injecteLivres;
                }
            }
        }
        if(this.#type == 'tous'){
            for (let i = 0; i < livres.length; i++){
                let livre1 = new Livre(livres[i]);
                livre1.injecteLivres;
            }
        }
        
        //les différentes catégories
        else{
            for (let i = 0; i < livres.length; i++){
                if(this._el.textContent == livres[i].categorie){
                    let livre1 = new Livre(livres[i]);
                    livre1.injecteLivres;
                }
            }
        }
    }
    
}
