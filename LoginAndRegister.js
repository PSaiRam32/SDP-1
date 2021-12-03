import React, { useState } from 'react';
import './LoginAndRegister.css';
import {useSpring,animated} from 'react-spring';


function LoginAndRegister() {

  document.title = "K L University Cognitive Bank"


  const[registrationFormStatus,setRegistrationFormStatus]=useState(false);
  const loginProps=useSpring({
    left:registrationFormStatus? -500:0
  })
  const registerProps=useSpring({
    left:registrationFormStatus? 0:500
  })
  const loginBtnProps=useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #1059FF'})
  const RegisterBtnProps=useSpring({borderBottom: registrationFormStatus ? 'solid 2px #1059FF' : 'solid 0px #transparent'})

  function registerClicked() {setRegistrationFormStatus(true)}
  function loginClicked() {setRegistrationFormStatus(false)}
  return (
        <div className="login-register-wrapper">
            <div className="nav-buttons">
            <animated.button onClick={loginClicked} id="loginBtn"  style={loginBtnProps}>Login</animated.button>
            <animated.button onClick={registerClicked} id="registerBtn" style={RegisterBtnProps}>Register</animated.button>
            </div>
              
            <div className='form-group'>
                <animated.form action='' id='loginform' style={loginProps}> <LoginForm/></animated.form>
                <animated.form action='' id='registerform' style={registerProps}><RegisterForm/></animated.form>
            </div>

            <animated.div className="forgot-panel" style={loginProps}><a href="#"><b>Forgot Password?</b></a></animated.div>

        </div>          
       
  );
}

function LoginForm() {return(
  <React.Fragment>
    <label for='username'>USERNAME</label>
    <input type='text' maxLength="16" id='username' required="required"/>
    <label for='password'>PASSWORD</label>
    <input type='password'maxLength="10" id='password'/>
    <input type='submit' value='submit' className='submit' href="#" />
  </React.Fragment>
)}

function RegisterForm() {return(
  <React.Fragment>
    <label for="firstname">First Name</label>
    <input type="text" maxLength="16" id="firstname" required="required" />
    <label for="lastname">Last Name</label>
    <input type="text" maxLength="16" id="lastname" required="required" />
    <label for="username">username</label>
    <input type="text" maxLength="16" id="username" required="required" />
    <label for="aadharcard">Aadhar Card</label>
    <input type="text" maxLength="12" id="aadharcard" required="required" />
    <label for="password">Enter Password</label>
    <input type="password" maxLength="10" id="password" required="required" />
    <label for="confirmpassword">Confirm Password</label>
    <input type="password" maxLength="10" id="confirmpassword" required="required" />
    <center><label for="checkbox" required="required"><small><b><u>I agree to the Terms of use and Privacy Statement.</u></b></small></label></center>
    <input type="checkbox" id="checkbox" required="required" />
    <input type="submit" value="submit" className="submit" href="#"/>
    </React.Fragment>
)}

export default LoginAndRegister;
