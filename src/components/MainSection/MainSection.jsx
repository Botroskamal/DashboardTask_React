import './MainSection.scss';
import SpecsCard from '../SpecsCard/SpecsCard';
import MilesStatsCard from '../MilesStatsCard/MilesStatsCard';
import CarStatsCard from '../CarStatsCard/CarStatsCard';
import Filter from '../Filter/Filter';
import CarCard from '../CarCard/CarCard';
import CarInfo from '../CarInfo/CarInfo';
import { cardsData } from '../../constants/CardsData';
import carCardHandler from '../carCardHandler/carCardHandler';
import { useSelector } from 'react-redux';

const carImg = [
    'src/assets/img/cars/Mini Cooper.png',
    'src/assets/img/cars/Porche 911 white.png',
    'src/assets/img/cars/Porche 911 red.png'
]

const MainSection = (props) => {
    const filteredCards = carCardHandler();
    const carStatus = useSelector(state => state.Filter.carStatus);
    const searchValue = useSelector(state => state.search.name);


    if(props.page == "dashboard")
    {
        return(
            <div className='dashboard-main-section'>
                <div className="specs-section">
                    <SpecsCard
                        cardType="energy"
                        cardName="Energy"
                        icon="Energy Icon.png"
                        firstColor="#FFFFFF"
                        secondColor="#B37EFC"
                        Angle="100"
                        id="chartdiv1"
                        value="45%"
                    />
                    <SpecsCard
                        cardType="range"
                        cardName="Range"
                        icon="Range Icon.png"
                        firstColor="#FF7E86"
                        secondColor="#F4F5F9"
                        Angle="90"
                        id="chartdiv2"
                        value="157%"
                    />
                    <SpecsCard
                        cardType="break-fluid"
                        cardName="Break fluid"
                        icon="Break Fluid Icon.png"
                        firstColor="#A162F7"
                        secondColor="#F4F5F9"
                        Angle="160"
                        id="chartdiv3"
                        value="9%"
                    />
                    <SpecsCard
                        cardType="tire-wear"
                        cardName="Tire Wear"
                        icon="Tire Wear Icon.png"
                        firstColor="#F6CC0D"
                        secondColor="#F4F5F9"
                        Angle="110"
                        id="chartdiv4"
                        value="25%"
                    />
                </div>
                <div className='stats-section'>
                    <MilesStatsCard />
                    <CarStatsCard />
                </div>
                <div className='cars-type-cards'>
                    <CarInfo
                        class='first-card'
                        recommend='64'
                        carImg={carImg[0]}
                        carName='Mini Cooper'
                        km='132'
                        price='32'
                    />
                    <CarInfo
                        class='second-card'
                        recommend='74'
                        carImg={carImg[1]}
                        carName='Porche 911 Carrera'
                        km='130'
                        price='28'
                    />
                    <CarInfo
                        class='third-card'
                        recommend='74'
                        carImg={carImg[2]}
                        carName='Porche 911 Carrera'
                        km='130'
                        price='28'
                    />
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='booking-main-section'>
                <div className='head-section'>
                    <span>Booking</span>
                </div>
                <Filter />
                <div className='car-cards-section'>
                    {
                        cardsData.map(card => {
                            if(card.name.includes(searchValue)){
                                return <CarCard card={card} />
                            }
                            else{
                                return;
                            }
                        })
                        
                    }
                </div>
            </div>
        );
    }
}

export default MainSection;