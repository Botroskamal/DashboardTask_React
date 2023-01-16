import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index-tk';

import Input from '../Input/Input';
import AuthButton from '../AuthButton/AuthButton';
import './SignUpForm.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils';
import AuthHelper from '../AuthHelper/AuthHelper';

const SignUpForm = () => {
    const navigate = useNavigate();
    const dipsatch = useDispatch();

    const defaultformField = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const [formFields, setFormField] = useState(defaultformField);
    const {firstName, lastName, email, password} = formFields;

    const resetFormField = () => {
        setFormField(defaultformField);
    }

    const submitHandler = async(event) => {
        event.preventDefault();

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, {displayName: firstName + lastName})
            dipsatch(authActions.signUp({name: user.displayName, email: user.email}));
            navigate('/dashboard');
        }
        catch(err){
            if(err.code == 'auth/email-already-in-use'){
                alert('Can\'t create user, email already in use');
            }
        }
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({...formFields, [name]: value});
    }

    return(
        <form className='signup-form'>
            <div className='input-fields'>
                <div className='first-name-sec'>
                    <span>First Name</span>
                    <Input name="firstName" type='text' placeholder='Enter your First Name' onChange={changeHandler} value={firstName}></Input>
                </div>
                <div className='last-name-sec'>
                    <span>Last Name</span>
                    <Input name="lastName" type='text' placeholder='Enter your Last Name' onChange={changeHandler} value={lastName}></Input>
                </div>
                <div className='email-sec'>
                    <span>Email</span>
                    <Input name="email" type='email' placeholder='Enter your email' onChange={changeHandler} value={email}></Input>
                </div>
                <div className='password-sec'>
                    <span>Password</span>
                    <Input name="password" type='password' placeholder='Enter your Password' onChange={changeHandler} value={password}></Input>
                </div>
            </div>
            <AuthHelper />
            <AuthButton onSubmit={submitHandler} classes='sign-up'>Sign up</AuthButton>
        </form>
    );
}

export default SignUpForm;