// Import the Express NPM package so that it can be used in the file.
let express = require('express');
let path = require('path');

// Create a new instance of an express application and save it to a variable.
let app = express();
app.use(express.static(path.join(__dirname, "build")));

// Instruct the Express webserver to execute the passed function any time it receives a request to the '/' path. Also adds the text 'Hello There' to the response that gets sent back to the requester.
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the application and tell it to listen for requests on port 8080. Run the provided function as soon as the server starts successfully.
app.listen(8080, () => {
	console.log('The Express server has started!');
});
