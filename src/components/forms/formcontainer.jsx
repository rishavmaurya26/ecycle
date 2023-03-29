import React from 'react';
import './formcontainer.css'
import Iframe from 'react-iframe'
export default function Formcontainer()
{
    return(
        <div className="container-fluid p-5" id="formcontainer">
            <Iframe className='my-1' src="https://docs.google.com/forms/d/e/1FAIpQLSfaobLJhnPtuKpJU3eb2yYFTSWLS8t-4i97VVOvjvx1tff9sg/viewform?embedded=true"
             width="640" height="809" frameborder="0"marginheight="0" marginwidth="0">Loading…</Iframe>
             <Iframe className='my-5' src="https://docs.google.com/forms/d/e/1FAIpQLSfbkGZ8kFgLT8XzTn1MOgablwbhdTbPGZuomx_ZdXZD0wmodQ/viewform?embedded=true" 
             width="640" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</Iframe>
        </div>
    )
}