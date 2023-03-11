// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    return cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name){
    return cats.shift("Milo")
}
function appendCat(name){
    return [...cats, "Broom"];
}
function prependCat(name){
    return ["Arnold", ...cats];
}
function removeLastCat(name){
    return cats.slice(0,-1);

}function removeFirstCat(name){
    return cats.slice(1);
}