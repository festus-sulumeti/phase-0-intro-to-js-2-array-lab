// Write your solution here!

let cats;
cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) 
{
    cats.push(name);
    console.log(cats);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) 
{
    cats.unshift(name);
    console.log(cats);
}

function destructivelyRemoveLastCat() 
{
    cats.pop();
    console.log(cats);
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() 
{
    cats.shift();
    console.log(cats);
}

function appendCat(name) 
{
    let newCats;
    newCats = [...cats, name];
    return newCats;
}

function prependCat(name) 
{
    let newCats;
    newCats = [name, ...cats];
    return newCats;
}

function removeFirstCat()    
{
    let newCats;
    newCats = cats.slice(1);
    return newCats;
}

function removeLastCat() 
{
    let newCats;
    newCats = cats.slice(0, cats.length - 1);
   return newCats;
}
