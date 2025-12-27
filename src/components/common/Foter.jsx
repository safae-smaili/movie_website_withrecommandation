import '../../style/footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';
// import photo from '../../src/assets/logoo.PNG'
function Foter(){
    return(        
    <footer className="footer">
         <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>
            <img src="https://raw.githubusercontent.com/safae-smaili/movies/refs/heads/main/src/assets/logoo.PNG" alt="Logo" className="logo" />
        </Link>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
             <p className="copyright">© 2025 Your Company. All rights reserved.</p>
           </footer>
)
}
export default Foter;