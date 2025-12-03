import React from 'react';
import './Seo.css';

import down from '../Assets/dropp.svg';
import edit from '../Assets/edit.svg';
import up from '../Assets/upload.svg';
import editwhite from '../Assets/edit-white.svg';
import deletew from '../Assets/deletew.svg';



const Seo = () => {
    return (
        <>
        
        <article className='seo'>


        <h1 className='seo-text'>SEO & Content Optimization</h1>


<div className='coloumn-1'>

    <article className='seo-div'>

        <div className='project-div'>

                <p className='page-title'>Page title Tag</p>

                <div className='fill-box'>

                <p className='text-box'>Category</p>

                <img src={down} className='upload' />

                </div>

        </div>

        <div className='project-div'>

                <p className='page-title'>URL Name</p>

                <div className='fill-box'>

                <p className='text-box'>Link</p>

                <img src={edit} className='upload' />

                </div>

        </div>

    </article>


        <div className='project-div'>

                <p className='page-title'>Meta Description</p>

                <div className='fill-box-big'>

                <img src={edit} className='edit-icon' />

                </div>

        </div>

                <div className='project-div'>

                <p className='page-title'>Image Optimization</p>

                <div className='fill-box-big-2'>

                <p className='text-box'>Upload New Image</p>
                <img src={up} className='upload' />

                </div>

        </div>


        <div className='buttons'>
            
            <button className='edit-button'>

            <p className='button-text-1'>Edit SEO </p>
            <img src={editwhite} className='edit-icon-2' />

            </button>

            <button className='edit-button-2'>

            <p className='button-text-1'>Delete SEO  </p>
            <img src={deletew} className='edit-icon-2' />

            </button>
            
        </div>  

</div>
        

        </article>
        

        
        
        
        </>
      );
}
 
export default Seo;