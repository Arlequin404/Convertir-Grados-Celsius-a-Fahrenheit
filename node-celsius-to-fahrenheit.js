// Programa en JavaScript para convertir grados Celsius a Fahrenheit

/**
 * Convierte grados Celsius a Fahrenheit usando la fórmula F = C * 9/5 + 32.
 * 
 * @param {number} celsius - Grados Celsius.
 * @returns {number} - Grados Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Ejemplo de uso
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);
