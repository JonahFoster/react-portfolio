import headshot from './assets/weddingheadshot.jpg'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="row">
                <h2>About Me</h2>
                <div className="about__content">
                    <div className="about__text">
                        <p>
                            I am a web developer passionate about solving problems. Whether I{`'`}m learning new web technologies through Scrimba or working on my own projects, my goal is always to create digital experiences that are accessible and user-friendly. With each project, I strive to make the web a better space.
                        </p>
                        <p>
                            Away from the keyboard, I enjoy hiking the many trails in North Florida or reading while I sip coffee.
                        </p>
                        <a href="https://www.linkedin.com/in/jonahfoster/" className="btn" target="_blank" rel="noreferrer">My Resume</a>
                    </div>
                    <div className="about__photo-container">
                        <img className="about__photo" src={headshot} alt="Jonah Foster Headshot" />
                    </div>
                </div>
            </div>
        </section>
    )
}