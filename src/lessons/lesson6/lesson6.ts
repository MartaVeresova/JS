import It = jest.It;

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

//console.dir(function() {})
//console.dir(class Test {})

class Test2 {

    name: string
    age: number
    //sayHi: () => void
    //sayBye: () => void

    constructor(name: string, age: number, public city: string) {
        this.name = name
        this.age = age
        this.city = city
        //this.sayHi = function () {}
        //this.sayBye = () => {}

    }

    sayHi() {

    }

    sayBye = () => {
    }
}

let testObj = new Test2('Marta', 31, 'Minsk')
let testObj2 = new Test2('Alex', 15, 'Minsk')
console.log(testObj.sayHi === testObj2.sayHi)
console.log(testObj.sayBye === testObj2.sayBye)
console.log(testObj)

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.


interface IStudent {
    firstName: string
    lastName: string
    numGroup: number
    progress: number[]
    averageMark: number
}

class Student implements IStudent {
    averageMark: number

    constructor(public firstName: string, public lastName: string, public numGroup: number, public progress: number[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.numGroup = numGroup
        this.progress = progress
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length
    }

    private static sortStudent(s1: IStudent, s2: IStudent) {
        if (s1.averageMark > s2.averageMark) {
            return 1
        } else if (s1.averageMark < s2.averageMark) {
            return -1
        } else {
            return 0
        }
    }

    static sort(arr: Array<IStudent>) {
        const temp = [...arr]
        return temp.sort(this.sortStudent)
    }

    private static isAllMarksEqualCurrentMark(marks: number[], currentMark: number) {
        return marks.every(mark => mark === currentMark)
    }

    private static filterStudents(arr: Array<IStudent>) {
        const result: Array<IStudent> = []
        arr.forEach(s => {
            if (this.isAllMarksEqualCurrentMark(s.progress, 4) || this.isAllMarksEqualCurrentMark(s.progress, 5)) {
                result.push(s)
            }
        })
        return result
    }

    static printGoodStudents(arr: Array<IStudent>) {
        this.filterStudents(arr).forEach(s => {
            console.log(`Student - ${s.lastName}, Group - ${s.numGroup}, averageMark - ${s.averageMark}`)
        })
    }
}

let student = []
student.push(new Student('Marta', 'Veresova', 1, [4, 5, 5, 4]))
student.push(new Student('Alex', 'MXSMlx', 2, [5, 5, 5, 5]))
student.push(new Student('Bob', 'Xsdasd', 3, [5, 5, 5, 4]))
student.push(new Student('Nick', 'Klcls', 4, [3, 3, 3, 3]))

console.log(student)
console.log(Student.sort(student))
Student.printGoodStudents(student)


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// interface ITest {
//     a: string
//     b: string
// }
//
// class Test implements ITest{
//     constructor(public a: string, public b: string) {
//         this.a = a
//         this.b = b
//     }
// }

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};