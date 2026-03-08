async function getData(){
    const apilink = "https://jsonplaceholder.typicode.com";

    try {
        const responce = await fetch(apilink);
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData()