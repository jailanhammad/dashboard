import React from 'react';
import './Projectdetails.css';

import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Short from '../Components/ShortFill';
import upload from '../Assets/upload.svg';
import edit from '../Assets/edit.svg';

const Projectdetails = () => {
    return ( 
        <>
        
        <article className='navv'>

        <Nav />

        </article>
        

        <article className='container-14'>

        <Pageheader />

        <article className='first-box-22'>

        <Short pagetitle="Page Title" uploadtext="Upload Image" uploadimg={upload}  />
        <Short pagetitle="Category" uploadtext="UI & UX Design" uploadimg={edit}  />
 
        </article>

        </article>
    
        </>
     );
}
 
export default Projectdetails;