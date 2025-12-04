import express from "express"

const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello Backend!')
// })


app.get('/api/about', (req, res) => {
    const about = [
        {
            id: 1,
            title: "Nitish",
            content: " I am currently in 5th sem"

        },
          {
            id: 2,
            title: "Kumar",
            content: " I am currently in 5th sem"

        },
          {
            id: 3,
            title: "Ram",
            content: " I am currently in 5th sem"

        },
          {
            id: 4,
            title: "Krishna",
            content: " I am currently in 5th sem"

        },
          {
            id: 5,
            title: "Gopal",
            content: " I am currently in 5th sem"

        },
          {
            id: 6,
            title: "Kamal",
            content: " I am currently in 5th sem"

        },
    ]
    res.send(about);
})


const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`serve at https://localhost:${port}`);
    }
);