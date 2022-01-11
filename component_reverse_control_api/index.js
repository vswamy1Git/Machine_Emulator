var express = require("express");
const cors = require("cors");
var request = require("request");
var app = express();
var sql = require("mssql");
var path = require("path");
var alert = require('alert'); 



const sqlConfig = {
    user: 'vignesh',
    password: 'sqlserver',
    database: 'transactional_orders',
    server: 'DESKTOP-EL1NPL9',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

sql.on('error', err => {
    console.log(err.message);
});


// async function getdbdata() {
//   try{
//     let pool = await sql.connect(sqlConfig);
//     output = await pool.request().query("select * from Input_source");
//     //console.log(result.recordset[0]);    
//     sql.close();
//     //return result.recordset[0];
//   }
//   catch(error){
//     console.log(error.message);
//     sql.close();
//   }
// }

//getdbdata();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname+'/public/'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
    // res.status(200).send("Backend API working !!!");
});
app.post('/auth', async(request, response) => {
    console.log("Entering auth fucntion in nodejs");
   
         
        //console.log(request.body);
        var uname = request.body.name;
        var pass = request.body.password;
        
        console.log(uname);
        console.log(pass);
        if (uname && pass) {
            let output = {};
            let pool = await sql.connect(sqlConfig);           
            output = await pool.request().query("Select * from usertable where username ="+ "'"+uname + "'"+" AND password ="+ "'"+pass+"'"+";");
            console.log(output.rowsAffected[0]);

            if(output.rowsAffected[0]>0){
                response.sendFile(path.join(__dirname + '/views/glassmorphism.html'));
            }
            else{
                alert("Invalid Credentials. Please try again or contact administrator.");
                // popup.alert({
                //     content: 'Invalid Credentials. Try again.'
                // });
            } 
          }
          
        }   
          
    );

app.get("/nodejstosql", async(req, res) => {
    let output = {};
    let pool = await sql.connect(sqlConfig);
    output = await pool.request().query("select * from Input_source");
    // sql.close();
    if (output) {
        //console.log(output);
        res.status(200).send(output.recordsets[0]);
    } else {
        res.status(404).send("Not found");
    }
});

// app.get("/currentOrder", async(req, res) => {
//     let output = {};
//     let pool = await sql.connect(sqlConfig);
//     output = await pool.request().query("select * from Current_Order");
//     // sql.close();
//     if (output) {
//         //console.log(output);
//         res.status(200).send(output.recordsets[0]);
//     } else {
//         res.status(404).send("Not found");
//     }
// });

app.get("/currentOrder", async(req, res) => {
    let output = {};
    let pool = await sql.connect(sqlConfig);
    output = await pool.request().query("select * from Current_Order");
    // sql.close();
    if (output) {
        //console.log(output);
        res.status(200).send(output.recordsets[0]);
    } else {
        res.status(404).send("Not found");
    }
});

app.get("/totalordertable", async(req, res) => {
    let output = {};
    let pool = await sql.connect(sqlConfig);
    output = await pool.request().query("select * from PresentGroupID");
    // sql.close();
    if (output) {
        //console.log(output);
        res.status(200).send(output.recordsets[0]);
    } else {
        res.status(404).send("Not found");
    }
});

app.get("/tubeutilization", async(req, res) => {
    let output = {};
    let pool = await sql.connect(sqlConfig);
    output = await pool.request().query("select * from TubeFillLevels");
    // sql.close();
    if (output) {
        //console.log(output);
        res.status(200).send(output.recordsets[0]);
    } else {
        res.status(404).send("Not found");
    }
});

app.get("/overallordertable", async(req, res) => {
    let output = {};
    let pool = await sql.connect(sqlConfig);
    output = await pool.request().query("select * from Total_Order");
    // sql.close();
    if (output) {
        //console.log(output);
        res.status(200).send(output.recordsets[0]);
    } else {
        res.status(404).send("Not found");
    }
});



//app.get("/nodejstosql", async function  (req, res) {  
//console.log("Entered nodejstosql function");
//loadEmployees(); 

// let output ={};
// try{
//   let pool = await sql.connect(sqlConfig);
//   output = await pool.request().query("select * from Input_source");      
//   sql.close();
// }
// catch(error){
//   console.log(error.message);
//   sql.close();
// }
// console.log(response.body);
//res.send(response.body);
//console.log(output.recordset[0]);
//res.status(200).send("success");
//return result; 

//});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server started and listening at http://localhost:3000/");
});