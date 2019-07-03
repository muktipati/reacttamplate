import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import './Input.css';
const style = () => ({
    InputElement: {
        boxSizing: 'border-box',
        color: 'inherit',
        cursor: 'inherit',
        fontFamily: 'inherit',
        fontSize: '14px',
        width: '100%',
        backgroundColor: 'transparent',
        borderWidth: '0px',
        outline: 'none',
    },
    Invalid: {
        color: 'inherit',
        cursor: 'inherit',
        fontFamily: 'inherit',
        fontSize: '14px',
        width: '100%',
        backgroundColor: 'transparent',
        borderWidth: '0px',
        outline: 'none',
    }  
   
})

const input = ( props ) => {
    const { classes } = props
    let inputElement = null;
    const inputClasses = [classNames(classes.InputElement)];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classNames(classes.Invalid));
    }
   
let validationError = null;
   
if (props.invalid && props.touched) {
   
    validationError = <p className='ValidationError'>Please enter a valid {props.valueType}!</p>;
}

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                 />
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
        
    );

};


export default withStyles(style)(input)