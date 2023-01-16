import AuthButton from '../../components/AuthButton/AuthButton';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index-tk';

import { signInWithgooglePopup } from '../../firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../firebase/firebase.utils';


import './Signup.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


const Signup = () => {
    const navigate = useNavigate();
    const dipsatch = useDispatch();

    const googleImg = 'src/assets/img/auth-img/GoogleLogo.png'
    const facebookImg = 'src/assets/img/auth-img/FacebookLogo.png';

    const logGoogleUser = async () => {
        const {user} = await signInWithgooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

        dipsatch(authActions.signIn({name: user.displayName, email: user.email}));
        navigate('/dashboard');
    }

    return(
        <div className='signup-page'>
            <div className='first-item'>
                <span className='head'>Get's started</span>
                <div>
                    <span>Have an account?</span>
                    <Link className='link' to='/signin'> Sign in</Link>
                </div>
            </div>
            <div className='second-item'>
                <div className='third-party-btns'>
                    <AuthButton onClick={logGoogleUser} classes='auth-btn google' img={googleImg}>Sign in with Google</AuthButton>
                    <AuthButton classes='auth-btn facebook' img={facebookImg}>Sign in with Facebook</AuthButton>
                </div>
                <div>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <SignUpForm />
            </div>
        </div>
    );
}

export default Signup;