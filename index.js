// Write your solution here!
let cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(catName) {
    cats.push(catName);
};

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(catName) {
    let newCats = [...cats, catName];
    return newCats;
};

function prependCat(catName) {
    let newCats = [catName, ...cats];
    return newCats;
};

function removeLastCat() {
    let newCats = cats.slice();
    newCats.pop();  
    return newCats;
};

function removeFirstCat() {
    let newCats = cats.slice();
    newCats.shift();
    return newCats;
};