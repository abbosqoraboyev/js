const elForm = document.querySelector(".form")
const elInput = document.querySelector(".input")
const elResult = document.querySelector(".result")

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = elInput.value
    
    if(inputValue === "1"){
        elResult.textContent = "Dushanba"
    } else if (inputValue === "2"){
        elResult.textContent = "Seshanba"
    } else {
        elResult.textContent = "7 gacha bo'lgan son kiritng"
    }
   
})