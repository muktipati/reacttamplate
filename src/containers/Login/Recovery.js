import React, {Component} from 'react';

import './Login.css';
import logo from '../../assets/image/logo.png';
import bgimg from '../../assets/image/loginbg.jpg';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Recovery extends Component{
    state = {
        // forgotpassword: ''
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false               
            },
        },
        formIsValid: false,
    };
    checkValidity(value, rules) {
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
            const pattern1 =   /^[0]?[789]\d{9}$/
            isValid = (pattern1.test(value) && isValid) || (pattern.test(value) && isValid)
            console.log("isValid",isValid)
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
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
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
                                <div className='loginTxt'>Can't log in?</div>
                            </div>
                            <div className="resetEmailTxt">
                                <span>We'll send a recovery link to</span>
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
                            <Button btnType="Success" disabled={!this.state.formIsValid}>Send recovery link</Button>
                    </div>
                    <div className='resetPasswordCancel'>
                        <ul>
                            <li>
                                <a id="resetPassword-email-cancel" href="/login">
                                    <span>Return to log in</span>
                                </a>
                            </li>
                            <li>
                                <a id="help" href="/Recovery">
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
export default Recovery 