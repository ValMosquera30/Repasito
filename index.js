console.log("HOLA");

function aleatorio() {

}


const aleatori = (a, b) => {
    console.log(a * b);
}

aleatori(3, 6);

const multiplicacion = (numero) => {

    // let valor = document.getElementById("hola");

    for (let i = 1; i <= 10; i++) {
        // console.log(`${numero} X ${i} = ${i*numero}`);
        // valor.innerHTML =  `${numero} X ${i} = ${i*numero}`;
        document.write('<br>' + `${numero} X ${i} = ${i * numero}`);
        // console.log(i + 'X' + numero + '=' + (i*numero));
    }


    
}

// multiplicacion(9);


const invertir = (Texto) => {
    let Textonuevo = "";
    for (let i = Texto.length - 1; i >= 0; i--) {
        Textonuevo += Texto[i];
    }
    console.log(Textonuevo);
    // return Textonuevo;
}

// invertir("Hola");

const calculo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(5 * 2);
        }, 2000)
    })
}

const numero = async () => {
    let valor = await calculo();
    console.log(valor);
}

// numero();

const calcularNotas = () => {

    let Nota1 = parseFloat(document.getElementById("nota1").value);
    let Nota2 = parseFloat(document.getElementById("nota2").value);
    let Nota3 = parseFloat(document.getElementById("nota3").value);


    let valor = ((Nota1 + Nota2 + Nota3) / 3).toFixed(1);

    let resultado = "";

    switch (true) {
        case (valor < 5):
            resultado = "Bajo"
            break;
        case (valor >= 5 || valor <= 7):
            resultado = "Aprobado"
            break;
        default:
            resultado = "Notable"
            break;
    }

    const tardar = () => {
        return new Promise(() =>{
            setTimeout(() => {
                document.getElementById("valores").innerHTML = `El promedio del estudiante es: ${valor} y el resultado es: ${resultado}` 
            },4000)
        })
    }
    
    const value = async () => {
        let imprimir = await tardar();
        console.log(imprimir);
    }

    // document.getElementById("valores").innerHTML = `El promedio del estudiante es: ${valor} y el resultado es: ${resultado}`
    value();

}
