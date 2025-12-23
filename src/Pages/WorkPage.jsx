import React from 'react';
import './WorkPage.css';
import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Uploadbutton from '../Components/Uploadbutton';
import Short from '../Components/ShortFill';
import edit from '../Assets/edit.svg';
import Long from '../Components/LongFill';
import Social from '../Components/Social';
import Savebutton from '../Components/Savebutton';
import Seo from '../Components/Seo';
import WorkSection from '../Components/WorkSection';
import Section from '../Components/Section';

const WorkPage = () => {
    return ( 
        <>
        
<article className='navv'>

<Nav />

</article>


<article className='container-14'>

<Pageheader hometitle="What I Do Page"  add="Add" remove="Delete"  />


<article className='work-page-div'>


<article className='all-c'>

<article className='rowww-44'>

<Short pagetitle="Page Title" uploadtext="My Work" uploadimg={edit}  />
<Short pagetitle="Title" uploadtext="RECENT PROJECTS" uploadimg={edit}  />

</article>


<WorkSection />
<WorkSection />
<WorkSection />


</article>

</article>

<article className='work-page-div-2'>

<article className='all-c'>

<article className='rowww-44'>

<Short pagetitle="Page Title" uploadtext="My Services" uploadimg={edit}  />
<Short pagetitle="Title" uploadtext="WHAT I DO" uploadimg={edit}  />

</article>


<Section />
<Section />
<Section />
<Section />
<Section />


</article>

</article>

<Seo />
</article>
        
        
        </>
     );
}
 
export default WorkPage;