
import { displayKanape } from "./displayKanape.mjs"
import { fetchData } from "./fetchData.mjs"

document.addEventListener("DOMContentLoaded",()=>{
  
    fetchData("http://localhost:3000/api/products").then((result)=>{
        
         displayKanape(result)
        
    })
   
})