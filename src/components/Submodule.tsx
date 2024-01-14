import {SUBMODULES} from "../data";
import classes from "./Submodule.module.css";
import Layout from "./layout/Layout";

export function Submodule() {
    return (
        <div className={classes.layout}>
            {
                SUBMODULES.map((module: any) => (
                    <div className={classes.item}>
                        <div>
                            <img src={module.image}/>
                        </div>
                        <div>
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
