import classes from './Navigation.module.css';
import {useState, useEffect} from "react"

// @ts-ignore
const Navigation = ({onModuleChanged}) => {
    const [age, setAge] = useState("25")
    const [isSkillView, setIsSkillView] = useState(false)
    const [isAboutMeViewed, setIsAboutMeViewed] = useState(false)

    useEffect(() => {
        // async function fetchProfile() {
        //     const data = await getProfileById()
        //     return data
        // }
        // fetchProfile()
    }, [])

    function changeView() {
        setIsSkillView(!isSkillView)
        onModuleChanged(isSkillView ? 0 : 1)
    }

    function changeView2() {
        setIsAboutMeViewed(!isAboutMeViewed)
        onModuleChanged(isAboutMeViewed ? 0 : 2)
    }

    function checkGithub() {
        window.open(
            "https://github.com/bin549",
            "_blank"
        )
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <span>
                    🌰
                    Wallnut-Studios
                </span>
            </div>
            <span onClick={changeView2}>{isAboutMeViewed ? "🪦返回" : "🐰关于我"}</span>
            <div className={classes.logo}>
                <span onClick={changeView}>{isSkillView ? "📓我的作品" : "🛠️我的技术"}</span>
            </div>
            <nav className={classes.nav}>
                <span>🇨🇳</span>
                <span>🌕</span>
                <span onClick={checkGithub}>⚐</span>
                <span>⌖</span>
            </nav>
        </header>
    )
}

export default Navigation
