import React from 'react';
import './Message.css';
import Nav from '../Components/Nav';
import MessageHeader from '../Components/MessageHeader';
import Table from '../Components/Table';

const Message = () => {
    return ( 
        <>
        
        <article className='navv'>
        <Nav />
        </article>
        
        <article className='container-5'>

        <MessageHeader />
        <Table />


        </article>
        
        
        
        
        
        
        </>
     );
}
 
export default Message;