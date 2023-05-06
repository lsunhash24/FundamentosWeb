const url="https://swapi.dev/api/people/9/";
// función que captura un elemento de la url
function getId(data){
    return data.split("/").slice(-3)[0];
}

console.log(getId(url));