const fish = {
    name : 'King Hilsa',
    address: 'chandpur',
    color: 'silver',
    phone: '0129920230',
    price: 4000
}

// const name = fish.name;
// const color = fish.color;

const {phone, address} = fish
console.log(address);

//array destructruring;
const [first, onther] = [444, 55,99];
console.log(first, onther)


const nayoks =['shakib', 'bappi', 'raj'];
const[king, lost, notun] = nayoks;
console.log(lost)



function getName(){
    return ['halim', 'kalim']
}
const [baba, chacha] = getName();
console.log(baba, chacha)