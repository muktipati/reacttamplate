import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import logo from '../../assets/image/logo.png';
import bgimg from '../../assets/image/loginbg.jpg';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import FontIcon from '../../containers/common/FontIcon';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

// import Password from '../../components/UI/Input/Password'


class Login extends React.Component {
    state = {
        // email: ''
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email '
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false
            },
            // password: ''
            password: {
                disabled: false,
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',

                },
                value: '',
                validation: {
                    required: true,
                    isPassword: false,
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
    };
    componentDidUpdate(){
        console.log("after submit",this.props.userId)
        if(this.props.userId){
            this.props.history.push("/dashboard")
        }
    }
    componentWillMount() {
        console.log("after submit",this.props.userId)
      }
    // }
    orderHandler = e => {
        e.preventDefault();
        const formData = {};
        for (let formElementIdentifier /*email, name, country and so on...*/ in this
            .state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
    }
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
            const pattern1 = /^[0]?[789]\d{9}$/
            isValid = (pattern1.test(value) && isValid) || (pattern.test(value) && isValid)
            console.log("isValid", isValid)
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
        this.setState({ loginForm: updatedLoginForm, formIsValid });
    }
    submitHandler =(event) =>{
        event.preventDefault()
        this.props.onLogin(this.state.loginForm.email.value,this.state.loginForm.password.value,)
    }

    render() {
        
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
        
        // if(this.props.loading){
        //     form = <Spinner /> 
        // }
        let errorMessage = null;
       
        if (this.props.error) {
            errorMessage = (
                <div className='error-message'>
                    <FontIcon icon={'exclamation-triangle'}/>
                {this.props.error}!
                </div>
            );
            console.log("this.props.error",this.props.error)
        }
        return (

            <div className='loginWrapper'>
                <img src={bgimg} className='loginBg' alt="logo" />
                <div className='login'>
                    <section className='loginSection' role="main">
                        <div className='loginDiv'>
                            <div className='loginLogo'>
                          
                                <img src={logo} className='logo' alt="logo" />
                                <div className='loginTxt'>Log in to your account</div>
                            </div>
                         {errorMessage}
                            <form onSubmit={this.submitHandler}>
                                {form}

                                <Button btnType="Success" disabled={!this.state.formIsValid}>Continue</Button>
                            </form>

                            <div className='googleLogin'>
                                <span className='googleOr'>OR</span>
                                <div className='googleTxt'>
                                    <button className='googleButton' id="login-google">Log in to Google</button>
                                </div>
                            </div>
                        </div>
                        <div className='linkCreate'>
                            <ul>
                                <li>
                                    <a id="resetPassword" href="">
                                        <span>Can't log in?</span>
                                    </a>
                                </li>
                                <li>
                                    <a id="signup" href="#/signup">
                                        <span>Sign up for an account</span>
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
const mapStateToProps = state => {
    return {
        loading:state.login.isLoading,
        error:state.login.error,
        userId:state.login.userId
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.login(email, password)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default withStyles(style)(Login);

