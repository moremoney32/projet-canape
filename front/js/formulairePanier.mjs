/**
 * function qui traite le formulaire 
 * @ return {id}
 */

export function formulairePanier(){

  
  let panierProduit = []

    //CONTRAINTES DU FORMULAIRES
document.querySelector("#order").addEventListener("click",function(e){ 
  
     ///////recuperation du prenom
    
     let prenom = document.getElementById("firstName");
     let prenomErreur = document.getElementById("firstNameErrorMsg")
     let regexPrenom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
       if(!prenom.value||prenom.value.length<2) {
           e.preventDefault()
           prenomErreur.textContent="prenom manquant";
     }
     else if(regexPrenom.test(prenom.value) === false){
      e.preventDefault()
      prenomErreur.textContent="mauvaise syntaxe du prenom";
  }
     else{
       e.preventDefault()
         prenomErreur.textContent=""
   
     }


    /////nom
    let nom =document.getElementById("lastName");
    let nomErreur=document.getElementById("lastNameErrorMsg")
    let regexNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
    if(!nom.value||nom.value.length<2) { 
        e.preventDefault(); 
      nomErreur.textContent="nom manquant";
    }
    else if(regexNom.test(nom.value) === false){
      e.preventDefault()
      nomErreur.textContent="mauvaise syntaxe du nom";
  }
    
    else{ 
    e.preventDefault(); 
     
      nomErreur.textContent=""
    }
    
   
    ///recuperation adresse
    let adresse= document.getElementById("address");
    let adresseErreur=document.getElementById("addressErrorMsg")
    if(!adresse.value||prenom.value.length<2) {
        e.preventDefault()
        adresseErreur.textContent="adresse manquant";
    }
    else{
    e.preventDefault()
      adresseErreur.textContent="";
    
    
    }
    ////ville

    let ville= document.getElementById("city");
    let villeErreur=document.getElementById("cityErrorMsg")
    let regexVille = /^([a-zA-Z\u0080-\u024F]+(?:(\. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/
    if(!ville.value||prenom.value.length<2) {
        e.preventDefault()
        villeErreur.textContent="ville manquant";
    }
   
    else{
    e.preventDefault()
      villeErreur.textContent="";
    
    
    }

     /////recuperation de l'email
    
     let email= document.getElementById("email");
     let rejectEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     let emailErreur=document.getElementById("emailErrorMsg")
     if(!email.value) {
         e.preventDefault()
         emailErreur.textContent="email manquant";
         
     }
     else if(rejectEmail.test(email.value) === false){
         e.preventDefault()
         emailErreur.textContent="mauvaise email";
     }
     else{
         e.preventDefault()
         emailErreur.textContent=""
     }
    //confirmation de linscription
    
    if(!prenom.value === false && regexPrenom.test(prenom.value) === true && !nom.value === false && regexNom.test(nom.value) === true && !email.value === false && rejectEmail.test(email.value) === true && !adresse.value ===false && !ville.value ===false){
    
    e.preventDefault();
    const recuperationPanier = JSON.parse(localStorage.getItem("produitId"))
    console.log(recuperationPanier)
    recuperationPanier.forEach((panier)=>{
      panier._id
     console.log(panier._id)

     panierProduit .push(panier._id)
     console.log( panierProduit )

    const recuperationFormulaire = {
  
      contact:{
        firstName: prenom.value,
        lastName: nom.value,
        address: adresse.value,
        city: ville.value,
        email: email.value
      },
      products:  panierProduit 
    }
    console.log(recuperationFormulaire)
    
   fetch("http://localhost:3000/api/products/order",{

    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(recuperationFormulaire)
   }).then((response)=>{
    console.log(response)
     return response.json()
   }).then((result)=>{
    console.log(result)

   console.log(result.orderId)
   let confirmation = "./confirmation.html?.id="+result.orderId
   
   return  window.location.href =  confirmation ,
   localStorage.clear(), 

   prenom.value = "",
    nom.value = "",
    adresse.value = "",
    ville.value = "",
    email.value = ""


   })

      })
    }
  
    // else{
    // e.preventDefault();
    // alert('veuillez remplir mieux le formulaire')
    
    // }
    
    
    })
    
}


