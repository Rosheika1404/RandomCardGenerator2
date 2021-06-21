import '../style/styles.scss';
window.onload = () => {
    document.querySelector('.card').classList.add(generateSuite());
    document.querySelector('.card').innerHTML= generateDeck(); 
}


///generate Deck 
let generateDeck = () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let getRandomNumber = (max) => Math.floor(Math.random() * max); // function to generate random number
    return values[getRandomNumber(values.length)];
};

generateDeck();


let generateSuite = () => {
    const suite = ["hearts", "diamonds", "clubs", "spades"]
    let getRandomNumber = (max) => Math.floor(Math.random() * max); // function to generate random number
    return suite[getRandomNumber(suite.length)];
}
generateSuite();

//   const suite = ["♥", "♦", "♠", "♣"]
