import './SideBar.scss'
import Head from './Head/Head'
import MenuBody from './MenuBody/MenuBody'

const SideBar = (props) => {
    const headImage = 'src/assets/img/side-bar/Motiv.png'

    const BigMenuData = [
        {
            img: 'src/assets/img/side-bar/dashboard icon.png',
            title: 'Dashboard'
        }, {
            img: 'src/assets/img/side-bar/Assets.png',
            title: 'Assets'
        }, {
            img: 'src/assets/img/side-bar/Booking.png',
            title: 'Booking'
        }, {
            img: 'src/assets/img/side-bar/Sell Cars.png',
            title: 'Sell Cars'
        }, {
            img: 'src/assets/img/side-bar/Buy Cars.png',
            title: 'Buy Cars'
        }, {
            img: 'src/assets/img/side-bar/Services.png',
            title: 'Services'
        }, {
            img: 'src/assets/img/side-bar/Calender.png',
            title: 'Caledner'
        }, {
            img: 'src/assets/img/side-bar/Messages.png',
            title: 'Messages'
        }
    ];

    const smallMenuData = [
        {
            img: 'src/assets/img/side-bar/Settings.png',
            title: 'Settings'
        }, {
            img: 'src/assets/img/side-bar/Sign out.png',
            title: 'Log out'
        }
    ]

    return(
        <div className='side-bar'>
            <Head img={headImage}/>
            <MenuBody BigMenuData={BigMenuData} smallMenuData={smallMenuData}/>
        </div>
    );
}

export default SideBar;