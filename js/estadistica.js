/*Limpiar formulario*/
function limpiarFormulario(){
    document.getElementById("miFormDiscount").reset();
}


function validateForm(elemento,valueElement){
    if (valueElement === "") {
        elemento.classList.toggle("main__color--input");
        let placeholder = elemento.placeholder;
        elemento.placeholder = "Por favor ingrese un valor";
        
        /*Quitar la clase cuando se selecciona el input*/
        elemento.addEventListener("click", () => {
            if (elemento.classList.toggle("main__color--input") === true) {
                elemento.classList.toggle("main__color--input");
                
            }
        })
    }
}

function convertoToArray(cadena){
    return cadena.split(",");
}

function converStringToNumber(arrayString){
    return arrayString.map(number => Number(number));
}

//Promedio
function promedio(valueArr){
    //Sumando datos en el array
    const suma = valueArr.reduce((value,sum = 0) => {
        sum = sum + value;
        return sum;
    })
    const promedio = suma / valueArr.length;
    return promedio;
}

//---Mediana
function calcularMedianaAritmetica(listas){
    var valueMediana = 0;
    listas = listas.sort();
    //Validamos si es par o impar
    if (!esPar(listas.length)) {
        const positionMediana = Math.ceil(listas.length / 2);
        valueMediana = listas[positionMediana - 1];
    }
    else
    {
        const positionMediana = (listas.length / 2) - 1;
        const promValueMediana = promedio([listas[positionMediana], listas[positionMediana + 1]]);
        valueMediana = promValueMediana;
    }
    return valueMediana;
}

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    }
    else
    {
        return false;
    }
}

//---Moda
var DictionaryNumber = {};
function calcularModaAritmetica(lista){
    //Crea diccionario
    for (let i = 0; i < lista.length; i++) {
        if (DictionaryNumber[lista[i]] == undefined) {
            DictionaryNumber[lista[i]] = 1;
        }
        else
        {
            DictionaryNumber[lista[i]] += 1;
        }
    }

    //Crea lista de data
    var listaMayor = [];
    var listaName = [];
    for (let number of Object.keys(DictionaryNumber)) {
        listaMayor.push(DictionaryNumber[number]);
        listaName.push(number);
    }
    //Calculando el mayor
    var positionMax = listaMayor.indexOf(Math.max(...listaMayor));
    return listaName[positionMax];
}


function generatePromedio(variableActive,valueArray){
    
    if (variableActive > 0) {
        const buttonPromedio = document.getElementById("buttonPromedio");
        //Agregar la lista al html
        const promToHtml = document.querySelector(".agg__response--promedio");
        buttonPromedio.addEventListener("click",() => {
            contProm += 1;
            const valuePromedio = promedio(valueArray);
            promToHtml.innerHTML = `
            <div class="main__Article--response">
                <p>El promedio de la lista agregada es: <b>${valuePromedio}</b></p>
            </div>
            `;
        })

    }
}

function generateMediana(variableActive,valueArray){
    if (variableActive > 0) {
        const buttonMediana = document.getElementById("buttonMediana");
        //Agregar la lista al html
        const promToHtml2 = document.querySelector(".agg__response--mediana");
        buttonMediana.addEventListener("click",() => {
            contProm += 1;
            const valueMediana = calcularMedianaAritmetica(valueArray);
            promToHtml2.innerHTML = `
            <div class="main__Article--response">
                <p>La mediana de la lista agregada es: <b>${valueMediana}</b></p>
            </div>
            `;
        })

    }
}

function generateModa(variableActive,valueArray){
    if (variableActive > 0) {
        const buttonModa = document.getElementById("buttonModa");
        //Agregar la lista al html
        const promToHtml3 = document.querySelector(".agg__response--moda");
        buttonModa.addEventListener("click",() => {
            contProm += 1;
            const valueModa = calcularModaAritmetica(valueArray);
            promToHtml3.innerHTML = `
            <div class="main__Article--response">
                <p>La moda de la lista agregada es: <b>${valueModa}</b></p>
            </div>
            `;
        })

    }
}

function validateClass(claseEsp,claseDelete){
    if (document.querySelector(claseEsp)) {
        const promToHtml = document.querySelector(claseDelete);
        promToHtml.innerHTML = ``;
    }
}

var variableActive = 0;
var contProm = 0;
const buttonGenerar = document.getElementById("buttonGenerar");
buttonGenerar.addEventListener("click", () => {
    const amountList = document.getElementById("amountlist");
    const valueAmountList = amountList.value;
    if (valueAmountList != "") {
        //Convertir a array
        let arrayValue = convertoToArray(valueAmountList);
        //Convertir array de String a Number
        let arrayValueNumber = converStringToNumber(arrayValue);

        //Agregar la lista al html
        const listToHtml = document.querySelector(".main__list--create");
        listToHtml.innerHTML = `
            <h3>Lista generada</h3>
            <div class="main__list--integrate">
                <p>[${arrayValueNumber}]</p>
            </div>
        `;
        variableActive += 1;
        const agregarClase = document.querySelectorAll(".esconde");
        agregarClase.forEach(value => {
            value.classList.toggle("agrega");
        })
        validateClass(".main__Article--response",".agg__response--promedio");
        generatePromedio(variableActive,arrayValueNumber);
        validateClass(".main__Article--response",".agg__response--mediana");
        generateMediana(variableActive,arrayValueNumber);
        validateClass(".main__Article--response",".agg__response--moda");
        generateModa(variableActive,arrayValueNumber);
    }
    else
    {
        validateForm(amountList,valueAmountList);
        //amountList.placeholder = "";
    }
    limpiarFormulario();

})

