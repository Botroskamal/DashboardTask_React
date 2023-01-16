import './Selection.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/index-tk';

const Selection = ({title, img}) => {

    const navigate = useNavigate();
    const dipsatch = useDispatch();
    const [clicked, setClicked] = useState('Dashborad');
    // const {title, img} = props;


    const clickedHandler = (event) => {
        setClicked(event.target.innerText);
    };

    const logoutHandler = () => {
        dipsatch(authActions.signOut());

        navigate('/dashboard');
    };

    const classes = 'selection ' + clicked;

    return(
        <div className={classes} onClick={clickedHandler}>
            <div>
                <img src={img} alt={title}></img>
            </div>
            {title === 'Log out' ? (<span className='logout' onClick={logoutHandler}>Logout</span>): (<Link to={'/' + title.replaceAll(' ', '').toLowerCase()}>
                <span>{title}</span>
            </Link>)}

            {/* // <Link to={'/' + title.replaceAll(' ', '').toLowerCase()}>
            //     <span>{title}</span>
            // </Link> */}
        </div>
    );
}


export default Selection;