import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './components/App.module.css';


function App() {
    return (
        <Layout>
            <div>
                <h1 className={classes.header}>My Skill</h1>
                <div>
                    <h5 className={classes.title}>Programming Language</h5>
                    <div className={classes.content}>
                        Python,
                        GDScript
                        C++,
                        Go,
                        Java,
                        Rust,
                        Typescript,
                        C#,
                        Dart,
                        Swift,
                        kotlin
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Game Engine</h5>
                    <div className={classes.content}>
                        Godot, Unity, Bevy, Pygame
                    </div>

                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Backend Framework</h5>
                    <div className={classes.content}>
                        Django, FastAPI, SpringWeb, Gin, Flask
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Web Framework</h5>
                    <div className={classes.content}>
                        React, Vue, Svelte
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Mobile Framework</h5>
                    <div className={classes.content}>
                        Flutter, Android Studios, Swift UI
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Desktop Framework</h5>
                    <div className={classes.content}> Qt
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Instrument</h5>
                    <div className={classes.content}> Account Guitar, Piano, Elestric Guitar, Ukulele
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Video</h5>
                    <div className={classes.content}> Pr, Kdenlive
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Image</h5>
                    <div className={classes.content}> Ps, Asprite, Pyxel Pixelorama, Blender
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>DB</h5>
                    <div className={classes.content}> Postgres, Mysql
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Instrument Software</h5>
                    <div className={classes.content}> FL Studios, Guitar Pro, Audacity
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Tool</h5>
                    <div className={classes.content}> Docker, Jenkins, GraphQL
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Design</h5>
                    <div className={classes.content}> Figma
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Web</h5>
                    <div className={classes.content}> Unocss, Tailwind, AlphineJS
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Service</h5>
                    <div className={classes.content}> Nginx, Tomcat
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Web Crawler</h5>
                    <div className={classes.content}> Scrapy, Selenium, Requests
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Things I like</h5>
                    <div className={classes.content}> Game, Book, Movie, Music
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Sport I like</h5>
                    <div className={classes.content}>
                        Run
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>My Name</h5>
                    <div className={classes.content}>
                        LWBZ
                    </div>
                </div>
                <br/>
            </div>
        </Layout>
    );
}

export default App;
