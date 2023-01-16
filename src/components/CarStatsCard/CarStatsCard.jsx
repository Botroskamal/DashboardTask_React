import './CarStatsCard.scss';
import Button from '../Button/Button';
import SmoothChart from '../Charts/SmoothChart/SmoothChart';

const CarStatsCard = () => {
    return(
        <div className='car-stats'>
            <div className='head'>
                <span className='bold'>Car</span>
                <span className='fair'>Statistics</span>
            </div>
            <div className="middle">
                <div>
                    <span>20 February 2022</span>
                </div>
                <div className="btns-section">
                    <Button buttonName="Day"/>
                    <Button buttonName="Week"/>
                    <Button buttonName="Month"/>
                </div>
            </div>
            <SmoothChart />
        </div>
    );
}

export default CarStatsCard;