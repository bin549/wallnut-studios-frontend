import classes from "./App.module.css";

export function SkillRow(props: any) {
    return(
        <div>
            <h5 className={classes.title}>{props.tag}</h5>
            <div className={classes.content}>
                {props.skills.toString()}
            </div>
            <br/>
        </div>
    )
}
