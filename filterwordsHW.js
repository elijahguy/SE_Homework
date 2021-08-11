// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

const names = ['Victoria', 'Pearl', 'Olivia', 'Annabel', 'Sandra', 'Sarah'];
    const filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('ia')); // ["Victoria", "Olivia"]
