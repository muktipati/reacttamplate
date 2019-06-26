import React,{ Component} from 'react';
import classes from '../Login/Login.css';
import logo from '../../assets/image/logo.png';
import bgimg from '../../assets/image/loginbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'


class SignUp extends Component{

    state = {
        password: '',
        confirmPassword: '',
        inputPasswordType:'password',
        inputCnfmPasswordType:'password'
    }
    
    handleSubmit = () => {
        const { password, confirmPassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            // make API call
        }
    }
    mouseoverPassForPassword =() =>{
        this.setState({inputPasswordType:'text'})
    }
    mouseOutForPassword = () =>{
        this.setState({inputPasswordType:'password'})  
    }
    mouseoverPassForConfirm =() =>{
        this.setState({inputCnfmPasswordType:'text'})
    }
    mouseOutForConfirm = () =>{
        this.setState({inputCnfmPasswordType:'password'})  
    }
    // onClick={this.handleShow} 
  
    render(){
        return(
            <div className='loginWrapper'>
                <img src={bgimg} className='loginBg' alt="logo" />
                    <div className='login'>
                        <section className='loginSection' role="main">
                            <div className='loginDiv'>
                                <div className='loginLogo'>
                                <img src={logo} className='logo' alt="logo" />
                                    <div className='loginTxt'>Sign up for your account</div>
                                </div>
                                <form className='loginEmail' id="signup" method="post" onSubmit={this.handleSubmit}>   
                                                        
                                    <div className='mobileSection'>
                                        <div className='mobileForm'>
                                            <input className='mobileField' id="mobile" placeholder="Mobile No" name="mobileno" /> 
                                        </div>
                                    </div>
                                    <div className='emailSection'>
                                        <div className='emailForm'>
                                            <input className='emailField' id="email" type="text" placeholder="Enter email"  name="email"/>
                                        </div>
                                        
                                    </div>
                                    <div className='nameSection'>
                                        <div className='nameForm'>
                                            <input className='accountNameField' id="account-name" placeholder="Enter Account Name"  name="accountname" />   
                                        </div>
                                        
                                    </div>
                                    <div className='createPasswordSection'>
                                        <div className='createPasswordForm'>
                                            <input className='createPasswordField' id="create-password"  
                                            type={this.state.inputPasswordType} 
                                            placeholder="Create Password" 
                                            name="createpassword"
                                            onChange={this.handlePasswordChange}  />   
                                            <span className='passwordIcon' onMouseOver={this.mouseoverPassForPassword} onMouseOut={this.mouseOutForPassword}><FontAwesomeIcon icon={faEye} /></span>
                                            
                                        </div>
                                      
                                        <div className='passwordStrength'>
                                            <span className='passwordStrline'></span>
                                        </div>
                                    </div>
                                    <div className='confirmPasswordSection'>
                                        <div className='confirmPasswordForm'>
                                            <input className='confirmPasswordField' id="confirm-password" 
                                            type={this.state.inputCnfmPasswordType} 
                                            placeholder="Confirm Password" 
                                            name="confirmpassword"
                                            onChange={this.handleConfirmPassword}  />   
                                            <span className='passwordIcon' onMouseOver={this.mouseoverPassForConfirm} onMouseOut={this.mouseOutForConfirm}><FontAwesomeIcon icon={faEye} /></span>
                                           
                                        </div>
                                       
                                        <div className='passwordStrength'>
                                            <span className='passwordStrline'></span>
                                        </div>
                                    </div>
                                    <div className='buttonSection'>
                                        <button className='buttonField' id="account-create" type="submit">Create a Account</button>
                                    </div>
                                </form>
                                <div className='googleLogin'>
                                    <span className='googleOr'>OR</span>
                                        <div className='googleTxt'>
                                            <button className='googleButton' id="login-google">Log in to Google</button> 
                                        </div>
                                </div>
                    </div>
                    <div className='redirctloginlink'>
                        <ul>
                            <li>
                                <a id="redirectlogin" href="#/login">
                                    <span>Already have an autoplant Account? log in </span>
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
export default SignUp