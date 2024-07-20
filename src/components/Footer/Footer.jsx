import { FaInstagram, FaFacebook, FaTwitter,FaRegCopyright } from "react-icons/fa";
import './footer.css'

const Footer = () => (
    <>
        <div className="footer-container">
            <ul className="company-links">
                <li className="footer-links-head">Company</li>
                <li className="footer-link"><a href="https://www.spotify.com/in-en/about-us/contact/" target='_blank' className='a-link'>About</a></li>
                <li className="footer-link"><a href="https://www.lifeatspotify.com/" target='_blank' className='a-link'>Jobs</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>For the Record</a></li>
            </ul>
            <ul className="company-links">
                <li className="footer-links-head">Communities</li>
                <li className="footer-link"><a href="https://www.spotify.com/in-en/about-us/contact/" target='_blank' className='a-link'>For Artists</a></li>
                <li className="footer-link"><a href="https://www.lifeatspotify.com/" target='_blank' className='a-link'>For Artists</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Developers</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Advertising</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Investors</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Vendors</a></li>
            </ul>
            <ul className="company-links">
                <li className="footer-links-head">Useful links</li>
                <li className="footer-link"><a href="https://www.spotify.com/in-en/about-us/contact/" target='_blank' className='a-link'>Support</a></li>
                <li className="footer-link"><a href="https://www.lifeatspotify.com/" target='_blank' className='a-link'>Free Mobile App</a></li>
            </ul>
            <ul className="company-links">
                <li className="footer-links-head">Spotify Plans</li>
                <li className="footer-link"><a href="https://www.spotify.com/in-en/about-us/contact/" target='_blank' className='a-link'>Premium Individual</a></li>
                <li className="footer-link"><a href="https://www.lifeatspotify.com/" target='_blank' className='a-link'>Premium Duo</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Premium Family</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Premium Student</a></li>
                <li className="footer-link"><a href="https://newsroom.spotify.com/" target='_blank' className='a-link'>Spotify Free</a></li>
            </ul>
            <ul className="social-media-links">
                <li className="footersocail-link"><a href="https://www.instagram.com/spotify" target='_blank' className='social-link'><FaInstagram size="20" /></a></li>
                <li className="footersocail-link"><a href="https://x.com/spotify" target='_blank' className='social-link'><FaTwitter size="20" /></a></li>
                <li className="footersocail-link"><a href="https://www.facebook.com/Spotify" target='_blank' className='social-link'><FaFacebook size="20" /></a></li>
            </ul>
        </div>
        <hr className="line" />
        <p className="application-develper-name"><FaRegCopyright size = "16" />2024 Developed by vinodmudavath</p>
    </>
)

export default Footer















