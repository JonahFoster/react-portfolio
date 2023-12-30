import moviePickerImg from './assets/popchoice.jpg'
import planetsImg from './assets/planetsapp.jpg'
import hologramImg from './assets/Jonah Foster Hologram.jpg'
import githubIcon from './assets/github.svg'

export default function Projects() {
    return (
        <section className="work" id="work">
            <div className="row">
                <h2>My Work</h2>
                <div className="work__boxes">
                    <div className="work__box">
                        <div className="work__text">
                            <h3>Movie Picker</h3>
                            <p>
                                An OpenAI powered site to suggest movies based on user-preferences. Supports both individuals and groups.
                            </p>
                            <ul className="work__list">
                                <li>React</li>
                                <li>CSS</li>
                                <li>OpenAI API</li>
                                <li>Supabase Embeddings Database</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://peaceful-piroshki-a2d371.netlify.app/" target="_blank" rel="noreferrer" className="link__text">
                                    Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/JonahFoster/scrimba-popchoice" title="View Source Code" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} className="work__code" alt="GitHub Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                            <img src={moviePickerImg} className="work__image" alt="Jonah Foster Movie Picker" />
                        </div>
                    </div>

                    <div className="work__box">
                        <div className="work__text">
                            <h3>The Planets</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                                eius.
                            </p>
                            <ul className="work__list">
                                <li>React</li>
                                <li>CSS</li>
                                <li>Responsive</li>
                                <li>Dynamic Content</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://jonah-planet-facts.netlify.app/" className="link__text">
                                    Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/JonahFoster/planet-facts">
                                    <img src={githubIcon} className="work__code" title="View Source Code" alt="GitHub Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                            <img src={planetsImg} className="work__image" alt="Jonah Foster The Planets project" />
                        </div>
                    </div>

                    <div className="work__box">
                        <div className="work__text">
                            <h3>Hologram</h3>
                            <p>
                                An Instagram clone from a galaxy far, far away.
                            </p>
                            <ul className="work__list">
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>The Force</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://starwars-hologram.netlify.app/" className="link__text">
                                    Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/JonahFoster/scrimba-instagram-clone">
                                    <img src={githubIcon} className="work__code" title="View Source Code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                            <img src={hologramImg} className="work__image" alt="Jonah Foster Hologram Project" />
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}