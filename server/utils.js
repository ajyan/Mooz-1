function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const cows = [{
        name: 'Daisy',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1021&q=80',
    },
    {
        name: 'Betsy',
        image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=946&q=80',
    },
    {
        name: 'Winnie the Moo',
        image: 'https://images.unsplash.com/photo-1564085352725-08da0272627d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
        name: 'Milkshake',
        image: 'https://images.unsplash.com/photo-1559484101-9c6be5b712cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
];

const match = shuffle(cows)[0];

export default match;