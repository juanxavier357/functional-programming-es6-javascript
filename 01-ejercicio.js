  const arr = [1, 2, 3, 4, 5, 6];

  // utilizar el método map de los arreglos para duplicar cada elemento
  // [2, 4, 6, 8, 10, 12]

  const duplicar = arr.map(num => num * 2);
  console.log('Arreglo duplicado: ' + duplicar);

  // utilizar el método filter para filtrar los números pares de arr
  // [2, 4, 6]

  const pares = arr.filter(num => num % 2 == 0);
  console.log('Arreglo de números pares: ' + pares);

  // utilizar el método reduce para sumar todos los elementos
  // 21

  const sumar = arr.reduce((add, num)=> add + num, 0 );
  console.log('Suma de los elementos: ' + sumar);
