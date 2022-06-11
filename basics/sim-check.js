import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function simCheck() {
    const count = prompt("Enter your mobile number: ");
    console.log('Your number is: ', count);
    if (count.length != 10)
        return "invalid number"

    if (count.startsWith(90)) {
        return "JIO"
    }
    if (count.startsWith(93)) {
        return "Reliance"
    }
    if (count.startsWith(94)) {
        console.log("Airtel")
        for (let index = 0; index < 1; index++) {
            const fiber = prompt("Are you interested in Airtel Fibernet?: ");
            if (fiber == "no") {
                return;
            } else {
                const landline = prompt("Are you interested in landline?: ");
                return "ok thank you for your time."
            }
        }


    }
}