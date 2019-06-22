import React from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import './Header.css';


const header = (props) =>(
    <Auxi>
        <div className='Header'>{props.title}</div>
    </Auxi>

)

export default header;