# DevRev-Backend-Flight-Booking-System
The task was to make a some backend functionalities (CRUD Operations)
Create a web application for flight ticket booking. Use any tech stack for the backend and db.
A console based application would work. Submissions with a very basic UI will be given extra
marks

Type of Users
a. User
b. Admin
User Use Cases
● Login
● Sign up
● Searching for flights based on date and time
● Booking tickets on a flight based on availability (assuming the default
seat count is 60)
● My Booking -&gt; to list out all the bookings made by that user
● Logout
Admin Use Cases
● Login (Seperate login for Admin)
● Add Flights
● Remove flights
● View all the booking based on flight number and time

The front end part is still slightly left out where as the backend part is completed verified all the apis with postman

->Tech Stack Used - Front end - HTML,CSS,React JS
->                - Back end  - Node JS , Express JS.
                  - Data base - MYSQL Work bench
                  - Postman   - Testing API
  -------------------------------------------------------------------------------------------
  The datbase schema is as follows
  There are three tables in karthikdb
  1)flight    - cols - id,flight_name,flight_to,available,date_departure,time,seats,flight_fare,date_arrival
  2)users     - cols - id,email,password,username,role
  3)bookings  - cols - id,user_mail,flight_name,flight_to,date,flight_fare
  -----------------------------------------------------------------------------------------------
  
  The Api  documentation is as follows
http://localhost:3001/api/insert   ->  To enter user details into the database table named users along with his role
                                   -> payload taken - email,pass,name,role
http://localhost:3001/api/get_user -> To check if the user is admin or user in the tables users with this call and direct him to the appropriate route accordingly
                                       payload taken - email,pass,name,role
                                      
http://localhost:3001/api/user_information ->  To get the user information i.e the user bookings from bookings table
                                           ->  payload taken - email
http://localhost:3001/api/search_flights   -> this is search for the flights based on the deatils entered by the user from flight table
                                           -> payload taken flight_from,flight_to,flight_date,flight_time
http://localhost:3001/api/flight_insert    -> to insert flight by admin into the flight table
                                            -> payload taken - flight_name,flight_from,flight_to,date_departure,time,flight_fare,date_arrival,available
                                            
http://localhost:3001/api/search_flights_admin     -> to search flight from flight table by admin
                                                    -> payload taken flight_id,flight_time.
                                                    
http://localhost:3001/api/delete_flights            -> to delete flight by the admin from flight table
                                                    -> payload taken id
http://localhost:3001/api/book_id                   -> to book a flight by the user and insert into bookings
                                                    -> payload taken
                                                      user_mail,flight_name flight_to flight_from date flight_fare 
                                                      
Note :- All the API are tested by api with a 200 status code and are in working condition.
----------------------------------------------------------------------------------------------------------------------------------------
Front end-User side front end completed,Admin side some part of the front end is left out due to time constrainsts but the backend is completed for both of them.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
dependencies needed to run  cors,react-router-dom,node modules,mysql,express,axios.
-------------------------------------------------------------------------------------------


  

 


