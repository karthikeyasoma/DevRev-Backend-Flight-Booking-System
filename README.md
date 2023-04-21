

# DevRev-Backend-Flight-Booking-System

The task was to create a web application for flight ticket booking with backend functionalities (CRUD Operations). A console-based application would work, but submissions with a very basic UI would be given extra marks.

## Type of Users

- User
- Admin

## User Use Cases

- Login
- Sign up
- Search for flights based on date and time
- Book tickets on a flight based on availability (assuming the default seat count is 60)
- My Booking -> list all bookings made by the user
- Logout

## Admin Use Cases

- Login (Separate login for Admin)
- Add flights
- Remove flights
- View all bookings based on flight number and time

## Tech Stack

- Front end: HTML, CSS, React JS
- Back end: Node JS, Express JS
- Database: MySQL Workbench
- Postman: Testing API

## Database Schema

There are three tables in the karthikdb database:

1. flight table - columns: id, flight_name, flight_to, available, date_departure, time, seats, flight_fare, date_arrival
2. users table - columns: id, email, password, username, role
3. bookings table - columns: id, user_mail, flight_name, flight_to, date, flight_fare

## API Documentation

### Insert User Details

- Endpoint: http://localhost:3001/api/insert
- Payload: email, pass, name, role

### Check User Role

- Endpoint: http://localhost:3001/api/get_user
- Payload: email, pass, name, role

### Get User Information

- Endpoint: http://localhost:3001/api/user_information
- Payload: email

### Search Flights

- Endpoint: http://localhost:3001/api/search_flights
- Payload: flight_from, flight_to, flight_date, flight_time

### Insert Flight

- Endpoint: http://localhost:3001/api/flight_insert
- Payload: flight_name, flight_from, flight_to, date_departure, time, flight_fare, date_arrival, available

### Search Flights by Admin

- Endpoint: http://localhost:3001/api/search_flights_admin
- Payload: flight_id, flight_time

### Delete Flight

- Endpoint: http://localhost:3001/api/delete_flights
- Payload: id

### Book Flight

- Endpoint: http://localhost:3001/api/book_id
- Payload: user_mail, flight_name, flight_to, flight_from, date, flight_fare

Note: All APIs have been tested with a 200 status code and are in working condition.

## Front End

The user-side front end is completed, but some part of the admin-side front end is left out due to time constraints. However, the backend is completed for both of them.

## Dependencies

- cors
- react-router-dom
- node modules
- mysql
- express
- axios

Output-
Login Page for admin and user
![image](https://user-images.githubusercontent.com/84908359/233592619-e38af0d5-b567-4bb1-9511-5bc28fb592d7.png)
Options for successful login user
![image](https://user-images.githubusercontent.com/84908359/233592758-64907dcf-97cc-4b2f-8141-9d3ffc1bb653.png)
display all user bookings
![image](https://user-images.githubusercontent.com/84908359/233592809-460a4692-c671-4a27-8cac-065ee18f6088.png)
Search for flight by user
![image](https://user-images.githubusercontent.com/84908359/233593045-9cffe6db-4b6b-4c0e-9c7c-de11e2c25055.png)
Book flight by user
![image](https://user-images.githubusercontent.com/84908359/233593178-f026351a-0d75-4ad6-ad05-68cf1dace20d.png)
Options for Admin
![image](https://user-images.githubusercontent.com/84908359/233593275-d2dadc1b-01c6-4047-84ed-27ac98298714.png)






