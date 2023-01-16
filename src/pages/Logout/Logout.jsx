import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/index-tk';


const Logout = () => {
    const navigate = useNavigate();

    const dipsatch = useDispatch();
    dipsatch(authActions.signOut());

    return navigate('/dashboard');
}


export default Logout;