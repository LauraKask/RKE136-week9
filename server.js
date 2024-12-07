const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send('Hello, I am Laura. Nice to meet You.');
});


app.listen(3000, ()=>{
    console.log('Server is running on Port 3000.');
});
