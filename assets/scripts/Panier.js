
export class Panier{

    constructor(el){
        this._el = el;
        this._elPanier = this._el.querySelector('[data-js-chariot]');
        this._elModalPanier = this._el.querySelector('[data-js-modalPanier]');

        this.#init();
    }

    #init(){
        this._elPanier.addEventListener('click', function(){
            this.#injecteModalPanier()
            this.#afficheModal();
        }.bind(this))
    }

    #afficheModal(){
        this._elModalPanier.classList.replace('modal--ferme','modal--ouvert');
        this._elModalPanier.addEventListener('click', this.#fermeModal.bind(this));
        
    }


    #fermeModal(){
        this._elModalPanier.classList.replace('modal--ouvert','modal--ferme');
        // Suppression de l'event Click ajouté sur le Modal
        this._elModalPanier.removeEventListener('click', this.#fermeModal);
        
    }

    #injecteModalPanier(){
        if(localStorage.getItem('livres')){
            let panierLocal = localStorage.getItem('livres'),
                aLivrePanier = JSON.parse(panierLocal),
                data = `<table>
                            <tr>
                                <th>${aLivrePanier.length >1? 'livres' : 'livrec'}</th>
                                <th>Prix</th>
                            </tr>`,
                prixTotal = 0;

            for (let i=0 ; i < aLivrePanier.length; i++){
                let objLivre = aLivrePanier[i];

                data+=` <tr>
                            <td>${objLivre.titre}</td>
                            <td>$${objLivre.prix} $</td>
                        <tr>`;
                prixTotal += objLivre.prix;

                
            }
            data += `   <tr>
                            <td>Total</td>
                            <td>${prixTotal} $</td>
                        </tr>
                    </table>`;
        this._elModalPanier.innerHTML = data;
            
        }
        else{
            let dom = `<p>il n'y aucun livre dans votre panier. </p>`;
            this._elModalPanier.innerHTML = dom;
        }
    }
}