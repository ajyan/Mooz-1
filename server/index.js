const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/../client/dist"));

// Room Routes
app.get('/room', (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
    let roomId = req.params.room;
    res.render('room', { roomId: roomId });
});

app.post('/match', (req, res) => {

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

    let shuffledCows = shuffle(cows);
    let match = shuffledCows[0]
    res.send(match);
});

//Establish socket events from user connect/disconnect
io.on('connection', (socket) => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);
        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId);
        });
    });
});

server.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});