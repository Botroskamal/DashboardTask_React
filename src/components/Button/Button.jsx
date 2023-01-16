import './Button.scss';

const Button = (props) => {
    return(
        <button className='stats-btn'>{props.buttonName}</button>
    )
};

export default Button;