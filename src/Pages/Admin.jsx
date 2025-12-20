import React from 'react';
import './Admin.css';
import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Admincontrol from '../Components/Admincontrol';
import adminsvg from '../Assets/admin.svg';

const Admin = () => {
    return ( 
        <>
        
        
        <article className='navv'>

<Nav />

</article>


<article className='container-14'>

<Pageheader hometitle="Admin Control" add="Add admins" remove="Remove" />

       <article className='admin-coloumn'>


        <Admincontrol adminsvg={adminsvg} adminname="Jailan Hammad (You)" status="Can Edit" last="Last Update" days="3 days ago" />
        <Admincontrol adminsvg={adminsvg} adminname="Someone" status="Can Edit" last="Last Update" days="2 days ago" />
        <Admincontrol adminsvg={adminsvg} adminname="Someone" status="Can Edit" last="Last Update" days="2 days ago" />
        <Admincontrol adminsvg={adminsvg} adminname="Someone" status="Can Edit" last="Last Update" days="2 days ago" />
        <Admincontrol adminsvg={adminsvg} adminname="Someone" status="Can Edit" last="Last Update" days="2 days ago" />
        <Admincontrol adminsvg={adminsvg} adminname="Someone" status="Can Edit" last="Last Update" days="2 days ago" />

        </article>



</article>







        </>
     );
}
 
export default Admin;