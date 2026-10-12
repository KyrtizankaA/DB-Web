//проверка числа
function checkNumber(number){
    let sign=""
    if (number > 0){
        sign = "polozh";
        
    }else if(number < 0){
        sign = "otric";
    }else{
        sign = "nol";
    }
    let chet=""
    if (number%2==0){
        chet="chet"
    }else{
        chet="nechet"
    }
    console.log(sign,chet);
}


//массив работать
const numbers = [4, 8, 15, 16, 23, 42];

let sum = 0;
let max = numbers[0];
const greaterThan10 = [];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    
    if (numbers[i] > max) {
        max = numbers[i];
    }
    
    if (numbers[i] > 10) {
        greaterThan10.push(numbers[i]);
    }
}

console.log('Сумма:', sum);
console.log('Максимум:', max);
console.log('Числа > 10:', greaterThan10);


//ученики-петлички
const students = [
    { name: 'Аня', grade: 5 },
    { name: 'Иван', grade: 4 },
    { name: 'Мария', grade: 3 },
    { name: 'Петя', grade: 5 },
    { name: 'Оля', grade: 2 },
    { name: 'Сергей', grade: 3 }
];

function printStudentsAboveGrade(studentsList, minGrade) {
    console.log(`Ученики с оценкой выше ${minGrade}:`);
    studentsList
        .filter(student => student.grade > minGrade)
        .forEach(student => console.log(`  ${student.name}: ${student.grade}`));
}

function getAverageGrade(studentsList) {
    if (studentsList.length === 0) return 0;
    const total = studentsList.reduce((sum, student) => sum + student.grade, 0);
    return total / studentsList.length;
}

printStudentsAboveGrade(students, 3);

console.log('Средняя оценка:', getAverageGrade(students).toFixed(2));