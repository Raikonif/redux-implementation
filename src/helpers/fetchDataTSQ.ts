async function getDataPlaceholder() {
    const getData = await fetch("https://jsonplaceholder.typicode.com/albums").then(response => response.json()).then(data => console.log(data)).catch(error => console.error("Error", error));
}

function getQueryTSQ() {

}