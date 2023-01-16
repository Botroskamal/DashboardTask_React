import './Test.scss';
import Selection from '../../components/SideBar/Selection/Selection';
import axios from 'axios';

const Test = () => {

    const getImg = async() => {
        return await axios.get('https://firebasestorage.googleapis.com/v0/b/react-task-41542.appspot.com/o/sidebar%2FMotiv.png?alt=media&token=df3604e0-ddcb-4d5a-9444-7783cac3bf68')
    }

    return(
        <div className='selection'>
            <div>
                <img src={props.img} alt={props.title}></img>
            </div>
            <Link to={'/' + props.title}>
                <span>{props.title}</span>
            </Link>
        </div>
    );
}

export default Test;