function somatorio(numero) {
  let soma = 0;  // variavel usada para armazenar a soma

  for (let i = 1; i < numero; i++) { //inicio de um loop for que vai de 1 ate o numero fornecido
    if (i % 3 === 0 || i % 5 === 0) { // Verifica se i é divisivel por 3 ou 5
      soma += i; //se for divisivel adiciona o numero ao somatorio
    }
  }

  return soma; //retorna o resultado
}

// Exemplos de uso:
console.log(somatorio(10)); // deve retonar 23 pq 3 + 5 + 6 + 9 = 23

console.log(somatorio(11)); // deve retonar 33 pq 3 + 5 + 6 + 9 + 10 = 33

console.log(somatorio(6));  // deve retonar 8 pq 3 + 5 = 8 