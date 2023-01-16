import './CarInfo.scss'

const CarInfo = (props) => {
    return(
        <div className={"type-card " + props.class}>
            <div className="type-card-head">
                <div>
                    <img src="src/assets/img/cards/Recommendation.png" />
                </div>
                <div>
                    <span>{props.recommend}% Recommend</span>
                </div>
            </div>
            <div className="car-image first-car">
                <img src={props.carImg} />
            </div>
            <div className="car-name">
                <span>{props.carName}</span>
            </div>
            <div className="car-specs">
                <div className="car-info">
                    <div>
                        <img className="trans" src="src/assets/img/cards/Trans.png" />
                    </div>
                    <div>
                        <span>{props.km}K</span>
                    </div>
                    <div>
                        <img className="icon" src="src/assets/img/cards/icon.png" />
                    </div>
                    <div>
                        <img className="elec" src="src/assets/img/cards/Electrical.png" />
                    </div>
                </div>
                <div className="cost">
                    <span>${props.price}/h</span>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;