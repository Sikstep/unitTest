// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {number} from 'prop-types';

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((total, el) => total + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    switch (true) {
        case (a + b < c || b + c < a || c + a < b):
            return '00';
        case (a === b && b === c && c === a):
            return '10';
        case (a === b || b === c || c === a ):
            return '01';
        default:
            return '11';
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
       //...здесь пишем код.
           // В return стоит "заглушка", чтоб typescript не ругался
    return JSON.stringify(number).split('').reduce((total, el) => total + Number(el), 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // const evenArr = arr.filter((el, index) => index % 2 === 0).reduce((total, el, currentIndex) => total + el,0);
    // const oddArr = arr.filter((el, index) => index % 2 !== 0).reduce((total, el) => total + el,0);
    // return evenArr > oddArr

        // const [sumOfEvenIndexes, sumOfOddIndexes] = arr.reduce(
        //     ([evenSum, oddSum], currVal, index) =>
        //         index % 2 === 0
        //             ? [evenSum + currVal, oddSum]
        //             : [evenSum, oddSum + currVal],
        //     [0, 0]
        // );
        //
        // return sumOfEvenIndexes > sumOfOddIndexes;

    // bestSolution
    return arr.reduce((acc, el, index) => (index % 2 === 0) ? acc += el : acc -= el, 0) > 0
}


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el =>  Number.isInteger(el) && el >= 0).map(el => el ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return N == 0 ? N : N + sumFirstNumbers(N - 1);
    // let num = 0;
    // for (let i = 0; i <= N; i++) {
    //     num = num + i
    // }
    // return num;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let total = [];
    for (let i = 0; i < banknotes.length; i++) {
        if (amountOfMoney / banknotes[i] >= 1) {
            for (let j = 0; j < amountOfMoney / banknotes[i]; j++) {
                total.push(banknotes[i]);
                amountOfMoney -= banknotes[i]
            }
        }
    }
    return total
}