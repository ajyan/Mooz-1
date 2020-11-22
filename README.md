# Mooz

Mooz is a web application that allows a user to match with their favorite bovinae over video

## Table of Contents

- [Application Features](#application-features)
- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Languages & Tools](#languages-&-tools)
- [License](#license)

# Application Features

- Users can login using their Google Account to sign in to the application
![](./GIFs/login.gif)
- Clicking on *Find a Match* will help find a match for the user to create a video room.
![](./GIFs/find_match.gif)
- Entering the room, a unique room ID is generated and after giving permissions to the browser to use the microphone and video, the user can then chat with their match! The matchmaking logic is still a WIP, but currently, any user with the same URL can enter the room.
![](./GIFs/connect_call.gif)
- Leaving the room returns the user back into the original lobby, where they can then find a new match. Also, when a user leaves a room, they are removed immediately from all active participant screens
![](./GIFs/end_call.gif)

## Requirements

To run this app, you will need Node.js and npm installed on your environement

# Getting Started

## Install

    $ git clone https://github.com/ajyan1/Mooz.git
    $ npm install

## Start & Watch

In three separate terminals run each of the following:

    $ npm start
    $ npm run dev
    $ peerjs --port 3001

The application will be running on port 3000 and the PeerJS server will run on port 3001

# Languages & Tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI and interactive components

### CSS

- [Bootstrap](https://getbootstrap.com/docs/3.4/css/) as a basic styling framework

### HTTP Client Requests

- [Axios](https://www.npmjs.com/package/axios) to handle client side requests to the Node server

### Peer to Peer Connections

- [PeerJS](https://peerjs.com/) for a peer to peer API build on WebRTC, which handles both the data channels and media streams
- [Socket.io](https://socket.io/) for realtime web applications for establishing connections between clients 

## License

[MIT](https://choosealicense.com/licenses/mit/)
