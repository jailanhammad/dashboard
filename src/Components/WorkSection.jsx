import React from 'react';
import './WorkSection.css';
import Short from '../Components/ShortFill';
import edit from '../Assets/edit.svg';
import Uploadbutton from '../Components/Uploadbutton';
import vd from '../Assets/vd.svg';
import Description from './Description';
import Savebutton from '../Components/Savebutton';

const WorkSection = () => {
    return ( 
        <>
        
        <article className='section-01'>

        <h1 className='section-text-01'>Section</h1>


<article className='big-section-01'>

<article className='rowww-405'>

    <div className='project-pic'>

    <img src={vd} alt="video" className='vd' />
    <Uploadbutton />

    </div>

<Short pagetitle="Project name" uploadtext="Gym Website" uploadimg={edit}  />

</article>


<Description pagetitle="Project description" uploadtext="The Gym website is a bold and energetic digital platform designed to motivate users and make fitness information easy to navigate. The goal of this project was to create a modern and powerful visual identity that reflects the strength, movement, and lifestyle of a gym brand." uploadimg={edit} />


<div className='icon-coloumn-5'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>

<div className='sv-btn'>
<Savebutton />
</div>




</article>





        </article>
        
        
        
        
        </>
     );
}
 
export default WorkSection;