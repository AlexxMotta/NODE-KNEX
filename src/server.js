const express = require('express')
const routes = require('./routes')
//const { default: knex } = require('./database')//nao funciona nao sei porque
const app = express()
const port = 3333
app.use(express.json());
app.use(routes);

//notFound
app.use((req,res,next)=>{
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

//catchAll
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({error : error.message})
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

