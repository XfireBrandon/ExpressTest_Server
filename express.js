const express = require('express');
const app = express();
const PORT = 8000

app.post('/', function(req, res) {
    res.send('Welcome to the Home page')
})

app.get('/Hello', function(req, res) {
    res.send('Hello there')
})

app.get('/Response', function(req, res) {
    res.send('General Kenobi!')
})

app.post('/Hi', function(req, res) {
    res.send('WASSSSSSSUPPPPPPPPPPPPPPPPPP!!!!!!')
})

app.listen(PORT, function(){
    console.log(`Server is up on port: ${PORT}`)
})