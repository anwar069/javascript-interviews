export function Greet(name, time) {
    if (time > 0 && time <= 5)
        return "Good night" + " " + name
    if (time > 5 && time <= 12)
        return "Good morning" + " " + name
    if (time > 12 && time <= 17)
        return "Good afternoon" + " " + name
    if (time > 17 && time <= 20)
        return "Good evening" + " " + name
    if (time > 20 && time <= 24)
        return "Good night" + " " + name


};