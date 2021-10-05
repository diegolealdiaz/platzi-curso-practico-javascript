//Funciones
/*Funciones calculos triangulo*/
//Perimetro triangulo
function perimetroTriangulo(ladoTriangulo){
    return ladoTriangulo * 3;
}

//Area triangulo
function areaTriangulo(base, altura){
    return ((base * altura) / 2);
}

/*funciones calculos circulo*/
const PI = Math.PI;
// Perimetro circulo
function perimetroCirculo(diametroCirculo) {
    return diametroCirculo * PI;
}

//Area circulo
function areaCirculo(radioCirculo) {
    return PI * (radioCirculo**2);
}

/*funciones calculos cuadrado*/
//Perimetro del cuadrado
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
} 

//Area del cuadrado
function areaCuadrado(ladoCuadrado1, ladoCuadrado2) {
    return ladoCuadrado1 * ladoCuadrado2;
}  

/*Limpiar formulario*/
function limpiarFormulario(){
    document.getElementById("miForm").reset();
}



//Seleccionando la figura
/*Triangulo*/
const triangle = document.getElementById("triangle");
/*Circulo*/
const circle = document.getElementById("circle");
/*Cuadrado*/
const square = document.getElementById("square");

function compareValidationBoxShadow(elementOne, elementTwo, elementThree){
    if (elementOne.classList.toggle("main__figure--select2") === false) {
        elementOne.classList.toggle("main__figure--select2");
    } 
    if (elementTwo.classList.toggle("main__figure--select2") == true) {
        elementTwo.classList.toggle("main__figure--select2");
    }
    if (elementThree.classList.toggle("main__figure--select2") === true) {
        elementThree.classList.toggle("main__figure--select2");
    }
}


function validationBoxShadow(figure){
    const  figures = ["triangle", "circle", "square"];
    const  elementFigures = [triangle, circle, square];
    const positionFigure = figures.indexOf(figure);
    var positionFigTwo;
    if (positionFigure == 1) {
        positionFigTwo = Math.abs(positionFigure - 3);
    }
    else
    {
        positionFigTwo = Math.abs(positionFigure - 2);
    }
    const positionFigThree = Math.abs(positionFigure - 1);
    compareValidationBoxShadow(elementFigures[positionFigure],elementFigures[positionFigTwo],elementFigures[positionFigThree]);
}

/*Agregando box-shadow triangulo*/
triangle.classList.toggle("main__figure--select2");

/*Click Traingulo*/
triangle.addEventListener("click", () => {
    /*Seleccionar Box-Shadow*/
    validationBoxShadow("triangle");
    /*Nombres*/
    document.querySelectorAll(".edit__figure").forEach(campo => {
        campo.innerHTML = "Triangulo";
    })
    /*Medidas calculo*/
    document.querySelector(".edit__medida1").innerHTML = "lado";
    document.querySelector(".edit__medida2").innerHTML = "altura";
    
    /*Cambiar valores*/
    document.querySelectorAll(".change--value").forEach( campo => {
        campo.innerHTML = "0";
    })

});



/*Click Circulo*/
circle.addEventListener("click", () => {
    /*Seleccionar Box-Shadow*/
    validationBoxShadow("circle");
    document.querySelectorAll(".edit__figure").forEach(campo => {
        campo.innerHTML = "Circulo";
    })
    /*Medidas calculo*/
    document.querySelector(".edit__medida1").innerHTML = "diametro";
    document.querySelector(".edit__medida2").innerHTML = "radio";

    /*Cambiar valores*/
    document.querySelectorAll(".change--value").forEach( campo => {
        campo.innerHTML = "0";
    })
    
});

/*Click Cuadrado*/
square.addEventListener("click", () => {
    /*Seleccionar Box-Shadow*/
    validationBoxShadow("square");
    document.querySelectorAll(".edit__figure").forEach(campo => {
        campo.innerHTML = "Cuadrado";
    })
    /*Medidas calculo*/
    document.querySelector(".edit__medida1").innerHTML = "lado vertical";
    document.querySelector(".edit__medida2").innerHTML = "lado horizontal";
    
    /*Cambiar valores*/
    document.querySelectorAll(".change--value").forEach( campo => {
        campo.innerHTML = "0";
    })
});



/*Obtener data para calcular perímetro y área*/
const btnEnviar = document.getElementById("btnEnviar");
if (btnEnviar != null) {
    btnEnviar.addEventListener("click", () => {
        const medida1 = document.getElementById("medida1");
        const medida2 = document.getElementById("medida2");
        const valueMedida1 = Number(medida1.value);
        const valueMedida2= Number(medida2.value);

        if (valueMedida1 != 0 && valueMedida2 != 0) {
            const figure = document.querySelector(".edit__figure").innerHTML;
            var perimetro;
            var area;
    
            switch (figure) {
                case "Triangulo":
                        console.log("t")
                        /*Calculando el perímetro del Triangulo*/
                        perimetro = perimetroTriangulo(valueMedida1);
                        /*Calculando el área del Triangulo*/
                        area = areaTriangulo(valueMedida1,valueMedida2);
                    break;
                case "Cuadrado":
                        console.log("c")
                        /*Calculando el perímetro del cuadrado*/
                        perimetro = perimetroCuadrado(valueMedida1);
                        /*Calculando el área del Triangulo*/
                        area = areaCuadrado(valueMedida1,valueMedida2);
                    break;
                case "Circulo":
                        console.log("cir")
                        /*Calculando el perímetro del circulo*/
                        perimetro = perimetroCirculo(valueMedida1);
                        /*Calculando el área del circulo*/
                        area = areaCirculo(valueMedida2);
                    break;
                default:
                    break;
            }
    
    
            /*Mostrando el resultado*/
            console.log(aggFlex.classList.toggle("main__figure--flex"));
            if (aggFlex.classList.toggle("main__figure--flex") === false) {
                const aggFlex = document.getElementById("aggFlex");
                aggFlex.classList.toggle("main__figure--flex");
                const aggFlex1 = document.getElementById("aggFlex1");
                aggFlex1.classList.toggle("main__figure--selectTwo");
                const aggFlex2 = document.getElementById("aggFlex2");
                aggFlex2.classList.toggle("main__figure--selectTwo");
            }
            const result = document.querySelector(".main__figure--selectedResult");
            result.innerHTML = `
                <h4>El resultado es: </h4>
                <div class="main__figure--result">
                    <p>El <b>perímetro</b> del <b class="edit__figure">triangulo</b> es: <b class="change--value">${perimetro} cm</b></p>
                    <p>El <b>área</b> el <b class="edit__figure">triangulo</b> es: <b class="change--value">${area} cm</b></p>
                </div>`; 
            
            let placeholder = medida1.placeholder;
            medida1.placeholder = "";
            medida2.placeholder = "";    
            limpiarFormulario()
        }
        else
        {
            if (valueMedida1 == 0) {
                const form1 = document.getElementById("medida1");
                const placeholder = form1.placeholder;
                console.log(placeholder);
                form1.placeholder = "Ingrese un valor"
                form1.classList.toggle("main__color--input");

                form1.addEventListener("click", () => {
                    if (form1.classList.toggle("main__color--input") == true) {
                        form1.classList.toggle("main__color--input");
                    }
                })
                
            }
            if (valueMedida2 == 0) 
            {
                const form2 = document.getElementById("medida2");
                const placeholder = form2.placeholder;
                console.log(placeholder);
                form2.placeholder = "Ingrese un valor";
                form2.classList.toggle("main__color--input");

                form2.addEventListener("click", () => {
                    if (form2.classList.toggle("main__color--input") == true) {
                        form2.classList.toggle("main__color--input");
                    }
                })
            }
            
        }

       
    })
}

