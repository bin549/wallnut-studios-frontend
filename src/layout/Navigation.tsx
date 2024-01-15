import classes from './Navigation.module.css';
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

// @ts-ignore
const Navigation = ({ onProfileCheck }) => {
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
            <Link to="/" className={classes.logo}>
                <span>
                    🌰
                    Wallnut-Studios
                </span>
            </Link>
            <div className={classes.logo}>
                <span onClick={onProfileCheck}>🐰({age}Y)切换视图</span>
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
