//Coste de la cena
const costeTotal = 120;
// Coste de las bebidas
const costeBebidas = 18;
//Número de comensales
const numeroComensales = 6;

//Cálculo de coste sin bebidas
const costeSinBebidas = costeTotal - costeBebidas;
//Cálculo de coste por comensales sin las bebidas
const costePorComensal = costeSinBebidas / numeroComensales;

//Resultado:
console.log(`El costo por comensal es de ${costePorComensal}`);
