require('dotenv').config()

const { express, cookieParser, bodyParser, cors } = require("./src/libs")
var app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({ credentials: true }))

app.use('/auth', require('./routes/auth'))

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
