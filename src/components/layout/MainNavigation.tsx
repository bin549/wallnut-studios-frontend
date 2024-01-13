import classes from './MainNavigation.module.css';
import {useState, useEffect} from "react"


const MainNavigation = () => {
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
                <a href={"https://github.com/bin549"}>🐰({age})</a>
            </nav>
        </header>
    );
};

export default MainNavigation;
