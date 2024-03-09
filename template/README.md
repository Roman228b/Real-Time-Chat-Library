# Real-Time Chat Library

This is a simple real-time chat library built using Node.js and Socket.io. It allows users to join chat rooms and communicate with each other in real-time.

## Installation

To install the library, you can use npm:

```bash
npm install real-time-chat-library
```

## Usage

First, require the library in your Node.js application:

```javascript
const realTimeChat = require('real-time-chat-library');
```

Then, initialize the server and handle incoming connections:

```javascript
const server = realTimeChat.createServer();
```

You can customize the behavior of the chat server by providing options:

```javascript
const options = {
  // Add your options here
};
const server = realTimeChat.createServer(options);
```

Next, you need to integrate the client-side code into your HTML file. You can find the client-side code in the `public` directory of this package.

Finally, start the server:

```javascript
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Features

- Real-time communication using WebSockets
- Simple and easy-to-use API
- Customizable options for chat server configuration

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
