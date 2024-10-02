import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';


const Navbar = () => {

    const actLink = "nav-list__link nav-list__link--active";
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) => isActive ? actLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/projects' className={({isActive}) => isActive ? actLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) => isActive ? actLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;