import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './components/App.module.css';

const skill_sets = [
    {
        tag: "Programming Language",
        skills: [
            "Python",
            "GDScript",
            "Typescript",
            "Dart",
            "Go",
            "Rust",
            "C++",
            "C#",
            "Java"
        ]
    },
    {
        tag: "Backend Framework",
        skills: [
            "Godot",
            "Unity"
        ]
    },
    {
        tag: "Web Framework",
        skills: [
            "Django",
            "FastAPI",
            "Gin",
            "SpringWeb"
        ]
    },
    {
        tag: "Mobile Framework",
        skills: [
            "Flutter"
        ]
    },
    {
        tag: "Desktop Framework",
        skills: [
            "Qt"
        ]
    },
    {
        tag: "Database",
        skills: [
            "Postgres",
            "Mysql"
        ]
    },
    {
        tag: "Video Software",
        skills: [
            "Premiere Pro",
            "Kdenlive"
        ]
    },
    {
        tag: "2D Art Software",
        skills: [
            "Photoshop",
            "Asprite",
            "Pyxel",
            "Pixelorama"
        ]
    },
    {
        tag: "3D Art Software",
        skills: [
            "Blender",
            "Material Maker"
        ]
    },
    {
        tag: "Audio Software",
        skills: [
            "FL Studios",
            "Audacity",
            "Guitar Pro"
        ]
    },
    {
        tag: "Dev Tool",
        skills: [
            "Docker",
            "Jenkins",
            "GraphQL"
        ]
    },
    {
        tag: "Design Tool",
        skills: [
            "Figma"
        ]
    },
    {
        tag: "Service Tool",
        skills: [
            "Nginx",
            "Tomcat"
        ]
    },
    {
        tag: "Test Framework",
        skills: [
            "Selenium"
        ]
    },
    {
        tag: "Network Framework",
        skills: [
            "Requests"
        ]
    },
    {
        tag: "Crawler Technique",
        skills: [
            "Scrapy",
            "Urllib",
            "XPath"
        ]
    },
    {
        tag: "Instrument",
        skills: [
            "Account Guitar",
            "Piano",
            "Elestric Guitar",
            "Ukulele"
        ]
    },
    {
        tag: "Things I like",
        skills: [
            "Game",
            "Music",
            "Book",
            "Movie",
            "Anim"
        ]
    },
    {
        tag: "Sport I like",
        skills: [
            "Run"
        ]
    },
    {
        tag: "My Name",
        skills: [
            "LWBZ"
        ]
    },

]

function SkillRow(props: any) {
    return (
        <div>
            <h5 className={classes.title}>{props.tag}</h5>
            <div className={classes.content}>
                {props.skills.toString()}
            </div>
            <br/>
        </div>
    );
}

function App() {
    return (
        <Layout>
            <h1 className={classes.header}>My Skill</h1>
            <div className={classes.body}>
                {
                    skill_sets.map((skill_set) => (
                        <SkillRow key={skill_set.tag} tag={skill_set.tag} skills={skill_set.skills}/>
                    ))
                }
            </div>
        </Layout>
    );
}

export default App;
