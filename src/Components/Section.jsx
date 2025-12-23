import React from 'react';
import './Section.css';
import Short from '../Components/ShortFill';
import edit from '../Assets/edit.svg';
import Uploadbutton from '../Components/Uploadbutton';
import cd from '../Assets/cd.svg';
import Description from './Description';
import Savebutton from '../Components/Savebutton';

const Section = (props) => {
    return ( 
        <>
        
        <article className='section-01'>

        <h1 className='section-text-01'>Section</h1>


<article className='big-section-02'>

<article className='rowww-405'>

    <div className='project-pic'>

    <img src={cd} alt="video" className='vd' />
    <Uploadbutton />

    </div>

<Short pagetitle="Category name" uploadtext="UI/UX Design" uploadimg={edit}  />

</article>

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
 
export default Section;