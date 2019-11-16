//require related modules
const express = require('express')
const app = express()
const port = 3000

//require handlebars-helper ,if forget will report Error: Missing helper
const helper = require('./handlebars.js')

//require function gTrash
const gTrash = require('./generate_trash.js')

const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
//template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//set bodt parser
app.use(bodyParser.urlencoded({ extended: true }))


//set route
app.get(
  '/', (req, res) => {

    res.render('index')
  }
)

app.post(
  '/', (req, res) => {
    console.log(req.body)

    const option = req.body
    const trashTalk = gTrash(option)


    res.render('index', { trashTalk: trashTalk, option: option })


  }
)

//start server and listen
app.listen(
  port, () => {

    console.log(`the server is listening on http://localhost:${port}`)
  }
)