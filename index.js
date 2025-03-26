function convertirEdad(edad) {
    let edadNumero = edad * "1";

    if (edadNumero >= 18) {
        console.log("Eres mayor de edad. ", edadNumero);
    }
    else {
        console.log("No eres mayor de edad. ", edadNumero);
    }

}

convertirEdad("20");// Eres mayor de edad. 20
convertirEdad("17");// No eres mayor de edad. 17
