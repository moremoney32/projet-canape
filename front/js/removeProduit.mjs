/**
 * function qui supprime les elements de la page panier
 * @params {array} []
 * @return {array}
 */


import { totalArticlesPrix } from "./totalArticlesPrix.mjs"


export function removeProduit(changesProduit){


    let  arraysOfremoves = JSON.parse(localStorage.getItem("produitId"))

    let articles = document.querySelectorAll(".cart__item")


    articles.forEach(element => {

      element.addEventListener("click",(event)=>{

         if(event.target !== event.currentTarget){

          let targetClass = event.target.className;

            for(let i =0; i< arraysOfremoves.length; i++){


              if(targetClass === "deleteItem" && arraysOfremoves[i]._id === element.dataset.id && arraysOfremoves[i].color === element.dataset.color){


                  changesProduit.filter((produitElement)=>{
                   
                    if(arraysOfremoves[i]._id.includes(produitElement._id) && arraysOfremoves[i].color.includes(produitElement.color)){
                    return ( element.remove(),
                      arraysOfremoves.splice(i,1),
                   changesProduit.splice(i,1),localStorage.setItem("produitId", JSON.stringify(arraysOfremoves)))
                   
                    }
                   
                    })

               return totalArticlesPrix(changesProduit)

              }
            
            
            }
         }

      })
        
    });
  
}