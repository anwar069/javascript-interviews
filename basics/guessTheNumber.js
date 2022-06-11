import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });


export function GuessNum() {
    let O = 10;
    let m = Math.floor(Math.random() * O);
    console.log(m)
    for (let index = 0; index < 3; index++) {
        const n = prompt("Please guess the number between 1-50: ")
        console.log("Please guess the number between 1-50:   ", n);


        if (n > m)
            console.log('You guess the higher number', 'you have', 2 - index, 'chance left')
        if (n < m)
            console.log('You guess the smaller number', 'you have', 2 - index, 'chance left')
        if (n == m) {
            return 'Congratulations!!! You WON the game'
        }

    }
    console.log('Unfortunately!!! You losse the game')


}