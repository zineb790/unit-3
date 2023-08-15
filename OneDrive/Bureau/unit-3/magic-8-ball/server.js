const express = require('express');
const app = express();
const port = 3000;

app.get('/magic/:question', (req, res) => {
    const question = req.params.question;
    const allResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

    const randomResponse = allResponses[Math.floor(Math.random() * allResponses.length)];

    // console.log(question, randomResponse);

     res.send(`<h2>The answer to '${question}?' is: ${randomResponse}.</h2>`
    )
    
})

app.listen(port, () => {
    console.log('listening')
})