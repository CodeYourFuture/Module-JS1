// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on


function calcularPrecoComIVA(precoOriginal) {
    // Taxa de IVA (20%)
    const taxaIVA = 0.20;
  
    // Calcula o novo preço com IVA
    const novoPreco = precoOriginal * (1 + taxaIVA);
  
    return novoPreco;
  }
  
  
  const precoOriginal = 50; // Preço original em euros
  const novoPrecoComIVA = calcularPrecoComIVA(precoOriginal);
  
  console.log(`O novo preço com IVA é: ${novoPrecoComIVA} euros`);