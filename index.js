const arr = [1, 2, 3, 4, "test", 5, 6, 7, 8, 9, 10, "text", "tost"];

//выводим в консоль элементы массива
function num1(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//выводим в консоль чётные элементы массива
function num2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}

//выводим в консоль строчные элементы массива
function num3(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      console.log(array[i]);
    }
  }
}

//Выводим элементы в обратном порядке
function num4(array) {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(array[i]);
  }
}

//Выводим чётные элементы в обратном порядке
function num5(array) {
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
}

//Выводим строчные элементы в обратном порядке
function num6(stringi) {
  for (let i = stringi.length - 1; i > 0; i--) {
    if (typeof stringi[i] === "string") {
      console.log(stringi[i]);
    }
  }
}

//Выводим в обратном порядке не меняя ничего в for
function num7(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[array.length  - 1 - i]);
  }
}



//выводим в консоль строчные элементы массива в обратном порядке не трогая for
function num33(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[array.length - 1 -i] === "string") {
      console.log(array[array.length - 1 -i]);
    }
  }
}