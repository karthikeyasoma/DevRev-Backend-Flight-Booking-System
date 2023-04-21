import React  from "react";
import './App.css';
import {Home} from "./pages/Home";
import {User_page} from "./pages/User_page";
import {UserInfo}  from "./pages/User_Info";
// import {bookFlight} from "./pages/bookFlight";
import {Admin_page} from "./pages/Admin_page";
import {Add_Flight}  from "./pages/Add_Flight";
import {Remove_Flight} from "./pages/Remove_Flight";
import {Search_Flight} from "./pages/Search_Flight";


import {Route, BrowserRouter as Router,Routes} from "react-router-dom";



function App() {
  return (
    <Router>
    <Routes>
    <Route   path="/"              element={<Home/>}/>
    <Route  path="/User_page"     element={<User_page/>}/>
    <Route   path="/User_page/UserInfo"      element={<UserInfo/>}/>
    <Route   path="/User_page/Search_Flight"  element={<Search_Flight/>}/>
    <Route  path="/_page"    element={<Admin_page/>}/>
    
    <Route  path="/_page/Remove_Flight"  element={<Remove_Flight/>}/>
    <Route  path="/_page/addFlight"    element={<Add_Flight/>}/>
    <Route path="*"  element={<UserInfo/>} />
    </Routes>
    </Router>
  );
}

export default App;