import React from 'react';
import Home from './Pages/Home';
import ProjectManagement from './Pages/ProjectManagement';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const RoutingApp = () => {

    const url = window.location.href.split("/");
    console.log(url)

    return ( 


<>

<BrowserRouter>

<Routes>

<Route path='/Home' element={<Home />} />
<Route path='/Projectmanagement' element={<ProjectManagement />} />


</Routes>


</BrowserRouter>


</>


     );
}
 
export default RoutingApp;