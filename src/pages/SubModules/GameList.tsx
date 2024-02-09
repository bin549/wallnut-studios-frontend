import classes from "./GameList.module.css";
import Layout from "../../layout/Layout";
import GameItem from "./GameItem";

const GameList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <h1>Game</h1>
            <div className={classes.game_layout}>
                <GameItem />
                <GameItem />
                <GameItem />
                <GameItem />
                <GameItem />
            </div>
        </Layout>
    )
}

export default GameList
