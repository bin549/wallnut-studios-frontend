import classes from './Navigation.module.css';
import {useState, useEffect} from "react"

const Navigation = () => {
    const [age, setAge] = useState("25")
    useEffect( () => {
        // async function fetchProfile() {
        //     const data = await getProfileById()
        //     return data
        // }
        // fetchProfile()
    }, [])

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>🐰({age}Y)</span>
                <h3>
                    Wallnut Studios
                </h3>
            </div>
            <nav className={classes.nav}>
                <span>🇨🇳</span>
                <span>🌕</span>
                <a href={"https://github.com/bin549"}>⚐</a>
                <span>⌖</span>
            </nav>
        </header>
    )
}

export default Navigation
