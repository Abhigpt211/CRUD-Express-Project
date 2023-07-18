const app = require ('./app.js')

const PORT = process.env.PORT || 8000

app.listen(PORT , ()=>{
    console.log(`Sever listening on port http://localhost:${PORT}...`)
})