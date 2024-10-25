// function sleep(segundos) {
//     console.log("antes")
//     setTimeout(() => {
//         console.log("dormiu...")
//     }, segundos)
//     console.log("depois")
// }
// sleep(2000)

// async function sleepPromise(segundos) {
//     console.log("Promise: antes")
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//             console.log("Promise: dormiu...")
//         }, segundos)
//     })

//     console.log("Promise: depois")
// }
// sleepPromise(2000)

function fecthApi(){
    console.log("antes")
    const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    console.log("depois")
}


async function fecthApiAsync(){
    console.log("antes")
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    console.log(json)
    console.log("depois")

}
fecthApi()
fecthApiAsync()