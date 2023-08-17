/**
 * function qui qffiche les kanape dans la page d accueil
 * @params {array} arrayOfkanape
 * @return {function} render
 */
import {render} from "./render.mjs"

export function displayKanape(arrayOfkanape){

    let kanapeHTML = ""

    arrayOfkanape.forEach((kanape)=>{

        kanapeHTML += `
        
        <a href="./product.html?id=${kanape._id}">
        <article>
          <img src="${kanape.imageUrl}" alt="${kanape.name}">
          <h3 class="productName">${kanape.altTxt}</h3>
          <p class="productDescription">${kanape.description}</p>
        </article>
      </a> 
        
        `
    })

    return render(document.querySelector("#items"),kanapeHTML)
}