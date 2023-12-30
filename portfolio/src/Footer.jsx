import twitterIcon from './assets/twitter.svg'
import githubIcon from './assets/github.svg'
import codepenIcon from './assets/codepen.svg'
import linkedinIcon from './assets/linkedin.svg'

export default function Footer() {
    return (
        <footer role="contentinfo" className="footer">
            <div className="row">
                <ul className="footer__social-links">
                    <li className="footer__social-link-item">
                        <a href="https://twitter.com/thejonahfoster" title="Link to Twitter Profile">
                            <img src={twitterIcon} className="footer__social-image" alt="Twitter Icon" />
                        </a>
                    </li>
                    <li className="footer__social-link-item">
                        <a href="https://github.com/JonahFoster" title="Link to Github Profile">
                            <img src={githubIcon} className="footer__social-image" alt="Github Icon" />
                        </a>
                    </li>
                    <li className="footer__social-link-item">
                        <a href="https://codepen.io/JonahFoster" title="Link to Codepen Profile">
                            <img src={codepenIcon} className="footer__social-image" alt="Codepen Icon" />
                        </a>
                    </li>
                    <li className="footer__social-link-item">
                        <a href="https://www.linkedin.com/in/jonahfoster/" title="Link to LinkedIn Profile">
                            <img src={linkedinIcon} className="footer__social-image" alt="Linkedin Icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
