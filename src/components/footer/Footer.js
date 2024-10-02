import './style.css';
import inst from './../../img/icons/instagram.svg';
import tw from './../../img/icons/twitter.svg';
import git from './../../img/icons/gitHub.svg';
import li from './../../img/icons/linkedIn.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={inst} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={tw} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={git} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={li} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;