function pegaDoisNumeros(a: number, b: number): void {
  console.log("soma:", a + b)
  console.log("subtração:", a - b)
  console.log("multiplicação:", a * b)
  if(a > b){
    console.log("maior:", a)
  } else {
    console.log("maior:", b)
  }
}

pegaDoisNumeros(6,3)