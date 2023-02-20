function add(first, second=0){
    const total = first  + second
    return total
}

const result = add(90)
console.log(result)


function fullName(fristN,lastN = 'chowdory'){

    return fristN + ' ' + lastN

}

const name = fullName('rahim');
console.log(name)