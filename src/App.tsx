import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './components/App.module.css';


function App() {
    return (
        <Layout>
            <h1 className={classes.header}>My Skill</h1>
            <div className={classes.body}>
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
                    <div className={classes.content}> Qt, .NET
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Database</h5>
                    <div className={classes.content}> Postgres, Mysql
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Video Software</h5>
                    <div className={classes.content}> Premiere Pro, Kdenlive
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>2D Art Software</h5>
                    <div className={classes.content}> Photoshop, Asprite, Pyxel Pixelorama
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>3D Art Software</h5>
                    <div className={classes.content}> Blender, Material Maker
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Audio Software</h5>
                    <div className={classes.content}> FL Studios, Guitar Pro, Audacity
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Dev Tool</h5>
                    <div className={classes.content}> Docker, Jenkins, GraphQL
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Design Tool</h5>
                    <div className={classes.content}> Figma
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
                    <h5 className={classes.title}>Test Framework</h5>
                    <div className={classes.content}> Selenium
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Network Framework</h5>
                    <div className={classes.content}> Requests
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={classes.title}>Crawler Technique</h5>
                    <div className={classes.content}> Scrapy, Urllib, XPath
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
                    <h5 className={classes.title}>Things I like</h5>
                    <div className={classes.content}> Game, Music, Book, Movie, Anim
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
