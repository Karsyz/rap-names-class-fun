const { request } = require('express')
const express =  require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        rapName: '21 Savage',
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'snoop dogg': {
        rapName: 'Snoop Dogg',
        age: 50,
        birthName: 'Calvin Cordozar Broadus Jr.',
        birthLocation: 'Long Beach, California',
    },
    'dylan': {
        rapName: 'Dylan',
        age: 33,
        birthName: 'Dylan',
        birthLocation: 'Dylan',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}.`)
})