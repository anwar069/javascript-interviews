import prompt_sync from "prompt-sync";

const prompt = prompt_sync({ sigint: true });


export function promptTest() {
    const String = prompt("Enter mobile number : ");
    console.log('mobile number : ', String);

    if (String.length > 10) {
        return "invalid"
    }

}
