import React from 'react';
import './formcontainer.css'
import Iframe from 'react-iframe'
export default function Formcontainer()
{
    return(
        <div className="container-fluid p-5" id="formcontainer">
            <Iframe className='my-1' src="https://forms.gle/T2aYwYrWQGCipfXYA"
             width="640" height="809" frameborder="0"marginheight="0" marginwidth="0">Loading…</Iframe>
             <Iframe className='my-5' src="https://forms.gle/aheC9PGRaSJUbScn9" 
             width="640" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</Iframe>
        </div>
    )
}