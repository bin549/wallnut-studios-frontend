import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './components/App.module.css';

const skill_sets: any[] = []

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
