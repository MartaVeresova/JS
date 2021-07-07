console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

//1
function sum(x: number, y: number) {
    return Promise.all([x, y])
        .then((res) => {
            return res[0] + res[1]
        })
}

console.log(sum(2, 4))

//2
function delay(ms: number) {
    //@ts-ignore
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}
delay(1000)
    //@ts-ignore
    .then(() => {
        console.log('1 then')
        return delay(1000)
    })
    //@ts-ignore
    .then(() => {
        console.log('2 then')
        return delay(2000)
    })

//3
function getNumber1() {
    return Promise.resolve('374');
}
async function getNumber2() {
    return 374;
}

// just a plug
export default () => {
};