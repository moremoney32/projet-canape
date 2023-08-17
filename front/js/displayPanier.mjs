/**
 * function qui affiche les paniers
 * @params {array}arrayOfpanier
 * 
 * @return {function} render
 */

import {render} from "./render.mjs"

import { totalArticlesPrix } from "./totalArticlesPrix.mjs"

import { changesQuantity } from "./changesQuantity.mjs"
import { removeProduit} from "./removeProduit.mjs"
import { formulairePanier } from "./formulairePanier.mjs"

export function displayPanier(arrayOfpanier){


    let panierHTML = ""

    arrayOfpanier.forEach((panier)=>{
     

      panierHTML +=`


      <article class="cart__item" data-id="${panier._id}" data-color="${panier.color}">
      <div class="cart__item__img">
        <img src="${panier.imageUrl}" alt="${panier.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${panier.name}</h2>
          <p>${panier.color}</p>
         
           <p>${panier.price}</p>       
         
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" data-id="${panier._id}" data-color="${panier.color}" name="itemQuantity" min="1" max="100" value="${panier.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>

      
      `
      totalArticlesPrix(arrayOfpanier)
     

    })

    

    return  render(document.querySelector("#cart__items"),panierHTML).then((response)=>{

      if(response === "noeud de DOM ajoute"){

       changesQuantity(arrayOfpanier)
       
      removeProduit(arrayOfpanier), formulairePanier()
      }
    
      
  
})
  

 

 

}