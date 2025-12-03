import React from 'react';
import './Secret.css';

import biglogo from '../Assets/biglogo.svg';
import back from '../Assets/back.png';
import daimond from '../Assets/daimond.svg';
import eye from '../Assets/eye.svg';
import check from '../Assets/check.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <>
        
        <article className='LoginPage'> 


<section className='firstPart'>

<img src={back} className='back' />

<div className='part-1'>

<img src={biglogo} className='biglogo' />

<div className='bigg-divv'>

<img src={daimond} className='daimond' />

<h1 className='hero-text'>Control Your Creative Identity</h1>

</div>

</div>


</section>



<section className='secondPart'>

<p className='welcome-text'>Welcome Back!</p>

<div className='formm'>

        <div className='email-div'>

        <p className='email-text'>Email</p>

        <div className='email-box'>

        <p className='email-text-2'>write your email</p>

        </div>

        </div>

        <div className='email-div'>

        <p className='email-text'>Password</p>

        <div className='pass-box'>

        <p className='email-text-2'>write your password</p>
        <img src={eye} className='eye'/>

        </div>

        </div>

    <div className='reminder-row'>

        <div className='reminder-box'>

        <img src={check} className='check'/>
        <p className='reminder-text'>Reminder Me</p>

        </div>

        <p className='reminder-text'>Forgot Password?</p>


    </div>
 
    <div className='coloumn-login'>

        <div className='login-button'>

        <Link class="login-text" to="/Home">
        Login
        </Link>
        
        </div>

        <p className='login-text-black'>Don’t have an account?<span className='bold'>Sign up here</span></p> 


    </div>

</div>


</section>

        </article>
        
        
        
        
        </>
     );
}
 
export default Login;