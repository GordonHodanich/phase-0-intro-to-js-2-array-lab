const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(newCat){
    cats.push(newCat)
}

function destructivelyPrependCat(newCat){
    cats.unshift(newCat)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(newCat){
    const copyOfCats = [...cats, `${newCat}`]
    return copyOfCats
}
function prependCat(newCat){
    const copyOfCats = [`${newCat}`, ...cats,]
    return copyOfCats
}
function removeLastCat(){
    const copyOfCats = [...cats.slice(0, -1)]
    return copyOfCats
}
function removeFirstCat(){
    const copyOfCats = [...cats.slice(1)]
    return copyOfCats
}