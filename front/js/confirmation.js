 

document.addEventListener("DOMContentLoaded",()=>{


    const confirmationId = window.location.search
    
    let confirmationIdSlice = confirmationId.slice(5)

    document.querySelector("#orderId").innerHTML = confirmationIdSlice


})