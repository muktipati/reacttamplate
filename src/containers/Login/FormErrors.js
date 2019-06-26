import React from 'react';
import classes from '../Login/Login.css';

// const  FormErrors = ({formErrors}) =>
//   <div className='formErrors'>
//     {Object.keys(formErrors).map((fieldName, i) => {
//       if(formErrors[fieldName].length > 0){
//         return (
//           <p key={i}>{fieldName} {formErrors[fieldName]}</p>
//         )        
//       } else {
//         return '';
//       }
//     })}
//   </div>
const FormErrors = (props) =>(
  <div className={classes.formErrors}>
    {
      /* {Object.keys(props.formErrors).map((fieldName, i) => {
      if(props.formErrors.length > 0){
        return (
          <p key={i}> {props.formErrors}</p>
        )        
      } else {
        return '';
      }
    })} */

    props.formErrors.length > 0?<p>{props.formErrors}</p>:null
    }
    
   
  </div>
)
export default FormErrors;