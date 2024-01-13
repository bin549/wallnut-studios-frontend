import {SUBMODULES} from "../data";
import classes from "./Submodule.module.css";

export function Submodule() {
    return (
        <div className={classes.layout}>
            {
                SUBMODULES.map((module: any) => (
                    <div>
                        <div>
                            <img src={module.image}/>
                        </div>
                        <div>
                            {module.title}
                        </div>
                        <div>
                            {module.description}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
