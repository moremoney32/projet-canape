/****
 * 
 * function qui somme les articles et les prix
 * @params {array} arrayOftotal
 * @return {function} render
 */

export function totalArticlesPrix(arrayOftotal){

    let totalArticle = []
    let totalPrix = []


  totalArticle = arrayOftotal.map(item =>{

      return parseInt(item.quantity)

  }).reduce((prev, curr) => prev + curr, 0)

  totalPrix = arrayOftotal.map(item =>{

        return parseInt(item.quantity)*item.price

  } ).reduce((prev, curr) => prev + curr, 0)

       return document.querySelector(".cart__price").innerHTML = `<p>Total (<span id="totalQuantity">${totalArticle}</span> articles) : <span id="totalPrice">${totalPrix}</span> €</p>`


}