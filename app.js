console.log("Hello New Branch");

async function fetchData() {
    const data = await fetch('https://google.com/api/');
    console.log(data)
}

fetchData();