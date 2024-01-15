import classes from "./GameList.module.css";
import Layout from "../../layout/Layout";

const GameList = () => {
    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <h1>Game</h1>
        </Layout>
    )
}

export default GameList
