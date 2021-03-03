import React  from 'react';
import './Curtain.css'

function Curtain({ primary, secondary }) {
    return (
              <div className='curtain-parent'>
            <div style={{ backgroundColor: primary, width: '50px'}}></div>
            <div style={{ backgroundColor: secondary, width: '50px' }}></div>
            <div style={{ backgroundColor: primary, width: '50px'}}></div>
             </div>
        )
}

export default Curtain