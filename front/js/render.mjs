/** 
   * Fonction qui rend affiche du HTML dans le DOM
   * @param {domNode} domNode
   * @return {string} htmlElements
 */
 export function render(domNode, htmlElements){

    return new Promise((resolve)=>{
    

            requestAnimationFrame(()=>{

                    domNode.innerHTML = htmlElements;

                    resolve("noeud de DOM ajoute");

            }, domNode);

    });

}