import React, {Component} from 'react';

import './Login.css';
import logo from '../../assets/image/logo.png';
import bgimg from '../../assets/image/loginbg.jpg';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class ForgotPassword extends Component{
    state = {
        // forgotpassword: ''
        loginForm: {
            forgotpassword: {
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
                                <a id="resetPassword-email-cancel" href="#/login">
                                    <span>Return to log in</span>
                                </a>
                            </li>
                            <li>
                                <a id="help" href="#/forgotpassword">
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
export default ForgotPassword 