export function EntryCheck(age, withParents, vaccinated) {
    if (!vaccinated)
        return false;

    if (age < 18 && !withParents)
        return false



    return true



} 