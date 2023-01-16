import './BigMenu.scss';
import Selection from '../Selection/Selection';

const BigMenu = (props) => {

    return (
        <div className='menu'>
            {
                props.menuData.map(data => {
                    return <Selection img={data.img} title={data.title} />
                })
            }
        </div>   
    );
}

export default BigMenu;