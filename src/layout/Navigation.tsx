import classes from './Navigation.module.css';
import {useState, useEffect} from "react"

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
            <div className={classes.logo} onClick={onProfileCheck}>
                <span>🐰({age}Y)</span>
                <h3>
                    切换页面
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
