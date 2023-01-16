import './RightSection.scss'
import NavBar from '../NavBar/NavBar';
import MainSection from '../MainSection/MainSection';

const RightSection = (props) => {
    return(
        <div className="right-section">
            <NavBar />
            <MainSection page={props.page} />
        </div>
    );
};

export default RightSection;