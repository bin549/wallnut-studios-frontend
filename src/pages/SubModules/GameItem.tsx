import classes from "./GameItem.module.css";
import gameImg from '../../assets/screen.jpg';
import {Link} from "react-router-dom"

const GameItem = () => {
    return (
        <>
            <div className={classes.game_item}>
                <Link to={"https://baidu.com"}>
                    <img alt={"untitle"} src={gameImg}/>
                </Link>
                <h4>赛博射手</h4>
            </div>
        </>
    )
}


export default GameItem
