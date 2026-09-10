export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="hero">
                <p className="hero-label">SRZA</p>

                <h1>
                    Sobhan
                    <br />
                    Rasoulzadeh Asl
                </h1>

                <p className="hero-description">
                    Computer Engineering Student & Developer
                </p>

                <div className="hero-actions">
                    <a href="#projects">View Projects</a>
                    <a href="#contact">Contact Me</a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section">
                <span className="section-label">01 — About</span>

                <h2>About Me</h2>

                <p>
                    I'm a developer interested in building web applications, bots,
                    backend systems and open-source projects.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="section">
                <span className="section-label">02 — Projects</span>

                <h2>Featured Projects</h2>

                <div className="projects">
                    <article className="project-card">
                        <span>01</span>

                        <h3>Padio</h3>

                        <p>
                            A Discord radio and community management bot.
                        </p>

                        <small>TypeScript · Discord.js</small>
                    </article>

                    <article className="project-card">
                        <span>02</span>

                        <h3>Learn JS & Node</h3>

                        <p>
                            A practical JavaScript and Node.js learning project.
                        </p>

                        <small>JavaScript · Node.js</small>
                    </article>

                    <article className="project-card">
                        <span>03</span>

                        <h3>Hycom NChat</h3>

                        <p>
                            A mobile chat application built with React Native.
                        </p>

                        <small>React Native · TypeScript</small>
                    </article>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section">
                <span className="section-label">03 — Skills</span>

                <h2>Technologies</h2>

                <div className="skills">
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>React Native</span>
                    <span>Python</span>
                    <span>Git</span>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section contact">
                <span className="section-label">04 — Contact</span>

                <h2>Let's build something.</h2>

                <p>
                    Have a project or an idea? Feel free to get in touch.
                </p>

                <a href="mailto:hello@srza.ir">
                    hello@srza.ir
                </a>
            </section>

            {/* Footer */}
            <footer>
                <span>© {new Date().getFullYear()} SRZA</span>

                <span>Built with Next.js</span>
            </footer>
        </main>
    );
}