/**
 * function qui change les quantites en fonction de son input 
 * @params {array}array
 * @return {array}array
 */

import { totalArticlesPrix } from "./totalArticlesPrix.mjs"


export function changesQuantity(arraysss){
    


 let array =  JSON.parse(localStorage.getItem("produitId"))
 
    let articl = document.querySelectorAll(".cart__item .itemQuantity")
    

    articl.forEach((article)=>{

        article.addEventListener("input",(event)=>{
            if( article.value <0 || article.length >=3){

                    alert("pas de quantites negatives et de nombres plus grand que 100")

                }
    
            for(let i =0; i<array.length; i++){
                   

                    if(array[i]._id === article.dataset.id && array[i].color === article.dataset.color){
                        

                             array[i].quantity = event.target.value
                             console.log(array[i].quantity)

                             arraysss.filter((element)=>{

                               

                                if(array[i]._id.includes(element._id) && array[i].color.includes(element.color)){
                                    

                                    return element.quantity = event.target.value,localStorage.setItem("produitId", JSON.stringify(array))
                                    
                                }
                    
                             })
                          
                            console.log(arraysss)
                              
                            
            
                           
                        return totalArticlesPrix(arraysss) 
                               
                }
            } 
                 
        })
    
    })
    
}