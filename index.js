const express = require('express')
const app = express()
let port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World');
})

//endpoint = route
app.get('/testroute',(req, res)=>{
                //object.property
    //req.query.parameterName
    console.log(req.query.name);
    console.log(req.query.surname);
    let n = req.query.name;
    let sn = req.query.surname;
    res.send(`Hello ${n} ${sn}  from testroute`);

});

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port} `);
})