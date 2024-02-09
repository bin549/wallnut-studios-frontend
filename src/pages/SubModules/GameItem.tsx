import classes from "./GameItem.module.css";

const GameItem = (props: any) => {
    function checkGame() {
        window.open(
            props.link,
            "_blank"
        )
    }

    return (
        <>
            <div className={classes.game_item}>
                <img onClick={checkGame} alt={"untitle"} src={props.cover}/>
                <h4>{props.name}</h4>
            </div>
        </>
    )
}


export default GameItem
