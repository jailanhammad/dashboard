import React from 'react';
import './ContactPage.css';
import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Uploadbutton from '../Components/Uploadbutton';
import Short from '../Components/ShortFill';
import edit from '../Assets/edit.svg';
import Long from '../Components/LongFill';
import Social from '../Components/Social';
import Savebutton from '../Components/Savebutton';
import Seo from '../Components/Seo';


const ContactPage = () => {


    return ( 
        <>
        
        
    <article className='navv'>

<Nav />

</article>


<article className='container-14'>

<Pageheader hometitle="Contact Form"  add="Add" remove="Delete"  />




<article className='contact-me-div'>


<article className='all-c'>



<article className='rowww-44'>

<Short pagetitle="Hero text" uploadtext="Contact Me" uploadimg={edit}  />
<Short pagetitle="Title" uploadtext="Contact information" uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Phone Number" uploadtext="+02 01000444401" uploadimg={edit}  />
<Short pagetitle="Email" uploadtext="Jailanhammad@gmail.com" uploadimg={edit}  />

</article>


<article className='rowww-400'>


<div className='icon-coloumn-0'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>

<div className='icon-coloumn-2'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>

</article>


<article className='rowww-44'>

<Short pagetitle="Location" uploadtext="Masr El Gdida" uploadimg={edit}  />
<div className='icon-coloumn-2'>

<p className='icon-text-01'> Share Icon</p>
<Uploadbutton />

</div>

</article>


<div className='icon-coloumn'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>


<h1 className='sociall-text'>Social Links</h1>

<article className='all-c'>


<Social uploadtext="https://www.facebook.com/" uploadimg={edit} />
<Social uploadtext="https://www.instagram.com/" uploadimg={edit} />
<Social uploadtext="https://www.whatsapp.com/" uploadimg={edit} />


</article>

<h1 className='formm-text'>Form</h1>

<article className='rowww-405'>

<Short pagetitle="First Name" uploadimg={edit}  />
<Short pagetitle="Last Name" uploadimg={edit}  />

</article>

<article className='rowww-405'>

<Short pagetitle="Email" uploadimg={edit}  />
<Short pagetitle="Phone Number" uploadimg={edit}  />

</article>


<Long pagetitle="Select" uploadtext="Select Subject?" uploadimg={edit}  />


<article className='rowww-405'>

<Short uploadtext="General inquiry" uploadimg={edit}  />
<Short uploadtext="Brand identity" uploadimg={edit}  />

</article>

<article className='rowww-405'>

<Short uploadtext="UI/UX" uploadimg={edit}  />
<Short uploadtext="Packaging Design" uploadimg={edit}  />

</article>

<h1 className='message-box-text'>Message box</h1>

<article className='rowww-405'>

<Short uploadtext="Message" uploadimg={edit}  />
<Short uploadtext="Write your message..." uploadimg={edit}  />

</article>

<Long pagetitle="Button" uploadtext="Send Message" uploadimg={edit}  />


<Savebutton />

</article>

</article>


<Seo />

</article>
        





        </>
     );
}
 
export default ContactPage;