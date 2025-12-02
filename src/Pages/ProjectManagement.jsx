import React from 'react';
import './ProjectManagement.css';

import ProjectNav from '../Components/ProjectNav';
import ProjectHeader from '../Components/ProjectHeader';
import Form from '../Components/Form';
import filters from '../Assets/filters.svg';
import Container from '../Components/Container';

import add from '../Assets/add.svg';

const ProjectManagement = () => {
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

        <p className='add-text'>Add Project</p>
        <img src={add} className='add' />

        </div>



        </article>
    

    


        </article>
        
        
        </>
     );
}
 
export default ProjectManagement;