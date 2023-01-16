import './MenuBody.scss';
import BigMenu from '../BigMenu/BigMenu';
import SmallMenu from '../SmallMenu/SmallMenu';


const MenuBody = (props) => {

    return (
        <div className='menuBody'>
            <BigMenu menuData={props.BigMenuData}/>
            <SmallMenu menuData={props.smallMenuData} />
        </div>
    );
}

export default MenuBody;