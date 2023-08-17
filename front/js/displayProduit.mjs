/***
 * function qui affiche les produits dea kanape en connaissant leur id
 * @params {array} arrayOfproduit,arrayEnvoi
 * @return {function} render
 */

import { envoiProduit } from "./envoiProduit.mjs";
import { render } from "./render.mjs"


export function displayProduit(arrayOfproduit,arrayEnvoi){

    let produitHTML = ""

    arrayOfproduit.forEach((arrayproduit)=>{


      produitHTML =`


      <article>
      <div class="item__img">
         <img src="${arrayproduit.imageUrl}" alt="${arrayproduit.altTxt}"> 
      </div>
      <div class="item__content">
  
        <div class="item__content__titlePrice">
          <h1 id="title">${arrayproduit.name} </h1>
          <p>Prix : <span id="price">${arrayproduit.price}</span>€</p>
        </div>
  
        <div class="item__content__description">
          <p class="item__content__description__title">Description :</p>
          <p id="description">${arrayproduit.description} </p>
        </div>
  
        <div class="item__content__settings">
          <div class="item__content__settings__color">
            <label for="color-select">Choisir une couleur :</label>
            <select name="color-select" id="colors">
                <option value="">--SVP, choisissez une couleur --</option>
                ${arrayproduit.colors.map((produit)=>{
  
             return ` <option value="${produit}">${produit}</option>`
                            
  
                })}
                       
            </select>
          </div>
  
          <div class="item__content__settings__quantity">
            <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
            <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
          </div>
        </div>
  
        <div class="item__content__addButton">
          <button id="addToCart">Ajouter au panier</button>
        </div>
  
      </div>
    </article>
     
      
      `
    })


    render(document.querySelector(".item"),produitHTML).then((response)=>{

          if(response === "noeud de DOM ajoute"){

            return envoiProduit(arrayEnvoi)
          }
    })
   
}