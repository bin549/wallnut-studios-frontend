import classes from "./Skill.module.css";
import SkillRow from "../components/SkillRow";
import {useEffect, useState} from "react"

const Skill = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const requestOptions: any = {
            method: "GET",
            credentials: "include",
            }
        const skill_temp: any[] = []
        fetch(`${process.env.REACT_APP_BACKEND}/api/skill/list`, requestOptions)
            .then((res: any) =>
                res.json()
            )
            .then((data: any) => {
                Array.from(new Set(data.map((skill: any) => skill.tag))).forEach(skill_tag => {
                    skill_temp.push({
                        tag: skill_tag,
                        skills:Array.from(data.filter((skill:any) => skill.tag === skill_tag).map((skill:any) => skill.name))
                    })
                })
                // @ts-ignore
                setSkills(skill_temp)
            })
    })

    return (
        <>
            <div className={classes.layout}>
                <h1 className={classes.header}>My Skill</h1>
                <div className={classes.body}>
                    {
                        skills.map((skill_set: any) => (
                            <SkillRow key={skill_set.tag} tag={skill_set.tag} skills={skill_set.skills}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skill
