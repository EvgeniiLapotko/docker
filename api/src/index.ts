import express from 'express'

const PORT = 9999

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(PORT, () => {
    console.log(`Api run port: ${PORT}`)
})
