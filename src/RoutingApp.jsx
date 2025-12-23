import React from 'react';
import Login from './Pages/Secret';
import Home from './Pages/Home';
import ProjectManagement from './Pages/ProjectManagement';
import Categories from './Pages/Categories';
import Message from './Pages/Message';
import Secret from './Pages/Secret';
import Projectdetails from './Pages/Projectdetails';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import WorkPage from './Pages/WorkPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const RoutingApp = () => {

    const url = window.location.href.split("/");
    console.log(url)

    return ( 


<>

<BrowserRouter>

<Routes>

<Route path='/' element={<Login />} />
<Route path='/Home' element={<Home />} />
<Route path='/Projectmanagement' element={<ProjectManagement />} />
<Route path='/Categories' element={<Categories />} />
<Route path='/Message' element={<Message />} />
<Route path='/Projectdetails' element={<Projectdetails />} />
<Route path='/Profile' element={<Profile />} />
<Route path='/Admin' element={<Admin />} />
<Route path='/AboutPage' element={<AboutPage />} />
<Route path='/ContactPage' element={<ContactPage />} />
<Route path='/WorkPage' element={<WorkPage />} />

<Route path='/Secret' element={<Secret />} />



</Routes>


</BrowserRouter>


</>


     );
}
 
export default RoutingApp;