console.log('Задание 1')

function checkNumber(number){
let sign;
if (number > 0) {
    sign = "положительное";
}else if (number < 0) {
    sign = "отрицательное";
}else{
    sign = "ноль";
}
let schet=""
if(number%2==0) {
    schet="Чётное"
}else{
    schet="Нечётное"
}
console.log(sign,schet);
}

checkNumber(20)


console.log('Задание 2')
function massiveNumbers() {
  const numbers = [4, 8, 15, 16, 23, 42];
  let sum = 0;
  let max = numbers[0];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] > 10) {
      result.push(numbers[i]);
    }
  }
  console.log(sum, max, result);
  let sum2 = numbers.reduce((a, b) => a + b, 0);
  let max2 = Math.max(...numbers);
  let result2 = numbers.filter(x => x > 10);
  console.log(sum2, max2, result2);
}

massiveNumbers();


console.log('Задание 3')

function Grade() {
    const students = [
        { name: "Артём", grade: 4 },
        { name: "Игорь", grade: 3 },
        { name: "Ярослав", grade: 4 },
        { name: "Богдан", grade: 5 },
        { name: "Денис", grade: 2 },
        { name: "Мария", grade: 4 }
    ]
    let sumGrades = 0;
    console.log("Студенты с оценкой выше 3:");
    for (let i = 0; i < students.length; i++) {
        sumGrades += students[i].grade;
        if (students[i].grade > 3) {
            console.log(students[i].name, students[i].grade);
        }
    }
    const averageGrade = sumGrades / students.length;
    console.log("Средний балл:", averageGrade.toFixed(4));
}

Grade();


console.log('Задание 4')

function Random() {
        let Random = Math.floor(Math.random() * 10) + 1;
        let userNumber = Number(prompt("Угадайте число от 1 до 10:"));
        if (userNumber == Random) {
            console.log("Вы угадали, загаданное число было", Random);
        }
        else {
            console.log("Вы не угадали");
            console.log("Загаданное число:", Random);
        }
    }

    Random();
