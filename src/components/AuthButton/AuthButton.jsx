import './AuthButton.scss';

const AuthButton = (props) => {

    if(props.classes === 'sign-in')
    {
        return(
            <button type="submit" onSubmit={props.onSubmit} className='signin-btn'>Sign in</button>
        );
    }
    else if(props.classes === 'sign-up'){
        return(
            <button type="submit" onSubmit={props.onSubmit} className='signup-btn'>Sign up</button>
        );
    }
    else{
        return(
            <button onClick={props.onClick} className={props.classes}>
                <img src={props.img}/>
                <span>{props.children}</span>
            </button>
        ); 
    } 
}

export default AuthButton;