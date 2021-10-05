function calcDiscount(price,discount){
    return (price * (100 - discount)) / 100;
}

/*Limpiar formulario*/
function limpiarFormulario(){
    document.getElementById("miFormDiscount").reset();
}

function validateForm(elemento,valueElement){
    if (valueElement === 0) {
        elemento.classList.toggle("main__color--input");
        var placeholder = elemento.placeholder;
        if (elemento.classList.toggle("main__color--input") === false) {
            elemento.classList.toggle("main__color--input") === true;
            elemento.placeholder = "Por favor ingrese un valor";
        }
        
        /*Quitar la clase cuando se selecciona el input*/
        elemento.addEventListener("click", () => {
            if (elemento.classList.toggle("main__color--input") === true) {
                elemento.classList.toggle("main__color--input");
            }
        })
    }
}

const buttonCalc = document.getElementById("buttonCalc");
buttonCalc.addEventListener("click", () => {
    const price = document.getElementById("price");
    const discount = document.getElementById("discount");
    const priceValue = Number(price.value);
    const priceDiscount = Number(discount.value);
    /*Editar Selector*/
    const result = document.querySelector(".main__result");

    if (priceValue > 0 && priceDiscount > 0) {
        //Calculamos el descuento
        let valueFinish = calcDiscount(priceValue,priceDiscount);
        result.innerHTML = `
        <div class="main__discount--result">
            <p>El precio con descuento aplicado tiene un valor de: <b>$ ${valueFinish}</b></p>       
        </div>        `;
    }
    else
    {
        validateForm(price,priceValue);
        validateForm(discount,priceDiscount);

    }
    limpiarFormulario();
    
})