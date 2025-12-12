import React from 'react';
import Login from './Pages/Secret';
import Home from './Pages/Home';
import ProjectManagement from './Pages/ProjectManagement';
import Categories from './Pages/Categories';
import Message from './Pages/Message';
import Secret from './Pages/Secret';

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
<Route path='/Secret' element={<Secret />} />



</Routes>


</BrowserRouter>


</>


     );
}
 
export default RoutingApp;