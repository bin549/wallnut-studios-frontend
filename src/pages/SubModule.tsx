import {SUBMODULES} from "../data";
import classes from "./SubModule.module.css";

const SubModule = () => {
    return (
        <div className={classes.layout}>
            {
                SUBMODULES.map((module: any) => (
                    <div className={classes.module_item}>
                        <div className={classes.module_item_header}>
                            <img src={module.image}/>
                        </div>
                        <div className={classes.module_item_body}>
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
export default SubModule
