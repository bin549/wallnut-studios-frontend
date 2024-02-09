import classes from "./GameList.module.css";
import Layout from "../../layout/Layout";
import GameItem from "./GameItem";
import {Link} from "react-router-dom"
import {useEffect } from "react"
import {useState} from "react"
import skill from "../../models/skill";

const GameList = () => {
    const [games , setGames] = useState([])

    function fetchData() {
        if (games.length!==0)return
        const requestOption : any = {
            method: "GET",
            credentials: "include"
        }
        const games_temp: any[] = []
        fetch(`${process.env.REACT_APP_BACKEND}/api/project/type/`+1, requestOption)
            .then(res => res.json())
            .then((res: any) => {
                res.forEach((data: any) => {
                    games_temp.push({
                        id: data.ID,
                        cover: data.Cover,
                        name: data.Name,
                        link: data.Link,
                    })
                })
                console.log(games_temp)
                // @ts-ignore
                setGames(games_temp)
            })
    }

    fetchData()

    function toggleIsCheck() {
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            <Link to={"/"}>Game</Link>
            <div className={classes.game_layout}>
                {
                    games.map((game: any) => (
                        <GameItem key={game.id} name={game.name} cover={game.cover} link={game.link}/>
                    ))
                }
            </div>
        </Layout>
    )
}

export default GameList
