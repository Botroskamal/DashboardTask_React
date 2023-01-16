import './SmallMenu.scss';
import Selection from '../Selection/Selection';

const SmallMenu = (props) => {

    const images = props.images;
    const titles = props.titles;

    return (
        <div className='menu'>
            {
                props.menuData.map(data => {
                    return <Selection img={data.img} title={data.title}/>
                })
            }
        </div>   
    );
}

export default SmallMenu;