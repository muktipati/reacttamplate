import React from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import './Header.css';


const header = (props) =>(
    <Auxi>
        <p className='Header'>{props.title}</p>
    </Auxi>

)

export default header;