import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

import './InfoSection.scss'
import { Link } from 'react-router-dom';

const InfoSection = () => {
    const isAuth = useSelector(state => state.Auth.isAuth);
    const name = useSelector(state => state.Auth.name);
    const email = useSelector(state => state.Auth.email);

    // function stringToColor(string) {
    //     let hash = 0;
    //     let i;
      
    //     /* eslint-disable no-bitwise */
    //     for (i = 0; i < string.length; i += 1) {
    //       hash = string.charCodeAt(i) + ((hash << 5) - hash);
    //     }
      
    //     let color = '#';
      
    //     for (i = 0; i < 3; i += 1) {
    //       const value = (hash >> (i * 8)) & 0xff;
    //       color += `00${value.toString(16)}`.slice(-2);
    //     }
    //     /* eslint-enable no-bitwise */
      
    //     return color;
    // }

    // function stringAvatar(name) {
    //     return {
    //         sx: {
    //         bgcolor: stringToColor(name),
    //         },
    //         children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    //     };
    // }

    return (
        <div className="info">
            <img src="src/assets/img/nav-bar/Notifications.png" alt=""></img>
            {isAuth &&
            <>
            <span>{name}</span>
            <img className="pp-img" src="src/assets/img/nav-bar/Profile Picture.png"></img>
            {/* <Avatar {...stringAvatar({name})}></Avatar> */}
            </>
            }
            {!isAuth &&
            <>
                <Link className='link' to='/signup'>Sign up</Link>
                <Link className='link' to='/signin'>Sign in</Link>
                </>
            }
        </div>
    );
}

export default InfoSection;