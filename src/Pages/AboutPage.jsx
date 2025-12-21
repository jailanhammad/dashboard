import React from 'react';
import './AboutPage.css';
import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Uploadbutton from '../Components/Uploadbutton';
import profilepic from '../Assets/profilepic.svg';
import Short from '../Components/ShortFill';
import edit from '../Assets/edit.svg';
import Long from '../Components/LongFill';
import Comp from '../Components/Comp';
import Seo from '../Components/Seo';
const AboutPage = () => {
    return (
        <>
        
        
        
<article className='navv'>

<Nav />

</article>


<article className='container-14'>

<Pageheader hometitle="About Page"  add="Add" remove="Delete"  />


<article className='aboutme-div'>

<div className='pic-div-1'>

<img src={profilepic} alt="profilepic" className='profilepic' />

<div className='r-div-2'>

<p className='pp-text'>Profile Picture</p>
<Uploadbutton />


</div>


</div>

<article className='all-c'>



<article className='rowww-44'>

<Short pagetitle="Heading" uploadtext="More About Me" uploadimg={edit}  />
<Short pagetitle="Description" uploadtext="Hi, I’m Jailan, a 21..." uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Education Title" uploadtext="Education" uploadimg={edit}  />
<Short pagetitle="Description" uploadtext="Egypt University of Informatics..." uploadimg={edit}  />

</article>

<div className='icon-coloumn'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>


<article className='rowww-44'>

<Short pagetitle="Work Experience Title" uploadtext="Education" uploadimg={edit}  />
<Short pagetitle="Description" uploadtext="Egypt University of Informatics..." uploadimg={edit}  />

</article>


<div className='icon-coloumn'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>

<Long pagetitle="Quality Services Title" uploadtext="My Quality Services" uploadimg={edit}  />

<div className='comp-div'>

<Comp pagetitle="Heading" uploadtext="UI/UX" pagetitle2="Sub Heading" uploadtext2="Crafting,Smooth..." uploadimg={edit} />
<Comp pagetitle="Heading" uploadtext="UI/UX" pagetitle2="Sub Heading" uploadtext2="Crafting,Smooth..." uploadimg={edit} />
<Comp pagetitle="Heading" uploadtext="UI/UX" pagetitle2="Sub Heading" uploadtext2="Crafting,Smooth..." uploadimg={edit} />
<Comp pagetitle="Heading" uploadtext="UI/UX" pagetitle2="Sub Heading" uploadtext2="Crafting,Smooth..." uploadimg={edit} />


</div>


</article>

</article>


<Seo />

</article>
        
        
        </>
      );
}
 
export default AboutPage;