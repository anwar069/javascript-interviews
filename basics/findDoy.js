import prompt_sync from "prompt-sync";

const prompt = prompt_sync({ sigint: true });

export function DOY() {
    const count = prompt('Enter the number of user: ');
    if (count == 0)
        return "invalid"
    let userFullDetails = [];
    for (let index = 0; index < count; index++) {
        const userName = prompt("Enter name of user " + (index + 1) + ": ");
        const age = prompt("Enter age of user " + (index + 1) + ": ");
        const yearOfJoining = prompt("Enter year of joining " + (index + 1) + ": ");
        const city = prompt("Enter your city " + (index + 1) + ": ");
        const state = prompt("Enter your state " + (index + 1) + ": ");
        const country = prompt("Enter your country " + (index + 1) + ": ");


        let year = (new Date().getFullYear() - age)
        let experience = (new Date().getFullYear() - yearOfJoining)

        let obj = {
            name: userName,
            age: age,
            year: year,
            exp: experience,
            address: {
                city: city,
                state: state,
                country: country,

            }
        }
        userFullDetails.push(obj.name + ", " + obj.exp);

    }
    return userFullDetails;
}