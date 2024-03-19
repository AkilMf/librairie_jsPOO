import { Filtre } from './Filtre.js';
import { livres } from './livres.js';
import { Livre } from './Livre.js';
export class Tuile{

    #indice;

    constructor(el){

        this._el = el;
        this.#indice = this._el.dataset.jsIndice;
        this._elModal = document.querySelector('[data-js-modal]');
        this._elModalPanier = document.querySelector('[data-js-panier]');
        this._elHtml = document.documentElement;
        this._elBody = document.body;
        
        this.#init();
    }

    #init(){
        
        this._el.addEventListener('click', function(e){
            
            let elTarget = e.target;
            if (elTarget.tagName == 'BUTTON' ){
                
                e.stopPropagation();
                this.#sauvegardeLocalStorage()
                
            }
            else{
                this.#injectTuileLivre();
            }
            
        }.bind(this))
    }

    /**
     * sauvegarde des livres ajouté dans le localStorage
     */
    #sauvegardeLocalStorage(){
        let aLivre,
            objLivre ={};
        if(!localStorage.livres){
            aLivre =[];
        }else{
            aLivre = JSON.parse(localStorage.livres)
        }
        for( let i = 0 ; i < livres.length; i++){
            if(this.#indice == livres[i].indice){
                objLivre = {
                    titre: livres[i].titre,
                    prix: livres[i].prix
                };

                //  si le nouveau obj{livre} existe  dans le panier
                let objTrouvee = aLivre.some(function(obj) {
                    return obj.titre == objLivre.titre && obj.prix == objLivre.prix;
                });
                if (!objTrouvee) {
                    aLivre.push(objLivre)
                }
            }
        }
        
        localStorage.setItem('livres', JSON.stringify(aLivre));
    }
    

    #afficheModal(){
        this._elModal.classList.replace('modal--ferme','modal--ouvert');
        //hide le scroll en Y
        this._elHtml.classList.add('overflow-y-hidden');
        this._elBody.classList.add('overflow-y-hidden');

        this._elModal.addEventListener('click', this.#fermeModal.bind(this));
    }


    #fermeModal(){
        this._elModal.classList.replace('modal--ouvert','modal--ferme');
        this._elModal.style.display = "block";

        // re affiche le scroll en Y
        this._elHtml.classList.remove('overflow-y-hidden');
        this._elBody.classList.remove('overflow-y-hidden');

        // Suppression de l'event Click ajouté sur le Modal
        this._elModal.removeEventListener('click', this.#fermeModal);
    }

    /**
     * Injecte la Tuile de livre dans le Modal livre
     */
    #injectTuileLivre(){
        for(let i = 0 ; i<livres.length; i++){
            if(this.#indice == livres[i].indice){
                let dom = ` <img src="${livres[i].image}" alt="${livres[i].titre}">
                            <div class="text-container">
                                <p>Titre : ${livres[i].titre}</p>
                                <p>Auteur: ${livres[i].auteur}</p>
                                <p>Editeur: ${livres[i].editeur}</p>
                                <p>Pages : ${livres[i].pages}</p>
                                <p>${livres[i].description}</p>
                            </div> `;

                this._elModal.firstElementChild.lastElementChild.innerHTML = dom;
                this.#afficheModal();
            }
        }
    }

    
}