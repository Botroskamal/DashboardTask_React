import './Booking.scss'

import SideBar from '../../components/SideBar/SideBar';
import RightSection from '../../components/RightSection/RightSection';

const Booking = () => {
    return (
        <div className='page'>
            <SideBar />
            <RightSection page="booking"/>
        </div>
    );
}

export default Booking;