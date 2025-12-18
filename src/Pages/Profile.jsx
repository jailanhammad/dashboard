import React from 'react';
import './Profile.css';
import Nav from '../Components/Nav';
import Pageheader from '../Components/Pageheader';
import Uploadbutton from '../Components/Uploadbutton';
import profilepic from '../Assets/profilepic.svg';
import Short from '../Components/ShortFill';
import upload from '../Assets/upload.svg';
import edit from '../Assets/edit.svg';
import Long from '../Components/LongFill';
import Savebutton from '../Components/Savebutton';
import InsightsFill from '../Components/InsightsFill';

const Profile = () => {
    return ( 
        <>
        
        <article className='navv'>

        <Nav />

        </article>


        <article className='container-14'>

        <Pageheader hometitle="Home Page" />



        <article className='perosnal-div'>

        <h1 className='personal-text'>Personal & Identity</h1>

        <div className='pic-div-1'>

        <img src={profilepic} alt="profilepic" className='profilepic' />

        <div className='r-div-2'>

        <p className='pp-text'>Profile Picture</p>
        <Uploadbutton />


        </div>


        </div>

        <article className='all-c'>



        <article className='rowww-44'>

        <Short pagetitle="Heading" uploadtext="Hi, I’m " uploadimg={edit}  />
        <Short pagetitle="Sub Heading" uploadtext="Jailan Hammad" uploadimg={edit}  />

        </article>

        <article className='rowww-44'>

        <Short pagetitle="Text" uploadtext="a Digital Art and Design student..." uploadimg={edit}  />
        <Short pagetitle="Button" uploadtext="Explore My Work" uploadimg={edit}  />

        </article>

        <Long pagetitle="Menu" uploadtext="UI / UX" uploadimg={edit}  />

        <Savebutton />

        </article>



        </article>




        <article className='aboutt-div'>

<h1 className='personal-text'>About Me</h1>



<article className='all-c'>



<article className='rowww-44'>

<Short pagetitle="Title" uploadtext="About Me" uploadimg={edit}  />
<Short pagetitle="Heading" uploadtext="Hi, I’m Jailan, a 21-year-old Digital... " uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Text" uploadtext="a Digital Art and Design student..." uploadimg={edit}  />
<InsightsFill insights="Insights" hundret="100+" uploadimg={edit} projecttext="Project Complete" />

</article>



<article className='rowww-44'>

<InsightsFill insights="Insights" hundret="4+" uploadimg={edit} projecttext="Years of Experience" />
<InsightsFill insights="Insights" hundret="3+" uploadimg={edit} projecttext="Internship" />

</article>

<Savebutton />

</article>



</article>





        </article>
        
        
        
        
        
        </>
     );
}
 
export default Profile;