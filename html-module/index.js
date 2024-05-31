const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// app.use(bodyParser)
app.get('/backend-teste',(req,res)=>{
    res.json({
        data: 'welcome to my server',
        message: 'Servidor alcançado'
    })
})

app.get('/raw-html',async(req,res)=>{
    console.log('\nbody-from-html-site--',req.body)
    res.json({
        message: 'message received there is Gennifer , Velinho'
    })
})

app.listen(8000,()=>{
    console.log('running on port 8000...')
})