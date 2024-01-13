import classes from "./App.module.css";
import {skill_sets} from "../data";
import {SkillRow} from "./SkillRow";

export function Skill() {
    return (
        <>
            <h1 className={classes.header}>My Skill</h1>
            <div className={classes.body}>
                {
                    skill_sets.map((skill_set: any) => (
                        <SkillRow key={skill_set.tag} tag={skill_set.tag} skills={skill_set.skills}/>
                    ))
                }
            </div>
        </>
    )
}
