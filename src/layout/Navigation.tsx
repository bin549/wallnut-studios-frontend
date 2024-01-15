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
            <div className={classes.logo}>Wallnut Studios</div>
            <nav className={classes.nav}>
                <span>🇨🇳</span>
                <span>🌕</span>
                <span>🐰({age}Y)</span>
                <a href={"https://github.com/bin549"}>⚐</a>
                <span>⌖</span>
            </nav>
        </header>
    )
}

export default Navigation
