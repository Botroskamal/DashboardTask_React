import './Dashboard.scss';
import SideBar from '../../components/SideBar/SideBar';
import RightSection from '../../components/RightSection/RightSection';
import { useSelector } from 'react-redux';
const Dashboard = () => {
    console.log("temp data****************************",useSelector(state=>state.Auth))
    return(
        <div className='page'>
            <SideBar />
            <RightSection page="dashboard"/>
        </div>
    );
}

export default Dashboard;