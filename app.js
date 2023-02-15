console.log("Hello New Branch");

function writeData(name, age) {
    console.log(`Hello my name is ${name} and age is ${age}`)
}

writeData('Ronak Patel', 22);

async function fetchData() {
    const data = await fetch('https://google.com/api/');
    console.log(data)
}

fetchData();

