import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, ButtonDiv,TitleHead } from './sign-in.style';
const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }

        return (
            <SignInContainer>
                <TitleHead>I already have an account.</TitleHead>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value= {email} 
                    handleChange={handleChange} 
                    label='email'
                    required/>
                   
                    <FormInput 
                    name="password" 
                    type="password" 
                    value= {password} 
                    handleChange={handleChange} 
                    label='password'
                    required/>
                    <ButtonDiv>
                        
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton type="button" onClick={ googleSignInStart } isGoogleSignIn> {' '}
                    Sign in With Google {' '}
                    </CustomButton>
                    
                    </ButtonDiv>


                </form>
            </SignInContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);