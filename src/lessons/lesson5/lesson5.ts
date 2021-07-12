console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

//FUNCTION DECLARATION
// let obj = { name: 'Evgen' }
// let obj2 = { name: 'Vlad' }
//
// function f() {
//     console.log('this in function declaracion', this)
// }
//
// obj.f = f
// obj2.f = f
//
// console.log(obj)
// obj.f()
// obj2.f()

//ARROW FUNCTION
// let obj = { name: 'Evgen' }
// let obj2 = { name: 'Vlad' }
//
// let arrow = () => console.log('this in arrow function', this)
// arrow()
// obj.arrow=arrow
// obj2.arrow=arrow
//
// obj.arrow()
// obj2.arrow()


// //Разбор контекста в FD
// //test - это метод типа FD
// //в момент вызова метода test - this внутри этой ф-ии будет ссылаться на сам obj (смотрим слева от точки,
// //т.к. метод test = FD)
// //arrow запоминает этот this, сохраняет ссылку на контекст при вызове функции arrow
// //arrow определена в момент выполнения функции test
// //this внутри этой функции === obj
//
// // стрелочная ф-ия была определена внутри FD
// //а FD запоминает, от чьего имени она вызвана
//
// obj.test = function() {
//     let arrow = () => console.log('this in arrow function', this)
//     arrow()
// }
// obj.test()
//
//
// //Разбор контекста в FD
// //в FD - this указывает на объект, от чьего имени функция test2 вызывается
// //перед test2 нет никакого объекта, поэтому this === window
// //не важно, что наружняя функция вызвана от имени obj2,
// //this здесь у нас внутри test2, поэтому смотрим на вызов test2
//
// obj2.test = function() {
//     function test2() {console.log('this in function declaracion', this)}
//     test2()
// }
// obj2.test()


//return AF
// //не важно, какому объекту мы отдаем AF,
// //у нее контекст сохраняется, и доступ через this будет только к объекту obj
// obj.test = function() {
//     return arrow = () => console.log('this in arrow function', this)
// }
// obj2.test = obj.test()
// obj2.test()


//return FD
// //результатом вызова метода test() будет сама FD func
// //чтоб добраться до this нужно нашу func как ссылку сохранить в одноименный метод test
// // в нашем случае в obj2 и еще раз вызвать метод test
// // и т.к. func - это FD, у него есть "владелец", от чьего имени вызывается этот FD
//
// obj.test = function() {
//     return function func() {console.log('this in function declaracion', this)}
// }
// //obj.test()
//
// obj2.test = obj.test()
// obj2.test()


//вызов FD от window
// //результат вызова obj.test() будет сама FD func
// //этот результат мы присваиваем переменной test
// //т.к. у нас FD, мы смотрим от чьего имени вызывается test
// //т.к. нет ничего слева test() - значит от имени глобального объекта window
//
// obj.test = function() {
//     return function func() {console.log('this in function declaracion', this)}
// }
//
// let test = obj.test()
// test()


// //AF запоминает this в момент определения (а момент
// //определения AF === моменту вызова obj.test())
// //this === obj, и не важно, где AF вызвана
//
// obj.test = function() {
//     return () => console.log('this in arrow function', this)
// }
//
// let test = obj.test()
// test()


//setTimeout
// //FD вызывается сеттайммаутом, т.е. Browser API
// setTimeout(function() {
//     console.log('this in function declaracion', this)
// }, 0)
//
// //AF определена в глобальном контексте window
// setTimeout(() => {
//     console.log('this in arrow function', this)
// }, 0)


// setTimeout внутри метода объекта
// //setTimeout - НЕ часть движка JS, эта ф-ия принадлежит Browser API
//
// let obj = {
//     name: 'Evgen',
//     test() {
//         //здесь мы определили FD функцию func (внутри setTimeout, до того, как он сработает)
//         // нашу ф-ию func вызывает setTimeout через какое-то время,
//         // и делает он это от имени глобального объекта window
//
//         setTimeout(function func() {console.log('this in function declaracion', this)}, 0)
//
//         //здесь мы определили AF (внутри setTimeout, до того, как он сработает)
//         //в момент отпределения AF мы смотрим, чему равен this внутри метода test
//         //а this у нас здесь равен ссылке на obj,
//         //потому что функция test вызвана от имени obj
//
//         setTimeout(() => {console.log('this in arrow function', this)}, 0)
//     }
// }
//
// obj.test()


//вызов FD функций внутри setTimeout f
// let obj2 = {
//     name: 'Vlad',
//     f() {
//         return function () {
//             console.log('this in function declaracion', this)
//         }
//     },
//     f2() {
//         return () => console.log('this in arrow function', this)
//     },
//     a: () => {
//         return function () {
//             console.log('this in function declaracion', this)
//         }
//     },
//     a2: () => {
//         return () => console.log('this in arrow function', this)
//     },
// }
//
// let obj = {
//     name: 'Evgen',
//     test() {
//         setTimeout(obj2.f(), 0) //window
//         setTimeout(obj2.f2(), 0) //obj2 (определена в контексте obj2)
//     }
// }
//
// obj.test()


//вызов AF функций внутри setTimeout
// let obj2 = {
//     f() {
//         return function () {
//             console.log('this in function declaracion', this)
//         }
//     },
//     f2() {
//         return () => console.log('this in arrow function', this)
//     },
//     a: () => {
//         return function() {console.log('this in function declaracion', this)}
//     },
//     a2: () => {
//         return () => console.log('this in arrow function', this)
//     },
// }
//
// let obj = {
//     name: 'Evgen',
//     test() {
//         //при вызове а() в setTimeout попадет FD
//         //и вызовется она браузерным API
//         //FD, которая сидит в setTimeout всегда вызывается от window
//
//         setTimeout(obj2.a(), 0)
//
//         //стрелочная функция, в которой console.log, была определена в контексте
//         //вызова функции а2, а функция а2 так же является AF, в свою очередь
//         //она была определена на глобальном уровне window,
//         //т.к. объект obj2 не создает область видимости и нужно смотреть
//         //в контексте чего создавался объект obj2.
//         //Если в объекте как метод создается AF, у нее область видимости будет
//         //window, а не obj2. AF ищет обл.вид. как бы проваливаясь сквозь объект
//
//         setTimeout(obj2.a2(), 0)
//     }
// }
//
// obj.test()


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//     name: string;
//     age: number;
//     greeting: Function
// }
//
// //@ts-ignore
// let someObj: someObjType = {
//     name: 'Eugene',
//     age: 32
// }
//
// someObj.greeting = function greeting() {
//     return `My name is ${this.name}. I am ${this.age}`
// }
// console.log(someObj.greeting())


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

type counterObjType = {
    currentCount: number
    getCurrentCount: Function
    increment: Function
    decrement: Function
    setCurrentCount: Function
    restCurrentCount: Function
}

//@ts-ignore
let counterObj: counterObjType = {
    currentCount: 0,
    getCurrentCount() {
        return this.currentCount
    },
    increment() {
        return ++this.currentCount
    },
    decrement() {
        return --this.currentCount
    },
    setCurrentCount(value: number) {
        return this.currentCount = value
    },
    restCurrentCount() {
        return this.currentCount = 0
    },
}

// console.log(counterObj.setCurrentCount(2))
// console.log(counterObj.increment())
// console.log(counterObj.increment())
// console.log(counterObj.decrement())
// console.log(counterObj.getCurrentCount())
// console.log(counterObj.decrement())
// console.log(counterObj.restCurrentCount())


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


type counterType = {
    currentCount: number
    getCurrentCount: Function
    increment: Function
    decrement: Function
    setCurrentCount: Function
    restCurrentCount: Function
}


// let counter: counterType = {
//     currentCount: 0,
//     setCurrentCount(value: number) {
//         this.currentCount = value
//         return function increment() {
//             ++value
//             return function increment() {
//                 ++value
//                 return function increment() {
//                     ++value
//                     return function decrement() {
//                         --value
//                         return function getCurrentCount() {
//                             return value
//                         }
//                     }
//                 }
//             }
//         }
//     },
// }
// console.log(counter.setCurrentCount(10)()()()()()) // 12


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя

function sumTwoNumbers(a: number, b: number): number {
    return a + b
};

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};