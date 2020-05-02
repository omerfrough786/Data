const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const members = require('./Members')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars')



const app = express()

//Handlebars Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


app.use(express.json())
app.use(express. urlencoded ({extended: false}))


//Homepage Route

app.get('/', (req, res) => {
    res.render('index', {
        title: "Add Member",
        members : members
    })
})
//Member API Router
app.use('/api/members', require('./routes/api/members'))

dotenv.config();
PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))