import './Input.scss';

const Input = (props) => {
    let type = props.type;

    const showPassword = () => {
        if(type == 'password')
            type = 'text';
        else
            type = 'password';
    }

    if(props.type == 'password')
    {
        return(
            <div className='auth-in-data'>
                <input name={props.name} className='auth-in' type={type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
                <a onClick={showPassword}>
                    <img src="src/assets/img/auth-img/passVisibilty.png"/>
                </a>
            </div>
        );
    }
    else{
        return(
            <div className='auth-in-data'>
                <input name={props.name} className='auth-in' type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
            </div>
        );
    }
}

export default Input;