import {SUBMODULES} from "../data";
import classes from "./Submodule.module.css";
import Layout from "./layout/Layout";

export function Submodule() {
    return (
        <div className={classes.layout}>
            {
                SUBMODULES.map((module: any) => (
                    <div className={classes.submodule_item}>
                        <div className={classes.submodule_item_header}>
                            <img src={module.image}/>
                        </div>
                        <div className={classes.submodule_item_body}>
                            <h4>{module.title}</h4>
                            <span>
                            {module.description}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
