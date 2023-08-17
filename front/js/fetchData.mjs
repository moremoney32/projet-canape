/***
 * function qui recupere qui traite l url 
 * @params {string} url
 * @return {promise}
 */


export function fetchData(url){

    
    return new Promise((resolve, reject)=>{

          fetch(url)
          .then((response)=>{
              
               return response.json();
              
          }).then((result)=>{

               return resolve(result);

          }).catch((error)=>{

               return console.log(error);

          })
       

    })
}