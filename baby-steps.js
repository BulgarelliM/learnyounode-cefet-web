//Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).
soma = 0;
vetor = process.argv;
for (i in vetor) {
  if (i >= 2) {
    soma = soma + Number(vetor[i]);
  }
}
console.log(soma);