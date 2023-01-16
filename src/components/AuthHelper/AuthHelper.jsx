import { Link } from 'react-router-dom';
import './AuthHelper.scss';

const AuthHelper = () => {
    return(
        <div className='helper-sec'>
            <div>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <Link className='link'>Forget your password?</Link>
        </div>
    );
}

export default AuthHelper;