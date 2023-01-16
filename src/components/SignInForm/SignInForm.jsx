import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index-tk';

import AuthHelper from '../AuthHelper/AuthHelper';
import AuthButton from '../AuthButton/AuthButton';
import Input from '../Input/Input';
import './SignInForm.scss';
import { signAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getDisplayName } from '../../firebase/firebase.utils';

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const defaultformField = {
        email: "",
        password: ""
    }

    const [formFields, setFormField] = useState(defaultformField);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormField(defaultformField);
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        try{
            const {user} = await signAuthUserWithEmailAndPassword(email, password);
            
            // console.log(getDisplayName(user));
            const displayName = await getDisplayName(user);

            dispatch(authActions.signIn({name: displayName, email: user.email}));
            navigate('/dashboard');
        }
        catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('User is not exist');
                    break;
            }
        }
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormField({...formFields, [name]: value});
    }

    return(
        <form className='signin-form' onSubmit={submitHandler}>
            <div className='input-fields'>
                <div className='email-sec'>
                    <span>Email</span>
                    <Input name='email' type='email' placeholder='Enter your email' onChange={changeHandler} value={email}></Input>
                </div>
                <div className='password-sec'>
                    <span>Password</span>
                    <Input name='password' type='password' placeholder='Enter your Password' onChange={changeHandler} value={password}></Input>
                </div>
            </div>
            <AuthHelper />
            <AuthButton classes='sign-in'>Sign in</AuthButton>
        </form>
    );
}

export default SignInForm;