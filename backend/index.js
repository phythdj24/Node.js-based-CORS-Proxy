import express from "express";


const app = express()

// app.get('/', (req, res) => {
//   res.send('Server is Ready')
// })

app.get('/api/jokes', (req,res)=> {
    const jokes = [
        {
            id:1,
            title: 'A Joke',
            content:'This Is Joke'
        },
        {
            id:2,
            title: 'A 2nd Joke',
            content:'This Is Joke'
        },
        {
            id:3,
            title: 'A 3rd Joke',
            content:'This Is Joke'
        },
        {
            id:4,
            title: 'A 4th Joke',
            content:'This Is Joke'
        },
        {
            id:5,
            title: 'A 5th Joke',
            content:'This Is Joke'
        },
    ]
    res.send(jokes)

})

const PORT = 8000;

app.listen(PORT, (req, res)=> console.log('Server started PORt 8000') )