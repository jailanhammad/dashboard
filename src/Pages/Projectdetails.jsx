import React from 'react';
import './Projectdetails.css';

import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Short from '../Components/ShortFill';
import Long from '../Components/LongFill';
import Seo from '../Components/Seo';

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

        <article className='rowww-2'>

        <Short pagetitle="Page Title" uploadtext="Upload Image" uploadimg={upload}  />
        <Short pagetitle="Category" uploadtext="UI & UX Design" uploadimg={edit}  />

        </article>

        <Long pagetitle="Content Title" uploadtext="Project Overview" uploadimg={edit}  />


        <article className='rowww-2'>

        <Short pagetitle="Title" uploadtext="What the project is:" uploadimg={edit}  />
        <Short pagetitle="Description" uploadtext="This project is a fully designed..." uploadimg={edit}  />

        </article>

        <article className='rowww-2'>

        <Short pagetitle="Title" uploadtext="What the project is:" uploadimg={edit}  />
        <Short pagetitle="Description" uploadtext="This project is a fully designed..." uploadimg={edit}  />

        </article>

        <article className='rowww-2'>

        <Short pagetitle="Title" uploadtext="What the project is:" uploadimg={edit}  />
        <Short pagetitle="Description" uploadtext="This project is a fully designed..." uploadimg={edit}  />

        </article>


        </article>


        <article className='first-box-23'>

        <article className='rowww-2'>

        <Short pagetitle="Section Title" uploadtext="Project details" uploadimg={edit}  />
        <Short pagetitle="Project name" uploadtext="Giza zoo website" uploadimg={edit}  />

        </article>

        <Long pagetitle="Project Image" uploadtext="Upload Image" uploadimg={upload}  />


        <article className='rowww-2'>

        <Short pagetitle="Section Title" uploadtext="Project details" uploadimg={edit}  />
        <Short pagetitle="Project name" uploadtext="Giza zoo website" uploadimg={edit}  />

        </article>

        <Long pagetitle="Project Image" uploadtext="Upload Image" uploadimg={upload}  />

        <article className='rowww-2'>

        <Short pagetitle="Section Title" uploadtext="Project details" uploadimg={edit}  />
        <Short pagetitle="Project name" uploadtext="Giza zoo website" uploadimg={edit}  />

        </article>

        <Long pagetitle="Project Image" uploadtext="Upload Image" uploadimg={upload}  />

        <article className='rowww-2'>

        <Short pagetitle="Section Title" uploadtext="Project details" uploadimg={edit}  />
        <Short pagetitle="Project name" uploadtext="Giza zoo website" uploadimg={edit}  />

        </article>

        <Long pagetitle="Project Image" uploadtext="Upload Image" uploadimg={upload}  />

        <article className='rowww-2'>

        <Short pagetitle="Section Title" uploadtext="Project details" uploadimg={edit}  />
        <Short pagetitle="Project name" uploadtext="Giza zoo website" uploadimg={edit}  />

        </article>

        <Long pagetitle="Project Image" uploadtext="Upload Image" uploadimg={upload}  />



        </article>





        <Seo />




        </article>
    
        </>
     );
}
 
export default Projectdetails;