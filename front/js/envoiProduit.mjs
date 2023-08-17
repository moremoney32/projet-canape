/**
 * function qui envoi le produit dans le panier
 * 
 * @arams {objet} {}
 * @return {[]} array
 */


export function envoiProduit(produitId){


   let produitIdTableau = JSON.parse(localStorage.getItem("produitId"))
  

   let selects = document.querySelector("#colors")

   let input = document.querySelector("#quantity")


   document.querySelector(".item__content__addButton").addEventListener("click",()=>{

           if(input.value >0 && input.value <= 100 && selects.value.length !==0){

         let produitColor =  Object.assign({}, produitId, {color: `${selects.value}`,quantity:parseInt(`${input.value}`)});
        
      if(produitIdTableau === null){

         produitIdTableau = []

         produitIdTableau.push(produitColor)

         localStorage.setItem("produitId", JSON.stringify(produitIdTableau))

        return produitIdTableau = JSON.parse(localStorage.getItem("produitId")),alert('produit ajoute au panier')

      }

      else if(produitIdTableau !== null){

            for(let i =0 ; i<produitIdTableau.length ;i++){
      
               if(produitIdTableau[i]._id === produitId._id && produitIdTableau[i].color === selects.value ){
                        
                 return produitIdTableau[i].quantity += parseInt(input.value),
                  
                    localStorage.setItem("produitId", JSON.stringify(produitIdTableau)),
      
                    produitIdTableau = JSON.parse(localStorage.getItem("produitId")),alert("ce produit a deja ete ajoute dans le panier la quantite sera augmentee")
      
               }
            }
         
      
               for(let i =0 ; i<produitIdTableau.length ;i++){
         
                  if(produitIdTableau[i]._id === produitId._id && produitIdTableau[i].color !== selects.value ||produitIdTableau[i]._id !== produitId._id){
         
      
                     produitIdTableau.push(produitColor)
      
                     localStorage.setItem("produitId", JSON.stringify(produitIdTableau))
      
                     return produitIdTableau = JSON.parse(localStorage.getItem("produitId")),alert("produit ajoute")
      
                  }
         }
           
         }


      }
      else{

         return alert("veuillez choisir une couleur, une quantite positive et inferieur a 101")
      }
      
      
   })

  
}