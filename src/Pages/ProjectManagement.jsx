import './ProjectManagement.css';
import React, {useState} from 'react';
import { supabase } from '../supabase';

import ProjectNav from '../Components/ProjectNav';
import ProjectHeader from '../Components/ProjectHeader';
import Seo from '../Components/Seo';

import Form from '../Components/Form';
import filters from '../Assets/filters.svg';
import Container from '../Components/Container';

import add from '../Assets/add.svg';
import { Link } from 'react-router-dom';

const ProjectManagement = () => {




    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");

    
        async function addItem(){
         const res = await supabase.from("items").insert({"title":title})
         alert("Done");

       }

       
       
    return ( 
        <>
        
        <article className='navv'>

        <ProjectNav />

        </article>

              
        <article className='container-2'>

        <ProjectHeader />

        <Form />

        <article className='big-container'>

        <div className='all-row'>

        <div className='filters'>

        <p className='head'>Category</p>
        <p className='head'>Project Name</p>
        <p className='head'>Project Description</p>
        <p className='head'>Image</p>

        </div>


        <div className='filters-2'>

        <p className='head'>Filters</p>
        <img src={filters} className='filter' />

        </div>

        </div>

        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />
        <Container type="UI/UX" />

        <div className='add-div'>

<Link className='add-text' to="/Create">

<p className='add-text'>
            Add Project
        </p>
</Link>
  
        <img src={add} className='add' />

        </div>

        </article>
    

        <Seo />
    


        </article>
        
        
        </>
     );
}
 
export default ProjectManagement;