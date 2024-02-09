import {SUBMODULES} from "../data";
import classes from "./SubModule.module.css";
import {Link } from "react-router-dom"

const SubModule = () => {
    return (
        <div className={classes.layout}>
            {
                SUBMODULES.map((module, index) => (
                        <div
                            className={`${classes.module_item} ${index % 2 === 0 ? classes.module_item_reverse : ''}`}
                            key={index}
                        >
                            <Link to={module.link} className={classes.module_item_header}>
                                <img alt={"untitle"} src={module.image}/>
                            </Link>
                            <div
                                className={`${classes.module_item_body} ${index % 2 !== 0 ? classes.module_item_body_reverse : ''}`}
                                key={index}
                            >
                                <h4>{module.title}</h4>
                                <span>
                            {module.description}
                            </span>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}
export default SubModule
