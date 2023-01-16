import AuthButton from '../../components/AuthButton/AuthButton';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import './Signin.scss';

import { Link } from 'react-router-dom';
import { signInWithgooglePopup } from '../../firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../firebase/firebase.utils';
import SignInForm from '../../components/SignInForm/SignInForm';

import { authActions } from '../../store/index-tk';

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const googleImg = 'src/assets/img/auth-img/GoogleLogo.png'
    const facebookImg = 'src/assets/img/auth-img/FacebookLogo.png';

    const logGoogleUser = async () => {
        const {user} = await signInWithgooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

        dispatch(authActions.signIn({name: user.displayName, email: user.email}));
        dispatch(authActions.temp("tempvaribale",123456));

        

        navigate('/dashboard');
    }

    return(
        <div className='signin-page'>
            <div className='first-item'>
                <span className='head'>Get's started</span>
                <div>
                    <span>Don't have an account?</span>
                    <Link className='link' to='/signup'> Sign up</Link>
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
                <SignInForm />
            </div>
        </div>
    );
}

export default Signin;