import './MilesStatsCard.scss';
import Button from '../Button/Button';
import BarChart from '../Charts/BarChart/BarChart';


const MilesStatsCard = () => {
    return(
        <div className='miles-stats'>
            <div className='head'>
                <span className='bold'>Miles</span>
                <span className='fair'>Statistics</span>
            </div>
            <div className="middle">
                <div className="btns-section">
                    <Button buttonName="Day"/>
                    <Button buttonName="Week"/>
                    <Button buttonName="Month"/>
                </div>
                <div>
                    <span>256 Miles</span>
                </div>
            </div>
            <BarChart />
        </div>
    );
}

export default MilesStatsCard;