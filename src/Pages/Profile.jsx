import React, {useEffect, useState} from 'react';
import { useRef } from 'react';import './Profile.css';
import Nav from '../Components/Nav';
import { supabase } from '../supabase';
import Pageheader from '../Components/Pageheader';
import Uploadbutton from '../Components/Uploadbutton';
import profilepic from '../Assets/profilepic.svg';
import Short from '../Components/ShortFill';
import uploadimg from '../Assets/upload.svg';
import edit from '../Assets/edit.svg';
import Long from '../Components/LongFill';
import Savebutton from '../Components/Savebutton';
import InsightsFill from '../Components/InsightsFill';
import ProjectFill from '../Components/ProjectFill';
import Uploadcomp from '../Components/Uploadcomp';
import Social from '../Components/Social';
import Seo from '../Components/Seo';



const Profile = () => {


        const containerRef = useRef(null);

        const [loading, setLoading] = useState(true);
        const [Personalidentity, setPersonalidentity] = useState([
    
    
            {
    
                    id:"",
                    title:"",
                    coverimg:"",
                    image:[],
                    description:"",
                    details:"",
                    category:[]
                    
                   } 
    
    
    ]) ;
    
    
    useEffect(()=>{
    
     async function getAllPersonalidentityAPI(){
      const res = await supabase.from("Personalidentity").select("*");
      setPersonalidentity(res.data);
      // console.log(res.data);
        setLoading(false);
    }
    getAllPersonalidentityAPI();
    
    },[]);
    
    if (loading) return <p>Loading...</p>;
    
    return ( 
        <>
        
        <article className='navv'>

        <Nav />

        </article>


        <article className='container-14'>




        <Pageheader hometitle="Home Page" add="Add" remove="Delete"  />

   
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


{Personalidentity
  .filter(Personalidentity => Personalidentity.id === 1)
  .map(Personalidentity => (

        <article className='rowww-44'>

        <Short pagetitle="Heading" uploadtext={Personalidentity.title} uploadimg={edit}  />
        <Short pagetitle="Sub Heading" uploadtext={Personalidentity.subtitle} uploadimg={edit}  />

        </article>
   ) 
   ) 
   }

{Personalidentity
  .filter(Personalidentity => Personalidentity.id === 1)
  .map(Personalidentity => (
        <article className='rowww-44'>

        <Short pagetitle="Text" uploadtext="a Digital Art and Design student..." uploadimg={edit}  />
        <Short pagetitle="Button" uploadtext={Personalidentity.button} uploadimg={edit}  />

        </article>
   
   ) 
   ) 
   }
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


        <article className='what-i-do-div'>

<h1 className='personal-text'>What I Do</h1>



<article className='all-c'>

<Long pagetitle="Title" uploadtext="My services" uploadimg={edit}  />

<article className='rowww-44'>

<Short pagetitle="Project" uploadtext="UI/UX" uploadimg={edit}  />
<Short pagetitle="Project" uploadtext="Programming" uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Project" uploadtext="Graphic design" uploadimg={edit}  />
<Short pagetitle="Project" uploadtext="Photography" uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Project" uploadtext="Branding" uploadimg={edit}  />
<Short pagetitle="Project" uploadtext="3D Modeling" uploadimg={edit}  />

</article>

<Long pagetitle="Title" uploadtext="My Skills" uploadimg={edit}  />

<h1 className='projectt-text'>Project</h1>


<article className='rowww-45'>

<ProjectFill uploadtext="Illustrator" uploadimg={edit} />
<ProjectFill uploadtext="80%" uploadimg={edit} />
<Uploadbutton />

</article>


<article className='rowww-45'>

<ProjectFill uploadtext="Figma" uploadimg={edit} />
<ProjectFill uploadtext="90%" uploadimg={edit} />
<Uploadbutton />

</article>


<article className='rowww-45'>

<ProjectFill uploadtext="After effects" uploadimg={edit} />
<ProjectFill uploadtext="75%" uploadimg={edit} />
<Uploadbutton />

</article>

<article className='rowww-45'>

<ProjectFill uploadtext="Blender" uploadimg={edit} />
<ProjectFill uploadtext="70%" uploadimg={edit} />
<Uploadbutton />

</article>


<article className='rowww-45'>

<ProjectFill uploadtext="Photoshop" uploadimg={edit} />
<ProjectFill uploadtext="60%" uploadimg={edit} />
<Uploadbutton />

</article>

<article className='rowww-45'>

<ProjectFill uploadtext="Premier" uploadimg={edit} />
<ProjectFill uploadtext="55%" uploadimg={edit} />
<Uploadbutton />

</article>

<article className='rowww-45'>

<ProjectFill uploadtext="VS Code" uploadimg={edit} />
<ProjectFill uploadtext="95%" uploadimg={edit} />
<Uploadbutton />

</article>


<article className='rowww-45'>

<ProjectFill uploadtext="Aero" uploadimg={edit} />
<ProjectFill uploadtext="75%" uploadimg={edit} />
<Uploadbutton />

</article>

<Savebutton />

</article>



        </article>



        <article className='contact-me-div-22'>

<h1 className='personal-text'>Contact Me</h1>



<article className='all-c'>

<article className='rowww-44'>

<Short pagetitle="Title" uploadtext="Contact Me" uploadimg={edit}  />
<Short pagetitle="Heading" uploadtext="Info" uploadimg={edit}  />

</article>

<article className='rowww-44'>

<Short pagetitle="Phone Number" uploadtext="+02 01000444401" uploadimg={edit}  />
<Short pagetitle="Email" uploadtext="Jailanhammad@gmail.com" uploadimg={edit}  />

</article>

<article className='rowww-46'>

<div className='margin-left-1'>
<Uploadcomp />
</div>

<div className='margin-left-2'>
<Uploadcomp />
</div>


</article>

<article className='rowww-47'>

<Short pagetitle="Location" uploadtext="Masr El Gdida" uploadimg={edit}  />

<div className='co'>
<p className='share-icon'>Share Icon</p>
<Uploadbutton />
</div>

</article>

<div className='ro'>
<p className='icon-t'>Icon</p>
<Uploadbutton />
</div>


<h1 className='sociall-text'>Social Links</h1>


<article className='all-c'>


<Social uploadtext="https://www.facebook.com/" uploadimg={edit} />
<Social uploadtext="https://www.instagram.com/" uploadimg={edit} />
<Social uploadtext="https://www.whatsapp.com/" uploadimg={edit} />

<Savebutton />

</article>


</article>



        </article>


<Seo />












        </article>
        
        
        
        
        
        </>
     );
}
 
export default Profile;