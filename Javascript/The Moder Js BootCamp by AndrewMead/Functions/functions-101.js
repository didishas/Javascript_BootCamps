// Challenge Area
// Convert FarenheittoCelsius

let convertFahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let convertFahrenheitToKelvin = function(fahrenheit) {
    return (fahrenheit + 459.67) * 5 / 9;
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))