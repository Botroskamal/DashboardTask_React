import './NavBar.scss';
import Search from './Search/Search';
import InfoSection from './InfoSection/InfoSection';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <Search />
            <InfoSection />
        </div>
    );
};

export default NavBar;