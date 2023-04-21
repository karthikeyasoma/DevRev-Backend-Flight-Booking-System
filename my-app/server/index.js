const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'flightsdb'
});


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(express.json());
app.use(express.urlencoded()); 


connection.connect(function(err)
{
  if(err)
  throw err;
  console.log("connected");
});


app.post("/api/get_user",(req,res) => {
    console.log(req.body);
    const email = req.body.email;
    const pass  = req.body.pass;
    const name  = req.body.name;
    const role  = req.body.role;
    console.log(email,pass,name,role);
    const query = `SELECT COUNT(*) AS count FROM users WHERE Email = '${email}' AND Password = '${pass}' AND Username = '${name}' AND role = '${role}'`;
    connection.query(query,[email,pass,name,role] , (err,result) =>{
        if(err)
        throw err;
        res.send(result);
    });
});

app.post("/api/insert",(req,res) => {
    console.log(req.body);
    const email = req.body.email;
    const pass  = req.body.pass;
    const name  = req.body.name;
    const role  = req.body.role;
    const query_insert_user = "INSERT INTO users (Email,Password,Username,role) VALUES (?,?,?,?)";
    connection.query(query_insert_user,[email,pass,name,role] , (err,result) =>{
        if(err)
        throw err;
        console.log(result);
        res.send("ok");
    });
    
});

app.post("/api/user_information",(req,res) => {
    const email       = req.body.email;
    const search_user = `SELECT * FROM bookings WHERE user_mail = '${email}'`;
    connection.query(search_user,[email],(err,result) => {
        if(err)
        throw err;
        console.log(result);
        res.send(result);
    });
});
app.post("/api/search_flights",(req,res) =>
{
   const flight_from   = req.body.flight_from;
   const flight_to     = req.body.flight_to;
   const flight_date   = req.body.departure;
   const flight_time   = req.body.time;
   const search_flight = `SELECT * FROM flight WHERE date_departure = '${flight_date}' AND time = '${flight_time}' AND flight_from = '${flight_from}' AND flight_to = '${flight_to}' AND available>=1`;
   connection.query(search_flight,[flight_date,flight_time,flight_from,flight_to],(err,result) => {
    if(err)
        throw err;
        console.log(result);
        res.send(result);
   });
});

app.post("/api/flight_insert",(req,res)=>
{
  const flight_name = req.body.flight_name;
  const flight_from = req.body.flight_from;
  const flight_to = req.body.flight_to;
  const date_departure = req.body.date_departure;
  const time = req.body.time;
  const flight_fare = req.body.flight_fare;
  const date_arrival = req.body.date_arrival;
  const available = req.body.available;

  const sqlInsert = "INSERT INTO flight (flight_name, flight_from, flight_to, date_departure, time, flight_fare, date_arrival, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [flight_name, flight_from, flight_to, date_departure, time, flight_fare, date_arrival, available];
  
  connection.query(sqlInsert, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data into flight table: ', error);
      res.status(500).send('Internal server error');
      return;
    }
    res.send("Data inserted successfully");
  });
});

app.post("/api/search_flights_admin", (req, res) => {
    const flight_id = req.body.flight_id;
    const flight_time = req.body.flight_time;
  
    const search_flight = `SELECT * FROM flight WHERE id = ? AND time = ? AND available >= 1`;
  
    connection.query(search_flight, [flight_id, flight_time], (error, results, fields) => {
      if (error) {
        console.error('Error searching for flights: ', error);
        res.status(500).send('Internal server error');
        return;
      }
  
      res.send(results);
    });
  });

  app.post("/api/delete_flights", (req, res) => {
    const flight_id = req.body.flight_id;
  
    const delete_flight_query = `DELETE FROM flight WHERE id = ?`;
  
    connection.query(delete_flight_query, [flight_id], (error, result, fields) => {
      if (error) {
        console.error('Error deleting flight: ', error);
        res.status(500).send('Internal server error');
        return;
      }
  
      res.send(`Flight with ID ${flight_id} deleted successfully`);
    });
  });

  app.post("/api/book_id", (req, res) => {
    const user_mail = req.body.user_mail;
    const flight_name = req.body.flight_name;
    const flight_to = req.body.flight_to;
    const flight_from = req.body.flight_from;
    const date = req.body.date;
    const flight_fare = req.body.flight_fare;
  
    const book_query =
      "INSERT INTO bookings (user_mail,flight_name,flight_to,flight_from,date,flight_fare) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [user_mail, flight_name, flight_to, flight_from, date, flight_fare];
    connection.query(book_query, values, (error, results, fields) => {
      if (error) {
        console.error("Error inserting data into flight table: ", error);
        res.status(500).send("Internal server error");
        return;
      }
      res.send("Data inserted successfully");
    });
  });
  
  

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});