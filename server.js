let users = [];


let express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser');

// const path=require("path");
// const PORT=process.env.PORT || 3000;

// const { json } = require("express");
// const { response } = require("express");

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

console.log(users);

// app.use(function (req, res, next) {
//     console.log("Method is: ", req.method)
//     console.log("URL is: ", req.url)
//     console.log("connection is: ", req.connection.remoteAddress)
//     console.log("connection is: ", req.connection.remotePort)
//     // res.send("some response");
//     next();
// });




app.post("/signup", function (req, res, next) {
    
    // res.send("Sign Up Successfully"+JSON.stringify(req.body));
    // users.push(req.body)

    console.log(req.body)
    console.log("body: ", req.body);
    // res.send("signUp successfully")

    let alreadyExist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            alreadyExist = true;
            break;
        }
    }
    if (alreadyExist) {
        res.send('This email address already exist')
    } else {
        users.push(req.body)
        res.send("Sign Up Successfully");

    }
});

app.post("/signin", function (req, res, next) {

    // res.send("error")

    let curUser = req.body.email;
    let curPassword = req.body.password;
    let isFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === curUser) {

            isFound = i;
            var newEmail = curUser;
            break;
        }
    }
    if (users[isFound].passwords === curPassword) {
        // res.send("signed in succesfully" )
        res.send(`signed in succesfully Name : ${users[isFound].name} Email : ${newEmail}
        Gender : ${users[isFound].gender} Nationality : ${users[isFound].nationality}
        Phone No : ${users[isFound].number}`)
    }
    else {
        res.status(403).send("wrong password or email");
    }


})


app.listen(3000, () => {
    console.log("server is running on 3000");
})

// app.listen(PORT || 5000 , () => {
//     console.log("server is running on 5000");
// })