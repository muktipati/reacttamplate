import React, {Component} from 'react';

import './Login.css';
import logo from '../../assets/image/logo.png';
import bgimg from '../../assets/image/loginbg.jpg';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class ResetPassword extends Component{
    state = {
        // password: ''
        loginForm: {
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'New Password'
                },
                value: '',
                validation: {
                    required: true,
                    isPassword: true,
                    minLength:8
                },
                valid: false,
                touched: false,
                         
            },
        // confirm password: ''
        confirmpassword: {
            disabled: false,
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Confirm Password',
             
            },
            value: '',
            validation: {
                required: false,
                isPassword: false,
            },
            valid: false,
            touched: false,
            invalidMessage:null  
        },
    },
        formIsValid: false,
       errorMessage:null
    };
    checkValidity(value, rules,inputType) {
      
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            
           
        }

        if (rules.minLength) {
            
            isValid = value.length >= rules.minLength && isValid
      
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
          
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
         
            // isValid = pattern.test(value) && isValid
            // const pattern1 = /^\d+$/;
           
            isValid = (pattern.test(value) && isValid)
          
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
           
        }
       
        return isValid;
    }

 inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };
     
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation,);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
             formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
            //formIsValid = updatedLoginForm[inputIdentifier].valid ;
        }
        this.setState({loginForm: updatedLoginForm, formIsValid});
    }

    render(){
        
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
      
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        valueType={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />  
                       
                ))}
            </form>
        );

        return(
            <div className='loginWrapper'>
            <img src={bgimg} className='loginBg' alt="logo" />
                <div className='login'>
                    <section className='loginSection' role="main">
                        <div className='loginDiv'>
                            <div className='loginLogo'>
                            <img src={logo} className='logo' alt="logo" />
                                <div className='loginTxt'>Reset Password</div>
                            </div>
                            {form}
                            {/* <form className={classes.loginEmail} id="form-reset-password-email">
                                <div className={classes.emailSection}>
                                    <label className={classes.resetEmail}>
                                        <div className={classes.resetEmailTxt}>
                                            <span>We'll send a recovery link to</span>
                                        </div>
                                    </label>
                                    <div className={classes.emailForm}>
                                        <input className={classes.emailField} id="username" required placeholder="Enter email"  />   
                                    </div>
                                </div>
                                <div className={classes.buttonSection}>
                                    <button className={classes.buttonField} id="login-continue">Send recovery link</button>
                                </div>
                            </form> */}
                            <Button btnType="Success" disabled={!this.state.formIsValid}>Reset Password</Button>
                    </div>
                    <div className='resetPasswordCancel'>
                        <ul>
                            <li>
                                <a href="/signup" className="signup-link">
                                    <span>Sign up for an account</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Recovery">
                                    <span>Help</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>           
        );
    }
}
export default ResetPassword 