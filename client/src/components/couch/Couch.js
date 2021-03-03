import React from 'react';
import './Couch.css';

function Couch({ primary, secondary }) {
    const hello = [1, 2, 3];

return (
            <div className='couch'>
            <div style={{ backgroundColor: secondary, width: '50px', height: '75px', marginTop: '25px'}}></div>
            <div style={{ backgroundColor: primary, width: '250px'}}></div>
            <div style={{ backgroundColor: secondary, width: '50px', marginTop: '25px'}}></div>
             </div>
        )
}

export default Couch;